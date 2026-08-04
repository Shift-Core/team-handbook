# Sprint Process

This document defines how the ShiftCore team plans, executes, reviews, and improves sprint-based work in Jira.

The sprint process is designed to:

* Create a clear and achievable sprint goal
* Select work based on team capacity
* Make ownership and progress visible
* Detect blockers early
* Deliver reviewable outcomes
* Protect the sprint from uncontrolled scope changes
* Improve the team process after every sprint

Jira is the source of truth for the sprint backlog, task ownership, status, estimates, blockers, and completion evidence.

---

## Main Rule

A sprint must not start with vague, unestimated, unowned, or unreviewable work.

Every item selected for a sprint must have:

* A clear purpose
* A defined expected output
* Testable acceptance criteria
* One owner
* One reviewer when review is required
* An estimate
* Known dependencies
* Required completion evidence
* A direct relationship to the sprint goal

Only tasks that meet the `Ready for Sprint` requirements should be selected for a sprint.

---

## Sprint Principles

The team follows these principles:

* The sprint has one clear goal
* The sprint has a fixed start and end date
* Work is selected based on realistic team capacity
* Each executable task has one clear owner
* Each member normally has only one implementation task in `In Progress`
* Review and testing are part of the estimated work
* Blockers are reported immediately
* Sprint scope does not change silently
* Incomplete work is not marked as `Done`
* A sprint is not extended only to finish unfinished tasks
* The team reviews both delivery results and process quality

---

## Sprint Length

The sprint length is defined by the project before the sprint begins.

A project should normally use a consistent sprint cadence, such as:

```text
1 week
```

or:

```text
2 weeks
```

A shorter release sprint or training sprint may be planned when there is a clear reason, but its dates must be agreed before it starts.

Once a sprint begins:

* Its start date must not change
* Its end date must not be extended to finish incomplete tasks
* Its duration must not be changed informally
* Jira must contain the correct sprint dates

The current Jira sprint configuration is the source of truth for the active sprint dates.

---

## Sprint Lifecycle

The team follows this lifecycle:

```text
Backlog Refinement
        ↓
Sprint Planning
        ↓
Sprint Execution and Daily Coordination
        ↓
Sprint Review
        ↓
Sprint Retrospective
        ↓
Sprint Closure and Re-planning
```

Backlog refinement is an ongoing activity and may happen throughout the sprint.

The other sprint activities happen at defined points in the sprint lifecycle.

---

# 1. Backlog Refinement

Backlog refinement prepares possible future work before sprint planning.

The purpose of refinement is not to start implementation.

It is used to:

* Clarify task requirements
* Split large work
* Add acceptance criteria
* Identify dependencies
* Define required evidence
* Assign priority
* Estimate work
* Confirm the correct issue type
* Identify likely owners and reviewers
* Remove obsolete or duplicate work
* Prepare tasks for `Ready for Sprint`

---

## Refinement Rules

During refinement:

* Do not move unclear work directly into a sprint
* Do not estimate work that the team does not understand
* Do not hide critical dependencies
* Do not keep duplicate tasks for the same output
* Do not use an Epic as an executable sprint task
* Split work that cannot be completed within one sprint
* Keep future ideas in the Backlog until they are ready
* Link dependent tasks using Jira issue links
* Update task descriptions when decisions change

A task may move to `Ready for Sprint` only after passing the Definition of Ready.

Detailed readiness requirements are defined in:

* [Task Writing Guide](task-writing-guide.md)
* [Acceptance Criteria](acceptance-criteria.md)
* [Jira Workflow](jira-workflow.md)

---

# 2. Sprint Planning

Sprint planning happens before the sprint starts.

The team uses sprint planning to decide:

* Why the sprint is valuable
* What outcome the sprint should achieve
* Which tasks support that outcome
* How much work fits within the available capacity
* Who owns each selected item
* Who reviews each item
* What dependencies or risks may affect delivery

Sprint planning produces:

* One sprint goal
* A selected sprint backlog
* Confirmed owners
* Confirmed reviewers
* Confirmed estimates
* Known dependencies
* Initial delivery expectations

---

## Sprint Planning Inputs

Before planning begins, the team should know:

* Sprint start and end dates
* Team member availability
* Public holidays or planned absences
* Previous unfinished work
* Current release priorities
* Important dependencies
* Known operational or support work
* Technical or delivery risks
* Review capacity
* Testing capacity

Do not plan using theoretical capacity when team members have limited availability.

---

## Workflow Selection Before Delivery

Before the first sprint, the team must decide:

* Whether the project requires a separate `Testing` status
* Who performs testing
* Which types of work require testing
* What evidence is required
* How failed testing returns to implementation
* Whether Bugs are fixed inside the original task or tracked separately
* Whether user acceptance testing is required
* Who has authority to accept the final output

The selected workflow must be configured in Jira and documented before the sprint starts.

---

## Capacity Planning

Sprint scope must be based on realistic capacity.

Capacity should account for:

* Available working hours
* Meetings
* Review time
* Testing time
* Documentation
* Integration work
* Expected support or operational work
* Planned absences
* Technical uncertainty
* Work carried from previous sprints

Do not plan every available hour as implementation time.

The team should preserve reasonable capacity for:

* Review feedback
* Unexpected defects
* Integration problems
* Coordination
* Small operational needs

A task estimate must include all work required to reach `Done`, not only the first implementation attempt.

---

## Sprint Goal

Every sprint must have one clear sprint goal.

The sprint goal describes the primary outcome the team intends to achieve.

It should be:

* Clear
* Outcome-focused
* Achievable within the sprint
* Relevant to the current project or release
* Broad enough to allow minor implementation flexibility
* Specific enough to guide prioritization

Good examples:

```text
Establish the team’s Git, GitHub, and Jira handbook foundation.
```

```text
Deliver the first complete authentication workflow for the MVP.
```

```text
Prepare the MVP for integration testing and release demonstration.
```

Bad examples:

```text
Work on the project.
```

```text
Complete some tasks.
```

```text
Make progress.
```

```text
Finish everything.
```

When deciding whether to add, remove, or replace work, the team should ask:

```text
Does this change support or threaten the sprint goal?
```

---

## Selecting Sprint Work

A task may be selected for a sprint only when:

* It is in `Ready for Sprint`
* It supports the sprint goal
* It has one owner
* It has one reviewer when review is required
* It has clear acceptance criteria
* It has a recorded estimate
* It has defined evidence
* Its dependencies are understood
* No unresolved critical blocker prevents starting it
* It can reasonably be completed within the sprint
* The team has capacity to implement, review, and validate it

Do not select work only because the sprint appears empty.

Do not overload the sprint to make the plan look ambitious.

---

## Sprint Backlog Rules

The sprint backlog contains the executable work selected for the sprint.

The sprint backlog should not contain:

* Vague ideas
* Unrefined Epics used as implementation items
* Tasks with no owner
* Tasks with no acceptance criteria
* Tasks with no estimate
* Tasks that cannot fit within the sprint
* Tasks blocked by unavailable critical dependencies
* Duplicate tasks
* Optional future work presented as committed work

An Epic may be associated with sprint tasks, but the executable Stories, Tasks, Bugs, or Sub-tasks must be selected individually.

---

## Owner and Reviewer Assignment

Before the sprint starts:

* Every selected executable task must have one owner
* Every task requiring validation should have one reviewer
* The owner and reviewer should normally be different people
* The reviewer must have enough availability to review during the sprint
* Ownership must reflect actual responsibility, not only balanced task counts

A task may have helpers, but it must have one clear owner.

Do not assign every review to one unavailable team member.

Review capacity is part of sprint capacity.

---

## Starting the Sprint

Before starting the sprint, confirm:

* The sprint goal is written
* The sprint dates are correct
* Selected tasks are in `Ready for Sprint`
* Owners are assigned
* Reviewers are identified
* Estimates are recorded
* Acceptance criteria are testable
* Evidence requirements are defined
* Dependencies are linked
* Known risks are discussed
* Team capacity has been considered

Do not start the sprint while critical planning information is missing.

Once these conditions are met, start the sprint in Jira.

---

# 3. Sprint Execution

Sprint execution begins when the sprint starts and ends when the sprint timebox ends.

During execution:

* Owners work on selected tasks
* Jira statuses remain accurate
* Reviewers validate completed outputs
* Blockers are raised early
* Scope changes are controlled
* Work is integrated regularly
* Evidence is attached as it becomes available
* The team protects the sprint goal

---

## Starting a Task

A task should move from:

```text
Ready for Sprint → In Progress
```

only when the owner begins active work.

Before starting:

* Confirm that requirements are understood
* Confirm that dependencies are available
* Confirm that no critical blocker exists
* Create a branch when repository changes are required
* Confirm that the owner does not already have another active implementation task

Do not move tasks to `In Progress` only to reserve them.

---

## Work in Progress Limit

Each member should normally have only one implementation task in `In Progress`.

A member must not start another implementation task before the current task is:

* Completed
* Moved to `Code Review`
* Formally handed over
* Formally paused with team agreement
* Blocked and the team agrees that another task should be started

Reviewing another member’s work does not normally count as a second implementation task.

The purpose of the limit is to:

* Reduce unfinished work
* Expose blockers
* Improve focus
* Complete tasks before starting more
* Increase delivery predictability

Do not use multiple `In Progress` items to show artificial activity.

---

## Jira Status Updates

The task owner is responsible for keeping the status accurate.

The normal task flow depends on the workflow configured for the project.

Core workflow:

```text
Ready for Sprint → In Progress → Code Review → Done
```

Extended workflow with a separate testing stage:

```text
Ready for Sprint → In Progress → Code Review → Testing → Done
```

The team must follow the workflow configured in the active Jira project.

Tasks must not skip required review or testing stages.

Status meaning and movement requirements are defined in [Jira Workflow](jira-workflow.md).

Tasks must not remain:

* In `Ready for Sprint` after active work has started
* In `In Progress` after active work has stopped without explanation
* In `Code Review` without a reviewer or reviewable output
* In `Testing` without an assigned validator or testable output
* In `Done` without meeting the completion requirements

Jira must reflect the real state of the work.

---

## Daily Coordination

The team should provide a short update on every active working day.

The update may happen in a meeting or asynchronously.

Recommended format:

```text
Yesterday:
Today:
Blockers:
```

Alternative format:

```text
Task:
Status:
Completed:
Next:
Blocker:
```

A useful update should identify:

* The current Jira task
* What changed since the previous update
* What will happen next
* Any blocker or risk
* Any review request
* Any expected scope or deadline impact

Bad update:

```text
Still working.
```

Better update:

```text
Task: SMC-42
Status: In Progress
Completed: Added request validation and success response.
Next: Add authorization tests.
Blocker: Waiting for confirmation of the 403 error format.
```

Daily updates do not replace updating Jira.

---

## Review During the Sprint

Review must happen continuously during the sprint.

Do not wait until the final day to open all Pull Requests or request all reviews.

For repository work:

* Push work regularly
* Use a Draft Pull Request when early visibility is useful
* Keep Draft work in `In Progress`
* Move the task to `Code Review` only when the output is ready
* Request the correct reviewer
* Link the Pull Request in Jira
* Respond to feedback promptly
* Resolve review comments before merge
* Complete required checks before `Done`

For non-repository work:

* Attach or link the expected output
* Attach the required evidence
* Request the assigned reviewer
* Record validation or approval in Jira

Review effort is part of the sprint work.

---

## Testing and Validation

Testing and validation happen before a task moves to `Done`.

Testing may include:

* Automated tests
* Manual testing
* Design review
* Documentation review
* Configuration validation
* Security review
* Data validation
* Demo validation
* Stakeholder acceptance

Testing is not assumed to be complete only because implementation is complete.

When the project uses a separate `Testing` status:

* Move the task to `Testing` only after the output is ready for validation
* Assign or identify the responsible tester
* Record the tested environment and result
* Attach test evidence
* Return failed work to `In Progress`
* Repeat Code Review when the correction changes reviewed implementation
* Move the task to `Done` only after required testing passes

When a defect is found:

* Update the existing task when the fix remains within its agreed scope
* Create a Bug when the defect requires separate tracking
* Link the Bug to the affected task
* Re-evaluate the sprint impact
* Retest after the correction

---

## Blocker Rules

`Blocked` is a task condition, not a normal workflow status.

When work cannot continue:

* Keep the task in its current workflow status
* Flag the task as blocked in Jira
* Add a comment explaining the blocker
* Identify who or what can unblock it
* Describe the next required action
* Link blocking tasks using `is blocked by`
* Add the reverse `blocks` relationship when applicable
* Raise the blocker in the daily update
* Notify affected owners
* Remove the flag when the blocker is resolved

Example:

```text
Blocked by: SMC-42

Reason:
The authentication response schema has not been approved.

Needs:
Backend reviewer confirmation.

Impact:
Frontend integration cannot continue.

Next action:
Confirm the response schema and notify the frontend owner.
```

Do not keep blockers only in private messages.

Do not wait until the sprint review to report a blocker.

---

## Scope Change Rules

The sprint backlog may be clarified during the sprint, but scope must not change silently.

When a task’s scope changes:

* Update the Jira description
* Update `In Scope` and `Out of Scope`
* Update acceptance criteria
* Update the expected output
* Update the estimate when needed
* Update dependencies
* Notify the owner and reviewer
* Evaluate impact on the sprint goal
* Create a separate task when the new work is independently deliverable

Do not hide additional work inside an existing task to avoid changing the sprint backlog.

---

## Adding Work During an Active Sprint

New work should not enter an active sprint without team agreement.

Before adding work, confirm:

* Why it cannot wait
* How it supports the sprint or release goal
* Who will own it
* Who will review it
* What existing work will be affected
* Whether equivalent capacity should be removed
* Whether the sprint goal remains achievable

Unless the work is an urgent incident or critical defect, adding new work should normally require removing or reducing an equivalent amount of planned work.

The sprint must not become an uncontrolled list of incoming requests.

---

## Urgent and Unplanned Work

Urgent work may include:

* Production incidents
* Security incidents
* Critical release blockers
* Data-loss risks
* Essential environment failures
* Critical defects preventing team progress

When urgent work enters the sprint:

* Create or update a Jira task
* Set the correct priority
* Assign one owner
* Define the immediate expected output
* Record why it entered the sprint
* Identify displaced planned work
* Communicate the impact
* Review the event during the retrospective

Urgency does not remove the need for visibility and ownership.

---

## Feature Freeze Rules

When a release or project phase has an announced feature freeze:

Before the feature freeze:

* A new feature may enter only through explicit team agreement
* Equivalent capacity should be removed from existing planned work
* The release impact must be evaluated
* Jira must reflect the scope change

After the feature freeze:

* No new feature should enter the release scope
* Only agreed bug fixes, stabilization, documentation, testing, and release-critical work may continue
* Exceptions require explicit approval from the responsible project or release owner
* The reason for any exception must be recorded

Feature freeze rules do not prevent the team from fixing critical defects.

---

## Task Handover

When a task changes owner during the sprint:

* Update the Jira assignee
* Add a handover comment
* Describe completed work
* Describe remaining work
* Link branches, Pull Requests, documents, and evidence
* Record unresolved questions or blockers
* Re-evaluate the estimate and sprint impact

Do not change the assignee without explaining the handover.

---

# 4. Sprint Review

