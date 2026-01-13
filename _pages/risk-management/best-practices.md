---
layout: page
name: Risk Register Best Practices
section: Risk Management
description: Best practices for creating and maintaining effective risk registers and RAID logs. Includes structure, fields, review cadence, and common mistakes to avoid.
tags: [risk register, RAID log, best practices, risk tracking, risk documentation]
last_updated: 2026-01-13
---

{% include risk_nav.html %}

# Risk Register Best Practices

A risk register is the central document for tracking all identified risks throughout the project lifecycle. This guide covers best practices for creating and maintaining an effective register.

---

## What is a Risk Register?

A risk register (or risk log) is a document that records:
- All identified risks
- Their assessment (probability, impact, score)
- Planned responses
- Current status
- Ownership and actions

It serves as the single source of truth for risk information on the project.

---

## Risk Register Structure

### Essential Fields

Every risk register should include these core fields:

| Field | Description | Example |
|-------|-------------|---------|
| **Risk ID** | Unique identifier | R-001 |
| **Date Raised** | When first identified | 2026-01-15 |
| **Risk Description** | Clear statement of the risk | "Key developer may leave mid-project" |
| **Category** | Type of risk | Technical, Resource, External |
| **Probability** | Likelihood (1-5) | 3 |
| **Impact** | Consequence (1-5) | 4 |
| **Score** | P x I | 12 |
| **Response Strategy** | Avoid/Mitigate/Transfer/Accept | Mitigate |
| **Response Actions** | Specific planned actions | Cross-train team members |
| **Owner** | Person responsible | John Smith |
| **Status** | Current state | Open |
| **Target Date** | When actions due | 2026-02-01 |
{:class="table table-single table-narrow"}

### Additional Useful Fields

| Field | Description | When Useful |
|-------|-------------|-------------|
| **Trigger** | Warning sign risk is occurring | Complex risks |
| **Contingency Plan** | Fallback if risk occurs | High-impact risks |
| **Contingency Budget** | Reserve allocated | Financial risks |
| **Date Last Reviewed** | When last assessed | All projects |
| **Proximity** | How soon could it occur | Time-sensitive risks |
| **Secondary Risks** | Risks from response | Complex responses |
| **Residual Score** | Score after response | Measuring effectiveness |
{:class="table table-single table-narrow"}

---

## RAID Log Integration

Many projects use a combined **RAID log** to track related items:

| Component | Description | Status When Resolved |
|-----------|-------------|---------------------|
| **R**isks | Uncertain events that may occur | Closed / Occurred (becomes Issue) |
| **A**ssumptions | Things assumed to be true | Validated / Invalid |
| **I**ssues | Problems that have occurred | Resolved / Escalated |
| **D**ecisions | Key decisions made | N/A (record only) |
{:class="table table-single table-narrow"}

<div class="mermaid">
flowchart LR
    R[Risk] -->|Occurs| I[Issue]
    A[Assumption] -->|Proves False| I
    I -->|Resolution needed| D[Decision]

    style R fill:#fff3e0
    style A fill:#e3f2fd
    style I fill:#ffcdd2
    style D fill:#c8e6c9
</div>

### When to Use RAID vs Separate Logs

| Approach | Best For |
|----------|----------|
| **Combined RAID** | Small-medium projects, integrated tracking |
| **Separate Logs** | Large projects, different owners for each |
{:class="table table-single table-narrow"}

---

## Writing Good Risk Descriptions

### The Risk Statement Format

Use a structured format for clarity:

> **IF** [cause/event] **THEN** [consequence]

Or:

> **Due to** [cause], **there is a risk that** [event] **which would result in** [impact]

### Good vs Poor Risk Descriptions

| Poor Description | Better Description |
|------------------|-------------------|
| "Resource risk" | "Key developer may leave before code complete, causing 4-week delay" |
| "Budget might be exceeded" | "Due to unclear requirements, scope creep may occur, resulting in 15% budget overrun" |
| "Technology issues" | "If the new API is incompatible with legacy systems, integration will fail" |
| "Vendor problems" | "Supplier may not deliver hardware by March, delaying user testing" |
{:class="table table-single table-narrow"}

---

## Risk Categories

Organise risks into categories for easier management:

| Category | Examples |
|----------|----------|
| **Technical** | Technology, integration, complexity, dependencies |
| **Resource** | Skills, availability, capacity, retention |
| **Schedule** | Dependencies, delays, lead times, approvals |
| **Cost** | Estimates, inflation, currency, funding |
| **Scope** | Requirements, changes, creep, ambiguity |
| **Quality** | Defects, standards, testing, acceptance |
| **External** | Suppliers, regulations, market, competitors |
| **Organisational** | Priorities, restructuring, sponsorship |
{:class="table table-single table-narrow"}

---

## Review Cadence

