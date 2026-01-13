---
layout: project
name: Project Change Control
section: Project
process: delivery
description: Managing changes to project scope, schedule, cost, and quality through a formal control process.
tags: [Change Control, Scope, Governance]
themes: [Governance, Delivery]
last_updated: 2026-01-13
---

# Project Change Control

Change control is the process of managing changes to the project baseline in a controlled way, ensuring impacts are understood before decisions are made.

---

## Why Change Control Matters

<div class="alert alert-warning">
<i class="fas fa-exclamation-triangle mr-2"></i>
<strong>Key Insight:</strong> Uncontrolled change is a leading cause of project failure. Without proper change control, scope creeps, budgets overrun, and timelines slip.
</div>

---

## What Needs Change Control?

| Element | Examples |
|---------|----------|
| **Scope** | New features, removed functionality |
| **Schedule** | Milestone changes, deadline extensions |
| **Cost** | Budget increases, resource changes |
| **Quality** | Acceptance criteria changes |
| **Requirements** | New or modified requirements |
| **Design** | Architecture or approach changes |
{:class="table table-single table-narrow"}

---

## Change Control Process

<div class="mermaid">
flowchart LR
    A[Request] --> B[Log]
    B --> C[Assess]
    C --> D[Recommend]
    D --> E[Decide]
    E --> F[Implement]
    F --> G[Close]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

| Step | Description |
|------|-------------|
| **Request** | Change is formally raised |
| **Log** | Recorded in change register |
| **Assess** | Impact analysis completed |
| **Recommend** | Options presented with recommendation |
| **Decide** | Authority approves, rejects, or defers |
| **Implement** | Approved change is actioned |
| **Close** | Change completed and verified |
{:class="table table-single table-narrow"}

---

## Change Request Content

A change request should include:

| Section | Content |
|---------|---------|
| **Description** | What is being requested? |
| **Rationale** | Why is this change needed? |
| **Impact** | Effect on scope, time, cost, quality |
| **Options** | Alternatives considered |
| **Recommendation** | Proposed course of action |
| **Priority** | Urgency of the change |
{:class="table table-single table-narrow"}

---

## Impact Assessment

Assess impact across all constraints:

| Dimension | Questions |
|-----------|-----------|
| **Scope** | Does this add or remove deliverables? |
| **Time** | Does this affect the schedule? |
| **Cost** | What are the financial implications? |
| **Quality** | Does this affect quality standards? |
| **Risk** | What new risks does this introduce? |
| **Resources** | Are additional resources needed? |
| **Benefits** | Does this affect expected benefits? |
{:class="table table-single table-narrow"}

---

## Decision Authority

Define who can approve changes at different levels:

| Change Impact | Authority |
|---------------|-----------|
| Minor (< £5k, < 1 week) | Project Manager |
| Moderate (< £25k, < 4 weeks) | Senior Supplier / Senior User |
| Significant (< £100k, < 3 months) | Project Board |
| Major (> £100k or scope change) | Programme Board / Sponsor |
{:class="table table-single table-narrow"}

---

## Change Categories

| Category | Description | Typical Action |
|----------|-------------|----------------|
| **Emergency** | Critical issue requiring immediate action | Expedited approval |
| **Scope change** | New or modified requirements | Full assessment |
| **Defect fix** | Correcting an error | Technical approval |
| **Enhancement** | Improvement beyond requirements | Assess for future |
{:class="table table-single table-narrow"}

---

## Change Register

Track all changes in a central register:

| Field | Description |
|-------|-------------|
| **Change ID** | Unique identifier |
| **Date raised** | When submitted |
| **Requestor** | Who raised it |
| **Description** | What is requested |
| **Status** | Open, approved, rejected, implemented |
| **Priority** | Urgency level |
| **Impact** | Assessment summary |
| **Decision** | Outcome and date |
| **Owner** | Who is implementing |
{:class="table table-single table-narrow"}

---

## Avoiding Change Control Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Bypassing the process | Enforce governance, educate stakeholders |
| Slow approvals | Define SLAs, empower decision-makers |
| Incomplete assessment | Use impact checklist |
| Scope creep | Strong baseline, visible tracking |
| Change overload | Batch non-urgent changes |
| Poor communication | Update stakeholders on decisions |
{:class="table table-single table-narrow"}

---

## Change Control Best Practices

1. **Establish baseline early** - Can't control changes without a baseline
2. **Make it easy to request** - Simple forms encourage proper process
3. **Assess consistently** - Use standard impact criteria
4. **Decide promptly** - Delays frustrate stakeholders
5. **Communicate decisions** - Keep everyone informed
6. **Track trends** - Many changes may indicate poor planning

---

## Change Control Checklist

- [ ] Change control process defined?
- [ ] Decision thresholds established?
- [ ] Change register in place?
- [ ] Baseline documented?
- [ ] Stakeholders understand process?
- [ ] Impact assessment template ready?
- [ ] Communication approach defined?

---

## Related Resources

- [Scope Management](/projects/scope) - Managing project scope
- [Project Governance](/projects/project_governance) - Governance framework
- [Risk Management](/projects/risk_management) - Managing project risks
- [Project Board](/projects/project_board) - Decision-making forum

