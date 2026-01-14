---
layout: project
section: Projects
name: End of Stage Report
description: Formal report summarising stage performance to support the Project Board's decision to proceed, enabling informed stage gate decisions.
tags: [End Stage, Report, Governance, Stage Gate, PRINCE2]
themes: [Governance, Control]
process: delivery
downloads:
 - name: End of Stage Report Template
   description: Word template for end of stage reporting
   file: end_of_stage_report.docx
last_updated: 2026-01-13
---

# End of Stage Report

The End of Stage Report provides the Project Board with information needed to decide whether to authorise the next stage, covering what was achieved, how the stage performed, and the forecast for the remainder of the project.

---

## Purpose

The End of Stage Report:
- Summarises stage achievements
- Reports performance against plan
- Identifies issues and lessons
- Forecasts project completion
- Supports stage gate decisions
- Updates the business case

---

## Stage Gate Process

<div class="mermaid">
flowchart LR
    A[Stage<br/>Complete] --> B[Prepare End<br/>Stage Report]
    B --> C[Present to<br/>Project Board]
    C --> D{Decision}
    D -->|Approve| E[Start<br/>Next Stage]
    D -->|Exception| F[Exception<br/>Plan]
    D -->|Stop| G[Premature<br/>Close]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

---

## Report Contents

### Essential Sections

| Section | Purpose |
|---------|---------|
| **Executive summary** | Key messages for quick review |
| **Stage achievements** | What was delivered |
| **Performance** | Time, cost, quality, scope |
| **Issues and changes** | Problems and resolutions |
| **Lessons learned** | What to improve |
| **Forecast** | Updated project outlook |
| **Recommendation** | Proceed, modify, or stop |
{:class="table table-single table-narrow"}

---

## End of Stage Report Template

### Report Header

| Field | Content |
|-------|---------|
| **Project** | Customer Portal Enhancement |
| **Stage** | Stage 2 - Development |
| **Report Date** | 31 March 2026 |
| **Project Manager** | John Smith |
| **Distribution** | Project Board, PMO |
{:class="table table-single table-narrow"}

---

## Executive Summary

### Stage Status

| Dimension | Status | Commentary |
|-----------|--------|------------|
| **Overall** | Amber | Stage complete with minor delays |
| **Schedule** | Amber | 5 days late, within tolerance |
| **Budget** | Green | £3,000 under budget |
| **Quality** | Green | All quality criteria met |
| **Scope** | Green | All products delivered |
| **Risk** | Amber | One high risk materialised |
{:class="table table-single table-narrow"}

### Key Messages

| # | Key Message |
|---|-------------|
| 1 | All planned products delivered with quality criteria met |
| 2 | Stage completed 5 days late due to API integration issues |
| 3 | Budget underspent by £3,000 (4%) |
| 4 | Business case remains valid with minor schedule adjustment |
| 5 | Recommend approval to proceed to Stage 3 |
{:class="table table-single table-narrow"}

---

## Stage Achievements

### Products Delivered

| Product | Planned Date | Actual Date | Quality |
|---------|--------------|-------------|---------|
| Login Screen | 14 Feb | 14 Feb | Approved |
| Dashboard | 28 Feb | 05 Mar | Approved |
| User Profile | 14 Mar | 19 Mar | Approved |
| Integration Tests | 21 Mar | 28 Mar | Approved |
| Technical Docs | 28 Mar | 31 Mar | Approved |
{:class="table table-single table-narrow"}

### Milestones

| Milestone | Planned | Actual | Variance |
|-----------|---------|--------|----------|
| Stage Start | 15 Jan | 15 Jan | 0 days |
| Dev Environment Ready | 20 Jan | 20 Jan | 0 days |
| Login Complete | 14 Feb | 14 Feb | 0 days |
| Dashboard Complete | 28 Feb | 05 Mar | +5 days |
| Integration Complete | 21 Mar | 28 Mar | +7 days |
| Stage End | 28 Mar | 31 Mar | +3 days |
{:class="table table-single table-narrow"}

### Key Accomplishments

