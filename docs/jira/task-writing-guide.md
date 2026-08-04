# Task Writing Guide

This document defines how the ShiftCore team writes clear, actionable, and reviewable Jira tasks.

A task should contain enough information for its owner and reviewer to understand:

* What needs to be delivered
* Why the work is needed
* What is included and excluded
* How the result will be validated
* What evidence must be provided
* What dependencies may affect the work

A task may be created before all details are available, but it must not move to `Ready for Sprint` or start active work until it meets the readiness requirements.

---

## Main Rule

If a task is unclear, it should not be started.

A well-written task answers:

* What needs to be done?
* Why is it needed?
* Who owns it?
* Who reviews it?
* What is included in the scope?
* What is not included in the scope?
* What is the expected output?
* How will the output be validated?
* What evidence is required?
* What dependencies or blockers exist?
* When is the task considered complete?

The Jira task must remain the source of truth when the scope, output, ownership, estimate, dependencies, or acceptance criteria change.

---

## Task Hierarchy

Use the following hierarchy when supported by the Jira project:

```text
Epic
└── Story or Task
    └── Sub-task
```

Not every work item requires all hierarchy levels.

Use the smallest issue type that correctly represents the work.

---

## Issue Type Rules

Use an issue type based on the nature and size of the work.

| Type       | Usage                                                                                 |
| ---------- | ------------------------------------------------------------------------------------- |
| `Epic`     | A large outcome or capability that contains multiple related stories or tasks         |
| `Story`    | A user-focused feature, workflow, or outcome that provides identifiable value         |
| `Task`     | Technical, operational, configuration, research, design, or documentation work        |
| `Bug`      | Incorrect behavior, a defect, or a regression that needs investigation and correction |
| `Sub-task` | A smaller executable part of one parent Story or Task                                 |

If `Research` or `Documentation` exists as a configured Jira issue type, it may be used.

Otherwise, create a `Task` and identify its purpose using the appropriate component, label, or title.

Examples:

```text
Task + label: research
Task + label: documentation
Task + component: DevOps
Task + component: UX
```

Do not invent new issue types without team agreement and Jira configuration.

---

## Epic Rules

Use an `Epic` when the work:

* Represents a large product or project outcome
* Requires multiple independently deliverable tasks
* May span more than one sprint
* Involves multiple owners or components
* Cannot be completed as one reviewable item

An Epic should define:

* The overall goal
* The expected outcome
* The included scope
* The excluded scope
* Success criteria
* Related stories and tasks
* Important dependencies
* Target release or milestone when applicable

Do not use an Epic as a normal executable task.

An Epic should not move through the workflow as if one person is actively implementing all of it.

The executable work should exist as Stories, Tasks, or Bugs linked to the Epic.

---

## Story Rules

Use a `Story` when the work describes a user, customer, administrator, or system-facing outcome.

A Story should explain:

* Who benefits from the change
* What capability or workflow is required
* Why the capability matters
* What behavior must be observable when completed

A Story may use the following format when useful:

```text
As a <user or role>,
I want <capability>,
so that <value or outcome>.
```

Example:

```text
As a team member,
I want to sign in using my company account,
so that I can access the Mission Control dashboard securely.
```

The user-story format is optional. Clear and direct descriptions are more important than forcing every task into the same sentence structure.

---

## Task Rules

Use a `Task` for work such as:

* Backend implementation
* Frontend implementation
* Infrastructure configuration
* CI/CD setup
* Jira configuration
* Documentation
* Design work
* Research
* Data preparation
* Testing activities
* Demo preparation
* Operational work

A Task must produce a clear and reviewable result.

Avoid tasks that only describe activity without a deliverable.

Bad:

```text
Work on authentication
Study Docker
Check the API
Continue frontend
```

Better:

```text
Implement login endpoint validation
Compare Docker deployment options
Validate authentication API response schema
Create dashboard empty-state component
```

---

## Sub-task Rules

Use a `Sub-task` only when the work is a smaller part of one specific parent task.

A Sub-task must:

* Have exactly one parent
* Represent independently assignable work
* Have one clear owner
* Have a specific output
* Contribute directly to completing its parent
* Be small enough to complete and review independently

A Sub-task must not represent work shared by multiple parent tasks.

If one work item is required by multiple tasks:

* Create it as a standalone Story, Task, or Bug
* Link dependent tasks using `blocks` and `is blocked by`
* Do not duplicate it as a Sub-task under multiple parents

