import fs from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");
const stylesPath = path.join(rootDir, "src", "styles.css");
const currentYear = new Date().getFullYear();
const excludedDirs = new Set([".git", ".agents", ".codex", "dist", "node_modules", "public", "scripts", "src"]);
const logoPath = "/assets/shift-core-logo.png";

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function titleFromName(name) {
  const base = name
    .replace(/\.md$/i, "")
    .replace(/^\d+[-_]/, "")
    .replace(/[-_]+/g, " ")
    .trim();

  if (base.toLowerCase() === "readme") return "Overview";

  return base.replace(/\b\w/g, (char) => char.toUpperCase()) || "Untitled";
}

function titleFromMarkdown(markdown, fallback) {
  const heading = markdown.match(/^#\s+(.+)$/m);
  return heading ? heading[1].trim() : fallback;
}

function routeForFile(relativePath) {
  const withoutExt = toPosix(relativePath).replace(/\.md$/i, "");
  return `/${withoutExt.toLowerCase()}/`;
}

function headingId(text, usedIds) {
  const base =
    text
      .toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") || "section";

  let id = base;
  let index = 2;
  while (usedIds.has(id)) {
    id = `${base}-${index}`;
    index += 1;
  }
  usedIds.add(id);
  return id;
}

function resolveMarkdownLink(href, currentFile, routeByPath) {
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href;

  const [target, hash = ""] = href.split("#");
  if (!target.toLowerCase().endsWith(".md")) return href;

  const resolved = toPosix(path.normalize(path.join(path.dirname(currentFile), target)));
  const route = routeByPath.get(resolved);
  const fallbackRoute = routeForFile(resolved);
  return `${route || fallbackRoute}${hash ? `#${hash}` : ""}`;
}

function inlineMarkdown(text, currentFile, routeByPath) {
  let html = escapeHtml(text);

  html = html.replace(/&lt;br\s*\/?&gt;/gi, "<br>");
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, src) => {
    return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}">`;
  });

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => {
    const resolvedHref = resolveMarkdownLink(href, currentFile, routeByPath);
    return `<a href="${escapeHtml(resolvedHref)}">${label}</a>`;
  });

  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");

  return html;
}

function renderList(lines, startIndex, ordered, currentFile, routeByPath) {
  const tag = ordered ? "ol" : "ul";
  const itemPattern = ordered ? /^\s*\d+\.\s+(.+)$/ : /^\s*[-*]\s+(.+)$/;
  const items = [];
  let index = startIndex;

  while (index < lines.length) {
    const match = lines[index].match(itemPattern);
    if (!match) break;
    items.push(`<li>${inlineMarkdown(match[1], currentFile, routeByPath)}</li>`);
    index += 1;
  }

  return { html: `<${tag}>\n${items.join("\n")}\n</${tag}>`, nextIndex: index };
}

function isTableDivider(line) {
  const cells = splitTableRow(line);
  return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell.trim()));
}

function splitTableRow(line) {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  const cells = [];
  let cell = "";
  let escaped = false;

  for (const char of trimmed) {
    if (char === "\\" && !escaped) {
      escaped = true;
      cell += char;
      continue;
    }

    if (char === "|" && !escaped) {
      cells.push(cell.trim());
      cell = "";
      continue;
    }

    escaped = false;
    cell += char;
  }

  cells.push(cell.trim());
  return cells;
}

function renderTable(lines, startIndex, currentFile, routeByPath) {
  const headers = splitTableRow(lines[startIndex]);
  const rows = [];
  let index = startIndex + 2;

  while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
    rows.push(splitTableRow(lines[index]));
    index += 1;
  }

  const headerHtml = headers
    .map((header) => `<th>${inlineMarkdown(header, currentFile, routeByPath)}</th>`)
    .join("");
  const bodyHtml = rows
    .map((row) => {
      const cells = headers.map((_header, cellIndex) => row[cellIndex] || "");
      return `<tr>${cells.map((cell) => `<td>${inlineMarkdown(cell, currentFile, routeByPath)}</td>`).join("")}</tr>`;
    })
    .join("\n");

  return {
    html: `<div class="table-wrap">
  <table>
    <thead>
      <tr>${headerHtml}</tr>
    </thead>
    <tbody>
${bodyHtml}
    </tbody>
  </table>
</div>`,
    nextIndex: index
  };
}