The sprint review happens near the end of the sprint timebox.

Its purpose is to inspect the delivered outcome and evaluate progress toward the project or release goal.

The sprint review is not only a status meeting.

The team should inspect actual completed outputs.

---

## Sprint Review Inputs

The sprint review should use:

* Sprint goal
* Jira sprint board
* Completed tasks
* Delivered artifacts
* Pull Requests
* Test results
* Screenshots
* Demo recordings
* Designs
* Documents
* Deployment or configuration evidence
* Incomplete and blocked work
* Relevant progress metrics

---

## Sprint Review Questions

During the review, the team should determine:

* Was the sprint goal achieved?
* What was completed and accepted?
* What value or capability was delivered?
* What was not completed?
* What remained blocked?
* What changed during the sprint?
* What defects or risks were discovered?
* What feedback affects future work?
* What should return to the Backlog?
* What may be considered during the next planning session?

Do not report a task as completed unless it meets the Definition of Done.

---

## Demonstrating Work

When applicable, the task owner should demonstrate the completed output.

Examples include:

* Running the implemented workflow
* Showing the final UI
* Presenting test results
* Opening the delivered documentation
* Demonstrating a deployed environment
* Showing the design prototype
* Presenting a research recommendation
* Reviewing a configuration change

Slides or verbal descriptions should not replace the actual output when the output can be demonstrated directly.

---

## Sprint Review Output

At the end of the sprint review, the team should have:

* A clear result for the sprint goal
* A verified list of completed tasks
* A visible list of incomplete tasks
* A visible list of blocked tasks
* Recorded stakeholder or reviewer feedback
* Updated future backlog items
* Identified release risks
* Clear follow-up work when needed

Sprint review feedback should be added to Jira when it affects scope or future tasks.

---

# 5. Sprint Retrospective

The retrospective focuses on improving how the team works.

It should inspect:

* Collaboration
* Planning quality
* Delivery flow
* Review speed
* Testing
* Blocker handling
* Tool usage
* Communication
* Estimation
* Scope control
* Process adherence

The retrospective is not used to blame individuals.

---

## Retrospective Questions

The team may discuss:

* What went well?
* What did not go well?
* What slowed delivery?
* What caused incomplete work?
* Were tasks ready before the sprint?
* Were estimates realistic?
* Were blockers raised early?
* Were reviews requested early enough?
* Did the team respect the work-in-progress limit?
* Did scope change during the sprint?
* What should the team continue doing?
* What should the team stop doing?
* What should the team improve next sprint?

---

## Retrospective Rules

* Focus on process and observable behavior
* Be honest and respectful
* Use specific examples
* Avoid personal blame
* Identify root causes when possible
* Select a small number of practical improvements
* Assign one owner to each improvement action
* Set an expected completion point
* Track meaningful improvement actions visibly
* Review previous retrospective actions

Do not create a long list of improvements that the team cannot implement.

One completed improvement is more valuable than ten forgotten suggestions.

---

## Retrospective Actions

A retrospective action should be:

* Specific
* Small
* Owned
* Measurable
* Relevant to an observed problem
* Reviewable in the next retrospective

Bad:

```text
Improve communication.
```

Better:

```text
The task owner must request review at least one working day before the sprint ends when the output is ready.
```

When an improvement requires real work, create a Jira task for it.

Small team agreements may be recorded in the retrospective notes.

---

# 6. Sprint Closure

A sprint ends when its configured timebox ends.

A sprint does not continue only because tasks remain incomplete.

Before closing the sprint:

* Review all sprint tasks
* Confirm which tasks meet the Definition of Done
* Verify required evidence
* Confirm statuses are accurate
* Review incomplete work
* Review blocked work
* Record scope changes
* Complete the sprint review
* Complete the retrospective
* Decide how unfinished work will be handled

Only accepted tasks should remain in `Done`.

---

## Sprint Completion Rules

A sprint may close even when not all tasks are complete.