Example:

```text
T-003 is required by R24-01 and R24-02.
```

Do not create two duplicate Sub-tasks.

Create one standalone task and link it:

```text
T-003 blocks R24-01
T-003 blocks R24-02

R24-01 is blocked by T-003
R24-02 is blocked by T-003
```

A parent task must not be considered complete while required Sub-tasks remain incomplete.

---

## Required Task Fields

Every executable task should include:

* Clear title
* Correct issue type
* Clear description
* One owner
* One reviewer when review is required
* Priority
* Testable acceptance criteria
* Expected output
* Estimate before entering a sprint
* Required evidence
* Component or area when applicable
* Dependencies and blockers when applicable
* Related links when applicable
* Sprint and release information when applicable

A task should not move to `Ready for Sprint` when critical required information is missing.

---

## Task Title Rules

Task titles should be short, specific, and action-oriented.

A useful title normally contains:

```text
Action + object + relevant context
```

Good:

```text
Add Jira workflow guide
Implement login endpoint validation
Create dashboard wireframe
Configure Docker Compose for local development
Document authentication API endpoints
Fix session expiration redirect
Compare database migration tools
```

Bad:

```text
Update
Fix
New thing
Important task
Work on project
Continue backend
Check issue
Changes
```

Avoid:

* Vague verbs
* Unnecessary technical detail
* Status words such as `WIP`, `Done`, or `Final`
* Personal names unless ownership is part of the requirement
* Priority words such as `Urgent` or `Important`
* Titles that combine multiple unrelated outcomes

Bad:

```text
Create login, register, dashboard, tests, and documentation
```

Better:

```text
Create login endpoint
Create registration endpoint
Implement dashboard shell
Add authentication integration tests
Document authentication endpoints
```

Priority and status belong in Jira fields, not in the title.

---

## Task Description Structure

Use the following structure for normal Stories and Tasks:

```md
## Context

Explain the current situation and why this work is needed.

## Objective

State the result this task should achieve.

## Scope

### In Scope

- What must be included
- What behavior or output must be delivered

### Out of Scope

- What is intentionally excluded
- What belongs to another task or later phase

## Expected Output

Describe the artifact, behavior, configuration, decision, or result that must be delivered.

## Acceptance Criteria

- [ ] Write observable and testable completion conditions.
- [ ] Each criterion should be independently verifiable.

## Evidence

Define what must be attached or linked to prove completion.

## Dependencies

List blocking tasks, required decisions, external inputs, or related work.

## Implementation Notes

Add useful constraints, references, technical notes, or links without prescribing unnecessary implementation details.
```

Not every small task requires a long description.

However, the task must still contain enough information to remove critical ambiguity.

---

## Context Rules

The `Context` section should explain why the task exists.

Useful context may include:

* Current problem
* User or team need
* Related project goal
* Existing limitation
* Previous decision
* Relevant technical constraint
* Release or milestone requirement

Bad:

```text
We need this task.
```

Better:

```text
The current login endpoint accepts malformed email values, which causes inconsistent validation between the frontend and backend.
```

Do not use the context section to repeat the title.

---

## Objective Rules

The `Objective` should describe the intended result, not the implementation activity.

Bad:

```text
Write some validation code.
```

Better:

```text
Ensure the login endpoint rejects invalid email addresses using the same validation rules defined for user registration.
```

A task should normally have one primary objective.

If the description contains several unrelated objectives, split the work into separate tasks.

---

## Scope Rules

The task scope must clearly distinguish what is included and excluded.

Use `In Scope` to define:

* Required behavior
* Required files or components
* Supported cases
* Required integrations
* Required documentation
* Required validation

Use `Out of Scope` to define:

* Future improvements
* Unrelated refactoring
* Unsupported cases
* Work owned by another task
* Changes intentionally delayed

Example:

```md
## Scope

### In Scope

- Validate the email field on the login endpoint
- Return the agreed validation error format
- Add automated tests for valid and invalid email values

### Out of Scope

- Password strength validation
- Registration endpoint changes
- Frontend form validation
- Authentication rate limiting
```

Clear scope reduces silent expansion during implementation and review.

---

## Expected Output Rules

The expected output defines what must exist when the task is completed.

Examples:

For code work:

```text
A merged Pull Request containing the login endpoint validation and automated tests.
```

For design work:

```text
A reviewed dashboard wireframe covering desktop and mobile layouts.
```

For documentation:

