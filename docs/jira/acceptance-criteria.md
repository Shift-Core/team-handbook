# Acceptance Criteria

This document defines how the ShiftCore team writes, reviews, and uses acceptance criteria in Jira.

Acceptance criteria describe the observable conditions that must be true for a task’s expected output to be accepted.

They provide a shared agreement between:

* The task owner
* The reviewer
* The product or project owner when applicable
* Anyone testing or validating the output

Acceptance criteria are part of the task scope and must remain visible in Jira.

---

## Main Rule

An executable task must not move to `Ready for Sprint` without clear and testable acceptance criteria.

A task must not move to `Done` unless:

* All required acceptance criteria are met
* Required validation is completed
* Required evidence is attached or linked
* The assigned reviewer accepts the output

Acceptance criteria must describe the expected result, not merely the activity performed.

---

## Purpose of Acceptance Criteria

Acceptance criteria define the conditions used to decide whether the delivered work satisfies the task.

They should answer:

* What behavior or output must exist?
* What must work successfully?
* What important failure cases must be handled?
* What constraints must be respected?
* How will the output be validated?
* What evidence proves that the criteria were met?
* What must be true before the task can be accepted?

Acceptance criteria reduce:

* Ambiguous task scope
* Hidden assumptions
* Incomplete implementation
* Review disagreements
* Unplanned scope expansion
* Tasks being moved to `Done` without evidence

---

## Acceptance Criteria and Task Scope

Acceptance criteria must match the task’s agreed scope.

The following sections should remain consistent:

* Objective
* In Scope
* Out of Scope
* Expected Output
* Acceptance Criteria
* Evidence

Example:

If frontend validation is explicitly listed as out of scope, the acceptance criteria must not silently require frontend validation.

If the acceptance criteria require additional work that is not described in the task scope, update the task before implementation continues.

Do not use acceptance criteria to introduce hidden requirements during review.

---

## Writing Rules

Acceptance criteria should be:

* Clear
* Specific
* Observable
* Testable
* Relevant to the task
* Written before implementation starts
* Understandable by the owner and reviewer
* Focused on outcomes
* Consistent with the task scope
* Independent where possible

Acceptance criteria should avoid:

* Vague words
* Unmeasurable quality claims
* Unrelated requirements
* Hidden implementation decisions
* Multiple unrelated outcomes in one criterion
* Requirements owned by another task
* Process steps that belong only to the Definition of Done

---

## Required and Conditional Criteria

Not every possible criterion applies to every task.

Acceptance criteria should be divided when useful into:

```md
## Acceptance Criteria

### Required

- [ ] Conditions that must be met for the task to be accepted.

### When Applicable

- [ ] Conditions that apply only under a clearly stated situation.
```

Conditional criteria must state the condition clearly.

Bad:

```text
- [ ] Mobile layout works when needed.
```

Better:

```text
- [ ] When the viewport width is below 768px, the form displays without horizontal scrolling.
```

Do not add generic criteria only because they appear in a template.

Each criterion must be relevant to the actual task.

---

## Acceptance Criteria Format

Use Markdown checklist format in the Jira description:

```md
## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
```

Each checklist item should normally describe one verifiable condition.

Bad:

```md
- [ ] Login works, validation is added, documentation is updated, and all tests pass.
```

Better:

```md
- [ ] Valid credentials return a successful authentication response.
- [ ] Invalid credentials return `401 Unauthorized`.
- [ ] Missing required fields return validation errors.
- [ ] Authentication API documentation is updated.
- [ ] Relevant automated tests pass.
```

Separating the conditions makes review and validation clearer.

---

## Outcome-Based Criteria

Acceptance criteria should describe what must be true after the work is completed.

Bad:

```text
- [ ] Write login code.
- [ ] Work on API validation.
- [ ] Check the documentation.
```

These describe activities rather than accepted outcomes.

Better:

```text
- [ ] The login endpoint accepts a valid email and password.
- [ ] Invalid request fields return the documented validation response.
- [ ] The authentication API documentation reflects the final request and response formats.
```

Use action-based criteria only when the action itself is the required output, such as conducting a documented test or publishing an approved document.

---

## Observable and Testable Criteria

A criterion is testable when the owner and reviewer can determine whether it passed or failed.

Bad:

```text
- [ ] The page looks good.
- [ ] The API is fast.
- [ ] The documentation is professional.
- [ ] The feature is user-friendly.
- [ ] Security is improved.
```

Better:

```text
- [ ] The page matches the approved desktop and mobile designs.
- [ ] The endpoint responds within the agreed performance threshold under the documented test conditions.
- [ ] The document includes all required sections and contains valid links to related guides.
- [ ] A user can complete the workflow without encountering an undefined state.
- [ ] Unauthorized users receive `403 Forbidden` when accessing the protected endpoint.
```

When using measurable values, define:

* The target
* The unit
* The environment
* The test conditions when relevant

Example:

```text
- [ ] Under the agreed test dataset and local test environment, the endpoint’s 95th percentile response time is below 500 ms.
```

---

## Avoiding Ambiguous Words

Avoid words such as:

* Properly
* Correctly
* Good
* Fast
* Clean
* Easy
* User-friendly
* Optimized
* Complete
* Secure
* Responsive
* Appropriate
* When needed

These words may be used only when the task defines what they mean.

Bad:

```text
- [ ] Errors are handled properly.
```

Better:

```text
- [ ] Invalid credentials return `401 Unauthorized` using the documented error response format.
```

Bad:

```text
- [ ] The page is responsive.
```

Better:

```text
- [ ] The page displays without horizontal overflow at the supported desktop, tablet, and mobile viewport widths.
```

---

## Given, When, Then Format

Behavior-focused Stories and Bugs may use `Given / When / Then` when it makes the expected behavior clearer.

Format:

```md
### Scenario: Successful login

Given a registered active user  
When the user submits valid credentials  
Then the API returns a successful authentication response  
And the response includes a valid access token
```

Example:

```md
### Scenario: Invalid credentials

Given a registered user  
When the user submits an incorrect password  
Then the API returns `401 Unauthorized`  
And no access token is returned
```

Use this format when:

* Several inputs affect the result
* User behavior must be described
* Failure states are important
* A workflow has multiple scenarios
* The task is easier to validate as behavior

Do not force every technical or documentation task into `Given / When / Then`.

Checklist criteria are acceptable when they are clearer.

---

## Positive and Negative Scenarios

Acceptance criteria should cover the important successful and unsuccessful outcomes.

For implementation tasks, consider:

* Valid input
* Invalid input
* Missing input
* Unauthorized access
* Forbidden access
* Empty data
* External dependency failure
* Duplicate action
* Unsupported state
* Boundary values
* Recovery behavior

Not every task requires every scenario.

Include only scenarios that are important to the agreed scope and risk.

Example:

```md
## Acceptance Criteria

- [ ] Valid login credentials return a successful authentication response.
- [ ] Invalid credentials return `401 Unauthorized`.
- [ ] Missing email or password fields return validation errors.
- [ ] Disabled users cannot receive an access token.
- [ ] The response does not expose password data.
```

---

## Acceptance Criteria vs Implementation Notes

Acceptance criteria define what must be achieved.

Implementation notes may suggest how the work should be approached.

Do not unnecessarily force implementation details into acceptance criteria.

Bad:

```text
- [ ] Use a `for` loop to validate the values.
- [ ] Create exactly three service classes.
- [ ] Use library X.
```

Better:

```text
- [ ] All submitted values are validated against the documented rules.
- [ ] Validation errors use the agreed response format.
```

Implementation details may be required when they are part of an approved architecture, compatibility rule, security constraint, or explicit project decision.

Example:

```text
- [ ] Password hashes use the algorithm and configuration defined in the security architecture document.
```

---

## Acceptance Criteria vs Definition of Done

Acceptance criteria and the Definition of Done serve different purposes.

### Acceptance Criteria

Acceptance criteria are specific to the task.

Examples:

```text
- [ ] Invalid credentials return `401 Unauthorized`.
- [ ] The Jira workflow guide includes all configured statuses.
- [ ] The dashboard displays an empty state when no projects exist.
```

### Definition of Done

The Definition of Done contains common completion rules that apply across tasks.

Examples:

```text
- Required review is completed.
- Required evidence is linked.
- Required checks pass.
- The Pull Request is merged when repository changes are involved.
- Documentation is updated when required.
```

Do not copy every general Definition of Done rule into every task’s acceptance criteria.

A task may include a process-related criterion when that process result is part of the task’s actual deliverable.

Example:

```text
- [ ] The deployment workflow completes successfully in the staging environment.
```

The general completion requirements are defined in [Jira Workflow](jira-workflow.md).

---

## Acceptance Criteria vs Evidence

Acceptance criteria define what must be true.

Evidence demonstrates that the criteria are true.

Example:

Acceptance criterion:

```text
- [ ] The dashboard displays correctly at the supported mobile viewport.
```

Evidence:

```text
Screenshot or demo recording showing the dashboard at 375px width.
```

Another example:

Acceptance criterion:

```text
- [ ] Invalid credentials return `401 Unauthorized`.
```

