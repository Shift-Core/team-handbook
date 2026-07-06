import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import "dotenv/config";
import { spawn } from "node:child_process";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const localDomain = process.env.LOCAL_DOMAIN || "shift-core.com";
const displayPort = port === 80 ? "" : `:${port}`;
const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"]
]);

function buildSite() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, ["scripts/build-site.js"], {
      cwd: rootDir,
      stdio: "inherit"
    });

    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Build failed with exit code ${code}`));
    });
  });
}

function cleanRequestPath(requestUrl) {
  const url = new URL(requestUrl, `http://${host}:${port}`);
  return decodeURIComponent(url.pathname);
}

async function readResponseFile(requestPath) {
  const normalized = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  let filePath = path.join(distDir, normalized);

  if (!filePath.startsWith(distDir)) {
    filePath = path.join(distDir, "404.html");
  }

  const stat = await fs.stat(filePath).catch(() => null);
  if (stat?.isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  try {
    return {
      status: 200,
      filePath,
      body: await fs.readFile(filePath)
    };
  } catch {
    return {
      status: 404,
      filePath: path.join(distDir, "404.html"),
      body: await fs.readFile(path.join(distDir, "404.html"))
    };
  }
}

await buildSite();

const server = http.createServer(async (request, response) => {
  try {
    const requestPath = cleanRequestPath(request.url || "/");
    const result = await readResponseFile(requestPath);
    const extension = path.extname(result.filePath);
    response.writeHead(result.status, {
      "Content-Type": contentTypes.get(extension) || "application/octet-stream"
    });
    response.end(result.body);
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error instanceof Error ? error.message : "Internal server error");
  }
});

server.listen(port, host, () => {
  console.log(`Shift-Core handbook site is running at http://${host}${displayPort}`);
  if (localDomain) {
    console.log(`Local domain URL: http://${localDomain}${displayPort}`);
  }
});
