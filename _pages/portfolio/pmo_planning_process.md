---
layout: portfolio
section: Portfolio
topic: Planning
name: PMO Planning Process
description: Planning frameworks for managing resources, delivery schedules, interdependencies, and costs across the portfolio.
color: purple-700
tags: [PMO, Planning, Resources, Dependencies, Delivery]
themes: [Planning, Governance]
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

## PMO Planning Process

The PMO planning process provides the frameworks and disciplines needed to plan, coordinate, and monitor delivery across the portfolio. It brings together demand management, resource planning, dependency management, financial forecasting, and delivery monitoring into a coherent planning cycle.

---

## Process Overview

Portfolio planning governs three critical dimensions:

- The volume of work in-flight via [demand management](/portfolio/portfolio_demand_mgmt)
- The delivery of that work through [portfolio management](/portfolio/portfolio_management)
- The costs, benefits, and value delivered through the portfolio

### Planning Cycle

<div class="mermaid">
flowchart LR
    A[Demand<br/>Assessment] --> B[Resource<br/>Planning]
    B --> C[Cost<br/>Forecasting]
    C --> D[Dependency<br/>Mapping]
    D --> E[Schedule<br/>Integration]
    E --> F[Delivery<br/>Monitoring]
    F --> A

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

### Planning Steps

| Step | Activities | Outputs |
|------|-----------|---------|
| **1. Demand assessment** | Review pipeline, confirm approved work, assess capacity requirements | Confirmed demand profile |
| **2. Resource planning** | Match demand to capacity, identify gaps, plan procurement | Resource allocation plan |
| **3. Cost forecasting** | Forecast costs based on resource plans and non-staff costs | Financial forecast |
| **4. Dependency mapping** | Identify and map cross-programme dependencies | Dependency register |
| **5. Schedule integration** | Align programme schedules, resolve conflicts | Integrated portfolio plan |
| **6. Delivery monitoring** | Track progress, variance, and risks | Performance reports |
{:class="table table-single table-narrow"}

---

## Roles and Responsibilities

### Planning Roles

| Role | Responsibilities |
|------|-----------------|
| **Resource Planner** | Manages the pool of specialist resources. Releases resources to projects via the engagement process. Approves timesheets, annual leave, and other personnel activities. |
| **Planner** | Creates, updates, and manages project, programme, and portfolio plans. May be dedicated to a single programme or spread across engagements. Reports to the PMO Resource Manager. |
| **SRO** | Accountable for delivery of outcomes and benefits. Sets strategic direction and priorities. Chairs the programme board. |
| **Programme Manager** | Manages day-to-day programme delivery. Owns the programme plan. Manages programme-level risks and issues. Coordinates workstream leads. |
| **PMO Manager** | Oversees the planning process. Ensures standards and consistency. Consolidates portfolio-level views. |
| **Finance Business Partner** | Validates cost forecasts. Manages budget allocations. Reports financial performance. |
{:class="table table-single table-narrow"}

### RACI for Planning Activities

| Activity | PMO Manager | Planner | Resource Planner | Programme Mgr | SRO |
|----------|-------------|---------|-------------------|---------------|-----|
| Demand assessment | A | C | C | R | I |
| Resource planning | A | C | R | C | I |
| Cost forecasting | A | R | C | C | I |
| Dependency mapping | A | R | C | R | I |
| Schedule integration | R | R | C | C | I |
| Delivery monitoring | A | R | C | R | I |
| Portfolio reporting | R | C | C | C | I |
{:class="table table-single table-narrow"}

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

## Resource Planning

### Resource Planning Process

<div class="mermaid">
flowchart LR
    A[Demand<br/>Forecast] --> B[Capacity<br/>Assessment]
    B --> C[Gap<br/>Analysis]
    C --> D[Sourcing<br/>Options]
    D --> E[Allocation<br/>Decisions]
    E --> F[Monitor &<br/>Adjust]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

### Capacity Planning

| Element | Description |
|---------|-------------|
| **Gross capacity** | Total headcount × available days per person |
| **Net capacity** | Gross capacity minus leave, training, BAU, and admin |
| **Committed capacity** | Resources already allocated to approved work |
| **Available capacity** | Net capacity minus committed capacity |
| **Pipeline demand** | Resource requirements for approved but not-yet-started work |
| **Capacity gap** | Pipeline demand minus available capacity |
{:class="table table-single table-narrow"}