```text
A new docs/jira/task-writing-guide.md file linked from the handbook navigation.
```

For research:

```text
A comparison document with a recommendation, trade-offs, and proposed next steps.
```

For Jira configuration:

```text
A configured Ready for Sprint status with screenshots showing the final workflow.
```

Avoid outputs such as:

```text
Task completed
Work finished
Research done
```

---

## Acceptance Criteria

Every executable task must include clear and testable acceptance criteria.

Acceptance criteria define the observable conditions that must be true before the work can be accepted.

Example:

```md
## Acceptance Criteria

- [ ] `docs/git/git-workflow.md` is created.
- [ ] The document describes the supported branch types.
- [ ] The document explains the Pull Request workflow.
- [ ] Links to related handbook documents are valid.
- [ ] The assigned reviewer approves the final content.
```

Acceptance criteria should:

* Describe outcomes, not general activity
* Be specific enough to verify
* Cover the agreed scope
* Include important failure and edge cases when applicable
* Avoid unnecessary implementation detail
* Avoid subjective words without measurable meaning

Bad:

```text
The page looks good.
```

Better:

```text
The page matches the approved desktop and mobile designs without horizontal overflow.
```

Implementation steps should not be used as acceptance criteria unless completing that step is itself an agreed deliverable.

For detailed rules and examples, see [Acceptance Criteria](acceptance-criteria.md).

---

## Evidence Rules

Every task should define the evidence required to prove completion.

The expected evidence should be known before the task moves to `Ready for Sprint`.

Examples by task type:

| Work Type     | Example Evidence                                             |
| ------------- | ------------------------------------------------------------ |
| Code          | Pull Request, passing checks, test results                   |
| Bug Fix       | Pull Request, reproduction evidence, before-and-after result |
| Design        | Design link, screenshots, reviewer approval                  |
| Documentation | Pull Request or document link                                |
| Research      | Research note, comparison table, recommendation              |
| Testing       | Test report, screenshots, logs                               |
| Configuration | Screenshots, exported configuration, command output          |
| Deployment    | Deployment link, logs, health-check result                   |
| Demo          | Demo recording, presentation link, screenshots               |

Evidence must demonstrate the completed output.

A comment saying `Done` is not sufficient evidence.

---

## Priority Rules

Use the priority values configured in the Jira project.

A recommended priority model is:

| Priority  | Meaning                                                                                    |
| --------- | ------------------------------------------------------------------------------------------ |
| `Highest` | Critical work that threatens the release, security, data, or essential system availability |
| `High`    | Important work that should be handled before normal-priority items                         |
| `Medium`  | Normal planned work                                                                        |
| `Low`     | Useful work that can wait without affecting current delivery                               |
| `Lowest`  | Optional improvement or future consideration                                               |

If the project uses only `High`, `Medium`, and `Low`, follow the configured project scheme consistently.

Do not mark everything as `High`.

Priority should be based on:

* User or business impact
* Release impact
* Dependency impact
* Risk
* Urgency
* Cost of delay

Priority is not the same as difficulty.

A difficult task may have low priority, and a simple task may have high priority.

---

## Owner Rules

Every executable task must have one clear owner.

The owner is responsible for:

* Understanding the required work
* Asking questions before starting when needed
* Keeping the Jira task current
* Updating the task status
* Reporting blockers early
* Respecting the agreed scope
* Linking the required evidence
* Linking related Pull Requests
* Requesting review
* Addressing review feedback
* Making sure the task reaches a valid final state

A task may have helpers, but it must not have unclear or shared ownership.

When ownership changes:

* Update the Jira assignee
* Add a handover comment
* Describe completed work
* Describe remaining work
* Link relevant branches, documents, or evidence

---

## Reviewer Rules

Tasks that require validation should identify one clear reviewer before entering a sprint whenever possible.

The reviewer is responsible for:

* Checking the output against the acceptance criteria
* Reviewing the required evidence
* Identifying incomplete or incorrect work
* Providing clear and actionable feedback
* Confirming whether the task can move to `Done`

The owner and reviewer should normally be different people.

A helper is not automatically the reviewer.

For code changes, the reviewer must also follow the repository code review rules.

---

## Estimation Rules

Tasks selected for a sprint must be estimated using the project’s configured estimation method.

Use one method consistently, such as:

* Story points
* Original time estimate
* Hours

Do not mix estimation methods within the same sprint unless the project explicitly defines how they relate.

Estimate the executable Story, Task, Bug, or Sub-task.