Evidence:

```text
Automated test result or API response screenshot.
```

A task should define expected evidence separately.

Suggested structure:

```md
## Acceptance Criteria

- [ ] The required behavior is implemented.
- [ ] The required failure state is handled.

## Evidence

- Pull Request
- Automated test result
- Screenshot of the failure response
```

A checked box without supporting evidence may be insufficient when the output cannot be reviewed directly.

---

## Owner Responsibilities

The task owner is responsible for:

* Confirming that the criteria are understood before starting
* Asking for clarification when a criterion is ambiguous
* Implementing the agreed scope
* Validating each criterion before requesting review
* Providing the required evidence
* Avoiding silent changes to the criteria
* Marking criteria only when they are actually met
* Explaining any known limitation or exception

The owner should perform a self-review before moving the task to `Code Review`.

The owner must not mark criteria as completed only because implementation work has stopped.

---

## Reviewer Responsibilities

The reviewer is responsible for:

* Checking each criterion against the delivered output
* Reviewing the provided evidence
* Confirming that the result matches the agreed scope
* Identifying missing scenarios
* Rejecting criteria that are not actually met
* Providing specific and actionable feedback
* Confirming when the task can move to `Done`

The reviewer should validate the result, not only the presence of checked boxes.

When a criterion cannot be verified, the task should not be accepted until:

* Evidence is provided
* The criterion is clarified
* The criterion is formally changed through the scope-change process

---

## Review Before Ready for Sprint

Before a task moves to `Ready for Sprint`, its acceptance criteria should be reviewed for readiness.

Confirm that:

* Each criterion is understandable
* Each criterion is testable
* The criteria cover the expected output
* The criteria match the defined scope
* Important failure cases are included
* Dependencies are not hidden
* Required evidence can be produced
* The task can reasonably be completed within the sprint

A task should remain in `To Do` when its acceptance criteria are incomplete or contradictory.

---

## Updating Acceptance Criteria

Acceptance criteria may change when the task scope or requirements change.

When criteria change:

1. Update the task description.
2. Update `In Scope` and `Out of Scope` when needed.
3. Update the expected output.
4. Update the acceptance criteria.
5. Update the estimate when the change affects effort.
6. Update dependencies and required evidence.
7. Notify the task owner and reviewer.
8. Evaluate the impact on the sprint and release.
9. Record the reason for the change in a Jira comment.

Do not silently change acceptance criteria after work starts.

Do not delete completed or previously agreed criteria merely to make the task appear complete.

When useful, preserve the change history in a comment:

```text
Acceptance criteria updated because the API response format changed after backend review.

Added:
- Error response must include the documented error code.

Removed:
- Legacy error message format is no longer required.

Impact:
Estimate increased by two hours.
```

When the change introduces an independently deliverable outcome, create a separate Jira task instead of expanding the current task.

---

## Exceptions and Partial Acceptance

A task should normally meet all required acceptance criteria before moving to `Done`.

An unmet required criterion must not be ignored informally.

When a criterion cannot be completed:

* Keep the task out of `Done`
* Document the reason
* Determine whether the criterion is still required
* Create a follow-up task when appropriate
* Obtain explicit agreement from the responsible reviewer or project owner
* Update the original scope and acceptance criteria
* Record the decision in Jira

Do not use vague notes such as:

```text
Done except for a small issue.
```

Use a clear decision record:

```text
Criterion not included in this task after scope review.

Reason:
The external provider does not support the required callback yet.

Follow-up:
SMC-84 will implement the callback after provider support is available.

Approved by:
Project owner and assigned reviewer.
```

A task may move to `Done` only after the acceptance criteria accurately represent the accepted final scope.

---

## Documentation Acceptance Criteria

For documentation tasks, include criteria relevant to:

* Correct file or page location
* Defined target audience
* Required sections
* Accuracy
* Consistency with the actual process
* Clear instructions
* Valid examples
* Valid internal links
* Navigation updates
* Removal of obsolete or contradictory information
* Reviewer validation

Example:

```md
## Acceptance Criteria

- [ ] `docs/jira/jira-workflow.md` is created.
- [ ] The document describes the configured Jira statuses.
- [ ] The document explains the `Ready for Sprint` requirements.
- [ ] Blocked work is documented using flags and issue links.
- [ ] Repository and non-repository tasks are both covered.
- [ ] Links to related Jira and Git guides are valid.
- [ ] The handbook navigation links to the new document.
- [ ] The assigned reviewer approves the final content.
```

Avoid criteria such as:

```text
- [ ] The document is professional.
- [ ] The explanation is not too long.
- [ ] The document looks good.
```