### Capacity Calculation Example

| Factor | Days |
|--------|------|
| Working days per year | 260 |
| Less: Annual leave | (27) |
| Less: Bank holidays | (8) |
| Less: Training/development | (5) |
| Less: Sickness allowance | (5) |
| Less: Admin/non-project | (15) |
| **Net available days** | **200** |
{:class="table table-single table-narrow"}

### Engagement Process

| Step | Description |
|------|-------------|
| **1. Request** | Programme Manager submits resource request to Resource Planner |
| **2. Match** | Resource Planner identifies suitable resources |
| **3. Negotiate** | Agree start date, duration, and allocation percentage |
| **4. Confirm** | Resource Planner confirms allocation, notifies resource |
| **5. Onboard** | Programme team onboards the resource |
| **6. Release** | Resource returned to pool at end of engagement |
{:class="table table-single table-narrow"}

See [Portfolio Resource Management](/portfolio/portfolio_resource_mgmt) for detailed resource management guidance.

---

## Dependency Management

### Types of Dependencies

| Type | Description | Example |
|------|-------------|---------|
| **Mandatory** | Must be completed before the dependent can start | Infrastructure must be built before application deployment |
| **Discretionary** | Preferred sequencing but not strictly required | User training before go-live (could run in parallel) |
| **External** | Dependent on an external party or event | Vendor delivering a component |
| **Internal** | Between programmes or projects within the portfolio | Shared platform development |
{:class="table table-single table-narrow"}

### Dependency Register

| ID | From | To | Type | Description | Status | Owner | Due Date |
|----|------|----|------|-------------|--------|-------|----------|
| D001 | Prog A | Prog B | Mandatory | Data platform required for analytics | On Track | PM-A | Q2 2026 |
| D002 | Prog C | External | External | Vendor API delivery | At Risk | PM-C | Q3 2026 |
| D003 | Proj 5 | Proj 8 | Internal | Shared authentication service | On Track | Architect | Q2 2026 |
{:class="table table-single table-narrow"}

### Managing Dependencies

| Activity | Frequency | Responsibility |
|----------|-----------|----------------|
| **Identify new dependencies** | Ongoing | Programme Managers |
| **Update dependency register** | Weekly | PMO Planner |
| **Review dependency status** | Fortnightly | PMO Manager + PMs |
| **Escalate at-risk dependencies** | As needed | PMO Manager |
| **Dependency impact assessment** | When status changes | PMO Planner |
{:class="table table-single table-narrow"}

---

## Cost Forecasting

### Forecast Components

| Component | Source | Update Frequency |
|-----------|--------|------------------|
| **Staff costs** | Resource plan × day rates | Monthly |
| **Contractor costs** | Resource plan × contractor rates | Monthly |
| **Technology costs** | Licences, infrastructure, hosting | Quarterly |
| **Third-party costs** | Vendor contracts, consultancy | As contracted |
| **Other costs** | Travel, training, facilities | Quarterly |
| **Contingency** | Risk-based contingency allocation | Monthly |
{:class="table table-single table-narrow"}

### Forecast Accuracy Targets

| Time Horizon | Accuracy Target |
|-------------|-----------------|
| Current month | ±5% |
| Current quarter | ±10% |
| Current year | ±15% |
| Next year | ±25% |
{:class="table table-single table-narrow"}

---

## Schedule Integration

### Integrated Portfolio Plan

The integrated portfolio plan brings together all programme and project schedules into a single view showing:

- Key milestones across all programmes
- Dependencies between programmes
- Resource demand timeline
- Critical path through the portfolio
- Decision points and gates

### Planning Levels

| Level | Content | Audience | Update Frequency |
|-------|---------|----------|------------------|
| **Portfolio plan** | Strategic milestones, programme-level view | Portfolio Board, Executives | Monthly |
| **Programme plan** | Workstream milestones, key deliverables | Programme Board | Fortnightly |
| **Project plan** | Detailed activities and tasks | Project team | Weekly |
{:class="table table-single table-narrow"}

### Planning Standards

