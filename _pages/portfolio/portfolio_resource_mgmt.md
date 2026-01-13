---
layout: portfolio
section: Portfolio
name: Resource Management
topic: Resource Management
color: banana-700
description: Managing people, skills, capacity, and utilisation across the portfolio to ensure resources are allocated effectively to priority investments.
tags: [Resources, Capacity, Skills, Utilisation, Planning]
themes: [Resources, Planning]
downloads:
 - name: Resource Capacity Planner
   description: Excel template for portfolio capacity planning
   file: resource_capacity_planner.xlsx
 - name: Skills Matrix Template
   description: Template for tracking team skills and capabilities
   file: skills_matrix.xlsx
last_updated: 2026-01-13
---

# Portfolio Resource Management

Portfolio resource management ensures the right people with the right skills are allocated to the highest priority work, maximising delivery capacity and capability across the portfolio.

---

## Resource Management Objectives

| Objective | Description |
|-----------|-------------|
| **Optimise allocation** | Assign resources to highest value work |
| **Balance capacity** | Match demand to available capacity |
| **Develop capability** | Build skills for future needs |
| **Improve utilisation** | Maximise productive use of resources |
| **Reduce conflicts** | Minimise resource contention |
| **Enable planning** | Inform prioritisation decisions |
{:class="table table-single table-narrow"}

---

## Resource Management Cycle

<div class="mermaid">
flowchart LR
    A[Demand<br/>Forecast] --> B[Capacity<br/>Assessment]
    B --> C[Gap<br/>Analysis]
    C --> D[Resource<br/>Allocation]
    D --> E[Monitor &<br/>Adjust]
    E --> A

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

| Phase | Activities |
|-------|------------|
| **Demand Forecast** | Collect resource requirements from investments |
| **Capacity Assessment** | Understand available capacity by skill |
| **Gap Analysis** | Identify shortfalls and surplus |
| **Allocation** | Assign resources to investments |
| **Monitor** | Track utilisation, adjust as needed |
{:class="table table-single table-narrow"}

---

## Capacity Planning

### Capacity Model

| Element | Description |
|---------|-------------|
| **Gross capacity** | Total available hours/days |
| **Productive capacity** | Less holidays, training, admin |
| **Committed capacity** | Allocated to approved work |
| **Available capacity** | Remaining for new work |
{:class="table table-single table-narrow"}

### Capacity Calculation

```
Gross Capacity: 220 days/year per FTE
Less:
  - Annual leave: 25 days
  - Public holidays: 8 days
  - Training/development: 5 days
  - Admin/meetings: 10 days
  - Sick leave (avg): 5 days
  - Buffer: 7 days
= Productive Capacity: 160 days/year (73%)
```

### Capacity Dashboard

| Resource Pool | Headcount | Productive Days | Committed | Available | Utilisation |
|---------------|-----------|-----------------|-----------|-----------|-------------|
| Project Managers | 8 | 1,280 | 1,100 | 180 | 86% |
| Business Analysts | 12 | 1,920 | 1,750 | 170 | 91% |
| Developers | 20 | 3,200 | 2,800 | 400 | 88% |
| Testers | 10 | 1,600 | 1,400 | 200 | 88% |
| **Total** | **50** | **8,000** | **7,050** | **950** | **88%** |
{:class="table table-single table-narrow"}

---

## Demand Management

### Demand Sources

| Source | Timing | Certainty |
|--------|--------|-----------|
| **In-flight projects** | Now | High |
| **Approved pipeline** | 0-3 months | High |
| **Business cases in progress** | 3-6 months | Medium |
| **Strategic initiatives** | 6-12 months | Low |
| **BAU/support** | Ongoing | Medium |
{:class="table table-single table-narrow"}

### Demand vs Capacity View

| Period | Demand (Days) | Capacity (Days) | Gap | Status |
|--------|---------------|-----------------|-----|--------|
| Q1 | 2,100 | 2,000 | -100 | Over |
| Q2 | 1,900 | 2,000 | +100 | OK |
| Q3 | 2,200 | 1,800 | -400 | Over |
| Q4 | 1,700 | 2,000 | +300 | OK |
{:class="table table-single table-narrow"}

### Managing Over-Demand

