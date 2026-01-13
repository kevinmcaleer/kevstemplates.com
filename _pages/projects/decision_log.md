---
layout: project
name: Decision Log
section: Project
process: delivery
description: Recording and tracking project decisions to maintain an audit trail and support governance.
tags: [Decisions, Governance, Log, Audit, Control]
themes: [Governance, Control, Communication]
downloads:
 - name: Decision Log Template
   description: Excel template for tracking project decisions
   file: decision_log.xlsx
last_updated: 2026-01-13
---

# Decision Log

A Decision Log is a central record of all significant decisions made during a project, providing an audit trail and reference for stakeholders.

---

## What is a Decision Log?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> A Decision Log (or Decision Register) is a document that records all significant project decisions, including what was decided, why, who made the decision, and when.
</div>

---

## Purpose

Maintaining a Decision Log:
- Creates an audit trail for governance
- Provides context for future reference
- Supports onboarding of new team members
- Prevents revisiting already-made decisions
- Documents rationale for lessons learned
- Enables accountability

---

## When to Log Decisions

Log decisions that:
- Affect project scope, time, cost, or quality
- Change the project approach or direction
- Have implications for stakeholders
- Commit resources or budget
- Resolve conflicts or disputes
- Set precedents for future decisions

<div class="alert alert-warning">
<i class="fas fa-exclamation-triangle mr-2"></i>
<strong>Tip:</strong> Not every decision needs logging. Focus on decisions that are significant, contentious, or likely to be questioned later.
</div>

---

## Decision Log Fields

### Core Fields

| Field | Description |
|-------|-------------|
| **Decision ID** | Unique identifier (e.g., DEC-001) |
| **Date** | When the decision was made |
| **Decision** | Clear statement of what was decided |
| **Rationale** | Why this decision was made |
| **Decision maker** | Who made or approved the decision |
| **Status** | Pending / Approved / Superseded |
{:class="table table-single table-narrow"}

### Supporting Fields

| Field | Description |
|-------|-------------|
| **Category** | Type (scope, technical, resource, etc.) |
| **Options considered** | Alternatives evaluated |
| **Impact** | What this decision affects |
| **Related items** | Links to risks, issues, changes |
| **Review date** | When to revisit if applicable |
| **Stakeholders consulted** | Who was involved |
{:class="table table-single table-narrow"}

---

## Decision Categories

| Category | Examples |
|----------|----------|
| **Scope** | Features in/out, boundary changes |
| **Technical** | Architecture, technology choices |
| **Resource** | Team changes, vendor selection |
| **Schedule** | Milestone changes, phasing |
| **Budget** | Funding allocation, cost decisions |
| **Process** | Methodology, approach changes |
| **Governance** | Approval levels, escalation |
{:class="table table-single table-narrow"}

---

## Decision-Making Process

<div class="mermaid">
flowchart LR
    A[Identify<br/>Decision] --> B[Gather<br/>Information]
    B --> C[Evaluate<br/>Options]
    C --> D[Make<br/>Decision]
    D --> E[Document<br/>in Log]
    E --> F[Communicate]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

---

## Decision Authority

Define who can make what decisions:

| Decision Type | Authority Level |
|---------------|-----------------|
| Day-to-day operational | Project Manager |
| Within tolerance | Project Manager |
| Resource allocation | Project Manager / Sponsor |
| Scope changes | Project Board |
| Budget increases | Sponsor / Programme Board |
| Major direction changes | Sponsor / Steering Committee |
{:class="table table-single table-narrow"}

---

## Example Decision Log Entry

| Field | Value |
|-------|-------|
| **Decision ID** | DEC-012 |
| **Date** | 10 Jan 2026 |
| **Decision** | Use vendor A for cloud hosting rather than vendor B |
| **Rationale** | Lower cost over 3 years, better SLA, existing relationship |
| **Options considered** | Vendor A, Vendor B, In-house hosting |
| **Decision maker** | Project Board |
| **Stakeholders consulted** | IT Architecture, Procurement, Finance |
| **Impact** | Budget reduced by £50k, 2-week schedule saving |
| **Status** | Approved |
{:class="table table-single table-narrow"}

---

## Writing Good Decision Statements

### Clear Decision Statement

| Poor | Better |
|------|--------|
| "Decided on option 2" | "Selected React framework for front-end development" |
| "Agreed the way forward" | "Approved 4-week delay to allow additional testing" |
| "Will use external help" | "Engaged contractor for 3 months to support testing phase" |
{:class="table table-single table-narrow"}

### Include the Why

Always document rationale:
- What factors influenced the decision?
- What trade-offs were considered?
- Why were alternatives rejected?
- What assumptions were made?

---

## Managing the Log

| Activity | Frequency |
|----------|-----------|
| Add new decisions | As they occur |
| Review pending decisions | Weekly |
| Update status | As decisions are implemented |
| Full log review | Monthly / at stage gates |
| Archive superseded | Quarterly |
{:class="table table-single table-narrow"}

---

## Decision Status

| Status | Meaning |
|--------|---------|
| **Pending** | Awaiting decision |
| **Approved** | Decision made and active |
| **Implemented** | Decision executed |
| **Superseded** | Replaced by later decision |
| **Deferred** | Postponed for future consideration |
| **Rejected** | Option not approved |
{:class="table table-single table-narrow"}

---

## Integration with Other Logs

The Decision Log relates to:

| Log | Relationship |
|-----|--------------|
| **Risk Register** | Decisions may mitigate risks |
| **Issue Log** | Decisions may resolve issues |
| **Change Log** | Changes often require decisions |
| **Action Tracker** | Decisions create actions |
| **Meeting Minutes** | Decisions made in meetings |
{:class="table table-single table-narrow"}

---

## Common Mistakes

| Mistake | Impact | Solution |
|---------|--------|----------|
| Not logging decisions | No audit trail | Make logging routine |
| Vague decision statements | Unclear what was agreed | Be specific and complete |
| Missing rationale | Can't understand context | Always document why |
| No decision maker recorded | Unclear accountability | Identify authority |
| Decisions not communicated | Stakeholders unaware | Include in reporting |
{:class="table table-single table-narrow"}

---

## Decision Log Checklist

- [ ] Decision clearly stated?
- [ ] Rationale documented?
- [ ] Options considered recorded?
- [ ] Decision maker identified?
- [ ] Date captured?
- [ ] Impact understood?
- [ ] Stakeholders informed?
- [ ] Related items linked?
- [ ] Actions created if needed?

---

## Related Resources

- [Project Governance](/projects/project_governance) - Governance framework
- [Project Change Control](/projects/project_change_control) - Change management
- [Meeting Minutes](/projects/meeting_minutes) - Recording meeting decisions
- [Action Tracker](/projects/action_tracker) - Tracking resulting actions
- [Risk Register](/projects/risk_register) - RAID log

