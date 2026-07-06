# GitHub Actions Basics

Status: Planned

This document will define how the ShiftCore team uses GitHub Actions for automated checks.

GitHub Actions will be added after the team completes the initial Git, Pull Request, Code Review, and GitHub Security workflow.

---

## Goal

The goal of this document is to define the team rules for using GitHub Actions in future project repositories.

GitHub Actions should help the team automatically check Pull Requests before merging.

---

## Planned Topics

This document should later include:

- When GitHub Actions should run
- Required checks before merge
- Basic CI workflow
- Lint checks
- Test checks
- Build checks
- Documentation checks
- Secret scanning options
- Required status checks
- Failed checks rules
- DevOps owner responsibilities
- PR author responsibilities
- Reviewer responsibilities

---

## Initial Team Rule

When GitHub Actions are enabled, Pull Requests should not be merged while required checks are failing.

---

## Future Workflow Location

GitHub Actions workflow files should be placed inside:

```text
.github/workflows/