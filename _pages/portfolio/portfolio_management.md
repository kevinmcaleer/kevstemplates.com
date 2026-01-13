---
layout: portfolio
section: Portfolio
name: Portfolio Management
topic: Portfolio Management
color: stone-500
description: Strategic management of programmes and projects to maximise organisational value, balance risk, and align investments with strategic objectives.
tags: [Portfolio, Strategy, Investment, Prioritisation, PMO]
themes: [Governance, Strategy]
downloads:
 - name: Portfolio Dashboard Template
   description: Excel template for portfolio status dashboard
   file: portfolio_dashboard.xlsx
 - name: Investment Prioritisation Matrix
   description: Template for scoring and prioritising investments
   file: investment_prioritisation.xlsx
last_updated: 2026-01-13
---

# Portfolio Management

Portfolio management is the strategic oversight of programmes and projects to maximise value, balance risk, and ensure investments align with organisational strategy.

---

## What is Portfolio Management?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> Portfolio management is the coordinated collection of strategic processes and decisions that together enable the most effective balance of organisational change and business as usual.
</div>

| Level | Focus | Timeframe |
|-------|-------|-----------|
| **Project** | Deliver outputs correctly | Weeks to months |
| **Programme** | Achieve outcomes and benefits | Months to years |
| **Portfolio** | Maximise strategic value | Ongoing, strategic |
{:class="table table-single table-narrow"}

---

## Portfolio Management Objectives

| Objective | Description |
|-----------|-------------|
| **Strategic alignment** | Ensure investments support strategy |
| **Value maximisation** | Get best return from investments |
| **Risk balance** | Manage aggregate risk exposure |
| **Resource optimisation** | Allocate resources effectively |
| **Capability development** | Build organisational capability |
| **Governance** | Provide oversight and control |
{:class="table table-single table-narrow"}

---

## Portfolio Management Cycle

<div class="mermaid">
flowchart LR
    A[Strategy<br/>Alignment] --> B[Portfolio<br/>Definition]
    B --> C[Prioritisation &<br/>Selection]
    C --> D[Resource<br/>Allocation]
    D --> E[Portfolio<br/>Execution]
    E --> F[Review &<br/>Rebalance]
    F --> A

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

| Phase | Activities |
|-------|------------|
| **Strategy Alignment** | Connect portfolio to strategic objectives |
| **Portfolio Definition** | Define scope, categorise investments |
| **Prioritisation** | Score, rank, and select investments |
| **Resource Allocation** | Allocate budget and resources |
| **Execution** | Deliver and monitor performance |
| **Review** | Assess, rebalance, redirect |
{:class="table table-single table-narrow"}

---

## Portfolio Governance

### Governance Structure

<div class="mermaid">
flowchart TD
    A[Executive Board/<br/>Investment Committee] --> B[Portfolio Board]
    B --> C[PMO]
    C --> D[Programmes]
    C --> E[Projects]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

### Decision Rights

| Decision | Programme/Project | PMO | Portfolio Board | Executive |
|----------|-------------------|-----|-----------------|-----------|
| Day-to-day delivery | Approve | Monitor | - | - |
| Change within tolerance | Approve | Monitor | Inform | - |
| New investment < £100k | Propose | Recommend | Approve | Inform |
| New investment > £100k | Propose | Recommend | Recommend | Approve |
| Stop/pause investment | Recommend | Recommend | Approve | Inform |
| Strategic rebalancing | - | Recommend | Recommend | Approve |
{:class="table table-single table-narrow"}

---

## Portfolio Categorisation

### Investment Categories

| Category | Purpose | Examples |
|----------|---------|----------|
| **Run** | Keep the lights on | Maintenance, compliance |
| **Grow** | Improve current business | Enhancement, efficiency |
| **Transform** | Create new capabilities | Innovation, new markets |
{:class="table table-single table-narrow"}

### Target Portfolio Mix

| Category | Current | Target | Direction |
|----------|---------|--------|-----------|
| Run | 60% | 50% | Reduce |
| Grow | 30% | 35% | Increase |
| Transform | 10% | 15% | Increase |
{:class="table table-single table-narrow"}

### By Strategic Theme

| Strategic Theme | Budget Allocation |
|-----------------|-------------------|
| Customer Experience | 35% |
| Operational Excellence | 25% |
| Digital Transformation | 20% |
| Regulatory Compliance | 15% |
| Innovation | 5% |
{:class="table table-single table-narrow"}

