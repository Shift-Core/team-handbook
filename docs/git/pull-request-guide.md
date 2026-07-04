# Pull Request Guide

This document explains how the ShiftCore team uses Pull Requests.

A Pull Request is required for every change before it is merged into `main`.

---

## What Is a Pull Request?

A Pull Request, also called PR, is a request to merge changes from one branch into another branch.

In our workflow, we open Pull Requests from task branches into `main`.

A PR allows the team to:

- Review changes before merging.
- Discuss improvements.
- Find mistakes early.
- Keep `main` stable.
- Track what changed and why.

---

## Main Pull Request Rule

Do not merge directly into `main`.

Every change must go through:

```text
Branch → Commit → Push → Pull Request → Review → Approval → Merge
```

---

## When Should You Open a Pull Request?

Open a Pull Request when:

- Your task is ready for review.
- Your changes are pushed to GitHub.
- You can explain what changed.
- You are ready to receive feedback.

Do not wait until the last day to open a PR.

Small Pull Requests are easier to review than large ones.

---

## Pull Request Rules

1. Push your branch to GitHub.
2. Open a Pull Request into `main`.
3. Add a clear PR title and description.
4. Fill the PR template if available.
5. Link the PR with the related Jira task when Jira is active.
6. Request review from a teammate.
7. Do not merge your own PR without approval.
8. Merge only after approval.
9. Merge only after checks pass.
10. Delete the branch after merge if it is no longer needed.

---

## Pull Request Title Format

### Before Jira

Use this format:

```text
type: short description
```

Examples:

```text
feat: add homepage
fix: correct navbar responsive issue
docs: update setup guide
```

---

### After Jira

When Jira is active, include the Jira task key.

Use this format:

```text
[JIRA-ID] type: short description
```

Examples:

```text
[GP-12] feat: add homepage
[GP-18] fix: correct navbar responsive issue
[GP-21] docs: update setup guide
```

---

## Pull Request Description

A good PR description should answer three questions:

1. What changed?
2. Why was this change needed?
3. How can it be reviewed?

---

## Basic Pull Request Description Template

Use this structure:

```md
## What changed?

Explain what you changed.

## Why?

Explain why this change was needed.

## How to review?

Explain how the reviewer should check your work.

## Notes

Add any important notes, limitations, or follow-up work.
```

---

## Example Pull Request Description

```md
## What changed?

Added the Git workflow guide.

## Why?

The team needs a clear daily workflow for branches, commits, Pull Requests, reviews, and merge rules.

## How to review?

Please check:

- The workflow is easy to understand.
- The steps are clear for beginners.
- The commands are correct.
- The rules match our team agreement.

## Notes

Conflict handling and GitHub security will be documented in separate files.
```

---

## Linking Pull Requests with Jira

This will be required after Jira is active.

Each PR should be linked to its Jira task.

Use the Jira key in:

### Branch name

```text
docs/GP-21-add-git-workflow
```

### PR title

```text
[GP-21] docs: add git workflow
```

### PR description

```text
Related Jira Task: GP-21
```

### Commit message, when useful

```text
docs(git): add git workflow GP-21
```

---

## Requesting Review

After opening the PR:

- Request review from at least one teammate.
- Choose someone who can understand the change.
- For important changes, request more than one reviewer.
- Do not merge before approval.

---

## Who Should Review?

The reviewer should be someone who can judge the change.

Examples:

- Documentation changes can be reviewed by any teammate who understands the rules.
- Frontend changes should be reviewed by a frontend teammate.
- Backend changes should be reviewed by a backend teammate.
- Security-related changes should be reviewed by the security member.
- DevOps changes should be reviewed by the DevOps member.

---

## How to Handle Review Comments

If the reviewer asks for changes:

1. Read the comment carefully.
2. Ask if anything is unclear.
3. Update the code or documentation.
4. Commit the change.
5. Push again.
6. Reply to the comment if needed.

Example:

```bash
git add .
git commit -m "docs(git): clarify pull request review steps"
git push
```

The PR updates automatically after pushing.

---

## Merge Rules

- Direct push to `main` is not allowed.
- Do not merge without approval.
- Do not merge if there are unresolved comments.
- Do not merge if the PR has conflicts.
- Do not merge if checks are failing.
- Only the PR author merges after approval.
- Delete the branch after merge if it is no longer needed.

---

## Before Merging

Before merging, the PR author must check:

- The PR has approval.
- All comments are resolved.
- There are no conflicts.
- The PR title is clear.
- The PR description is clear.
- The change matches the task.
- The branch is no longer needed after merge.

---

## After Merging

After the PR is merged:

1. Delete the branch on GitHub if it is no longer needed.
2. Switch to `main` locally.
3. Pull the latest changes.

```bash
git switch main
git pull origin main
```

Then create a new branch for the next task.

---

## Good Pull Request Practices

- Keep PRs small.
- Do not mix unrelated changes.
- Explain your work clearly.
- Add screenshots for UI changes.
- Mention limitations or follow-up work.
- Respond to review comments respectfully.
- Open the PR early if you need feedback.

---

## Bad Pull Request Practices

Avoid:

- Huge PRs with many unrelated changes.
- PRs without description.
- PRs with unclear titles.
- PRs that include secrets like `.env`.
- PRs that modify unrelated files.
- PRs opened at the last minute.
- Merging before review.

---

## Pull Request Checklist

Before asking for review, check:

- I worked on a branch, not `main`.
- My branch name is clear.
- My commit messages are clear.
- My PR title is clear.
- My PR description explains the change.
- I changed only files related to the task.
- I did not upload sensitive files.
- I am ready to receive feedback.

---

## Related Documents

- [Git Workflow](git-workflow.md)
- [Branch and Commit Rules](branch-and-commit-rules.md)
- [Code Review Guide](code-review-guide.md)
