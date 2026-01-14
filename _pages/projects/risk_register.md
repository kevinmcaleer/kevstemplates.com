---
layout: project
section: Project
process: delivery
topic: Risk
name: Risk Register
description: Manage Risks, Issues, Actions, Dependencies, Decisions and Assumptions in a RAID log
tags: [Risks, Issues, Decisions, Actions, RAID, Log, Tracker]
downloads:
 - name: RAID Log
   description: Risk and Issue Register
   file: raid_log.xlsx
 - name: Issue Log Template
   description: Standalone issue tracking template
   file: issue_log.xlsx
themes: [Risk management, Issue management, Governance]
last_updated: 2026-01-14
---
# Risk Register / RAID Log

The Risk Register contains a list of all known project risks, issues, dependencies, assumptions, decisions and actions.

---

## What is a RAID Log?

A RAID log is a project management tool that tracks:

| Component | Description |
|-----------|-------------|
| **R**isks | Uncertain events that may affect the project |
| **A**ssumptions | Things assumed to be true for planning purposes |
| **I**ssues | Problems that have occurred and need resolution |
| **D**ecisions | Key decisions made during the project |
{:class="table table-single table-narrow"}

Some organisations also track **D**ependencies (RAIDD) or **A**ctions separately.

---

## Risks vs Issues

<div class="mermaid">
flowchart LR
    A[Risk<br/>Uncertain event] -->|Materialises| B[Issue<br/>Current problem]
    A -->|Avoided/Mitigated| C[Closed Risk]
    B --> D[Resolved Issue]
    B --> E[Escalation]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

| Risk | Issue |
|------|-------|
| May happen (uncertain) | Has happened (certain) |
| Future event | Current problem |
| Probability < 100% | Probability = 100% |
| Managed proactively | Managed reactively |
| Response strategies | Resolution actions |
{:class="table table-single table-narrow"}

---

## Risk Management

### Risk Register Fields

| Field | Description |
|-------|-------------|
| **Risk ID** | Unique identifier (R-001) |
| **Date Raised** | When identified |
| **Description** | Clear statement of what might happen |
| **Category** | Technical, Resource, Schedule, etc. |
| **Probability** | Likelihood of occurring (1-5) |
| **Impact** | Consequence if it occurs (1-5) |
| **Score** | Probability x Impact |
| **Response Strategy** | Avoid, Mitigate, Transfer, Accept |
| **Response Actions** | Specific actions to implement strategy |
| **Owner** | Person responsible for managing |
| **Status** | Open, In Progress, Closed |
| **Due Date** | When actions should be complete |
{:class="table table-single table-narrow"}

### Probability Scale

| Score | Rating | Description |
|-------|--------|-------------|
| 1 | Very Low | <10% chance |
| 2 | Low | 10-30% chance |
| 3 | Medium | 30-50% chance |
| 4 | High | 50-70% chance |
| 5 | Very High | >70% chance |
{:class="table table-single table-narrow"}

### Impact Scale

| Score | Rating | Description |
|-------|--------|-------------|
| 1 | Very Low | Minimal impact, easily absorbed |
| 2 | Low | Minor impact, workaround possible |
| 3 | Medium | Moderate impact, recovery required |
| 4 | High | Major impact, significant action needed |
| 5 | Very High | Severe impact, project viability at risk |
{:class="table table-single table-narrow"}

### Risk Matrix

| | Impact 1 | Impact 2 | Impact 3 | Impact 4 | Impact 5 |
|-|----------|----------|----------|----------|----------|
| **Prob 5** | 5 | 10 | 15 | 20 | 25 |
| **Prob 4** | 4 | 8 | 12 | 16 | 20 |
| **Prob 3** | 3 | 6 | 9 | 12 | 15 |
| **Prob 2** | 2 | 4 | 6 | 8 | 10 |
| **Prob 1** | 1 | 2 | 3 | 4 | 5 |
{:class="table table-single table-narrow"}

- **Red (16-25)**: Critical - immediate action required
- **Amber (9-15)**: Significant - close monitoring
- **Yellow (5-8)**: Moderate - regular review
- **Green (1-4)**: Low - monitor

### Response Strategies

| Strategy | Description | When to Use |
|----------|-------------|-------------|
| **Avoid** | Eliminate the threat entirely | High impact, avoidable |
| **Mitigate** | Reduce probability or impact | Most common response |
| **Transfer** | Shift to third party | Insurance, contracts |
| **Accept** | Acknowledge and monitor | Low score, unavoidable |
{:class="table table-single table-narrow"}

---

## Issue Management

### Issue Register Fields