Replace them with observable requirements.

Example:

```text
- [ ] Each workflow status includes entry conditions and completion conditions.
```

---

## Frontend Acceptance Criteria

For frontend tasks, consider criteria related to:

* Approved design
* Supported viewport sizes
* Component behavior
* Loading state
* Error state
* Empty state
* Disabled state
* Form validation
* Keyboard interaction
* Accessibility requirements
* API integration
* Route behavior
* Browser support
* Visual evidence
* Automated or manual testing

Example:

```md
## Acceptance Criteria

- [ ] The dashboard layout matches the approved design.
- [ ] The page displays without horizontal scrolling at supported viewport widths.
- [ ] A loading indicator is displayed while project data is being requested.
- [ ] An empty state is displayed when the user has no projects.
- [ ] An error state is displayed when the API request fails.
- [ ] Unauthorized users are redirected to the login page.
- [ ] No unexpected browser console errors occur during the tested workflow.
```

Do not include all frontend criteria in every task.

Select the conditions relevant to the component or workflow being implemented.

---

## Backend Acceptance Criteria

For backend tasks, consider criteria related to:

* Request format
* Input validation
* Business rules
* Successful response
* Error responses
* Authentication
* Authorization
* Data persistence
* Transactions
* Idempotency
* Logging
* API documentation
* Automated tests
* Backward compatibility

Example:

```md
## Acceptance Criteria

- [ ] The endpoint accepts the documented request fields.
- [ ] Missing required fields return the documented validation response.
- [ ] Valid credentials return a successful authentication response.
- [ ] Invalid credentials return `401 Unauthorized`.
- [ ] Disabled accounts cannot authenticate.
- [ ] Password values are not returned in the response.
- [ ] The API documentation matches the final request and response formats.
- [ ] Relevant automated tests pass.
```

Avoid using only:

```text
- [ ] Endpoint is implemented.
```

Implementation alone does not define the expected behavior.

---

## Bug Fix Acceptance Criteria

Bug acceptance criteria should describe the corrected behavior and protection against regression.

Consider:

* The original issue can no longer be reproduced
* The correct expected behavior is restored
* Affected scenarios are validated
* A regression test is added when practical
* No related behavior is broken
* Evidence demonstrates the before-and-after result

Example:

```md
## Acceptance Criteria

- [ ] Submitting the form without an email displays the required validation message.
- [ ] The page remains usable after the validation error is displayed.
- [ ] Valid form submissions continue to succeed.
- [ ] An automated test covers the missing-email scenario.
- [ ] Evidence includes the original failure and the corrected result.
```

Do not use:

```text
- [ ] Bug is fixed.
```

---

## Security Acceptance Criteria

For security-related tasks, consider criteria related to:

* Authentication
* Authorization
* Input validation
* Secret handling
* Sensitive-data exposure
* Logging
* Rate limiting
* Session management
* Encryption
* Permission boundaries
* Dependency risks
* Security review
* Documented limitations

Example:

```md
## Acceptance Criteria

- [ ] Unauthenticated requests receive `401 Unauthorized`.
- [ ] Authenticated users without the required permission receive `403 Forbidden`.
- [ ] Secret values are loaded from the approved secret-management mechanism.
- [ ] Secret values do not appear in logs or API responses.
- [ ] Relevant authorization tests pass.
- [ ] Any accepted security limitation is documented in Jira.
```

Avoid criteria such as:

```text
- [ ] The feature is secure.
```

Security criteria must identify the required control or behavior.

---

## DevOps Acceptance Criteria

For DevOps, infrastructure, and automation tasks, consider criteria related to:

* Correct configuration location
* Valid configuration syntax
* Environment variables
* Secret handling
* Build behavior
* Deployment behavior
* Rollback or recovery
* Health checks
* Logs
* Reproducibility
* CI checks
* Documentation
* Target environment validation

Example:

```md
## Acceptance Criteria

- [ ] The workflow configuration is stored in the agreed repository location.
- [ ] Required environment variables are documented.
- [ ] No secret value is hardcoded in the repository.
- [ ] The workflow completes successfully in the test environment.
- [ ] A failed required check prevents the deployment step.
- [ ] The deployment process produces accessible logs.
- [ ] The setup and execution steps are documented.
```

---

## AI and Data Acceptance Criteria

For AI, machine learning, and data tasks, consider criteria related to:

* Input definition
* Output definition
* Data source
* Dataset version
* Data quality
* Evaluation method
* Baseline
* Target metric
* Reproducibility
* Experiment configuration
* Limitations
* Privacy
* Bias or risk
* Saved artifacts
* Documented results

