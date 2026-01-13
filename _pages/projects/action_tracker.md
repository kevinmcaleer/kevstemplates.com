---
layout: project
name: Action Tracker
section: Project
process: delivery
description: Tracking and managing actions arising from meetings, reviews, and project activities.
tags: [Actions, Tracker, Follow-up, Accountability, Control]
themes: [Control, Governance, Communication]
downloads:
 - name: Action Tracker Template
   description: Excel template for tracking project actions
   file: action_tracker.xlsx
last_updated: 2026-01-13
---

# Action Tracker

An Action Tracker is a tool for recording, monitoring, and following up on tasks and commitments arising from project activities.

---

## What is an Action Tracker?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> An Action Tracker (or Action Log) is a document that records all actions agreed during a project, tracks their status, and ensures they are completed on time.
</div>

---

## Purpose

An Action Tracker:
- Captures commitments from meetings and reviews
- Assigns clear ownership and deadlines
- Enables progress monitoring
- Prevents actions being forgotten
- Supports accountability
- Provides visibility to stakeholders

---

## Actions vs Issues vs Risks

| Type | Description | Example |
|------|-------------|---------|
| **Action** | Task to be completed | "Update project plan by Friday" |
| **Issue** | Problem requiring resolution | "Server environment unavailable" |
| **Risk** | Potential future problem | "Key resource may leave" |
{:class="table table-single table-narrow"}

Actions are specific tasks. Issues and risks may generate actions as part of their resolution.

---

## Action Tracker Fields

### Essential Fields

| Field | Description |
|-------|-------------|
| **Action ID** | Unique identifier (e.g., ACT-001) |
| **Description** | Clear statement of what needs to be done |
| **Owner** | Person responsible for completion |
| **Due date** | When the action must be complete |
| **Status** | Current state of the action |
| **Date raised** | When the action was created |
{:class="table table-single table-narrow"}

### Supporting Fields

| Field | Description |
|-------|-------------|
| **Source** | Where the action came from (meeting, review) |
| **Priority** | High / Medium / Low |
| **Category** | Type of action |
| **Notes** | Progress updates, comments |
| **Date closed** | When completed |
| **Related items** | Links to risks, issues, decisions |
{:class="table table-single table-narrow"}

---

## Action Status

| Status | Meaning | Colour |
|--------|---------|--------|
| **Open** | Not yet started | Blue |
| **In Progress** | Work underway | Amber |
| **Complete** | Finished and verified | Green |
| **On Hold** | Paused, awaiting input | Grey |
| **Cancelled** | No longer required | Grey |
| **Overdue** | Past due date, not complete | Red |
{:class="table table-single table-narrow"}

---

## Action Lifecycle

<div class="mermaid">
flowchart LR
    A[Identify<br/>Action] --> B[Assign<br/>Owner]
    B --> C[Set<br/>Due Date]
    C --> D[Track<br/>Progress]
    D --> E[Verify<br/>Complete]
    E --> F[Close<br/>Action]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

---

## Writing Good Actions

### SMART Actions

| Criterion | Description | Example |
|-----------|-------------|---------|
| **Specific** | Clear what needs to be done | "Draft test plan for module A" |
| **Measurable** | Know when it's done | "Plan reviewed and approved" |
| **Achievable** | Owner can complete it | Within owner's capability |
| **Relevant** | Supports project goals | Needed for testing phase |
| **Time-bound** | Has a deadline | "By 20 Jan 2026" |
{:class="table table-single table-narrow"}

### Good vs Poor Actions

| Poor | Better |
|------|--------|
| "Look into the issue" | "Investigate root cause of login failures and report findings" |
| "Update document" | "Update requirements document section 3.2 with new API specifications" |
| "Chase supplier" | "Contact supplier X to confirm delivery date for hardware" |
| "Fix the bug" | "Resolve defect #1234 - payment processing error" |
{:class="table table-single table-narrow"}

---

## Priority Levels

| Priority | Criteria | Response |
|----------|----------|----------|
| **Critical** | Blocking progress, immediate impact | Same day |
| **High** | Important, affects timeline | Within 2-3 days |
| **Medium** | Needed but not urgent | Within 1-2 weeks |
| **Low** | Nice to have, minor impact | When time permits |
{:class="table table-single table-narrow"}

---

## Managing the Tracker

### Regular Activities

| Activity | Frequency |
|----------|-----------|
| Add new actions | As they arise |
| Review open actions | Daily/Weekly |
| Chase overdue actions | Immediately |
| Update status | As progress made |
| Full tracker review | Weekly meeting |
| Archive completed | Monthly |
{:class="table table-single table-narrow"}

### Review Meeting Agenda

1. Review overdue actions
2. Update status of open actions
3. Identify blocked actions
4. Review upcoming due dates
5. Add new actions
6. Close completed actions

---

## Handling Overdue Actions

<div class="mermaid">
flowchart LR
    A[Action<br/>Overdue] --> B[Contact<br/>Owner]
    B --> C{Can Complete<br/>Soon?}
    C -->|Yes| D[Set New<br/>Date]
    C -->|No| E[Escalate or<br/>Reassign]
    D --> F[Monitor]
    E --> F

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

When actions become overdue:
1. Contact the owner immediately
2. Understand the blocker
3. Agree a realistic new date or reassign
4. Escalate if needed
5. Document the reason for delay

---

## Example Action Entry

| Field | Value |
|-------|-------|
| **Action ID** | ACT-045 |
| **Description** | Finalise user acceptance test scripts for payment module |
| **Owner** | Sarah Jones |
| **Due date** | 18 Jan 2026 |
| **Source** | Team meeting 10 Jan |
| **Priority** | High |
| **Status** | In Progress |
| **Notes** | Draft complete, awaiting BA review |
{:class="table table-single table-narrow"}

---

## Integration with RAID Log

Actions often link to other RAID items:

| RAID Item | Action Example |
|-----------|----------------|
| **Risk** | "Develop contingency plan for vendor delay" |
| **Assumption** | "Validate assumption about data volumes" |
| **Issue** | "Investigate and resolve server connectivity issue" |
| **Dependency** | "Confirm delivery date with external team" |
{:class="table table-single table-narrow"}

---

## Reporting Actions

Include in status reports:
- Total open actions
- Actions completed this period
- Overdue actions (highlight)
- Actions due next period
- Blocked actions requiring help

---

## Common Mistakes

| Mistake | Impact | Solution |
|---------|--------|----------|
| Vague descriptions | Unclear what to do | Write specific, actionable statements |
| No owner | No accountability | Always assign a single owner |
| Unrealistic dates | Constant overdue | Agree dates with owner |
| No follow-up | Actions forgotten | Regular review meetings |
| Too many actions | Overwhelm, nothing done | Prioritise ruthlessly |
| Actions too large | Never completed | Break into smaller tasks |
{:class="table table-single table-narrow"}

---

## Action Tracker Checklist

- [ ] Action clearly described?
- [ ] Single owner assigned?
- [ ] Realistic due date set?
- [ ] Priority assigned?
- [ ] Source documented?
- [ ] Status being tracked?
- [ ] Overdue actions escalated?
- [ ] Completed actions verified?
- [ ] Tracker reviewed regularly?

---

## Related Resources

- [Meeting Minutes](/projects/meeting_minutes) - Recording meeting actions
- [Decision Log](/projects/decision_log) - Tracking decisions
- [Risk Register](/projects/risk_register) - RAID log
- [Project Reporting](/projects/project_reporting) - Status reporting
- [Project Governance](/projects/project_governance) - Governance framework