| Standard | Requirement |
|----------|------------|
| **Tool** | All plans maintained in the approved PPM tool |
| **Baseline** | All plans baselined at approval; re-baseline only with approval |
| **Milestones** | Key milestones tagged and reportable at portfolio level |
| **Dependencies** | Cross-programme dependencies linked in the tool |
| **Resource loading** | Plans resource-loaded to enable capacity analysis |
| **Progress** | Actual progress recorded at least fortnightly |
{:class="table table-single table-narrow"}

---

## Process of Change

When changes affect the portfolio plan, a structured change process ensures impacts are understood before decisions are made.

### Change Triggers

| Trigger | Example |
|---------|---------|
| **New demand** | Unplanned regulatory requirement |
| **Scope change** | Programme scope increase or decrease |
| **Resource change** | Key resource leaving, new capacity available |
| **Schedule change** | External deadline brought forward |
| **Budget change** | Mid-year budget reduction |
| **Strategic change** | Organisational restructure, strategy update |
{:class="table table-single table-narrow"}

### Change Impact Assessment

| Dimension | Assessment Questions |
|-----------|---------------------|
| **Schedule** | Which milestones are affected? By how much? |
| **Resources** | What additional or different resources are needed? |
| **Cost** | What is the cost impact? Can it be absorbed? |
| **Dependencies** | Which other programmes are affected? |
| **Benefits** | Are forecast benefits still achievable? |
| **Risk** | Does this change the risk profile? |
{:class="table table-single table-narrow"}

---

## Project Sizing Tool

The [Project Sizing Tool](/portfolio/project_sizing_tool) determines the appropriate level of governance and control for each project. The PMO uses the sizing tool output to decide:

- Which templates and deliverables are required
- The level of PMO oversight and reporting
- Gate review requirements
- Board and governance arrangements

---

## Folder and Filing Structure

A consistent folder structure ensures that portfolio documentation is easy to find and maintain.

### Standard Structure

| Folder | Contents |
|--------|----------|
| **01 - Governance** | Terms of reference, decision logs, board papers |
| **02 - Strategy** | Portfolio strategy, business cases, prioritisation |
| **03 - Plans** | Portfolio plan, programme plans, dependency maps |
| **04 - Resources** | Capacity plans, skills matrix, allocation records |
| **05 - Finance** | Budgets, forecasts, actuals, variance reports |
| **06 - Reports** | Dashboard, executive summaries, board reports |
| **07 - Risk & Issues** | Portfolio risk register, issue log, escalations |
| **08 - Benefits** | Benefits maps, tracking, realisation reports |
| **09 - Assurance** | Healthcheck reports, review findings |
| **10 - Templates** | Standard templates and guidance |
{:class="table table-single table-narrow"}

### Naming Convention

| Element | Convention | Example |
|---------|------------|---------|
| **Documents** | [Type]_[Subject]_[Version]_[Date] | Portfolio_Dashboard_v1.2_20260319 |
| **Meeting papers** | [Board]_[Date]_[Agenda Item] | PortfolioBoard_20260319_03_Finance |
| **Templates** | TPL_[Name]_[Version] | TPL_BusinessCase_v2.0 |
{:class="table table-single table-narrow"}

---

## PMO Planning Checklist

### Setup
- [ ] Planning process defined and documented?
- [ ] Roles and responsibilities agreed?
- [ ] Planning tools selected and configured?
- [ ] Templates and standards published?
- [ ] Filing structure established?
- [ ] Reporting cadence defined?

### Ongoing
- [ ] Demand assessment performed regularly?
- [ ] Resource plans updated and gaps identified?
- [ ] Cost forecasts produced on time?
- [ ] Dependencies tracked and managed?
- [ ] Integrated plan maintained and current?
- [ ] Delivery monitored and reported?

---

## Related Resources

- [Portfolio Management](/portfolio/portfolio_management) - Portfolio management framework
- [Demand Management](/portfolio/portfolio_demand_mgmt) - Demand intake process
- [Portfolio Resource Management](/portfolio/portfolio_resource_mgmt) - Resource management
- [Portfolio Reporting](/portfolio/portfolio_reporting) - Reporting frameworks
- [PMO Strategy](/portfolio/pmo_strategy) - PMO strategy and operating model
- [Project Sizing Tool](/portfolio/project_sizing_tool) - Governance sizing tool