### Regular Reviews

| Review Type | Frequency | Purpose |
|-------------|-----------|---------|
| **Risk owner check-in** | Weekly | Update status of owned risks |
| **Team risk review** | Fortnightly | Discuss active risks, identify new ones |
| **Steering committee** | Monthly | Report top risks, seek decisions |
| **Stage/phase gate** | At milestones | Comprehensive reassessment |
{:class="table table-single table-narrow"}

### What to Review

At each review:
- [ ] Are probability/impact scores still accurate?
- [ ] Have any risks occurred (become issues)?
- [ ] Are response actions progressing?
- [ ] Are there any new risks?
- [ ] Should any risks be closed?
- [ ] Do any risks need escalation?

---

## Risk Reporting

### Top Risks Summary

Include in regular status reports:

| Rank | Risk | Score | Trend | Response | Owner |
|------|------|-------|-------|----------|-------|
| 1 | Key developer departure | 16 | ↑ | Mitigate | JSmith |
| 2 | Supplier delivery delay | 12 | → | Transfer | PJones |
| 3 | Scope creep | 12 | ↓ | Mitigate | MBrown |
{:class="table table-single table-narrow"}

**Trend indicators**:
- ↑ Increasing (worsening)
- → Stable
- ↓ Decreasing (improving)

### Risk Heat Map Report

Visual summary showing risk distribution:

<div class="table-responsive">
<table class="table table-bordered text-center" style="max-width: 400px;">
  <thead>
    <tr>
      <th></th>
      <th>Low I</th>
      <th>Med I</th>
      <th>High I</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>High P</th>
      <td class="bg-warning">1</td>
      <td class="bg-danger text-white">2</td>
      <td class="bg-danger text-white">0</td>
    </tr>
    <tr>
      <th>Med P</th>
      <td class="bg-success text-white">3</td>
      <td class="bg-warning">4</td>
      <td class="bg-danger text-white">1</td>
    </tr>
    <tr>
      <th>Low P</th>
      <td class="bg-success text-white">5</td>
      <td class="bg-success text-white">2</td>
      <td class="bg-warning">1</td>
    </tr>
  </tbody>
</table>
</div>

---

## Common Mistakes

### 1. Set and Forget
- **Problem**: Register created once and never updated.
- **Solution**: Schedule regular reviews, assign owners, track status.

### 2. Too Vague
- **Problem**: Risks like "things might go wrong".
- **Solution**: Use structured risk statements with cause, event, and impact.

### 3. Too Many Risks
- **Problem**: Hundreds of risks, impossible to manage.
- **Solution**: Focus on significant risks, consolidate similar ones, use thresholds.

### 4. No Ownership
- **Problem**: Risks exist but nobody is responsible.
- **Solution**: Every risk must have a single owner accountable for monitoring and response.

### 5. Score Inflation/Deflation
- **Problem**: Inconsistent scoring across assessors.
- **Solution**: Use defined scales, calibrate as a team, reference examples.

### 6. Missing Actions
- **Problem**: Response strategy chosen but no concrete actions.
- **Solution**: Every mitigated/avoided risk needs specific, dated actions.

### 7. Ignoring Opportunities
- **Problem**: Only tracking threats, missing positive risks.
- **Solution**: Include opportunities with appropriate response strategies.
---

## Risk Register Tools

| Tool | Best For | Pros | Cons |
|------|----------|------|------|
| **Spreadsheet** | Small projects | Simple, accessible | Limited collaboration |
| **SharePoint List** | Team collaboration | Shared access, views | Setup required |
| **Jira/Azure DevOps** | Agile projects | Integrated, workflow | May be overkill |
| **Dedicated PM Tool** | Enterprise | Full features, reporting | Cost, complexity |
{:class="table table-single table-narrow"}

---

## Template Download

Download our RAID log template to get started:

<a href="/downloads/raid_log.xlsx" class="btn btn-primary">
<i class="fas fa-download mr-2"></i>Download RAID Log Template (XLSX)
</a>

---

## Checklist: Is Your Risk Register Effective?

- [ ] Every risk has a unique ID
- [ ] Descriptions follow a clear format
- [ ] Probability and impact are scored consistently
- [ ] Every risk has an owner
- [ ] Response strategies are documented
- [ ] Actions have deadlines
- [ ] Register is reviewed regularly
- [ ] Closed risks are archived, not deleted
- [ ] Stakeholders can access the register
- [ ] Top risks are reported to steering committee

---

## Related Resources

- [Risk Assessment Matrix](/risk-management/risk-matrix) - Scoring and prioritisation
- [Probability & Impact Scoring](/risk-management/probability-impact) - Assessment scales
- [Risk Response Strategies](/risk-management/risk-responses) - Choosing responses
- [Risk Register Template](/projects/risk_register) - Download template