function renderMarkdown(markdown, currentFile, routeByPath) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  const usedIds = new Set();
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fence = line.match(/^```(\w+)?\s*$/);
    if (fence) {
      const language = fence[1] ? ` class="language-${escapeHtml(fence[1])}"` : "";
      const code = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(`<pre><code${language}>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const content = inlineMarkdown(heading[2].trim(), currentFile, routeByPath);
      const id = headingId(heading[2], usedIds);
      blocks.push(`<h${level} id="${id}">${content}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      blocks.push("<hr>");
      index += 1;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const rendered = renderList(lines, index, false, currentFile, routeByPath);
      blocks.push(rendered.html);
      index = rendered.nextIndex;
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const rendered = renderList(lines, index, true, currentFile, routeByPath);
      blocks.push(rendered.html);
      index = rendered.nextIndex;
      continue;
    }

    if (line.includes("|") && lines[index + 1] && isTableDivider(lines[index + 1])) {
      const rendered = renderTable(lines, index, currentFile, routeByPath);
      blocks.push(rendered.html);
      index = rendered.nextIndex;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) {
        quote.push(lines[index].replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push(`<blockquote>${quote.map((item) => inlineMarkdown(item, currentFile, routeByPath)).join("<br>")}</blockquote>`);
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,6})\s+/.test(lines[index]) &&
      !/^```/.test(lines[index]) &&
      !/^---+$/.test(lines[index].trim()) &&
      !/^\s*[-*]\s+/.test(lines[index]) &&
      !/^\s*\d+\.\s+/.test(lines[index]) &&
      !(lines[index].includes("|") && lines[index + 1] && isTableDivider(lines[index + 1])) &&
      !/^>\s?/.test(lines[index])
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(`<p>${inlineMarkdown(paragraph.join(" "), currentFile, routeByPath)}</p>`);
  }

  return blocks.join("\n\n");
}

async function findMarkdownFiles(directory = rootDir) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (excludedDirs.has(entry.name)) continue;
      files.push(...(await findMarkdownFiles(path.join(directory, entry.name))));
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(path.join(directory, entry.name));
    }
  }

  return files;
}

function comparePaths(left, right) {
  const leftParts = left.relativePath.split("/");
  const rightParts = right.relativePath.split("/");

  for (let index = 0; index < Math.max(leftParts.length, rightParts.length); index += 1) {
    if (!leftParts[index]) return -1;
    if (!rightParts[index]) return 1;
    if (leftParts[index].toLowerCase() === "readme.md" && rightParts[index].toLowerCase() !== "readme.md") return -1;
    if (rightParts[index].toLowerCase() === "readme.md" && leftParts[index].toLowerCase() !== "readme.md") return 1;
    const compared = leftParts[index].localeCompare(rightParts[index], undefined, {
      numeric: true,
      sensitivity: "base"
    });
    if (compared !== 0) return compared;
  }

  return 0;
}

function insertPage(tree, page) {
  const parts = page.relativePath.split("/");
  let node = tree;

  for (const part of parts.slice(0, -1)) {
    if (!node.dirs.has(part)) {
      node.dirs.set(part, { name: part, dirs: new Map(), pages: [] });
    }
    node = node.dirs.get(part);
  }

  node.pages.push(page);
}

function buildTree(pages) {
  const tree = { name: "Team Handbook", dirs: new Map(), pages: [] };
  for (const page of pages) insertPage(tree, page);
  return tree;
}

function shouldOpenDir(node, activePage) {
  if (!activePage) return true;
  if (node.pages.some((page) => page.relativePath === activePage.relativePath)) return true;
  return [...node.dirs.values()].some((child) => shouldOpenDir(child, activePage));
}

function renderTreeNode(node, activePage, isRoot = false) {
  const pages = [...node.pages].sort(comparePaths);
  const dirs = [...node.dirs.values()].sort((left, right) => left.name.localeCompare(right.name, undefined, {
    numeric: true,
    sensitivity: "base"
  }));
  const content = [
    ...pages.map((page) => {
      const activeClass = activePage?.relativePath === page.relativePath ? " active" : "";
      return `<a class="nav-link${activeClass}" href="${page.route}">${escapeHtml(page.title)}</a>`;
    }),
    ...dirs.map((dir) => renderTreeNode(dir, activePage))
  ].join("\n");

  if (isRoot) return `<nav class="nav-tree" aria-label="Documentation">${content}</nav>`;

  const open = shouldOpenDir(node, activePage) ? " open" : "";
  return `<details${open}>
  <summary>${escapeHtml(titleFromName(node.name))}</summary>
  <div class="nav-list">
    ${content}
  </div>
</details>`;
}

