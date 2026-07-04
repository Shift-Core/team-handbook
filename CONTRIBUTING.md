# Contributing Guide

This document explains the minimum rules required to contribute to the ShiftCore Team Handbook.

For detailed explanations, examples, and full workflow steps, check the related documents inside `docs/`.

---

## Main Rule

Do not push directly to `main`.

Every change must go through:

```text
Branch → Commit → Pull Request → Review → Merge
````

This applies even to small documentation changes.

---

## Basic Workflow

1. Create a new branch.
2. Make your changes.
3. Write a clear commit message.
4. Push your branch.
5. Open a Pull Request into `main`.
6. Request review from a teammate.
7. Fix review comments if needed.
8. Merge only after approval.

For the full workflow, see:

```text
docs/git/git-workflow.md
```

---

## Branch Naming

Branch format:

```text
type/short-task-name
```

Examples:

```text
docs/update-readme
docs/add-git-workflow
fix/typo-in-start-here
chore/update-handbook-structure
```

For full branch naming rules, see:

```text
docs/git/branch-and-commit-rules.md
```

---

## Commit Messages

Commit format:

```text
type(scope): short message
```

The `scope` is optional.

Examples:

```text
docs: add setup instructions
docs(handbook): add git workflow
fix(readme): correct typo
chore(structure): add documentation folder
```

Avoid unclear commit messages like:

```text
update
fix
final
new
changes
```

For full commit rules and examples, see:

```text
docs/git/branch-and-commit-rules.md
```

---

## Pull Requests

Every change must be submitted through a Pull Request.

A good Pull Request should explain:

* What changed?
* Why was it needed?
* How can it be reviewed?

For full Pull Request rules, see:

```text
docs/git/pull-request-guide.md
```

---

## Code Review

At least one teammate should review the Pull Request before merge.

The reviewer should check:

* Is the change clear?
* Is the file in the correct location?
* Is the wording understandable?
* Are there typos?
* Does it follow the agreed rules?

For full review rules, see:

```text
docs/git/code-review-guide.md
```

---

## Merge Rules

* Do not merge without approval.
* Do not merge if there are unresolved comments.
* Do not merge if the Pull Request has conflicts.
* The Pull Request author is responsible for merging after approval.
* If the author is unavailable, a reviewer or team lead may merge only after confirming the PR is ready.

---

## Documentation Rules

Keep documentation:

* Clear
* Short
* Organized
* Easy to update
* Not duplicated across many files

For documentation standards, see:

```text
docs/documentation/documentation-standards.md
```

---

## Definition of Done

A contribution is done when:

* The change is in the correct file.
* The branch name follows the agreed format.
* The commit message is clear.
* A Pull Request is opened.
* A teammate reviews it.
* Review comments are resolved.
* The Pull Request is approved.
* The Pull Request is merged into `main`.

---

## Important Links

- [Start Here](docs/00-start-here.md)
- [Git Workflow](docs/git/git-workflow.md)
- [Branch and Commit Rules](docs/git/branch-and-commit-rules.md)
- [Pull Request Guide](docs/git/pull-request-guide.md)
- [Code Review Guide](docs/git/code-review-guide.md)
- [Documentation Standards](docs/documentation/documentation-standards.md)