| Accomplishment | Impact |
|----------------|--------|
| Delivered full portal functionality | Enables user acceptance testing |
| Achieved performance targets | <1.5 second page loads |
| Completed security review | No vulnerabilities found |
| Built comprehensive test suite | 85% code coverage |
{:class="table table-single table-narrow"}

---

## Performance Against Plan

### Schedule Performance

| Metric | Planned | Actual | Variance |
|--------|---------|--------|----------|
| **Duration** | 11 weeks | 11.5 weeks | +0.5 weeks |
| **Effort** | 400 person-days | 410 person-days | +10 days |
| **Milestones on time** | 6 | 4 | -2 |
{:class="table table-single table-narrow"}

**Schedule Analysis**: API integration complexity exceeded estimates. Recovery achieved through parallel working and weekend work. Overall delay of 5 days within tolerance (+10 days).

### Cost Performance

| Category | Budget | Actual | Variance |
|----------|--------|--------|----------|
| Labour - Internal | £45,000 | £46,000 | +£1,000 |
| Labour - External | £20,000 | £16,000 | -£4,000 |
| Infrastructure | £5,000 | £5,000 | £0 |
| Tools/Licences | £3,000 | £3,000 | £0 |
| Contingency used | £7,000 | £0 | -£7,000 |
| **Total** | **£80,000** | **£70,000** | **-£10,000** |
{:class="table table-single table-narrow"}

**Cost Analysis**: Stage completed £10,000 (12.5%) under budget. External contractor days reduced through internal upskilling. Contingency not required.

### Quality Performance

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Code review completion | 100% | 100% | Met |
| Unit test coverage | >80% | 85% | Met |
| Integration tests passing | 100% | 100% | Met |
| Defects at handover | <10 | 3 | Met |
| Performance target | <2 sec | 1.4 sec | Met |
{:class="table table-single table-narrow"}

---

## Issues and Changes

### Issues Resolved

| Issue | Impact | Resolution |
|-------|--------|------------|
| API rate limiting | Delayed integration | Implemented caching |
| Database performance | Slow queries | Query optimisation |
| SSL certificate delay | Blocked testing | Used temporary certs |
{:class="table table-single table-narrow"}

### Outstanding Issues

| Issue | Impact | Mitigation |
|-------|--------|------------|
| Mobile responsiveness | Minor display issues | Fix in Stage 3 |
| Edge browser quirk | Affects 2% of users | Workaround documented |
{:class="table table-single table-narrow"}

### Changes Approved

| RFC | Description | Impact |
|-----|-------------|--------|
| RFC-003 | Additional SSO provider | +2 days, +£500 |
| RFC-005 | Enhanced error handling | +1 day, no cost |
{:class="table table-single table-narrow"}

### Changes Deferred

| RFC | Description | Reason |
|-----|-------------|--------|
| RFC-004 | Dark mode | Out of scope, future phase |
| RFC-006 | API versioning | Complexity, defer to Stage 3 |
{:class="table table-single table-narrow"}

---

## Risk Update

### Risks Materialised

| Risk | Impact | Response |
|------|--------|----------|
| R2: API integration issues | 5-day delay | Extended testing, vendor support |
{:class="table table-single table-narrow"}

### Current High Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| UAT resource availability | Medium | High | Early booking confirmed |
| Production environment | Low | High | Parallel preparation |
{:class="table table-single table-narrow"}

---

## Lessons Learned

### What Went Well

| Lesson | Application |
|--------|-------------|
| Daily stand-ups improved coordination | Continue in Stage 3 |
| Early QA involvement reduced defects | Maintain approach |
| Cross-training reduced key-person risk | Expand practice |
{:class="table table-single table-narrow"}

### What Could Be Improved

| Lesson | Action |
|--------|--------|
| Third-party API complexity underestimated | Add buffer for integration |
| Documentation started late | Begin documentation earlier |
| Stakeholder demos could be more frequent | Weekly demo sessions |
{:class="table table-single table-narrow"}

---

## Project Forecast

### Updated Project Timeline

