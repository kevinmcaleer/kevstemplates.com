---
layout: project
section: Projects
name: Stage Plan
description: Detailed planning for a project stage, providing the baseline for day-to-day control and progress monitoring.
tags: [Stage Plan, Planning, Control, Schedule, PRINCE2]
themes: [Planning, Control]
process: planning
downloads:
 - name: Stage Plan Template
   description: Word template for creating stage plans
   file: stage_plan.docx
 - name: Stage Plan Gantt Template
   description: Excel/Project template for stage scheduling
   file: stage_plan_gantt.xlsx
last_updated: 2026-01-13
---

# Stage Plan

A Stage Plan provides detailed planning for a management stage, forming the baseline against which the Project Manager monitors and controls day-to-day progress.

---

## Purpose

The Stage Plan:
- Details how the stage will be delivered
- Provides the control baseline
- Enables day-to-day monitoring
- Identifies resources required
- Sets tolerances for the stage
- Supports progress reporting

---

## Planning Hierarchy

<div class="mermaid">
flowchart TD
    A[Project Plan] --> B[Stage 1 Plan]
    A --> C[Stage 2 Plan]
    A --> D[Stage 3 Plan]
    C --> E[Work Package 1]
    C --> F[Work Package 2]
    C --> G[Work Package 3]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

| Plan Level | Detail | Owned By |
|------------|--------|----------|
| **Project Plan** | High-level, entire project | Project Board |
| **Stage Plan** | Detailed, single stage | Project Manager |
| **Work Package** | Specific work delegation | Team Manager |
{:class="table table-single table-narrow"}

---

## Stage Plan Contents

### Essential Elements

| Section | Content |
|---------|---------|
| **Stage overview** | Objectives, scope, approach |
| **Products** | What will be delivered |
| **Activities** | Work to be performed |
| **Schedule** | Timeline and milestones |
| **Resources** | People, budget, equipment |
| **Dependencies** | Internal and external |
| **Risks** | Stage-specific risks |
| **Controls** | Monitoring and reporting |
| **Tolerances** | Permitted variance |
{:class="table table-single table-narrow"}

---

## Stage Plan Template

### Stage Overview

| Field | Content |
|-------|---------|
| **Project** | Customer Portal Enhancement |
| **Stage** | Stage 2 - Development |
| **Stage Manager** | John Smith (PM) |
| **Stage Start** | 15 January 2026 |
| **Stage End** | 31 March 2026 |
| **Version** | 1.0 |
| **Status** | Approved |
{:class="table table-single table-narrow"}

### Stage Objectives

| Objective | Success Criteria |
|-----------|------------------|
| Deliver core portal functionality | Login, Dashboard, Profile complete |
| Complete integration testing | All integration tests pass |
| Achieve performance targets | <2 second page load times |
| Prepare for UAT | Test environment ready, test cases prepared |
{:class="table table-single table-narrow"}

### Stage Scope

| In Scope | Out of Scope |
|----------|--------------|
| Login functionality | Mobile app |
| Dashboard | Admin portal |
| User profile | Reporting module |
| Integration testing | Performance testing |
| Documentation | Training delivery |
{:class="table table-single table-narrow"}

---

## Products

### Product List

| Product ID | Product | Description | Target Date |
|------------|---------|-------------|-------------|
| PD-101 | Login Screen | Customer authentication | 14 Feb |
| PD-102 | Dashboard | Main landing page | 28 Feb |
| PD-103 | User Profile | Account management | 14 Mar |
| PD-104 | Integration Tests | Automated test suite | 21 Mar |
| PD-105 | Technical Docs | System documentation | 28 Mar |
{:class="table table-single table-narrow"}

### Product Flow

<div class="mermaid">
flowchart LR
    A[Requirements<br/>Complete] --> B[Login<br/>Screen]
    A --> C[Dashboard]
    A --> D[User<br/>Profile]
    B --> E[Integration<br/>Testing]
    C --> E
    D --> E
    E --> F[Technical<br/>Docs]
    F --> G[Stage<br/>Complete]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

---

## Activities

### Activity List