---

## Prioritisation

### Prioritisation Criteria

| Criterion | Weight | Description |
|-----------|--------|-------------|
| **Strategic alignment** | 25% | Fit with strategy |
| **Financial return** | 20% | ROI, NPV, payback |
| **Risk** | 15% | Delivery and business risk |
| **Feasibility** | 15% | Capability to deliver |
| **Dependencies** | 10% | Enabling other investments |
| **Urgency** | 10% | Time sensitivity |
| **Resource availability** | 5% | Capacity to resource |
{:class="table table-single table-narrow"}

### Scoring Matrix

| Investment | Strategic (25) | Financial (20) | Risk (15) | Feasibility (15) | Deps (10) | Urgency (10) | Resource (5) | Total |
|------------|----------------|----------------|-----------|------------------|-----------|--------------|--------------|-------|
| Project A | 22 | 18 | 12 | 13 | 8 | 9 | 4 | **86** |
| Project B | 20 | 16 | 14 | 12 | 6 | 7 | 5 | **80** |
| Project C | 18 | 20 | 10 | 11 | 9 | 8 | 3 | **79** |
{:class="table table-single table-narrow"}

### Prioritisation Methods

| Method | Description | Best For |
|--------|-------------|----------|
| **Scoring model** | Weighted criteria scoring | Objective comparison |
| **Pairwise comparison** | Compare each pair | Small number of options |
| **MoSCoW** | Must/Should/Could/Won't | Quick categorisation |
| **Bubble chart** | Plot on risk/value axes | Visual portfolio view |
| **Forced ranking** | Stack rank all investments | Clear priority order |
{:class="table table-single table-narrow"}

---

## Portfolio Balancing

### Balance Dimensions

| Dimension | Balance Required |
|-----------|------------------|
| **Risk** | High risk / Low risk |
| **Timeframe** | Quick wins / Long-term |
| **Investment size** | Large / Small |
| **Strategic theme** | Across all themes |
| **Business area** | Across functions |
| **Type** | Run / Grow / Transform |
{:class="table table-single table-narrow"}

### Portfolio Bubble Chart

Plot investments on a risk/value grid:

```
High   │ ○ Project C    ● Project A
Value  │      (risk?)        (invest)
       │
       │ ○ Project D    ● Project B
       │    (avoid)        (monitor)
Low    └────────────────────────────
       Low                     High
                 Risk
```

---

## Demand Management

### Demand Pipeline

<div class="mermaid">
flowchart LR
    A[Idea/<br/>Request] --> B[Initial<br/>Screen]
    B --> C[Business<br/>Case]
    C --> D[Prioritisation]
    D --> E{Approved?}
    E -->|Yes| F[In Portfolio]
    E -->|No| G[Backlog/<br/>Reject]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

### Gate Criteria

| Gate | Criteria |
|------|----------|
| **Initial screen** | Strategic fit, rough feasibility, sponsor identified |
| **Business case** | Benefits quantified, costs estimated, risks assessed |
| **Approval** | Prioritised, resourced, funded |
{:class="table table-single table-narrow"}

---

## Resource Management

### Capacity Planning

| Resource Type | Capacity | Committed | Available |
|---------------|----------|-----------|-----------|
| Project Managers | 10 FTE | 8 FTE | 2 FTE |
| Business Analysts | 15 FTE | 14 FTE | 1 FTE |
| Developers | 25 FTE | 22 FTE | 3 FTE |
| Architects | 5 FTE | 5 FTE | 0 FTE |
{:class="table table-single table-narrow"}

### Resource Allocation Principles

| Principle | Application |
|-----------|-------------|
| **Strategic priority** | Higher priority = first call on resources |
| **Skill matching** | Right skills for the work |
| **Utilisation targets** | Avoid over/under allocation |
| **Flexibility** | Buffer for urgent needs |
| **Development** | Stretch assignments for growth |
{:class="table table-single table-narrow"}

---

## Portfolio Performance

### Key Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| **On-time delivery** | % delivered on schedule | >80% |
| **On-budget delivery** | % within budget | >85% |
| **Benefits realisation** | % of forecast benefits | >90% |
| **Resource utilisation** | Productive use of capacity | 80-85% |
| **Pipeline health** | Ratio of pipeline to capacity | 1.5-2x |
| **Portfolio balance** | Mix across categories | Per target |
{:class="table table-single table-narrow"}

