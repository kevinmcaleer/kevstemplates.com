---
layout: project
name: Financial Planning
section: Project
process: planning
description: Complete guide to project financial planning including budgeting, cost tracking, variance analysis, and Earned Value Management.
tags: [Financial, Planning, Cost, Budget, EVM, Variance]
themes: [Planning, Financial]
downloads:
 - name: Project Budget Template
   description: Excel template for project budgeting and tracking
   file: project_budget.xlsx
 - name: Earned Value Calculator
   description: Excel template for EVM calculations
   file: earned_value_calculator.xlsx
last_updated: 2026-01-13
---

# Financial Planning

Financial planning establishes the project budget, defines how costs will be tracked, and sets up controls to manage financial performance.

---

## Purpose

Financial planning ensures:
- Adequate funding is secured
- Costs are estimated accurately
- Spending is controlled
- Variance is identified early
- Financial decisions are informed

---

## Key Components

| Component | Description |
|-----------|-------------|
| **Budget** | Approved funding allocation |
| **Cost estimate** | Detailed breakdown of expected costs |
| **Contingency** | Reserve for known risks |
| **Management reserve** | Reserve for unknown risks |
| **Cash flow** | Timing of expenditure |
| **Financial controls** | Approval and tracking processes |
{:class="table table-single table-narrow"}

---

## Cost Categories

| Category | Examples |
|----------|----------|
| **Labour** | Internal staff, contractors, consultants |
| **Hardware** | Servers, devices, infrastructure |
| **Software** | Licences, subscriptions, development |
| **Services** | Training, support, hosting |
| **Facilities** | Office space, equipment |
| **Travel** | Site visits, meetings |
| **Contingency** | Risk allowance |
{:class="table table-single table-narrow"}

---

## Budget Development Process

<div class="mermaid">
flowchart LR
    A[Estimate<br/>Costs] --> B[Add<br/>Contingency]
    B --> C[Review &<br/>Challenge]
    C --> D[Seek<br/>Approval]
    D --> E[Baseline<br/>Budget]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

---

## Estimation Approaches

| Approach | Description | Accuracy |
|----------|-------------|----------|
| **Analogous** | Based on similar past projects | Low-Medium |
| **Parametric** | Using cost per unit metrics | Medium |
| **Bottom-up** | Detailed task-level estimates | High |
| **Three-point** | Optimistic, likely, pessimistic | Medium-High |
{:class="table table-single table-narrow"}

---

## Contingency Planning

### Contingency vs Management Reserve

| Contingency | Management Reserve |
|-------------|-------------------|
| For known risks | For unknown risks |
| Included in baseline | Outside baseline |
| PM can use | Sponsor approval needed |
| Typically 10-20% | Typically 5-10% |
{:class="table table-single table-narrow"}

---

## Financial Controls

### Approval Thresholds

Define who can approve spending at different levels:

| Amount | Approver |
|--------|----------|
| < £5,000 | Project Manager |
| £5,000 - £25,000 | Senior Supplier |
| £25,000 - £100,000 | Project Board |
| > £100,000 | Programme/Portfolio |
{:class="table table-single table-narrow"}

### Change Control

All budget changes should follow change control:
- Document the change request
- Assess impact on budget
- Obtain appropriate approval
- Update baseline if approved

---

## Tracking and Reporting

Track these financial metrics:

| Metric | Description |
|--------|-------------|
| **Budget** | Approved funding |
| **Actual** | What's been spent |
| **Committed** | Contracted but not yet paid |
| **Forecast** | Expected total at completion |
| **Variance** | Difference from budget |
| **EAC** | Estimate at Completion |
{:class="table table-single table-narrow"}

---

## Budget Tracking

### Budget Structure

| Element | Description |
|---------|-------------|
| **BAC (Budget at Completion)** | Total approved budget |
| **Period budget** | Budget allocated to each period |
| **Cumulative budget** | Running total planned spend |
| **Actual spend** | What has been spent |
| **Committed** | Contracted but not yet invoiced |
| **Forecast** | Expected remaining spend |
{:class="table table-single table-narrow"}

