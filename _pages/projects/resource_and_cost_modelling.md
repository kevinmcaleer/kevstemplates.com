---
layout: project
name: Resource & Cost Modelling
section: Project
process: planning
topic: Planning
description: Planning resources, delivery and interdependencies with cost forecasting.
tags: [Planning, Resource, Cost, Modelling, Forecasting]
downloads:
 - name: Resource and Cost Model
   description: Model project resource costs against actuals
   file: resource_and_cost_model.xlsx
themes: [Resource management, Cost management, Financial, Planning]
last_updated: 2026-01-13
---

# Resource and Cost Modelling

A resource and cost model forecasts the total cost of resources and materials for a project, along with when those costs will be incurred.

---

## Purpose

Resource and cost modelling enables:
- Accurate budget forecasting
- Resource capacity planning
- Cash flow prediction
- Variance tracking
- Informed decision-making

---

## Model Components

| Component | Description |
|-----------|-------------|
| **Resources** | People needed (roles, skills) |
| **Rates** | Cost per day/hour |
| **Allocation** | Days/hours per period |
| **Timeline** | When resources are needed |
| **Non-labour costs** | Hardware, software, services |
| **Actuals** | What was actually spent |
{:class="table table-single table-narrow"}

---

## Building the Model

<div class="mermaid">
flowchart LR
    A[List<br/>Resources] --> B[Add<br/>Rates]
    B --> C[Allocate<br/>Time]
    C --> D[Calculate<br/>Costs]
    D --> E[Profile<br/>Spending]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

---

## Resource Planning Steps

### 1. Identify Resource Requirements
| Question | Purpose |
|----------|---------|
| What roles are needed? | Define team structure |
| What skills are required? | Match skills to tasks |
| How many of each? | Determine quantities |
| When are they needed? | Plan timing |
{:class="table table-single table-narrow"}

### 2. Assign Day Rates

| Resource Type | Considerations |
|---------------|----------------|
| **Internal staff** | Salary cost + overheads |
| **Contractors** | Market day rates |
| **Consultants** | Specialist rates |
| **Offshore** | Location-adjusted rates |
{:class="table table-single table-narrow"}

### 3. Allocate to Timeline
Spread resource effort across the project timeline:
- Consider ramp-up and ramp-down
- Account for holidays and leave
- Plan for realistic utilisation (not 100%)
- Align with project milestones

---

## Example Model Structure

| Resource | Role | Rate | Jan | Feb | Mar | Apr | Total |
|----------|------|------|-----|-----|-----|-----|-------|
| PM | Project Manager | £600 | 20 | 20 | 20 | 20 | £48,000 |
| BA1 | Business Analyst | £500 | 15 | 20 | 10 | 0 | £22,500 |
| Dev1 | Developer | £550 | 5 | 20 | 20 | 10 | £30,250 |
| | | | | | | **Total** | **£100,750** |
{:class="table table-single table-narrow"}

---

## Non-Labour Costs

Don't forget to include:

| Category | Examples |
|----------|----------|
| **Hardware** | Servers, devices, equipment |
| **Software** | Licences, subscriptions |
| **Services** | Hosting, support, training |
| **Travel** | Site visits, meetings |
| **Facilities** | Office space, utilities |
| **Contingency** | Risk allowance |
{:class="table table-single table-narrow"}

---

## Tracking Actuals

Compare planned vs actual spending:

| Metric | Description |
|--------|-------------|
| **Planned** | Budgeted cost for period |
| **Actual** | What was actually spent |
| **Variance** | Difference (+ = underspend) |
| **% Variance** | Variance as percentage |
{:class="table table-single table-narrow"}

### Example Variance Tracking

| Month | Planned | Actual | Variance |
|-------|---------|--------|----------|
| Jan | £25,000 | £23,500 | +£1,500 |
| Feb | £30,000 | £32,000 | -£2,000 |
| Mar | £28,000 | £28,500 | -£500 |
{:class="table table-single table-narrow"}

---

## Cash Flow Profile

Model when costs will be incurred:
- Front-loaded (heavy early spend)
- Back-loaded (heavy late spend)
- Even (spread throughout)
- Stepped (aligned to phases)

---

## Model Maintenance

| Activity | Frequency |
|----------|-----------|
| Update actuals | Weekly |
| Review forecast | Fortnightly |
| Rebaseline | At stage gates |
| Variance analysis | Monthly |
{:class="table table-single table-narrow"}

---

## Common Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Underestimating rates | Use current market data |
| 100% utilisation | Plan for realistic capacity |
| Forgetting ramp-up | Include learning curve |
| Missing cost categories | Use checklist |
| Static model | Update regularly |
{:class="table table-single table-narrow"}

---

## Modelling Checklist

- [ ] All resource roles identified?
- [ ] Day rates confirmed?
- [ ] Timeline allocation complete?
- [ ] Non-labour costs included?
- [ ] Contingency added?
- [ ] Cash flow profiled?
- [ ] Actuals tracking set up?
- [ ] Review schedule established?

---

## Related Resources

- [Financial Planning](/projects/financial_planning) - Budget development
- [Financial Forecasting](/projects/financial_forecasting) - Ongoing forecasts
- [Project Resources / OBS](/projects/project_resources_obs) - Resource organisation