Closing the sprint means:

* The timebox has ended
* Completed work is verified
* Incomplete work is visible
* Blockers are documented
* Sprint results are reviewed
* Process improvements are recorded
* Remaining work is returned for re-planning

Do not keep a sprint open indefinitely to improve completion numbers.

Do not move incomplete tasks to `Done` before closing the sprint.

---

## Carrying Incomplete Work

Incomplete work must not move automatically into the next sprint without review.

When a task is incomplete:

1. Confirm its actual current status.
2. Record what was completed.
3. Record what remains.
4. Explain why it was not completed.
5. Review whether the task is still needed.
6. Review whether its scope is still correct.
7. Review its estimate.
8. Split it when it is too large.
9. Return it to the Backlog or appropriate planning state.
10. Re-select it during future sprint planning only if it remains a priority.

Do not assume that unfinished work has automatic priority over other backlog items.

---

## Splitting Incomplete Tasks

Split an incomplete task when:

* Part of the work is independently deliverable
* The remaining work has separate acceptance criteria
* The task was too large
* Different owners are needed
* The task contains unrelated outputs
* Part of the scope is no longer needed
* A dependency prevented only one portion of the work

When splitting:

* Keep the completed and accepted result visible
* Create a new task for the remaining scope
* Link the tasks
* Move acceptance criteria to the correct task
* Avoid duplicating completed work
* Record the reason for the split

Do not mark the original task `Done` unless its updated final scope has been accepted.

---

## Repeated Carry-over

A task carried across multiple sprints is a warning signal.

The team should investigate:

* Unclear requirements
* Incorrect task size
* Hidden dependencies
* Unrealistic estimates
* Too much work in progress
* Delayed reviews
* Owner availability
* Technical uncertainty
* Uncontrolled scope changes
* Low or outdated priority

Repeated carry-over should lead to re-planning, not automatic movement again.

---

## Sprint Cancellation

A sprint may be cancelled only when its goal is no longer valid or continuing the sprint no longer makes sense.

Examples:

* The release direction changes
* A critical dependency is permanently unavailable
* The project is paused
* A major incident changes all priorities
* The sprint goal becomes obsolete

Sprint cancellation should be approved by the responsible project or product owner.

When a sprint is cancelled:

* Review completed work
* Accept only work that meets the Definition of Done
* Return incomplete work to the Backlog
* Record the reason
* Communicate the impact
* Re-plan remaining work

Cancellation must not be used only because the sprint is behind schedule.

---

# Team Roles During the Sprint

## Task Owner

The task owner is responsible for:

* Understanding the task
* Starting work only when ready
* Keeping Jira updated
* Respecting the agreed scope
* Reporting blockers early
* Providing required evidence
* Requesting review
* Responding to feedback
* Validating acceptance criteria
* Completing or handing over the task properly

The owner is responsible for the task’s delivery flow, but may receive help from other team members.

---

## Reviewer

The reviewer is responsible for:

* Reviewing the delivered output
* Checking acceptance criteria
* Reviewing required evidence
* Providing specific feedback
* Reviewing within a reasonable time
* Rejecting incomplete work
* Confirming when the task may move to `Done`

For repository changes, the reviewer must follow the Code Review Guide.

---

## Team Member

Every active team member is responsible for:

* Respecting the work-in-progress limit
* Providing accurate updates
* Reporting risks
* Helping unblock teammates when possible
* Reviewing assigned work
* Keeping commitments realistic
* Protecting the sprint goal

---

## Team Lead or Coordinator

The Team Lead or Coordinator is responsible for:

* Facilitating sprint planning
* Tracking progress and risks
* Checking that blockers are visible
* Protecting the sprint from uncontrolled scope changes
* Helping resolve ownership conflicts
* Ensuring tasks remain updated
* Facilitating review and retrospective activities
* Following up on process improvements

The Team Lead does not silently change task scope or mark incomplete work as complete.

---