| Option | Description | Considerations |
|--------|-------------|----------------|
| **Prioritise** | Defer lower priority work | Stakeholder impact |
| **Contractors** | Bring in temporary resource | Cost, onboarding |
| **Overtime** | Increase hours | Sustainability, quality |
| **Efficiency** | Reduce effort per deliverable | Feasibility |
| **Descope** | Reduce scope of work | Business impact |
{:class="table table-single table-narrow"}

---

## Skills Management

### Skills Inventory

| Skill | Required | Current | Gap | Actions |
|-------|----------|---------|-----|---------|
| Cloud architecture | 5 | 3 | 2 | Hire, train |
| Agile delivery | 15 | 12 | 3 | Training |
| Data analytics | 8 | 5 | 3 | Hire |
| Change management | 4 | 4 | 0 | Maintain |
| Legacy systems | 3 | 6 | +3 | Transition |
{:class="table table-single table-narrow"}

### Skills Matrix

| Person | PM | BA | Dev | Test | Agile | Cloud |
|--------|----|----|-----|------|-------|-------|
| Alice | Expert | Competent | - | - | Expert | Competent |
| Bob | - | Expert | Competent | - | Competent | - |
| Carol | - | - | Expert | Competent | Expert | Expert |
| David | Competent | - | - | Expert | Competent | - |
{:class="table table-single table-narrow"}

### Skill Levels

| Level | Description |
|-------|-------------|
| **Expert** | Can lead and coach others |
| **Competent** | Works independently |
| **Developing** | Needs supervision |
| **Awareness** | Basic understanding only |
{:class="table table-single table-narrow"}

---

## Resource Allocation

### Allocation Principles

| Principle | Application |
|-----------|-------------|
| **Priority-based** | Higher priority work gets first call |
| **Skill match** | Right skills for the work |
| **Continuity** | Avoid unnecessary churn |
| **Development** | Include stretch opportunities |
| **Balance** | Spread load across team |
| **Buffer** | Reserve capacity for urgent needs |
{:class="table table-single table-narrow"}

### Allocation Process

<div class="mermaid">
flowchart LR
    A[Request<br/>Received] --> B[Assess<br/>Requirements]
    B --> C[Check<br/>Availability]
    C --> D{Available?}
    D -->|Yes| E[Allocate]
    D -->|No| F[Negotiate/<br/>Escalate]
    E --> G[Confirm &<br/>Track]
    F --> G

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

### Resource Request Template

| Field | Content |
|-------|---------|
| **Project/Programme** | Name of investment |
| **Role required** | Job role/skill needed |
| **Effort** | Days/weeks/FTE |
| **Start date** | When needed |
| **Duration** | How long for |
| **Skills required** | Specific skills |
| **Location** | On-site/remote |
| **Priority** | Portfolio priority |
{:class="table table-single table-narrow"}

---

## Utilisation Management

### Utilisation Targets

| Role | Target | Acceptable Range |
|------|--------|------------------|
| **Project Managers** | 85% | 80-90% |
| **Delivery resources** | 80% | 75-85% |
| **Specialists** | 70% | 65-80% |
| **Managers** | 60% | 50-70% |
{:class="table table-single table-narrow"}

### Utilisation Monitoring

| Person | Planned | Actual | Variance | Action |
|--------|---------|--------|----------|--------|
| Alice | 85% | 95% | +10% | Review load |
| Bob | 80% | 75% | -5% | OK |
| Carol | 80% | 60% | -20% | Reallocate |
| David | 85% | 85% | 0% | OK |
{:class="table table-single table-narrow"}

### Addressing Issues

| Issue | Response |
|-------|----------|
| **Over-utilisation** | Review priorities, add support, defer work |
| **Under-utilisation** | Reallocate, bring forward work, training |
| **Skill mismatch** | Training, reassignment, hiring |
| **Conflicts** | Prioritisation, negotiation, escalation |
{:class="table table-single table-narrow"}

---

## Resource Forecasting

### Rolling Forecast

| Resource Pool | M1 | M2 | M3 | M4 | M5 | M6 |
|---------------|----|----|----|----|----|----|
| **Demand** | 100 | 110 | 120 | 115 | 105 | 100 |
| **Capacity** | 100 | 100 | 100 | 105 | 105 | 105 |
| **Gap** | 0 | -10 | -20 | -10 | 0 | +5 |
{:class="table table-single table-narrow"}

