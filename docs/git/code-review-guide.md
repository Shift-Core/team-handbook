# Code Review Guide

This document defines how the ShiftCore team reviews Pull Requests.

Code review is required before merging into `main`.

---

## Main Rule

No Pull Request should be merged without review approval.

The goal of review is to protect the project quality, not to criticize the person who wrote the code.

---

## Who Reviews?

Choose reviewers based on the type of change.

| Change Type | Preferred Reviewer |
|---|---|
| Documentation | Any teammate who understands the workflow |
| Frontend | Frontend teammate |
| Backend | Backend teammate |
| Security | Security teammate |
| DevOps / CI/CD | DevOps teammate |
| AI / ML | AI / ML teammate |
| General team rules | Team lead or assigned reviewer |

For important changes, request more than one reviewer.

---

## Reviewer Responsibilities

The reviewer must check:

- The change matches the task.
- The PR title is clear.
- The PR description is clear.
- The changed files are related to the task.
- The solution is simple and understandable.
- The change does not break existing work.
- The change does not include secrets or sensitive files.
- The documentation is updated if needed.
- The PR is small enough to review.
- The branch and commits follow the team rules.

---

## Author Responsibilities

The Pull Request author must:

- Open a clear Pull Request.
- Explain what changed.
- Explain why the change was needed.
- Request review from the right teammate.
- Respond to review comments.
- Make requested changes when needed.
- Avoid merging before approval.
- Merge only after all comments are resolved.

---

## Review Comment Types

Use clear comment types when reviewing.

### Must Change

Use this when the issue must be fixed before merge.

Example:

```text
Must change: This file should not include environment secrets.
```

### Suggestion

Use this when the change is optional but recommended.

Example:

```text
Suggestion: We can rename this section to make it clearer.
```

### Question

Use this when you need clarification.

Example:

```text
Question: Why did we choose this structure instead of a separate file?
```

### Nit

Use this for small style or wording notes.

Example:

```text
Nit: Small typo in this sentence.
```

---

## Review Checklist

Before approving a Pull Request, check:

- [ ] The PR has a clear title.
- [ ] The PR has a useful description.
- [ ] The changed files are related to the task.
- [ ] The change follows the agreed team rules.
- [ ] The branch name is valid.
- [ ] The commit messages are clear.
- [ ] There are no unrelated changes.
- [ ] There are no secrets or sensitive files.
- [ ] The documentation is updated if needed.
- [ ] The PR is ready to merge.

---

## Documentation Review Checklist

For documentation changes, check:

- [ ] The file is in the correct location.
- [ ] The content is clear and useful.
- [ ] The content is not unnecessarily long.
- [ ] The content does not duplicate another file.
- [ ] Links are written as Markdown links when needed.
- [ ] Code blocks are used only for commands, examples, or structures.
- [ ] Rules are direct and easy to follow.

---

## Frontend Review Checklist

For frontend changes, check:

- [ ] The UI matches the design.
- [ ] The page or component is responsive.
- [ ] Loading states are handled.
- [ ] Error states are handled.
- [ ] Empty states are handled when needed.
- [ ] There are no unnecessary console logs.
- [ ] Reusable components are used when appropriate.
- [ ] The code is readable and organized.

---

## Backend Review Checklist

For backend changes, check:

- [ ] The endpoint or service matches the task.
- [ ] Input validation is handled.
- [ ] Error responses are clear.
- [ ] Status codes are appropriate.
- [ ] Authentication is handled when needed.
- [ ] Authorization is handled when needed.
- [ ] No sensitive data is exposed.
- [ ] The code is organized and maintainable.
- [ ] API documentation is updated if needed.

---

## Security Review Checklist

For security-related changes, check:

- [ ] No secrets are committed.
- [ ] Inputs are validated.
- [ ] Permissions are checked.
- [ ] Authentication is not bypassed.
- [ ] Error messages do not expose sensitive details.
- [ ] Tokens or credentials are not logged.
- [ ] Sensitive files are ignored by Git.

---

## DevOps Review Checklist

For DevOps or CI/CD changes, check:

- [ ] The workflow file is in the correct location.
- [ ] The workflow runs on the correct GitHub events.
- [ ] Required steps are clear.
- [ ] Secrets are not hardcoded.
- [ ] Environment variables are documented.
- [ ] Build, lint, or test steps are included when needed.
- [ ] The change does not break existing workflows.

---

## AI / ML Review Checklist

For AI or ML changes, check:

- [ ] The input and output are clear.
- [ ] The dataset or data source is documented.
- [ ] Evaluation method is mentioned when needed.
- [ ] Model limitations are documented.
- [ ] The code or notebook is reproducible.
- [ ] Generated files are not committed unless needed.

---

## Approval Rules

A reviewer can approve when:

- The change is clear.
- The task requirements are met.
- There are no unresolved important comments.
- The PR follows the team rules.
- The reviewer believes the PR is safe to merge.

Do not approve only to be nice.

Approve when the work is actually ready.

---

## Merge Rules

- The PR author merges after approval.
- Do not merge if there are unresolved comments.
- Do not merge if checks are failing.
- Do not merge if the PR has conflicts.
- Do not merge if the reviewer requested changes.
- Do not merge if the PR contains unrelated changes.

---

## Communication Rules

Review comments must be respectful and specific.

Avoid comments like:

```text
Wrong.
Bad code.
Fix this.
```

Use clear comments like:

```text
Must change: This should be moved to the correct section before merge.
```

```text
Suggestion: We can make this shorter to avoid repeating the same rule.
```

```text
Question: Is this rule already covered in another document?
```

---

## Related Documents

- [Git Workflow](git-workflow.md)
- [Branch and Commit Rules](branch-and-commit-rules.md)
- [Pull Request Guide](pull-request-guide.md)
- [GitHub Security](github-security.md)