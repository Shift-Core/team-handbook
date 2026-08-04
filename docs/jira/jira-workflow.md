# Jira Workflow

This document defines how the ShiftCore team uses Jira to plan, track, review, and complete project work.

Jira is the source of truth for:

* Task scope
* Ownership
* Priority
* Status
* Acceptance criteria
* Dependencies
* Blockers
* Delivery evidence
* Progress updates

---

## Main Rule

No project delivery work should start without a clear Jira task.

Small handbook maintenance, repository administration, or urgent operational fixes may be completed without a Jira task when agreed by the responsible maintainer.

When a Jira task exists, it must remain the source of truth for the work.

Every task must have:

* A clear title
* An appropriate issue type
* A clear description
* One owner
* One reviewer when review is required
* A priority
* Testable acceptance criteria
* An estimate before entering a sprint
* Expected delivery evidence
* Dependencies and blockers when applicable
* Related links when applicable

Examples of delivery evidence include:

* Pull Request
* Test result
* Screenshot
* Demo recording
* Design link
* Document link
* Configuration output
* Deployment link

---

## Jira Backlog

The Jira Backlog is a planning area, not a workflow status.

Use the Backlog for:

* Ideas
* Future work
* Tasks that need clarification
* Tasks that are not estimated
* Tasks that are missing acceptance criteria
* Tasks that are not ready for a sprint

A task in the Backlog may still have the `To Do` status, but it must not be started until it meets the readiness requirements.

Do not start work directly from an unrefined backlog item.

---

## Workflow

The team uses the following workflow:

```text
To Do → Ready for Sprint → In Progress → Code Review → Done
```

Blocked work is handled using a Jira flag and issue links rather than a normal workflow status.

```text
Current Status + Flagged as Blocked
```

Testing and validation are completion requirements. They are not separate workflow statuses unless the project workflow explicitly includes a dedicated testing status.

---

## Status Meaning

| Status              | Meaning                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| `To Do`             | The task exists but may still need refinement, prioritization, estimation, assignment, or clarification |
| `Ready for Sprint`  | The task meets the readiness requirements and can be selected for a sprint                              |
| `In Progress`       | The assigned owner is actively working on the task                                                      |
| `Code Review`       | The completed output is waiting for reviewer validation or Pull Request approval                        |
| `Done`              | Acceptance criteria are met, required evidence is available, and the output is accepted                 |
| `Flagged / Blocked` | The task cannot continue and its blocker is documented, communicated, and linked                        |

---

## Status Rules

### To Do

Use `To Do` when:

* The task has been created
* The task is not currently being worked on
* The task may still need clarification or preparation
* The task may still need an estimate
* The task may still need an owner or reviewer
* The task has not yet passed the readiness checklist

A task in `To Do` must not be treated as automatically ready for a sprint.

---

### Ready for Sprint

Move a task to `Ready for Sprint` only when:

* The title is clear
* The issue type is correct
* The description explains the required work
* The expected output is defined
* Acceptance criteria are clear and testable
* Priority is set
* The task is estimated
* Dependencies are identified
* Known blockers are documented
* One owner is assigned
* One reviewer is identified when review is required
* Required evidence is defined
* The task is small enough to complete within the sprint
* The task supports the current sprint or release goal

Only tasks in `Ready for Sprint` should be selected for a sprint.

A task should not be moved to `Ready for Sprint` only to fill the sprint.

---

### In Progress

Move a task to `In Progress` when:

* The owner has started active work
* The task requirements are understood
* The task is assigned to one clear owner
* Required dependencies are available
* A branch is created when repository changes are required

Do not move a task to `In Progress` only to show activity.

A task should remain in `In Progress` only while active work is happening.

For repository work, creating a Draft Pull Request does not mean the task is ready for review. The task remains in `In Progress` until the output is ready for reviewer validation.

---

### Code Review

Move a task to `Code Review` when the implementation or required output is complete and ready for validation.

For repository changes:

* The required work is completed
* The branch is pushed
* The Pull Request is opened
* The Pull Request is ready for review and is not left as a draft
* The correct reviewer is requested
* The Jira task contains the Pull Request link
* Required automated checks have started
* The author has completed a self-review

For non-code work:

* The required output is completed
* The expected evidence is attached or linked
* The assigned reviewer is requested
* The output is ready for validation

A task must not be moved to `Code Review` while major known work is still incomplete.

---

### Done

Move a task to `Done` only when:

* All acceptance criteria are met
* The required output is delivered
* The required reviewer has accepted the output
* Required evidence is attached or linked
* Testing or validation is completed when required
* Documentation is updated when required
* New dependencies created by the task are documented
* No unresolved blocker remains
* The Jira task reflects the final delivered scope

For repository changes:

* The Pull Request is approved
* Required automated checks pass
* Review comments are resolved
* Merge conflicts are resolved
* The Pull Request is merged

For non-repository work:

* The expected artifact or result is delivered
* The reviewer has validated the evidence
* Any required approval is recorded

A task must not be moved to `Done` only because work has stopped.

---

## Blocked Work

`Blocked` is a task condition, not a normal workflow stage.

When a task cannot continue:

* Flag the task as blocked
* Keep the task in its current workflow status
* Explain the blocker in a Jira comment
* Identify who or what can unblock the task
* State the next required action
* Link the blocking task using `is blocked by`
* Add the reverse `blocks` relationship when applicable
* Raise the blocker during the team update
* Remove the flag when work can continue

Do not keep blockers hidden in private messages.

Example:

```text
Blocked by: SMC-42

Reason:
The API response schema has not been confirmed.

Needs:
Backend owner confirmation.

Next action:
Confirm the schema, update the task, and notify the owner.
```

When a blocked task affects other work, all affected tasks should be linked clearly.