| Stage | Original End | Forecast End | Variance |
|-------|--------------|--------------|----------|
| Stage 1 - Design | 14 Jan | 14 Jan | 0 |
| Stage 2 - Development | 28 Mar | 31 Mar | +3 days |
| Stage 3 - Testing | 30 Apr | 05 May | +5 days |
| Stage 4 - Deployment | 31 May | 05 Jun | +5 days |
{:class="table table-single table-narrow"}

### Updated Project Budget

| Category | Original | Forecast | Variance |
|----------|----------|----------|----------|
| Stage 1 | £30,000 | £29,000 | -£1,000 |
| Stage 2 | £80,000 | £70,000 | -£10,000 |
| Stage 3 | £50,000 | £52,000 | +£2,000 |
| Stage 4 | £40,000 | £40,000 | £0 |
| **Total** | **£200,000** | **£191,000** | **-£9,000** |
{:class="table table-single table-narrow"}

### Business Case Update

| Metric | Original | Revised | Status |
|--------|----------|---------|--------|
| Total cost | £200,000 | £191,000 | Better |
| Completion date | 31 May | 05 Jun | Acceptable |
| Year 1 benefits | £150,000 | £145,000 | Slight reduction |
| NPV | £320,000 | £315,000 | Still positive |
| ROI | 160% | 165% | Improved |
{:class="table table-single table-narrow"}

---

## Next Stage Plan Summary

### Stage 3 Overview

| Element | Detail |
|---------|--------|
| **Stage name** | Stage 3 - Testing and UAT |
| **Duration** | 5 weeks |
| **Budget** | £52,000 |
| **Key products** | UAT completion, bug fixes, performance tuning |
| **Key milestone** | UAT sign-off by 05 May |
{:class="table table-single table-narrow"}

### Stage 3 Resources

| Resource | Allocation | Period |
|----------|------------|--------|
| Project Manager | 50% | Full stage |
| QA Lead | 100% | Full stage |
| Testers (2) | 100% | Weeks 1-4 |
| Developers (2) | 50% | Full stage |
| Business SMEs | 50% | Weeks 2-4 |
{:class="table table-single table-narrow"}

---

## Recommendation

### Options

| Option | Description | Recommendation |
|--------|-------------|----------------|
| **1. Approve Stage 3** | Proceed as planned | **Recommended** |
| **2. Approve with conditions** | Proceed with specific changes | Not required |
| **3. Request exception plan** | Major replanning needed | Not applicable |
| **4. Stop project** | Terminate project | Not recommended |
{:class="table table-single table-narrow"}

### Recommendation

Approve Stage 3 as presented. The project remains on track to deliver planned benefits with only minor schedule variance. Budget performance is positive, and all quality criteria have been met.

---

## Approval

### Project Board Decision

| Decision | Selected |
|----------|----------|
| Approve Stage 3 | ☐ |
| Approve with conditions | ☐ |
| Request exception plan | ☐ |
| Stop project | ☐ |
{:class="table table-single table-narrow"}

### Conditions (if applicable)

| Condition | Owner | Due Date |
|-----------|-------|----------|
| | | |
{:class="table table-single table-narrow"}

### Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Project Sponsor** | | | |
| **Senior User** | | | |
| **Senior Supplier** | | | |
{:class="table table-single table-narrow"}

---

## End of Stage Report Checklist

### Preparation
- [ ] All products signed off?
- [ ] Performance data gathered?
- [ ] Issues documented?
- [ ] Lessons captured?
- [ ] Project forecast updated?
- [ ] Business case reviewed?
- [ ] Next stage plan ready?
- [ ] Risk register current?

### Review
- [ ] Report reviewed by PMO?
- [ ] Pre-meeting with sponsor?
- [ ] Board meeting scheduled?
- [ ] Papers circulated?

### Post-Meeting
- [ ] Decision recorded?
- [ ] Actions assigned?
- [ ] Next stage authorised?
- [ ] Documents baselined?

---

## Related Resources

- [Stage Plan](/projects/stage_plan) - Stage-level planning
- [Project Reporting](/projects/project_reporting) - Progress reporting
- [End of Project Report](/projects/end_of_project_report) - Project closure
- [Business Case](/projects/business_case) - Business justification
- [Lessons Learned](/projects/lessons_learned) - Learning capture