### Portfolio Dashboard

| Dimension | Status | Trend |
|-----------|--------|-------|
| Strategic alignment | Green | → |
| Delivery performance | Amber | ↓ |
| Resource health | Amber | → |
| Financial performance | Green | ↑ |
| Risk exposure | Green | → |
| Benefits tracking | Green | → |
{:class="table table-single table-narrow"}

---

## Portfolio Reporting

### Report Types

| Report | Audience | Frequency |
|--------|----------|-----------|
| **Portfolio dashboard** | All stakeholders | Real-time |
| **Executive summary** | Board/Executives | Monthly |
| **Detailed portfolio report** | Portfolio Board | Monthly |
| **Resource report** | PMO/Managers | Weekly |
| **Benefits report** | Sponsors/Finance | Quarterly |
| **Risk report** | Portfolio Board | Monthly |
{:class="table table-single table-narrow"}

### Executive Summary Content

| Section | Content |
|---------|---------|
| **Overall status** | RAG and headline |
| **Key achievements** | Major milestones this period |
| **Issues/escalations** | Items requiring attention |
| **Financial summary** | Budget vs actual |
| **Benefits update** | Realisation progress |
| **Decisions required** | Items for approval |
{:class="table table-single table-narrow"}

---

## Portfolio Reviews

### Review Types

| Review | Focus | Frequency |
|--------|-------|-----------|
| **Health check** | Individual investment status | Monthly |
| **Portfolio review** | Aggregate performance | Quarterly |
| **Strategic review** | Alignment, rebalancing | Annual |
| **Gate review** | Go/no-go decisions | At gates |
{:class="table table-single table-narrow"}

### Quarterly Portfolio Review

| Agenda Item | Questions |
|-------------|-----------|
| **Performance** | Are we delivering? What's off track? |
| **Benefits** | Are benefits on track? Adjustments needed? |
| **Resources** | Capacity issues? Skills gaps? |
| **Risks** | Aggregate risk acceptable? Actions needed? |
| **Balance** | Portfolio balanced? Reallocation needed? |
| **Pipeline** | What's coming? Capacity to absorb? |
| **Decisions** | Investments to add/stop/pause? |
{:class="table table-single table-narrow"}

---

## PMO Role in Portfolio Management

### PMO Functions

| Function | Activities |
|----------|------------|
| **Governance** | Standards, processes, compliance |
| **Reporting** | Consolidate, analyse, present |
| **Resource management** | Capacity planning, allocation |
| **Demand management** | Pipeline, prioritisation support |
| **Assurance** | Health checks, reviews |
| **Tools** | Systems, templates, methods |
| **Support** | PM coaching, training |
{:class="table table-single table-narrow"}

---

## Common Challenges

| Challenge | Mitigation |
|-----------|------------|
| **Too many priorities** | Ruthless prioritisation, say no |
| **Resource constraints** | Capacity-based planning |
| **Poor visibility** | Consistent reporting, dashboards |
| **Strategic drift** | Regular alignment reviews |
| **Zombie projects** | Active portfolio pruning |
| **Benefits not tracked** | Benefits realisation framework |
| **Siloed decisions** | Portfolio-level governance |
{:class="table table-single table-narrow"}

---

## Portfolio Management Checklist

### Setup
- [ ] Portfolio scope defined?
- [ ] Governance structure established?
- [ ] Prioritisation criteria agreed?
- [ ] Categorisation framework in place?
- [ ] Reporting requirements defined?
- [ ] PMO capability in place?

### Ongoing
- [ ] Regular prioritisation happening?
- [ ] Resources actively managed?
- [ ] Performance tracked and reported?
- [ ] Benefits being monitored?
- [ ] Risks aggregated and managed?
- [ ] Portfolio regularly reviewed and rebalanced?

---

## Related Resources

- [PMO Planning Process](/portfolio/pmo_planning_process) - PMO processes
- [Portfolio Resource Management](/portfolio/portfolio_resource_mgmt) - Resource management
- [Portfolio Reporting](/portfolio/portfolio_reporting) - Reporting
- [Portfolio Risk Management](/portfolio/portfolio_risk_mgmt) - Risk management
- [Portfolio Healthcheck](/portfolio/portfolio_healthcheck) - Health assessment

