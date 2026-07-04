# Git Workflow

This document defines the Git workflow followed by the ShiftCore team.

It is not a Git tutorial.  
Each team member is responsible for learning Git basics before contributing.

---

## Required Git Knowledge

Every team member must understand and be able to use:

- Repository
- Branch
- Commit
- Pull
- Push
- Merge
- Pull Request
- Conflict
- Local repository
- Remote repository
- Working directory
- Staging area
- Commit history

---

## Required Git Commands

Every team member must be comfortable using:

```bash
git clone
git status
git add
git commit
git push
git pull
git branch
git switch
git checkout
git merge
git log
````

---

## Main Rules

These rules must be followed by everyone:

* Do not work directly on `main`.
* Do not push directly to `main`.
* Every task must have its own branch.
* Every branch name must follow the agreed naming format.
* Every commit message must be clear.
* Do not mix unrelated changes in the same commit.
* Do not open huge Pull Requests unless necessary.
* Do not merge without a Pull Request.
* Do not merge without review approval.
* Only the Pull Request author merges after approval.
* Do not upload sensitive files such as `.env`, tokens, passwords, or private keys.
* Pull the latest changes before starting new work.
* Push your work regularly.
* Report conflicts or blockers early.

---

## Standard Workflow

Follow this workflow for every task.

---

### 1. Start from `main`

```bash
git switch main
git pull origin main
```

Do this before starting any new task.

---

### 2. Create a Task Branch

```bash
git switch -c type/short-task-name
```

Example:

```bash
git switch -c docs/add-git-workflow
```

Branch names must follow the rules in [Branch and Commit Rules](branch-and-commit-rules.md).

---

### 3. Make Your Changes

Rules:

* Change only files related to the task.
* Avoid unrelated formatting changes.
* Keep the task small and reviewable.
* Do not add temporary files.
* Do not add secrets or local environment files.

---

### 4. Check Your Changes

```bash
git status
```

Use this before staging or committing.

Optional:

```bash
git diff
```

Use this to review your changes locally before committing.

---

### 5. Stage Files

Stage only the files related to the task.

Example:

```bash
git add docs/git/git-workflow.md
```

Use this carefully:

```bash
git add .
```

Only use `git add .` when you are sure all changed files belong to the same task.

---

### 6. Commit

```bash
git commit -m "type(scope): short message"
```

Example:

```bash
git commit -m "docs(git): add git workflow"
```

Commit messages must follow [Branch and Commit Rules](branch-and-commit-rules.md).

---

### 7. Push the Branch

First push:

```bash
git push -u origin type/short-task-name
```

Example:

```bash
git push -u origin docs/add-git-workflow
```

Next pushes:

```bash
git push
```

---

### 8. Open a Pull Request

Open a Pull Request from your branch into `main`.

The Pull Request must include:

* Clear title
* Clear description
* Summary of changes
* Review instructions
* Related task, when Jira is active

Pull Requests must follow [Pull Request Guide](pull-request-guide.md).

---

### 9. Request Review

Rules:

* Request at least one reviewer.
* Do not merge before approval.
* Choose a reviewer who can understand the change.
* For important changes, request more than one reviewer.

---

### 10. Handle Review Comments

If changes are requested:

```bash
git add .
git commit -m "type(scope): short message"
git push
```

Rules:

* Do not ignore review comments.
* Ask if a comment is unclear.
* Resolve comments only after addressing them.
* Keep communication respectful.

---

### 11. Merge After Approval

The Pull Request author is responsible for merging after approval.

Before merging, confirm:

* PR is approved.
* All comments are resolved.
* There are no conflicts.
* Checks passed, if GitHub Actions are enabled.
* The PR does not include unrelated changes.
* The branch is up to date enough for safe merge.

---

### 12. Delete the Branch

After merge, delete the branch if it is no longer needed.

---

### 13. Update Local `main`

After the PR is merged:

```bash
git switch main
git pull origin main
```

Then create a new branch for the next task.

---

## Pull Request Base Rules

Default PR base:

```text
main
```

If a branch depends on another unmerged branch, do not open a PR into `main`.

Use the parent branch as the PR base.

Example:

```text
base: docs/initialize-handbook
compare: docs/add-git-foundation-guides
```

This is called a stacked PR.

For beginners, avoid stacked PRs unless needed.

---

## Conflict Rules

When a conflict happens:

* Do not delete code you do not understand.
* Ask the file owner if needed.
* Resolve the conflict locally.
* Test the project or review the document after resolving.
* Commit the conflict resolution clearly.

Conflict details are documented in [Conflict Handling](conflict-handling.md).

---

## Sensitive Files Rules

Never commit:

```text
.env
.env.local
.env.production
*.pem
*.key
tokens
passwords
private credentials
local config files
```

Use `.env.example` instead when needed.

More details are documented in [GitHub Security](github-security.md).

---

## Required Practice

Each team member must complete at least one full Git workflow cycle:

1. Clone repository.
2. Create branch.
3. Make a small change.
4. Commit clearly.
5. Push branch.
6. Open Pull Request.
7. Request review.
8. Respond to review.
9. Merge only after approval.

---

## Quick Checklist Before Opening a Pull Request

Before opening a PR, check:

* I am not working on `main`.
* My branch name is clear.
* My commit message is clear.
* I changed only files related to the task.
* I did not commit secrets.
* I reviewed my changes locally.
* I can explain what changed.
* The PR is small enough to review.

---

## Related Documents

* [Branch and Commit Rules](branch-and-commit-rules.md)
* [Pull Request Guide](pull-request-guide.md)
* [Code Review Guide](code-review-guide.md)
* [Conflict Handling](conflict-handling.md)
* [GitHub Security](github-security.md)