| ID | Activity | Duration | Predecessors | Resources |
|----|----------|----------|--------------|-----------|
| A1 | Setup development environment | 5 days | - | Dev Lead |
| A2 | Develop Login Screen | 15 days | A1 | 2 Developers |
| A3 | Develop Dashboard | 20 days | A1 | 2 Developers |
| A4 | Develop User Profile | 15 days | A2 | 2 Developers |
| A5 | API Integration | 10 days | A2, A3, A4 | Dev Lead |
| A6 | Integration Testing | 10 days | A5 | QA Team |
| A7 | Documentation | 5 days | A5 | BA |
| A8 | Stage Review | 2 days | A6, A7 | PM |
{:class="table table-single table-narrow"}

### Activity Network

<div class="mermaid">
flowchart LR
    A1[A1: Setup<br/>5 days] --> A2[A2: Login<br/>15 days]
    A1 --> A3[A3: Dashboard<br/>20 days]
    A2 --> A4[A4: Profile<br/>15 days]
    A2 --> A5[A5: Integration<br/>10 days]
    A3 --> A5
    A4 --> A5
    A5 --> A6[A6: Testing<br/>10 days]
    A5 --> A7[A7: Docs<br/>5 days]
    A6 --> A8[A8: Review<br/>2 days]
    A7 --> A8

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A1,A2,A3,A4,A5,A6,A7,A8 blue
</div>

---

## Schedule

### Milestone Schedule

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Stage Start | 15 Jan 2026 | Complete |
| Dev Environment Ready | 20 Jan 2026 | On Track |
| Login Screen Complete | 14 Feb 2026 | On Track |
| Dashboard Complete | 28 Feb 2026 | On Track |
| Profile Complete | 14 Mar 2026 | On Track |
| Integration Complete | 21 Mar 2026 | On Track |
| Stage End | 31 Mar 2026 | On Track |
{:class="table table-single table-narrow"}

### Gantt Chart Summary

```
Task                    Jan        Feb        Mar
Setup                   ████
Login Development            ████████████
Dashboard Development        ████████████████████
Profile Development                    ████████████
API Integration                              ████████
Integration Testing                                ████████
Documentation                                      ████
Stage Review                                           ██
```

---

## Resources

### Resource Plan

| Resource | Role | Allocation | Period |
|----------|------|------------|--------|
| John Smith | Project Manager | 50% | Full stage |
| Jane Doe | Dev Lead | 100% | Full stage |
| Bob Wilson | Developer | 100% | Weeks 1-10 |
| Carol Brown | Developer | 100% | Weeks 1-10 |
| Dave Jones | QA Lead | 50% | Weeks 8-11 |
| Eve Taylor | BA | 50% | Weeks 9-11 |
{:class="table table-single table-narrow"}

### Resource Loading

| Week | PM | Dev Lead | Dev 1 | Dev 2 | QA | BA |
|------|-----|----------|-------|-------|-----|-----|
| 1 | 50% | 100% | 100% | 100% | - | - |
| 2-4 | 50% | 100% | 100% | 100% | - | - |
| 5-7 | 50% | 100% | 100% | 100% | - | - |
| 8-9 | 50% | 100% | 100% | 100% | 50% | - |
| 10 | 50% | 100% | 50% | 50% | 100% | 50% |
| 11 | 50% | 100% | - | - | 100% | 100% |
{:class="table table-single table-narrow"}

---

## Budget

### Stage Budget

| Category | Budget | Forecast | Variance |
|----------|--------|----------|----------|
| **Labour - Internal** | £45,000 | £45,000 | £0 |
| **Labour - External** | £20,000 | £18,000 | £2,000 |
| **Infrastructure** | £5,000 | £5,000 | £0 |
| **Tools/Licences** | £3,000 | £3,500 | -£500 |
| **Contingency** | £7,000 | £0 | £7,000 |
| **Total** | **£80,000** | **£71,500** | **£8,500** |
{:class="table table-single table-narrow"}

---

## Dependencies

### Internal Dependencies

| Dependency | Source | Required By | Status |
|------------|--------|-------------|--------|
| API specifications | Stage 1 | Week 1 | Complete |
| Test data | QA Team | Week 8 | On Track |
| Security review | Security Team | Week 10 | On Track |
{:class="table table-single table-narrow"}

### External Dependencies

| Dependency | Provider | Required By | Status |
|------------|----------|-------------|--------|
| Cloud environment | AWS | Week 1 | Complete |
| SSL certificates | Certificate provider | Week 9 | On Track |
| Payment gateway API | Third party | Week 8 | At Risk |
{:class="table table-single table-narrow"}

