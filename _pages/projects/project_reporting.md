---
layout: project
name: Project Reporting
section: Project
process: delivery
description: Communicating project status, progress, and issues to stakeholders.
tags: [Reporting, Status, RAG, Governance]
themes: [Reporting, Control, Governance]
downloads:
 - name: Weekly Status Report Template
   description: PowerPoint template for weekly project status reporting
   file: weekly_status_report.pptx
 - name: Monthly Progress Report Template
   description: Word template for detailed monthly reporting
   file: monthly_progress_report.docx
 - name: Executive Dashboard Template
   description: Excel dashboard for executive-level reporting
   file: executive_dashboard.xlsx
last_updated: 2026-01-13
---

# Project Reporting

Project reporting communicates status, progress, risks, and issues to stakeholders, enabling informed decision-making.

---

## Purpose

Effective project reporting:
- Keeps stakeholders informed
- Provides early warning of problems
- Supports governance decisions
- Creates accountability
- Documents project history

---

## Report Types

| Report | Audience | Frequency | Purpose |
|--------|----------|-----------|---------|
| **Highlight Report** | Project Board | Weekly/Monthly | Executive summary |
| **Checkpoint Report** | PM/Team Lead | Weekly | Team progress |
| **Exception Report** | Project Board | As needed | Tolerance breach |
| **End Stage Report** | Project Board | Stage end | Stage assessment |
| **End Project Report** | Project Board | Project end | Final assessment |
{:class="table table-single table-narrow"}

---

## Highlight Report Content

| Section | Content |
|---------|---------|
| **Overall status** | RAG status with summary |
| **Progress** | What was achieved this period |
| **Plan** | What's planned for next period |
| **Milestones** | Status of key milestones |
| **Budget** | Financial position |
| **Risks** | Top risks and mitigations |
| **Issues** | Open issues requiring attention |
| **Decisions** | Decisions needed from board |
{:class="table table-single table-narrow"}

---

## RAG Status

<div class="mermaid">
flowchart LR
    R[RED<br/>Off track] ~~~ A[AMBER<br/>At risk]
    A ~~~ G[GREEN<br/>On track]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class R,A,G blue
</div>

| Status | Meaning | Action |
|--------|---------|--------|
| **Green** | On track to deliver | Continue as planned |
| **Amber** | At risk, corrective action underway | Monitor closely |
| **Red** | Off track, intervention needed | Escalate for decisions |
{:class="table table-single table-narrow"}

### RAG Criteria

| Dimension | Green | Amber | Red |
|-----------|-------|-------|-----|
| **Schedule** | On plan | < 2 weeks late | > 2 weeks late |
| **Budget** | Within tolerance | < 10% variance | > 10% variance |
| **Scope** | As baselined | Minor changes | Major changes |
| **Quality** | Meeting standards | Minor concerns | Significant issues |
{:class="table table-single table-narrow"}

---

## Reporting Cadence

| Level | Report | Frequency |
|-------|--------|-----------|
| Team | Stand-up | Daily |
| Team Lead | Checkpoint | Weekly |
| Project Board | Highlight | Weekly/Fortnightly |
| Programme | Dashboard | Monthly |
| Portfolio | Summary | Monthly |
{:class="table table-single table-narrow"}

---

## Effective Reporting Principles

1. **Be honest** - Report reality, not hope
2. **Be timely** - Deliver when expected
3. **Be concise** - Respect readers' time
4. **Be consistent** - Use standard formats
5. **Be actionable** - Highlight decisions needed
6. **Be balanced** - Include successes and issues

---

## Exception Reporting

<div class="mermaid">
flowchart LR
    A[Tolerance<br/>Breach] --> B[Assess<br/>Impact]
    B --> C[Develop<br/>Options]
    C --> D[Raise<br/>Exception]
    D --> E[Board<br/>Decision]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

Exception reports are raised when:
- Forecast exceeds tolerance
- Major risk materialises
- Significant issue cannot be resolved
- External factors affect delivery

### Exception Report Content
- Nature of the exception
- Impact on objectives
- Options with pros/cons
- Recommended action
- Decision required

---

## Dashboard Elements

| Element | Purpose |
|---------|---------|
| **Status summary** | Quick visual overview |
| **Milestone tracker** | Progress against plan |
| **Budget chart** | Financial position |
| **Risk heatmap** | Risk exposure |
| **Issue count** | Outstanding issues |
| **Trend indicators** | Direction of travel |
{:class="table table-single table-narrow"}

