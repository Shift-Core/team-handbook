# ShiftCore Team Handbook

This repository is the central handbook for the ShiftCore team.

It defines how we work together as a real engineering team, including Git/GitHub rules, pull requests, code review, Jira workflow, documentation standards, and collaboration practices.

The goal is not only to write code, but to build a clear, professional, and repeatable team workflow.

---

## Purpose

This handbook helps the team answer questions like:

- How do we start a new task?
- How do we name branches and commits?
- How do we open Pull Requests?
- Who reviews the work?
- When is a task considered done?
- How do we avoid conflicts and broken code?
- How do we document decisions and project structure?
- How do we move from preparation to real project execution?

---

## Current Phase

We are currently focusing on:

1. Git & GitHub workflow
2. Pull Requests
3. Code Review
4. GitHub Security
5. Documentation basics

After that, we will move to:

1. Jira workflow
2. Task writing
3. Sprint process
4. Mini project training
5. Graduation project execution

---

## Repository Structure

```text
team-handbook/
├── README.md
├── CONTRIBUTING.md
└── docs
    ├── 00-start-here.md
    │
    ├── git/
    │   ├── git-workflow.md
    │   ├── branch-and-commit-rules.md
    │   ├── conflict-handling.md
    │   ├── pull-request-guide.md
    │   ├── code-review-guide.md
    │   ├── github-security.md
    │   └── github-actions-basics.md
    │
    ├── jira/
    │   ├── jira-workflow.md
    │   ├── task-writing-guide.md
    │   ├── acceptance-criteria.md
    │   └── sprint-process.md
    │
    └── documentation/
        ├── documentation-standards.md
        ├── readme-template.md
        ├── api-docs-template.md
        └── decision-log-template.md
```

---

## Start Here

start with:

```text
docs/00-start-here.md
```

Then read the Git/GitHub section:

```text
docs/git/git-workflow.md
docs/git/branch-and-commit-rules.md
docs/git/pull-request-guide.md
docs/git/code-review-guide.md
```

---

## Main Rules

- Do not push directly to `main`.
- Create a new branch for every task.
- Use clear branch names.
- Use clear commit messages.
- Open a Pull Request for every change.
- Request review before merging.
- Merge only after approval.
- Keep documentation updated.
- Communicate blockers early.

---

## Contribution Guide

Before contributing to this repository, read:

```text
CONTRIBUTING.md
```

It explains the rules for branches, commits, pull requests, reviews, and merging.

---

## Team Principle

We do not want random individual work.

We want a clear workflow:

```text
Task
→ Branch
→ Commit
→ Push
→ Pull Request
→ Review
→ Fix comments
→ Approval
→ Merge
→ Documentation update
```

This handbook is the source of truth for how ShiftCore works.