## Project or Product Owner

When this role exists, the Project or Product Owner is responsible for:

* Clarifying priorities
* Defining project or product outcomes
* Confirming sprint and release goals
* Clarifying scope decisions
* Evaluating stakeholder feedback
* Approving major sprint scope changes
* Accepting or rejecting release-level trade-offs
* Cancelling a sprint when its goal becomes obsolete

This role does not replace the assigned task reviewer.

---

# Sprint Metrics

Metrics may be used to understand and improve the process.

Useful metrics may include:

* Sprint goal success
* Completed versus planned work
* Carry-over rate
* Blocked time
* Review waiting time
* Cycle time
* Defect count
* Reopened tasks
* Retrospective action completion

Metrics must not be used to:

* Rank individuals
* Reward artificial task splitting
* Encourage premature movement to `Done`
* Hide incomplete work
* Compare teams without context
* Treat estimates as performance scores

Metrics should support learning and planning.

---

# Sprint Checklist

## Before Sprint Planning

* [ ] Candidate tasks have been refined
* [ ] Priorities are current
* [ ] Team availability is known
* [ ] Previous unfinished work has been reviewed
* [ ] Important dependencies are visible
* [ ] Release constraints are known

## Before Starting the Sprint

* [ ] The sprint goal is clear
* [ ] Sprint dates are correct
* [ ] Selected tasks support the sprint goal
* [ ] Selected tasks are in `Ready for Sprint`
* [ ] Every task has one owner
* [ ] Every task has a reviewer when required
* [ ] Acceptance criteria are testable
* [ ] Estimates are recorded
* [ ] Required evidence is defined
* [ ] Dependencies are linked
* [ ] Critical blockers are resolved
* [ ] Planned work fits the team’s capacity
* [ ] Review and testing capacity are included

## During the Sprint

* [ ] Jira statuses reflect actual work
* [ ] Each member normally has one implementation task in `In Progress`
* [ ] Daily updates identify progress and blockers
* [ ] Blocked work is flagged and documented
* [ ] Pull Requests and evidence are linked in Jira
* [ ] Reviews are requested before the final day when possible
* [ ] Scope changes are recorded
* [ ] New sprint work is explicitly approved
* [ ] The sprint goal remains visible

## Before Moving a Task to Done

* [ ] Acceptance criteria are met
* [ ] Required evidence is available
* [ ] Required validation is complete
* [ ] Reviewer approval is recorded
* [ ] Pull Request requirements are met when applicable
* [ ] Documentation is updated when applicable
* [ ] No unresolved blocker remains

## At Sprint Review

* [ ] The sprint goal result is evaluated
* [ ] Completed outputs are demonstrated
* [ ] Done tasks are verified
* [ ] Incomplete tasks are visible
* [ ] Blocked tasks are reviewed
* [ ] Feedback is recorded
* [ ] Release risks are updated

## At Retrospective

* [ ] The team discusses what went well
* [ ] The team discusses what caused problems
* [ ] Previous improvement actions are reviewed
* [ ] A small number of improvements are selected
* [ ] Each improvement has one owner
* [ ] Improvements are tracked when needed

## Before Closing the Sprint

* [ ] Jira statuses are accurate
* [ ] Only accepted tasks are in `Done`
* [ ] Incomplete tasks have explanatory updates
* [ ] Blocked work is documented
* [ ] Unfinished tasks are returned for re-planning
* [ ] The sprint review is complete
* [ ] The retrospective is complete
* [ ] The next planning inputs are clear

---

## Related Documents

* [Jira Workflow](jira-workflow.md)
* [Task Writing Guide](task-writing-guide.md)
* [Acceptance Criteria](acceptance-criteria.md)
* [Git Workflow](../git/git-workflow.md)
* [Branch and Commit Rules](../git/branch-and-commit-rules.md)
* [Pull Request Guide](../git/pull-request-guide.md)
* [Code Review Guide](../git/code-review-guide.md)