---

## Common Reporting Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Watermelon reporting (green outside, red inside) | Be transparent, report issues early |
| Information overload | Focus on key messages |
| Late reports | Set up regular cadence |
| Inconsistent formats | Use templates |
| No action focus | Clearly state decisions needed |
| Reporting without data | Base status on evidence |
{:class="table table-single table-narrow"}

---

## Reporting Checklist

- [ ] Report audience defined?
- [ ] Reporting cadence agreed?
- [ ] Templates in place?
- [ ] RAG criteria established?
- [ ] Tolerance thresholds set?
- [ ] Distribution list confirmed?
- [ ] Review process established?

---

## Status Report Templates

Different audiences need different report formats. Below are detailed templates for various reporting needs.

---

### Weekly Status Report

The weekly status report is your primary communication tool with sponsors and key stakeholders.

#### Structure

| Section | Content | Length |
|---------|---------|--------|
| **Header** | Project name, date, PM name, overall RAG | 1 line |
| **Executive summary** | 2-3 sentences on status | 50 words |
| **Progress this week** | Completed activities | 3-5 bullets |
| **Plan for next week** | Upcoming activities | 3-5 bullets |
| **Milestones** | Status of nearest milestones | Table |
| **Risks & Issues** | Top items requiring attention | 3-5 items |
| **Decisions needed** | Items requiring stakeholder input | As needed |
{:class="table table-single table-narrow"}

#### Weekly Status Report Example

```
PROJECT STATUS REPORT
=====================
Project: Customer Portal Redesign
Report Date: 13 January 2026
Project Manager: Jane Smith
Overall Status: AMBER

EXECUTIVE SUMMARY
The project remains on track for the April go-live.
User testing feedback has been positive but identified
accessibility issues requiring additional sprint work.

PROGRESS THIS WEEK
• Completed user acceptance testing (UAT) for Phase 1
• Resolved 12 of 15 critical defects from testing
• Finalised training materials for support team
• Secured sign-off on data migration approach

PLANNED NEXT WEEK
• Begin UAT for Phase 2 functionality
• Complete accessibility remediation
• Conduct pilot training session
• Finalise go-live communication plan

MILESTONE STATUS
| Milestone              | Planned    | Status  |
|------------------------|------------|---------|
| UAT Complete           | 20 Jan     | On Track|
| Training Complete      | 27 Jan     | On Track|
| Go-Live                | 1 April    | On Track|

TOP RISKS & ISSUES
1. [RISK] Resource availability during February
   holidays - Mitigation: Cross-training in progress
2. [ISSUE] Accessibility compliance gaps -
   Action: Additional 2-day sprint scheduled
3. [RISK] Third-party API stability -
   Mitigation: Fallback solution documented

DECISIONS NEEDED
• Approve revised accessibility timeline (adds 3 days)
• Confirm pilot group for soft launch
```

---

### Monthly Progress Report

Monthly reports provide a comprehensive view for governance and senior management.

#### Structure

| Section | Content | Detail Level |
|---------|---------|--------------|
| **Executive summary** | Overall status, key achievements, concerns | High-level |
| **Schedule status** | Progress against plan, milestone tracking | Detailed |
| **Budget status** | Spend vs plan, forecast, variances | Detailed |
| **Scope status** | Deliverable progress, change requests | Moderate |
| **Risk summary** | Risk profile, top risks, changes | Moderate |
| **Issue summary** | Open issues, resolutions, escalations | Moderate |
| **Resource status** | Team utilisation, capacity issues | Summary |
| **Quality status** | Defect metrics, testing progress | Summary |
| **Next period focus** | Key activities, decisions needed | Forward-looking |
| **Appendices** | Detailed data, supporting information | As needed |
{:class="table table-single table-narrow"}

#### Monthly Report Sections Explained

**Executive Summary Format**:
```
Overall Status: [RAG]

This month: [2-3 sentence summary of achievements]

Key concerns: [Top 1-2 issues requiring attention]

Looking ahead: [Primary focus for next month]
```

**Schedule Status Format**:

| Metric | Value | Trend |
|--------|-------|-------|
| **Planned % Complete** | 45% | - |
| **Actual % Complete** | 42% | ↓ |
| **Schedule Variance** | -3 days | → |
| **Schedule Performance Index (SPI)** | 0.93 | ↓ |
{:class="table table-single table-narrow"}

**Budget Status Format**:

| Category | Budget | Actual | Committed | Forecast | Variance |
|----------|--------|--------|-----------|----------|----------|
| Labour | £50,000 | £22,000 | £15,000 | £48,000 | £2,000 |
| Software | £10,000 | £10,000 | £0 | £10,000 | £0 |
| Services | £5,000 | £2,000 | £2,500 | £5,500 | -£500 |
| **Total** | **£65,000** | **£34,000** | **£17,500** | **£63,500** | **£1,500** |
{:class="table table-single table-narrow"}

---

### Executive Summary Report

For senior executives who need information quickly. Use the pyramid principle - lead with the conclusion.

#### One-Page Executive Format

<div class="mermaid">
flowchart TD
    A[Overall Status<br/>& Key Message] --> B[Schedule]
    A --> C[Budget]
    A --> D[Risks]
    B --> E[Details on Request]
    C --> E
    D --> E

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

#### Executive Report Template

```
PROJECT: [Name]                     DATE: [Date]
SPONSOR: [Name]                     PM: [Name]

┌─────────────────────────────────────────────────┐
│  OVERALL STATUS: [GREEN/AMBER/RED]              │
│                                                 │
│  [One sentence: Are we on track to deliver      │
│   the expected benefits on time and budget?]   │
└─────────────────────────────────────────────────┘

KEY METRICS
┌──────────┬──────────┬──────────┐
│ SCHEDULE │  BUDGET  │  SCOPE   │
│  [RAG]   │  [RAG]   │  [RAG]   │
│  +2 days │  -£5k    │ Baselined│
└──────────┴──────────┴──────────┘

THIS MONTH'S ACHIEVEMENTS
• [Major achievement 1]
• [Major achievement 2]

ATTENTION REQUIRED
• [Issue or decision needed]

NEXT MILESTONE
[Milestone name] - [Date] - [RAG status]
```

---

### RAG Dashboard Report

Visual dashboard format for quick status communication.

#### Dashboard Components

| Component | Purpose | Visual Format |
|-----------|---------|---------------|
| **Traffic lights** | Quick status read | Coloured circles |
| **Progress bar** | % complete visual | Horizontal bar |
| **Trend arrows** | Direction of travel | ↑ → ↓ indicators |
| **Milestone tracker** | Timeline visual | Gantt-style |
| **Risk heatmap** | Risk distribution | Colour matrix |
| **Burn-down chart** | Work remaining | Line chart |
{:class="table table-single table-narrow"}

#### Dashboard Layout

```
┌─────────────────────────────────────────────────────┐
│  PROJECT DASHBOARD - [Name] - [Date]                │
├─────────────────────────────────────────────────────┤
│                                                     │
│  OVERALL    SCHEDULE    BUDGET      SCOPE          │
│    🟢          🟡         🟢          🟢            │
│                                                     │
├─────────────────────────────────────────────────────┤
│  PROGRESS                                           │
│  ████████████████████░░░░░░░░░░  65%               │
│                                                     │
├─────────────────────────────────────────────────────┤
│  MILESTONES                                         │
│  ✓ Requirements    ✓ Design    ● Build    ○ Test   │
│  [Complete]       [Complete]  [Current]  [Pending] │
│                                                     │
├─────────────────────────────────────────────────────┤
│  TOP RISKS              │  OPEN ISSUES             │
│  • Resource capacity    │  • Integration delay     │
│  • Vendor dependency    │  • Test environment      │
│  • Timeline pressure    │                          │
└─────────────────────────────────────────────────────┘
```

---

### Stakeholder-Specific Reports

Tailor your reports to different audiences:

#### Report by Audience Type

| Audience | Focus | Format | Frequency |
|----------|-------|--------|-----------|
| **Board/Executives** | Strategic, decisions | 1-page summary | Monthly |
| **Sponsor** | Progress, issues, support | Detailed status | Weekly |
| **Steering Committee** | Governance, risks | Highlight report | Fortnightly |
| **Programme Manager** | Dependencies, resources | Programme roll-up | Weekly |
| **Team Members** | Tasks, blockers | Stand-up format | Daily |
| **End Users** | Impact, timeline | Newsletter style | As needed |
| **Finance** | Budget, forecast | Financial detail | Monthly |
{:class="table table-single table-narrow"}

#### Adapting Content by Audience