function renderLayout({ title, pageTitle, content, sidebar, previousPage, nextPage, is404 = false }) {
  const previous = previousPage
    ? `<a class="pager-prev" href="${previousPage.route}"><small>Previous</small><strong>${escapeHtml(previousPage.title)}</strong></a>`
    : `<span class="pager-prev"><small>Previous</small><strong>No previous page</strong></span>`;
  const next = nextPage
    ? `<a class="pager-next" href="${nextPage.route}"><small>Next</small><strong>${escapeHtml(nextPage.title)}</strong></a>`
    : `<span class="pager-next"><small>Next</small><strong>No next page</strong></span>`;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} | Shift-Core Handbook</title>
  <meta name="description" content="Shift-Core team handbook documentation.">
  <link rel="icon" href="${logoPath}">
  <link rel="stylesheet" href="/assets/styles.css">
</head>
<body>
  <div class="app-shell">
    <aside class="sidebar" id="site-sidebar">
      <a class="brand" href="/">
        <img src="${logoPath}" alt="Shift-Core logo">
        <span>Team Handbook</span>
      </a>
      ${sidebar}
    </aside>
    <button class="sidebar-backdrop" type="button" data-menu-close aria-label="Close navigation"></button>
    <div class="content-wrap">
      <header class="topbar">
        <button class="menu-button" type="button" data-menu-toggle aria-controls="site-sidebar" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
          <strong>Menu</strong>
        </button>
        <div class="topbar-title">
          <p class="eyebrow">${is404 ? "Page Not Found" : "Shift-Core Documentation"}</p>
          <h1>${escapeHtml(pageTitle)}</h1>
        </div>
      </header>
      <main class="content">
        <article class="doc-card${is404 ? " not-found" : ""}">
          ${content}
        </article>
        ${is404 ? "" : `<nav class="pager" aria-label="Page navigation">${previous}${next}</nav>`}
      </main>
      <footer class="site-footer">
        <img src="${logoPath}" alt="Shift-Core">
        &copy; ${currentYear} Shift-Core. All rights reserved.
      </footer>
    </div>
  </div>
  <script>
    const menuButton = document.querySelector("[data-menu-toggle]");
    const closeButton = document.querySelector("[data-menu-close]");
    const sidebar = document.querySelector("#site-sidebar");

    function setMenuOpen(open) {
      document.body.classList.toggle("menu-open", open);
      menuButton?.setAttribute("aria-expanded", String(open));
    }

    menuButton?.addEventListener("click", () => {
      setMenuOpen(!document.body.classList.contains("menu-open"));
    });

    closeButton?.addEventListener("click", () => setMenuOpen(false));

    sidebar?.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement && window.matchMedia("(max-width: 860px)").matches) {
        setMenuOpen(false);
      }
    });
  </script>
</body>
</html>`;
}

async function copyPublicAssets() {
  await fs.cp(publicDir, outputDir, { recursive: true });
  await fs.copyFile(stylesPath, path.join(outputDir, "assets", "styles.css"));
}

async function writePage(route, html) {
  const directory = route === "/" ? outputDir : path.join(outputDir, route);
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(path.join(directory, "index.html"), html);
}

async function build() {
  const files = await findMarkdownFiles();
  const pages = [];
  const routeByPath = new Map();

  for (const file of files) {
    const relativePath = toPosix(path.relative(rootDir, file));
    const markdown = await fs.readFile(file, "utf8");
    const page = {
      file,
      relativePath,
      route: routeForFile(relativePath),
      title: titleFromMarkdown(markdown, titleFromName(path.basename(relativePath))),
      markdown
    };
    pages.push(page);
    routeByPath.set(relativePath, page.route);
  }

  pages.sort(comparePaths);
  const tree = buildTree(pages);

  await fs.rm(outputDir, { recursive: true, force: true });
  await fs.mkdir(path.join(outputDir, "assets"), { recursive: true });
  await copyPublicAssets();

  for (const [index, page] of pages.entries()) {
    const sidebar = renderTreeNode(tree, page, true);
    const content = renderMarkdown(page.markdown, page.relativePath, routeByPath);
    const html = renderLayout({
      title: page.title,
      pageTitle: page.title,
      content,
      sidebar,
      previousPage: pages[index - 1],
      nextPage: pages[index + 1]
    });

    await writePage(page.route, html);

    if (index === 0) {
      await writePage("/", html);
    }
  }

  const sidebar = renderTreeNode(tree, null, true);
  const notFoundHtml = renderLayout({
    title: "404",
    pageTitle: "Page Not Found",
    sidebar,
    is404: true,
    content: `<h1>404</h1>
<p>The page you requested does not exist in the Shift-Core handbook.</p>
<p><a href="/">Return to the handbook home page</a></p>`
  });
  await fs.writeFile(path.join(outputDir, "404.html"), notFoundHtml);

  console.log(`Built ${pages.length} pages into dist/`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