Do not treat an Epic estimate as a replacement for estimating its executable items.

The estimate should consider:

* Implementation
* Testing
* Review changes
* Documentation
* Integration
* Required meetings or coordination
* Expected technical uncertainty

An estimate is not a promise. It is a planning input that should be updated when the scope changes materially.

---

## Task Size Rules

Tasks should be small enough to:

* Understand
* Estimate
* Assign to one owner
* Complete within one sprint
* Review independently
* Validate using clear evidence

Avoid tasks such as:

```text
Build the full backend
Create the whole frontend
Write all project documentation
Implement the complete AI system
Prepare the entire release
```

Break large work into smaller outcomes.

Example:

```text
Create authentication module structure
Implement login endpoint
Implement registration endpoint
Add JWT authentication guard
Add authentication integration tests
Document authentication API
```

Consider splitting a task when:

* It contains multiple unrelated outputs
* It requires several owners
* It cannot fit within one sprint
* Part of it can be delivered independently
* Different parts require different reviewers
* The acceptance criteria are too broad
* The task contains both research and implementation

Research and implementation should normally be separate tasks when the implementation depends on the research decision.

---

## Dependency Rules

Dependencies must be visible in Jira.

Use issue links such as:

```text
blocks
is blocked by
relates to
duplicates
```

Use `blocks` and `is blocked by` when one task cannot proceed or complete without another.

Example:

```text
SMC-42 blocks SMC-51
SMC-51 is blocked by SMC-42
```

Do not document critical dependencies only inside:

* Private messages
* Meeting notes
* Pull Request comments
* The task description without a Jira link

If a task depends on an external person, service, or decision, document:

* What is required
* Who is responsible
* When it is needed
* What work is affected
* The next action

A task with an unresolved critical dependency should not move to `Ready for Sprint`.

---

## Research Task Rules

Research tasks must answer a specific question and produce a decision-ready result.

A research task should define:

* Research question
* Reason for the investigation
* Evaluation criteria
* Time or scope limit
* Required sources or systems
* Expected output
* Decision owner
* Next implementation step when applicable

A research task should deliver one or more of:

* Short summary
* Comparison table
* Recommendation
* Trade-off analysis
* Proof of concept
* Decision proposal
* Useful references
* Risks and limitations
* Proposed implementation tasks

Do not create open-ended research tasks such as:

```text
Research AI
Study authentication
Look into deployment
Check database options
```

Better:

```text
Compare PostgreSQL migration tools for the backend
```

Expected output:

```text
A comparison of Prisma Migrate, TypeORM migrations, and Knex migrations covering compatibility, rollback support, team learning cost, and a final recommendation.
```

Research completion does not automatically include implementation unless implementation is explicitly included in the scope.

---

## Documentation Task Rules

Documentation tasks should define:

* Exact file or page to create or update
* Target audience
* Purpose of the document
* Required sections
* Existing content that must remain
* Related documents
* Navigation or linking requirements
* Reviewer
* Required evidence

Example:

```text
Create docs/git/pull-request-guide.md for ShiftCore contributors.

The guide must define:
- Pull Request title format
- Required description sections
- Reviewer request rules
- Draft Pull Request behavior
- Approval requirements
- Merge requirements

The file must link to:
- git-workflow.md
- branch-and-commit-rules.md
- code-review-guide.md
```

Documentation changes must remain consistent with the actual team process and configured tools.

Do not document statuses, fields, or rules that do not exist in the current workflow unless they are clearly marked as proposals.

---

## Bug Task Rules

A Bug should provide enough information to reproduce, understand, prioritize, and verify the defect.

Bug tasks should include:

* Summary of the problem
* Affected behavior
* User or system impact
* Environment
* Version or build when relevant
* Preconditions
* Steps to reproduce
* Expected result
* Actual result
* Reproduction frequency
* Screenshots, logs, or recordings
* Known workaround when available
* Acceptance criteria for the fix

Use the following template:

```md
## Bug Summary

Describe what is broken.

## Impact

Explain who or what is affected.

## Environment

- Environment:
- Version or build:
- Browser or device:
- Account or role:

## Preconditions

List anything required before reproducing the bug.

## Steps to Reproduce

1.
2.
3.

## Expected Result

Describe the correct behavior.

## Actual Result

Describe the observed behavior.

## Reproduction Frequency

Always, sometimes, or under specific conditions.

## Evidence

Add screenshots, recordings, logs, errors, or related links.

## Workaround

Describe any temporary workaround, if available.

## Acceptance Criteria

- [ ] The issue can no longer be reproduced.
- [ ] The expected behavior is restored.
- [ ] Relevant automated or manual tests pass.
- [ ] No related regression is introduced.
```