| Content | Executive | Sponsor | Team |
|---------|-----------|---------|------|
| **Overall status** | ✓ Essential | ✓ Essential | ○ Brief |
| **Schedule detail** | ○ Summary | ✓ Detailed | ✓ Detailed |
| **Budget detail** | ○ Variance only | ✓ Full breakdown | ✗ Not needed |
| **Risk detail** | ○ Top 3 | ✓ All significant | ○ Relevant only |
| **Technical detail** | ✗ Avoid | ○ As needed | ✓ Essential |
| **Dependencies** | ✗ Unless blocked | ✓ All external | ✓ Immediate |
{:class="table table-single table-narrow"}

---

### Stand-Up Report Format

For daily team coordination:

#### Three Questions

| Question | Purpose | Time |
|----------|---------|------|
| **What did you complete yesterday?** | Track progress | 30 sec |
| **What will you work on today?** | Coordinate effort | 30 sec |
| **Any blockers?** | Surface issues | 30 sec |
{:class="table table-single table-narrow"}

#### Stand-Up Board Format

```
┌─────────────┬─────────────┬─────────────┐
│   TO DO     │ IN PROGRESS │    DONE     │
├─────────────┼─────────────┼─────────────┤
│ • Task E    │ • Task C    │ • Task A    │
│ • Task F    │ • Task D    │ • Task B    │
│ • Task G    │             │             │
└─────────────┴─────────────┴─────────────┘

BLOCKERS: [Team member] blocked on [issue]
          [Team member] waiting for [dependency]
```

---

### Exception Report Template

When tolerances are breached or significant issues arise:

#### Exception Report Structure

| Section | Content |
|---------|---------|
| **Exception description** | What has happened or is forecast |
| **Cause** | Root cause of the exception |
| **Impact** | Effect on time, cost, scope, benefits |
| **Options** | Possible responses with pros/cons |
| **Recommendation** | Preferred option with rationale |
| **Decision required** | Specific ask of the board |
{:class="table table-single table-narrow"}

#### Exception Report Example

```
EXCEPTION REPORT
================
Project: Customer Portal Redesign
Date: 13 January 2026
Exception Type: Schedule

EXCEPTION DESCRIPTION
The project is forecast to exceed the approved
end date by 3 weeks due to additional accessibility
compliance requirements.

CAUSE
New WCAG 2.2 guidelines published after project
approval require additional development work not
in original scope.

IMPACT
• Schedule: +3 weeks (new end date: 22 April)
• Cost: +£8,000 for additional development
• Benefits: Delayed by 3 weeks
• Quality: Improved accessibility compliance

OPTIONS

Option 1: Extend timeline (Recommended)
• Accept 3-week delay
• Additional £8,000 cost
• Full compliance achieved
• Pros: Complete solution, reduced risk
• Cons: Delayed benefits

Option 2: Reduce scope
• Remove 2 non-critical features
• Maintain original timeline
• Pros: On-time delivery
• Cons: Reduced functionality

Option 3: Increase resources
• Add 2 contractors for 4 weeks
• Additional £15,000 cost
• Maintain timeline
• Pros: Full scope on time
• Cons: Higher cost, integration risk

RECOMMENDATION
Option 1 - The 3-week delay has minimal business
impact and ensures full accessibility compliance,
reducing legal and reputational risk.

DECISION REQUIRED
Approve revised end date of 22 April 2026 and
additional budget of £8,000.
```

---

### Report Writing Tips

| Tip | Explanation |
|-----|-------------|
| **Lead with the headline** | Put the most important information first |
| **Use consistent structure** | Same format every time for easy scanning |
| **Be specific with numbers** | "42% complete" not "making good progress" |
| **Highlight changes** | What's different from last report |
| **Separate fact from opinion** | Clear distinction between data and assessment |
| **Include actions and owners** | Every issue should have a next step |
| **Keep it visual** | Use tables, charts, and RAG indicators |
| **Proofread** | Errors undermine credibility |
{:class="table table-single table-narrow"}

### Report Distribution Matrix

| Report | Owner | Reviewers | Distribution | Archive |
|--------|-------|-----------|--------------|---------|
| Weekly Status | PM | Sponsor | Stakeholder list | SharePoint |
| Monthly Progress | PM | PMO | Board + sponsors | SharePoint |
| Exception | PM | Sponsor | Board | SharePoint |
| Dashboard | PM | - | Self-service | Live system |
{:class="table table-single table-narrow"}

---

## Related Resources

- [Project Governance](/projects/project_governance) - Governance framework
- [Project Board](/projects/project_board) - Board responsibilities
- [Risk Management](/projects/risk_management) - Risk reporting
- [Financial Forecasting](/projects/financial_forecasting) - Financial reporting