Example:

```md
## Acceptance Criteria

- [ ] The input and output schemas are documented.
- [ ] The dataset source and version are recorded.
- [ ] The evaluation dataset is separated from the training dataset.
- [ ] The evaluation method and metrics are documented.
- [ ] Results are compared with the agreed baseline.
- [ ] The experiment can be reproduced using the committed configuration.
- [ ] Known limitations and failure cases are documented.
- [ ] No restricted or sensitive data is exposed in the output.
```

Avoid:

```text
- [ ] The model performs well.
```

Use a defined metric and test condition:

```text
- [ ] The model achieves an F1 score of at least 0.82 on the documented evaluation dataset.
```

---

## Research Acceptance Criteria

Research acceptance criteria should make the result decision-ready.

Consider:

* Defined research question
* Options evaluated
* Evaluation criteria
* Reliable sources
* Trade-offs
* Risks
* Recommendation
* Decision owner
* Next steps
* Time or scope limit

Example:

```md
## Acceptance Criteria

- [ ] At least three supported migration tools are evaluated.
- [ ] The comparison covers compatibility, rollback support, maintenance, and team learning cost.
- [ ] Sources and tested versions are documented.
- [ ] The result includes a recommended option with rationale.
- [ ] Important limitations and risks are documented.
- [ ] Proposed implementation work is listed as follow-up tasks.
```

Avoid:

```text
- [ ] Research is completed.
```

---

## Design Acceptance Criteria

For UX and design tasks, consider:

* Required screens or flows
* Supported states
* Desktop and mobile behavior
* Design-system consistency
* Content requirements
* Accessibility considerations
* Prototype behavior
* Reviewer approval
* Design links
* Handoff readiness

Example:

```md
## Acceptance Criteria

- [ ] The design includes the default, loading, empty, error, and populated states.
- [ ] Desktop and mobile layouts are included.
- [ ] Components use the approved design-system patterns.
- [ ] Required labels, messages, and actions are defined.
- [ ] The prototype demonstrates the primary user flow.
- [ ] The design link is attached to Jira.
- [ ] The assigned reviewer approves the handoff.
```

---

## Testing Acceptance Criteria

For testing tasks, define:

* Scope of testing
* Environment
* Test cases
* Expected results
* Pass and fail rules
* Defect reporting
* Evidence
* Retest requirements
* Final test result

Example:

```md
## Acceptance Criteria

- [ ] The agreed authentication test scenarios are executed in the staging environment.
- [ ] Actual results are recorded for each test case.
- [ ] Failed cases are linked to Jira Bug issues.
- [ ] Critical and high-severity defects are resolved or explicitly accepted.
- [ ] Required fixes are retested.
- [ ] A final test report is attached to the Jira task.
```

---

## Acceptance Criteria Review Checklist

Before moving a task to `Ready for Sprint`, confirm:

### Clarity

* [ ] Each criterion is understandable
* [ ] Vague or subjective words are defined or removed
* [ ] Each criterion describes one primary condition

### Scope

* [ ] The criteria match the task objective
* [ ] The criteria match `In Scope`
* [ ] The criteria do not include `Out of Scope` work
* [ ] No hidden requirement has been added

### Testability

* [ ] Each required criterion can be verified
* [ ] Important success scenarios are covered
* [ ] Important failure scenarios are covered when applicable
* [ ] Required conditions and thresholds are defined

### Ownership

* [ ] The owner understands the criteria
* [ ] A reviewer is identified when required
* [ ] The expected evidence is defined

### Planning

* [ ] The criteria can be completed within the task estimate
* [ ] Dependencies are identified
* [ ] No unresolved critical ambiguity remains

---

## Done Rule

A task may move to `Done` only when:

* All required acceptance criteria are met
* Conditional criteria are handled when their conditions apply
* Required testing or validation is completed
* Required evidence is attached or linked
* The assigned reviewer accepts the output
* Any approved scope change is recorded in Jira
* The final acceptance criteria match the delivered scope
* No unresolved blocker prevents acceptance

For repository changes, the Pull Request must also satisfy the repository review and merge rules.

For non-repository work, the expected artifact or result must be available and reviewed.

Checking all boxes without valid evidence or reviewer validation does not make a task complete.

---

## Related Documents

* [Jira Workflow](jira-workflow.md)
* [Task Writing Guide](task-writing-guide.md)
* [Sprint Process](sprint-process.md)
* [Git Workflow](../git/git-workflow.md)
* [Pull Request Guide](../git/pull-request-guide.md)
* [Code Review Guide](../git/code-review-guide.md)