### Scenario Planning

| Scenario | Assumption | Impact |
|----------|------------|--------|
| **Base case** | Current demand and capacity | Manageable |
| **High demand** | +20% new work approved | Shortfall Q2-Q3 |
| **Attrition** | 10% turnover | Skills gaps |
| **Delayed hiring** | 3-month recruitment delay | Extended pressure |
{:class="table table-single table-narrow"}

---

## Resource Conflicts

### Conflict Resolution

| Priority | Criteria |
|----------|----------|
| **1** | Strategic priority of investment |
| **2** | Contractual/regulatory deadlines |
| **3** | Financial impact of delay |
| **4** | Dependencies on other work |
| **5** | First-come first-served |
{:class="table table-single table-narrow"}

### Escalation Path

| Level | Decision Maker | Criteria |
|-------|----------------|----------|
| **1** | Resource Manager | Same priority, same programme |
| **2** | Programme Manager | Cross-project within programme |
| **3** | PMO Lead | Cross-programme |
| **4** | Portfolio Board | Strategic/significant impact |
{:class="table table-single table-narrow"}

---

## Workforce Planning

### Strategic Workforce Plan

| Capability | Current | Future Need | Gap | Strategy |
|------------|---------|-------------|-----|----------|
| Digital skills | 20 | 35 | 15 | Hire + train |
| Legacy systems | 15 | 8 | -7 | Transition |
| Data/Analytics | 5 | 12 | 7 | Hire |
| Agile delivery | 10 | 25 | 15 | Train |
{:class="table table-single table-narrow"}

### Sourcing Options

| Option | Best For | Lead Time | Cost |
|--------|----------|-----------|------|
| **Permanent hire** | Core, long-term skills | 3-6 months | Medium |
| **Contract** | Specialist, temporary | 2-4 weeks | High |
| **Outsource** | Non-core, commodity | 1-3 months | Variable |
| **Train existing** | Future capability | 3-12 months | Low |
| **Graduate/intern** | Future pipeline | 6-12 months | Low |
{:class="table table-single table-narrow"}

---

## Reporting

### Resource Reports

| Report | Audience | Frequency |
|--------|----------|-----------|
| **Capacity dashboard** | PMO, Managers | Weekly |
| **Utilisation report** | PMO, HR | Monthly |
| **Skills gap analysis** | Leadership | Quarterly |
| **Forecast** | Portfolio Board | Monthly |
| **Conflict log** | PMO | Weekly |
{:class="table table-single table-narrow"}

### Key Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **Overall utilisation** | 80-85% | 87% | Amber |
| **Skills coverage** | >90% | 85% | Amber |
| **Forecast accuracy** | >85% | 82% | Amber |
| **Conflict resolution** | <5 days | 4 days | Green |
| **Time to fill** | <30 days | 28 days | Green |
{:class="table table-single table-narrow"}

---

## Common Challenges

| Challenge | Mitigation |
|-----------|------------|
| **Invisible demand** | Centralised demand capture |
| **Hero culture** | Enforce sustainable utilisation |
| **Skills silos** | Cross-training, rotation |
| **Last-minute requests** | Advance planning process |
| **Poor data** | Time recording, regular updates |
| **Political allocation** | Priority-based process |
{:class="table table-single table-narrow"}

---

## Resource Management Checklist

### Setup
- [ ] Resource pools defined?
- [ ] Skills inventory created?
- [ ] Capacity model established?
- [ ] Allocation process documented?
- [ ] Tools/systems in place?
- [ ] Roles and responsibilities clear?

### Ongoing
- [ ] Demand regularly captured?
- [ ] Capacity kept current?
- [ ] Allocation decisions timely?
- [ ] Utilisation monitored?
- [ ] Conflicts resolved promptly?
- [ ] Skills gaps addressed?
- [ ] Forecasting accurate?

---

## Related Resources

- [Portfolio Management](/portfolio/portfolio_management) - Portfolio oversight
- [PMO Planning Process](/portfolio/pmo_planning_process) - Planning processes
- [Resource Planning](/projects/resource_planning) - Project-level planning
- [Portfolio Healthcheck](/portfolio/portfolio_healthcheck) - Health assessment

