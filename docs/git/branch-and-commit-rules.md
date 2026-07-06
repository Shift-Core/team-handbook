# Branch and Commit Rules

This document defines the branch naming and commit message rules followed by the ShiftCore team.

The goal is to keep our Git history clear, readable, and professional.

---

## Why Naming Rules Matter

Clear branch and commit names help the team understand:

- What the change is about.
- Why the change was made.
- Which task the work belongs to.
- Who should review it.
- How to track project progress later.

Bad names like `update`, `fix`, or `final` make the project hard to understand.

---

# Branch Rules

## Main Rule

Do not work directly on `main`.

Every task must have its own branch.

---

## Branch Name Format

Branch name format:

```text
type/short-task-name
```

Examples:

```text
docs/add-git-workflow
fix/readme-typo
feat/user-login
```

---

## Branch Naming Rules

- Branch name must be short and clear.
- Branch name must be related to the task.
- Use lowercase letters.
- Use hyphens `-` between words.
- Do not use spaces.
- Do not use random names like `test`, `final`, `new`, or `update`.
- Do not use very long branch names.
- Use the correct branch type.

---

## Branch Types

| Branch Type | Usage | Branch Examples |
|---|---|---|
| `feat` | new feature | `feat/add-homepage`<br>`feat/user-login`<br>`feat/task-dashboard` |
| `fix` | bug fix | `fix/readme-typo`<br>`fix/navbar-responsive`<br>`fix/api-response-schema` |
| `docs` | documentation changes | `docs/update-readme`<br>`docs/setup-guide` |
| `style` | formatting/style only | `style/format-login-page` |
| `refactor` | code improvement without behavior change | `refactor/auth-service` |
| `test` | tests | `test/add-auth-tests` |
| `chore` | maintenance tasks | `chore/project-config` |
| `perf` | performance improvements | `perf/improve-dashboard-load`<br>`perf/optimize-api-cache` |
| `ci` | CI/CD changes | `ci/add-github-actions` |
| `build` | build/dependency changes | `build/update-dependencies` |
| `revert` | revert previous commit | `revert/login-feature`<br>`revert/navbar-fix` |
| `security` | security-related changes | `security/auth-validation` |

---

## Good Branch Examples

```text
docs/add-pull-request-guide
docs/update-contributing-guide
fix/typo-in-readme
feat/user-login
security/auth-validation
ci/add-github-actions
```

---

## Bad Branch Examples

```text
test
new
update
final
my-work
changes
edit
```

These are bad because they do not explain the task clearly.

---

## Future Jira Branch Format

When we start using Jira, every branch should include the Jira task key.

Branch name format:

```text
type/JIRA-ID-short-task-name
```

Examples:

```text
feat/GP-12-add-homepage
fix/GP-18-navbar-responsive
docs/GP-21-update-readme
security/GP-30-auth-validation
ci/GP-35-add-github-actions
```

This makes it easy to connect GitHub work with Jira tasks.

---

# Commit Message Rules

## Commit Format

Commit message format:

```text
type(scope): short message
```

The `scope` is optional, but recommended when the change belongs to a specific area.

---

## What Is a Scope?

The scope explains the area affected by the change.

Examples of scopes:

```text
auth
api
ui
readme
git
jira
security
tasks
dashboard
```

Example with scope:

```text
docs(git): add branch naming rules
```

Example without scope:

```text
docs: add setup instructions
```

---

## Commit Types

```text
feat      → new feature
fix       → bug fix
chore     → maintenance tasks
refactor  → code improvement without behavior change
docs      → documentation changes
style     → formatting/style only
test      → tests
perf      → performance improvements
ci        → CI/CD changes
build     → build/dependency changes
revert    → revert previous commit
security  → security-related changes
```

---

## Good Commit Examples

```text
feat: add homepage
fix: correct typo in readme
docs: add setup instructions
feat(auth): implement JWT-based login
fix(api): correct response schema for users endpoint
refactor(user): move validation logic to service
test(tasks): add task creation tests
ci(github): add build workflow
security(auth): prevent weak password submission
```

---

## Bad Commit Examples

```text
update
fix
final
new
test
changes
last version
edit again
```

These are bad because they do not explain what changed.

---

## Commit Message Rules

- Use a clear message.
- Use the correct commit type.
- Keep the message short.
- Use lowercase after the type.
- Do not write random words.
- Do not commit many unrelated changes together.
- Prefer small commits over one huge commit.
- Each commit should represent one logical change.

---

## Small Commits vs Huge Commits

A good commit changes one clear thing.

Good example:

```text
docs(git): add branch naming rules
```

Bad example:

```text
update everything
```

A huge commit is hard to review and hard to fix later.

---

## Examples for This Handbook

Since this repository is mainly documentation, most commits will use `docs`.

Examples:

```text
docs(handbook): update start here guide
docs(git): add git workflow
docs(git): add pull request guide
docs(jira): add task writing guide
fix(readme): correct broken link
chore(structure): add documentation folders
```

---

## Branch and Commit Checklist

Before pushing your work, check:

- Is the branch name clear?
- Does the branch name use the correct type?
- Is the commit message clear?
- Does the commit message use the correct type?
- Is the change related to one task?
- Did you avoid random names like `update` or `final`?

---

## Related Documents

- [Git Workflow](git-workflow.md)
- [Pull Request Guide](pull-request-guide.md)# Branch and Commit Rules

This document defines the branch naming and commit message rules followed by the ShiftCore team.

The goal is to keep our Git history clear, readable, and professional.