---

## Risks

### Stage-Specific Risks

| ID | Risk | Probability | Impact | Response |
|----|------|-------------|--------|----------|
| R1 | Key developer unavailable | Medium | High | Cross-train, contract backup |
| R2 | API integration issues | Medium | Medium | Early spike, vendor contact |
| R3 | Performance targets not met | Low | High | Early performance testing |
| R4 | Scope creep | Medium | Medium | Change control, scope freeze |
{:class="table table-single table-narrow"}

---

## Controls

### Progress Monitoring

| Control | Frequency | Audience |
|---------|-----------|----------|
| **Daily stand-up** | Daily | Delivery team |
| **Checkpoint report** | Weekly | PM |
| **Highlight report** | Fortnightly | Project Board |
| **Milestone review** | At milestones | PM, Team Leads |
{:class="table table-single table-narrow"}

### Quality Controls

| Control | When Applied |
|---------|--------------|
| **Code review** | Before merge |
| **Unit testing** | During development |
| **Integration testing** | After component completion |
| **Quality gate** | Before stage end |
{:class="table table-single table-narrow"}

---

## Tolerances

### Stage Tolerances

| Dimension | Tolerance | Escalation |
|-----------|-----------|------------|
| **Time** | +10 days / -5 days | Project Board |
| **Cost** | +£8,000 / -£8,000 (10%) | Project Board |
| **Scope** | No deviation | Project Board |
| **Quality** | As per quality criteria | PM |
| **Risk** | New high-impact risk | Project Board |
{:class="table table-single table-narrow"}

---

## Creating a Stage Plan

### Process

<div class="mermaid">
flowchart LR
    A[Review<br/>Project Plan] --> B[Define<br/>Products]
    B --> C[Identify<br/>Activities]
    C --> D[Estimate &<br/>Schedule]
    D --> E[Assign<br/>Resources]
    E --> F[Analyse<br/>Risks]
    F --> G[Set<br/>Controls]
    G --> H[Seek<br/>Approval]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H blue
</div>

### Planning Steps

| Step | Activities |
|------|------------|
| **1. Understand context** | Review project plan, previous stage |
| **2. Define products** | List products, create descriptions |
| **3. Identify activities** | Break down work, sequence activities |
| **4. Estimate** | Effort, duration, cost |
| **5. Schedule** | Create timeline, identify critical path |
| **6. Resource** | Assign resources, resolve conflicts |
| **7. Risk** | Identify and plan for risks |
| **8. Controls** | Set tolerances, reporting |
| **9. Document** | Compile stage plan |
| **10. Approve** | Present to Project Board |
{:class="table table-single table-narrow"}

---

## Stage Plan Approval

### Approval Criteria

| Criterion | Evidence |
|-----------|----------|
| Products clearly defined | Product descriptions complete |
| Schedule realistic | Resource availability confirmed |
| Budget adequate | Cost estimates validated |
| Risks identified | Risk register updated |
| Dependencies managed | Owners confirmed |
| Controls appropriate | Reporting schedule agreed |
{:class="table table-single table-narrow"}

### Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Project Manager** | | | |
| **Project Sponsor** | | | |
| **Senior User** | | | |
| **Senior Supplier** | | | |
{:class="table table-single table-narrow"}

---

## Stage Plan Checklist

### Before Approval
- [ ] Objectives clear and measurable?
- [ ] Products fully defined?
- [ ] Activities comprehensive?
- [ ] Schedule realistic?
- [ ] Resources available and assigned?
- [ ] Budget adequate?
- [ ] Dependencies identified?
- [ ] Risks assessed?
- [ ] Controls defined?
- [ ] Tolerances set?

### During Stage
- [ ] Progress tracked against plan?
- [ ] Issues and changes managed?
- [ ] Risks monitored?
- [ ] Resources managed?
- [ ] Quality maintained?
- [ ] Reports produced?

---

## Related Resources

- [Project Planning](/projects/project_planning) - Planning techniques
- [Work Package](/projects/work_package) - Work delegation
- [End of Stage Report](/projects/end_of_stage_report) - Stage closure
- [Project Reporting](/projects/project_reporting) - Progress reporting
- [Risk Register](/projects/risk_register) - Risk management

