---
layout: project
section: Project
name: Project Delivery
description: The execution stage where the project plan is implemented, work packages are delivered, and progress is tracked against the business case.
tags: [delivery, lifecycle, execution, implementation]
themes: [governance]
color: teal-100
last_updated: 2026-11-17
---

# Project Delivery

{% include delivery.html %}

Delivery is where the work gets done. The project manager authorises work packages, tracks progress against the plan, manages risks, issues and change, and keeps the board informed, escalating only what is outside tolerance.

---

## Entry Criteria

- Approved stage plan
- Board authority for the delivery stage

## Key Activities

<div class="mermaid">
flowchart LR
    A[Authorise<br/>work packages] --> B[Build and<br/>test]
    B --> C[Track and<br/>report]
    C --> D{Within<br/>tolerance?}
    D -->|Yes| A
    D -->|No| E[Escalate<br/>exception]
    C --> F[Prepare for<br/>transition]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

| Activity | Templates and guides |
|----------|----------------------|
| Authorise and accept work packages | [Work Package](/projects/work_package) |
| Report progress | [Project Reporting](/projects/project_reporting), [Meeting Agenda](/projects/meeting_agenda), [Meeting Minutes](/projects/meeting_minutes) |
| Manage risks, issues and actions | [Risk Register](/projects/risk_register), [Action Tracker](/projects/action_tracker), [Decision Log](/projects/decision_log) |
| Control change | [Project Change Control](/projects/project_change_control) |
| Manage suppliers and forecasts | [Vendor & Contract Management](/projects/vendor_management), [Financial Forecasting](/projects/financial_forecasting) |
| Prepare the service and the users | [Service Transition](/projects/service_transition), [Technical Readiness](/projects/technical_readiness), [Training Delivery](/projects/training_delivery), [Backout Plan](/projects/backout_plan) |
| Review each stage | [End of Stage Report](/projects/end_of_stage_report), [Project Healthcheck](/projects/project_healthcheck) |
{:class="table table-single table-narrow"}

## Key Decisions

1. Is the stage forecast to finish within tolerance? If not, raise an exception
2. Should approved change requests go ahead, and at what cost?
3. At each stage end: should the next stage go ahead?

## Exit Criteria

- [ ] All products delivered and accepted
- [ ] Service ready for operation, with support in place
- [ ] Board authorises closure

## Common Pitfalls

| Pitfall | What to do instead |
|---------|--------------------|
| Reporting activity instead of progress | Report against products and milestones, with a forecast, not a list of tasks done |
| Change absorbed without control | Log every change, even small ones, and assess the cumulative impact |
| Readiness left to the last month | Start service transition and training planning early in delivery |
{:class="table table-single table-narrow"}

---

## All delivery pages

{% include stage_pages.html process="delivery" %}