---

## Task Ownership Rules

* Every task must have one clear owner
* A task may have helpers, but ownership must not be shared
* The owner is responsible for keeping the Jira status accurate
* The owner is responsible for asking questions early
* The owner is responsible for reporting blockers
* The owner is responsible for keeping the task description current
* The owner is responsible for linking the required evidence
* The owner is responsible for requesting review
* The owner is responsible for making sure the task reaches a valid final state

The owner is not allowed to silently change the agreed task scope.

When the scope changes:

* Update the Jira description
* Update the acceptance criteria
* Update the estimate when needed
* Communicate the change to the reviewer or team lead
* Re-evaluate sprint impact

---

## Reviewer Rules

Every task that requires validation should have one clear reviewer.

The reviewer is responsible for:

* Checking the output against the acceptance criteria
* Reviewing the provided evidence
* Identifying missing or incorrect work
* Providing clear and actionable feedback
* Confirming whether the task can move to `Done`

The reviewer should not approve incomplete work only to close the task.

The task owner and reviewer should normally be different people.

---

## Work in Progress Rules

* Each member should have only one task in `In Progress`
* Do not start a new task before completing, handing off, or formally pausing the current task
* Do not move multiple tasks to `In Progress` to reserve them
* Do not leave a task in `In Progress` when no active work is happening
* If a task becomes blocked, flag it and communicate the blocker immediately
* Starting more than one task at the same time requires team lead agreement
* A member may review another task while owning one active implementation task

The purpose of this rule is to reduce unfinished work and make delivery status visible.

---

## GitHub Linking Rules

When GitHub work is related to a Jira task, Jira and GitHub must be linked clearly.

Use the Jira task key in the following places.

### Branch Name

```text
docs/PROJECT-21-add-git-workflow
```

### Pull Request Title

```text
[PROJECT-21] docs: add git workflow
```

### Pull Request Description

```text
Related Jira Task: PROJECT-21
```

The Jira task should also contain the Pull Request link.

When the work is not related to a Jira task, use the normal descriptive branch format.

Example:

```text
docs/add-jira-handbook
```

Do not invent a Jira task key for work that has no Jira task.

---

## Moving Tasks Rules

* Do not start work on an unassigned task without agreement
* Do not start a task that is missing critical requirements
* Do not move a task to `Ready for Sprint` when it is not ready
* Do not move a task to `In Progress` unless active work has started
* Do not move a task to `Code Review` before the output is reviewable
* Do not move a task to `Done` without meeting the acceptance criteria
* Do not keep blockers hidden
* Do not change task scope silently
* Do not close a task without required evidence
* Do not use statuses to make the board appear more complete than the actual work
* Keep the Jira task updated when scope, ownership, estimate, dependencies, or expected output changes

When a task is no longer needed, close or remove it using the agreed project process instead of moving it to `Done` as if it were delivered.

---

## Sprint Rules

Only tasks that meet the `Ready for Sprint` requirements should be selected during sprint planning.

During an active sprint:

* Do not add unplanned work silently
* New work requires team agreement
* Removing or replacing sprint work must be visible
* Tasks that cannot be completed should be discussed before the sprint ends
* Unfinished tasks must not be automatically marked as `Done`
* Carry-over work must be reviewed and re-planned
* Blocked tasks must be raised as early as possible

Detailed sprint planning, daily updates, sprint reviews, retrospectives, and carry-over rules are defined in [Sprint Process](sprint-process.md).

---

## Jira Workflow Checklist

### Before Moving to Ready for Sprint

* [ ] The task has a clear title
* [ ] The issue type is correct
* [ ] The description is clear
* [ ] The expected output is defined
* [ ] The task has one owner
* [ ] The task has one reviewer when required
* [ ] Acceptance criteria are written and testable
* [ ] Priority is clear
* [ ] The task is estimated
* [ ] Dependencies are identified
* [ ] Known blockers are documented
* [ ] Required evidence is defined
* [ ] The task is small enough for the sprint

### Before Moving to In Progress

* [ ] The task is assigned to the active owner
* [ ] The owner understands the required work
* [ ] Required dependencies are available
* [ ] The task is part of the active sprint when applicable
* [ ] The owner does not already have another active implementation task
* [ ] A branch is created when repository work is required

### Before Moving to Code Review

* [ ] The required work is completed
* [ ] The owner has completed a self-review
* [ ] Acceptance criteria have been checked
* [ ] Required evidence is attached or linked
* [ ] The correct reviewer is requested

For repository changes:

* [ ] The branch is pushed
* [ ] The Pull Request is opened
* [ ] The Pull Request is ready for review
* [ ] The Pull Request is linked in Jira
* [ ] Required automated checks have started

### Before Moving to Done

* [ ] All acceptance criteria are met
* [ ] The reviewer has accepted the output
* [ ] Required evidence is available
* [ ] Testing or validation is completed when needed
* [ ] Documentation is updated when needed
* [ ] No unresolved blocker remains
* [ ] The Jira task reflects the final delivered scope

For repository changes:

* [ ] The Pull Request is approved
* [ ] Required checks pass
* [ ] Review comments are resolved
* [ ] Merge conflicts are resolved
* [ ] The Pull Request is merged

For non-repository work:

* [ ] The expected artifact or result is delivered
* [ ] The reviewer has validated the output

---

## Related Documents

* [Task Writing Guide](task-writing-guide.md)
* [Acceptance Criteria](acceptance-criteria.md)
* [Sprint Process](sprint-process.md)
* [Git Workflow](../git/git-workflow.md)
* [Branch and Commit Rules](../git/branch-and-commit-rules.md)
* [Pull Request Guide](../git/pull-request-guide.md)
* [Code Review Guide](../git/code-review-guide.md)
س