### Budget Tracking Report

| Category | Budget | Actual | Committed | Available | Forecast | Variance |
|----------|--------|--------|-----------|-----------|----------|----------|
| Labour | £100,000 | £45,000 | £30,000 | £25,000 | £98,000 | £2,000 |
| Software | £25,000 | £22,000 | £3,000 | £0 | £25,000 | £0 |
| Hardware | £15,000 | £14,500 | £0 | £500 | £14,500 | £500 |
| Services | £10,000 | £5,000 | £4,000 | £1,000 | £10,000 | £0 |
| **Total** | **£150,000** | **£86,500** | **£37,000** | **£26,500** | **£147,500** | **£2,500** |
{:class="table table-single table-narrow"}

### Tracking Frequency

| Project Size | Tracking Frequency |
|--------------|-------------------|
| Small (< £100k) | Monthly |
| Medium (£100k-£500k) | Fortnightly |
| Large (> £500k) | Weekly |
{:class="table table-single table-narrow"}

---

## Variance Analysis

### What is Variance?

**Variance = Planned - Actual**

- **Positive variance** = Under budget (good)
- **Negative variance** = Over budget (requires attention)

### Types of Variance

| Type | Formula | Interpretation |
|------|---------|----------------|
| **Cost Variance (CV)** | Budgeted cost - Actual cost | Are we over/under budget? |
| **Schedule Variance (SV)** | Earned value - Planned value | Are we ahead/behind schedule? |
| **Rate Variance** | (Budget rate - Actual rate) × Actual hours | Are resource rates as expected? |
| **Efficiency Variance** | (Budget hours - Actual hours) × Budget rate | Are we working efficiently? |
{:class="table table-single table-narrow"}

### Variance Analysis Process

<div class="mermaid">
flowchart LR
    A[Identify<br/>Variance] --> B[Determine<br/>Cause]
    B --> C[Assess<br/>Impact]
    C --> D[Plan<br/>Response]
    D --> E[Implement &<br/>Monitor]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

### Common Causes of Variance

| Variance | Possible Causes |
|----------|-----------------|
| **Labour over budget** | Scope creep, rework, low productivity, rate increases |
| **Labour under budget** | Delayed start, fewer resources than planned |
| **Materials over budget** | Price increases, additional scope, waste |
| **Timeline variance** | Dependencies, blockers, estimation errors |
{:class="table table-single table-narrow"}

### Variance Thresholds

| Threshold | Action Required |
|-----------|-----------------|
| < 5% | Monitor |
| 5-10% | Investigate, plan correction |
| 10-15% | Escalate to sponsor |
| > 15% | Formal exception report |
{:class="table table-single table-narrow"}

---

## Earned Value Management (EVM)

### EVM Basics

Earned Value integrates scope, schedule, and cost to measure project performance.

| Metric | What It Measures | Formula |
|--------|------------------|---------|
| **PV** (Planned Value) | Budgeted cost of planned work | From schedule |
| **EV** (Earned Value) | Budgeted cost of completed work | % Complete × BAC |
| **AC** (Actual Cost) | Actual cost of completed work | From accounts |
{:class="table table-single table-narrow"}

### Performance Indices

| Index | Formula | Interpretation |
|-------|---------|----------------|
| **CPI** (Cost Performance Index) | EV ÷ AC | Cost efficiency. >1 = under budget |
| **SPI** (Schedule Performance Index) | EV ÷ PV | Schedule efficiency. >1 = ahead |
| **CV** (Cost Variance) | EV - AC | Positive = under budget |
| **SV** (Schedule Variance) | EV - PV | Positive = ahead of schedule |
{:class="table table-single table-narrow"}

### Forecasting with EVM

