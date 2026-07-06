# GitHub Security

This document defines the GitHub security rules followed by the ShiftCore team.

These rules apply to all repositories inside the organization.

---

## Main Rule

Never commit secrets or sensitive files.

If a secret is committed by mistake, report it immediately.

---

## Files That Must Not Be Committed

Do not commit:

```text
.env
.env.local
.env.production
*.pem
*.key
*.p12
*.pfx
id_rsa
id_rsa.pub
tokens
passwords
private credentials
database dumps
local config files
```

---

## Required Files

When environment variables are needed, use:

```text
.env.example
```

The `.env.example` file should include variable names only, not real secrets.

Example:

```env
DATABASE_URL=
JWT_SECRET=
API_KEY=
```

---

## `.gitignore` Rules

Every project repository must include a `.gitignore` file.

The `.gitignore` file should ignore:

- Environment files
- Dependency folders
- Build output
- Logs
- OS files
- Editor files
- Local config files

Common examples:

```gitignore
.env
.env.*
node_modules/
dist/
build/
logs/
*.log
.DS_Store
.vscode/
.idea/
```

If a file contains local or private data, it should be ignored.

---

## Branch Protection Rules

The `main` branch must be protected.

Recommended settings:

- Require Pull Request before merging.
- Require at least one approval.
- Require conversation resolution before merge.
- Require status checks to pass when CI is active.
- Prevent direct pushes to `main`.
- Prevent force pushes to `main`.
- Prevent branch deletion.

---

## Pull Request Security Rules

Before approving or merging a Pull Request, check:

- No `.env` file is included.
- No tokens are included.
- No passwords are included.
- No private keys are included.
- No secrets are written in code or documentation.
- No sensitive data is exposed in examples.
- No unnecessary permissions are added.
- No unrelated files are changed.

---

## GitHub Organization Access

Organization access should follow the least privilege rule.

Team members should only have the permissions they need.

Recommended permission levels:

| Role | Recommended Permission |
|---|---|
| Regular contributor | Write |
| Reviewer / maintainer | Maintain |
| Team lead / repo owner | Admin |
| External collaborator | Limited access only |

Do not give admin access unless needed.

---

## SSH Key Rules

Each team member should use their own SSH key.

Do not share SSH keys.

Do not use another person's GitHub account.

If you use a new device, verify:

```bash
ssh -T git@github.com
```

The result should show your own GitHub username.

---

## Git Author Rules

Each team member must configure Git with their own name and verified GitHub email.

Check current config:

```bash
git config user.name
git config user.email
```

Set global config:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Commits must appear under the correct author.

---

## If a Secret Is Committed

If a secret is committed by mistake:

1. Report it immediately.
2. Do not ignore it.
3. Rotate or revoke the secret.
4. Remove it from the repository.
5. Check commit history if needed.
6. Add the file pattern to `.gitignore`.
7. Document the incident if it affects the team.

Do not simply delete the file in a later commit and assume the problem is solved.

---

## Sensitive Data in Documentation

Do not include real:

- API keys
- Tokens
- Passwords
- Private URLs
- Internal credentials
- Personal data
- Private server details

Use placeholders instead.

Examples:

```text
YOUR_API_KEY
YOUR_DATABASE_URL
YOUR_SECRET_HERE
```

---

## Security Checklist Before Merge

Before merging any PR, check:

- [ ] No secrets are included.
- [ ] No `.env` files are included.
- [ ] No private keys are included.
- [ ] `.gitignore` is updated when needed.
- [ ] `.env.example` is used when needed.
- [ ] No sensitive data appears in logs or examples.
- [ ] Permissions are not increased without reason.
- [ ] Security-related changes were reviewed by the security teammate.

---

## Security Owner Responsibilities

The security owner should:

- Review security-related Pull Requests.
- Check GitHub repository settings.
- Help configure branch protection.
- Review `.gitignore` and `.env.example`.
- Watch for leaked secrets.
- Help the team follow secure workflow rules.

---

## Related Documents

- [Git Workflow](git-workflow.md)
- [Pull Request Guide](pull-request-guide.md)
- [Code Review Guide](code-review-guide.md)