Priority describes when the Bug should be handled.

Severity describes how badly the Bug affects the system.

Do not confuse the two.

---

## Related Links

Add links that help the owner or reviewer understand and validate the task.

Examples:

* Pull Request
* Repository file
* Design
* Document
* API reference
* Related Jira task
* Blocking task
* Decision log
* Meeting note
* Test result
* Dashboard
* Deployment
* External dependency

Use descriptive link labels when possible.

Bad:

```text
Link
Click here
Reference
```

Better:

```text
Authentication API specification
Dashboard mobile wireframe
Related Pull Request
Blocking backend task
```

---

## Scope Change Rules

Do not change task scope silently after work starts.

When the scope changes:

* Update the description
* Update `In Scope` and `Out of Scope`
* Update the expected output
* Update the acceptance criteria
* Update the estimate when needed
* Update dependencies
* Notify the reviewer
* Evaluate the sprint impact
* Create a separate task when the added work is independently deliverable

Do not hide additional work inside the existing task only to avoid creating another Jira item.

If the change threatens the sprint goal or deadline, raise it to the team lead before continuing.

---

## Definition of Ready

A task may move to `Ready for Sprint` only when:

* [ ] The title is clear and specific
* [ ] The issue type is correct
* [ ] The description explains the required work
* [ ] The objective is clear
* [ ] `In Scope` and `Out of Scope` are understood
* [ ] The expected output is defined
* [ ] Acceptance criteria are written and testable
* [ ] One owner is assigned
* [ ] One reviewer is identified when required
* [ ] Priority is set
* [ ] The task is estimated
* [ ] Required evidence is defined
* [ ] Dependencies are identified and linked
* [ ] No unresolved critical blocker prevents starting
* [ ] The task is small enough to complete within the sprint
* [ ] The task supports the sprint or release goal when applicable

A task that fails this checklist should remain in `To Do` or the Backlog planning area.

---

## Definition of Done

A task is complete only when:

* [ ] All acceptance criteria are met
* [ ] The agreed output is delivered
* [ ] The reviewer has accepted the output
* [ ] Required evidence is attached or linked
* [ ] Testing or validation is completed when required
* [ ] Documentation is updated when required
* [ ] Dependencies created by the task are documented
* [ ] No unresolved blocker remains
* [ ] Jira reflects the final delivered scope

For repository changes:

* [ ] The Pull Request is ready and reviewed
* [ ] Required checks pass
* [ ] Review comments are resolved
* [ ] Merge conflicts are resolved
* [ ] The Pull Request is approved
* [ ] The Pull Request is merged

For non-repository work:

* [ ] The expected artifact or result is available
* [ ] The reviewer has validated the evidence
* [ ] Any required approval is recorded

Opening a Pull Request does not mean the task is `Done`.

Completing implementation without review or required evidence does not mean the task is `Done`.

For full workflow rules, see [Jira Workflow](jira-workflow.md).

---

## Task Writing Checklist

Before moving a task to `Ready for Sprint`, confirm:

### Identity

* [ ] The title is clear
* [ ] The issue type is correct
* [ ] The component or work area is set when applicable

### Purpose

* [ ] The context explains why the work is needed
* [ ] The objective defines one primary outcome

### Scope

* [ ] Included work is clear
* [ ] Excluded work is clear
* [ ] The task does not combine unrelated outcomes

### Delivery

* [ ] The expected output is defined
* [ ] Acceptance criteria are testable
* [ ] Required evidence is defined

### People

* [ ] One owner is assigned
* [ ] One reviewer is identified when required

### Planning

* [ ] Priority is set
* [ ] The estimate is recorded
* [ ] The task can fit within the sprint
* [ ] Dependencies are linked
* [ ] Known blockers are documented

---

## Related Documents

* [Jira Workflow](jira-workflow.md)
* [Acceptance Criteria](acceptance-criteria.md)
* [Sprint Process](sprint-process.md)
* [Git Workflow](../git/git-workflow.md)
* [Branch and Commit Rules](../git/branch-and-commit-rules.md)
* [Pull Request Guide](../git/pull-request-guide.md)
* [Code Review Guide](../git/code-review-guide.md)