| Metric | Formula | Meaning |
|--------|---------|---------|
| **EAC** (Estimate at Completion) | BAC ÷ CPI | Forecasted total cost |
| **ETC** (Estimate to Complete) | EAC - AC | Cost to finish |
| **VAC** (Variance at Completion) | BAC - EAC | Expected final variance |
| **TCPI** (To-Complete Performance Index) | (BAC - EV) ÷ (BAC - AC) | Required future efficiency |
{:class="table table-single table-narrow"}

### EVM Example

**Project Status at Month 3:**
- BAC (Total Budget): £100,000
- PV (Planned to date): £40,000
- EV (Work completed): £35,000
- AC (Actually spent): £42,000

**Calculations:**
- **CV** = £35,000 - £42,000 = **-£7,000** (over budget)
- **SV** = £35,000 - £40,000 = **-£5,000** (behind schedule)
- **CPI** = £35,000 ÷ £42,000 = **0.83** (83p value per £1 spent)
- **SPI** = £35,000 ÷ £40,000 = **0.875** (87.5% of planned progress)
- **EAC** = £100,000 ÷ 0.83 = **£120,482** (forecasted total cost)

**Interpretation**: Project is over budget and behind schedule. At current performance, it will cost £120,482 to complete - £20,482 over budget.

### EVM Status Interpretation

| CPI | SPI | Status |
|-----|-----|--------|
| > 1 | > 1 | Under budget, ahead of schedule |
| > 1 | < 1 | Under budget, behind schedule |
| < 1 | > 1 | Over budget, ahead of schedule |
| < 1 | < 1 | Over budget, behind schedule |
{:class="table table-single table-narrow"}

---

## Financial Reporting

### Monthly Finance Report Contents

| Section | Content |
|---------|---------|
| **Executive summary** | Overall status, key variances |
| **Budget vs actual** | By category, cumulative |
| **Variance analysis** | Explanations for significant variances |
| **Forecast** | Expected final cost |
| **Cash flow** | Spend profile |
| **Risks** | Financial risks and mitigation |
| **Recommendations** | Actions required |
{:class="table table-single table-narrow"}

### Financial Dashboard Metrics

| Metric | Visual |
|--------|--------|
| **Budget health** | RAG status |
| **Spend vs plan** | Line chart (cumulative) |
| **Category breakdown** | Pie chart |
| **Variance trend** | Bar chart by period |
| **CPI/SPI** | Gauge charts |
| **Forecast vs budget** | Comparison bar |
{:class="table table-single table-narrow"}

---

## Cash Flow Management

### Cash Flow Planning

| Element | Consideration |
|---------|---------------|
| **Timing** | When will costs be incurred? |
| **Payment terms** | When will invoices be paid? |
| **Funding releases** | When will budget be available? |
| **Seasonal factors** | Holiday periods, year-end |
{:class="table table-single table-narrow"}

### Cash Flow Forecast

| Month | Planned | Actual | Cumulative Plan | Cumulative Actual |
|-------|---------|--------|-----------------|-------------------|
| Jan | £10,000 | £8,000 | £10,000 | £8,000 |
| Feb | £15,000 | £17,000 | £25,000 | £25,000 |
| Mar | £20,000 | £18,000 | £45,000 | £43,000 |
| Apr | £25,000 | - | £70,000 | - |
{:class="table table-single table-narrow"}

---

## Common Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Underestimating effort | Use historical data, add contingency |
| Forgetting cost categories | Use checklist of cost types |
| No contingency | Always include risk allowance |
| Infrequent tracking | Monitor costs weekly/fortnightly |
| Scope creep | Strong change control |
{:class="table table-single table-narrow"}

---

## Related Resources

- [Financial Forecasting](/projects/financial_forecasting) - Ongoing forecast management
- [Resource & Cost Modelling](/projects/resource_and_cost_modelling) - Resource planning
- [Business Case](/projects/business_case) - Investment justification
- [Estimation Techniques](/planning/estimation) - Estimation methods