| Field | Description |
|-------|-------------|
| **Issue ID** | Unique identifier (I-001) |
| **Date Raised** | When identified |
| **Raised By** | Who reported it |
| **Description** | Clear statement of the problem |
| **Category** | Technical, Resource, Scope, etc. |
| **Priority** | Critical, High, Medium, Low |
| **Impact** | Effect on project |
| **Root Cause** | Underlying reason |
| **Resolution Actions** | Steps to resolve |
| **Owner** | Person responsible for resolution |
| **Target Date** | When resolution expected |
| **Status** | Open, In Progress, Resolved, Escalated |
| **Actual Resolution** | How it was resolved |
| **Date Closed** | When closed |
{:class="table table-single table-narrow"}

### Issue Priority

| Priority | Description | Response Time |
|----------|-------------|---------------|
| **Critical** | Project cannot proceed | Immediate |
| **High** | Major impact on delivery | Within 24 hours |
| **Medium** | Moderate impact | Within 1 week |
| **Low** | Minor impact | As capacity allows |
{:class="table table-single table-narrow"}

### Issue Resolution Process

<div class="mermaid">
flowchart LR
    A[Issue<br/>Identified] --> B[Log &<br/>Assess]
    B --> C[Assign<br/>Owner]
    C --> D[Investigate<br/>Root Cause]
    D --> E[Develop<br/>Resolution]
    E --> F[Implement<br/>Resolution]
    F --> G[Verify &<br/>Close]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

### Escalation Criteria

| Escalate When | To Whom |
|---------------|---------|
| Beyond PM authority | Sponsor |
| Requires more resources | Resource Manager |
| Cross-project impact | PMO |
| Policy/process exception | Governance body |
| External/vendor issue | Contract Manager |
{:class="table table-single table-narrow"}

---

## Assumptions Management

### Assumption Fields

| Field | Description |
|-------|-------------|
| **ID** | Unique identifier (A-001) |
| **Description** | What is being assumed |
| **Basis** | Why it's reasonable |
| **Impact if Wrong** | What happens if invalid |
| **Owner** | Who is tracking it |
| **Validation Date** | When to confirm |
| **Status** | Assumed, Validated, Invalid |
{:class="table table-single table-narrow"}

### Example Assumptions

| Assumption | Impact if Wrong |
|------------|-----------------|
| Budget approved by Jan 15 | Project delayed |
| Key SME available 50% | Resource gap |
| Vendor delivers by Q1 | Schedule slip |
| Existing system compatible | Rework required |
{:class="table table-single table-narrow"}

---

## Dependencies Management

### Dependency Fields

| Field | Description |
|-------|-------------|
| **ID** | Unique identifier (D-001) |
| **Description** | What we depend on |
| **Type** | Internal, External, Third-party |
| **Source** | Who/what provides it |
| **Required By** | When needed |
| **Status** | On Track, At Risk, Late |
| **Owner** | Who is managing |
| **Contingency** | Plan B if not delivered |
{:class="table table-single table-narrow"}

### Dependency Types

| Type | Description | Management |
|------|-------------|------------|
| **Predecessor** | Must complete before we can start | Track closely |
| **Successor** | Depends on our output | Communicate timing |
| **External** | Outside project control | Regular check-ins |
| **Resource** | Shared resources | Coordinate allocation |
{:class="table table-single table-narrow"}

---

## Decisions Log

### Decision Fields

| Field | Description |
|-------|-------------|
| **ID** | Unique identifier (DEC-001) |
| **Date** | When decided |
| **Decision** | What was decided |
| **Context** | Background/options considered |
| **Rationale** | Why this option |
| **Decision Maker** | Who made it |
| **Impact** | Effect on project |
| **Actions** | Follow-up needed |
{:class="table table-single table-narrow"}

---

## RAID Review Process

### Weekly Review

| Activity | Purpose |
|----------|---------|
| Review open risks | Check status, update scores |
| Review open issues | Progress on resolution |
| Check assumptions | Still valid? |
| Track dependencies | On schedule? |
| Log new items | Capture anything new |
{:class="table table-single table-narrow"}

### Reporting

| Report | Audience | Frequency |
|--------|----------|-----------|
| Top risks summary | Project Board | Monthly |
| Issue status | PM/Team | Weekly |
| Full RAID log | PMO | As requested |
| Risk/Issue trends | Governance | Monthly |
{:class="table table-single table-narrow"}

---

## RAID Log Checklist

### Setup
- [ ] RAID log template created?
- [ ] Scoring scales defined?
- [ ] Categories agreed?
- [ ] Owners identified?
- [ ] Review cadence set?

### Ongoing
- [ ] New items logged promptly?
- [ ] Scores reviewed regularly?
- [ ] Actions progressing?
- [ ] Escalations happening?
- [ ] Closed items documented?

---

## Related Resources

- [Risk Management Overview](/risk-management) - Complete risk management guide
- [Risk Assessment Matrix](/risk-management/risk-matrix) - How to score and prioritise risks
- [Decision Log](/projects/decision_log) - Decision tracking
- [Action Tracker](/projects/action_tracker) - Action management
- [Project Reporting](/projects/project_reporting) - Status reporting
