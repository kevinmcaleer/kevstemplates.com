---
layout: project
section: Project
name: Project Initiation
description: The initiation stage where the Project Initiation Document (PID) is created, the project team is formed, and the project plan is drafted.
tags: [initiation, lifecycle, PID, project team]
themes: [governance]
color: teal-100
last_updated: 2026-11-17
---

# Project Initiation

{% include initiation.html %}

Initiation builds a firm foundation for the project. It sets out what will be delivered, why, how, when, at what cost and who is involved, so the project board can commit the full budget with confidence.

---

## Entry Criteria

- Approved Project Brief
- Board authority to initiate

## Key Activities

<div class="mermaid">
flowchart LR
    A[Agree management<br/>approaches] --> B[Set up project<br/>controls]
    B --> C[Create the<br/>project plan]
    C --> D[Refine the<br/>business case]
    D --> E[Assemble<br/>the PID]
    E --> F[Board decision<br/>to proceed]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

| Activity | Templates and guides |
|----------|----------------------|
| Agree risk, quality, change and communication approaches | [Risk Register](/projects/risk_register), [Quality Planning](/projects/quality_planning), [Project Change Control](/projects/project_change_control), [Comms Strategy](/projects/comms_strategy) |
| Identify and analyse stakeholders | [Identify Stakeholders](/projects/identify_stakeholders), [Stakeholder Register](/projects/stakeholder_register) |
| Set up controls and reporting | [Project Reporting](/projects/project_reporting), [Decision Log](/projects/decision_log) |
| Create the project plan | [Project Planning](/projects/project_planning), [Plan on a Page](/projects/plan_on_a_page) |
| Refine the business case | [Business Case](/projects/business_case) |
| Assemble the PID or charter | [Project Initiation Document](/projects/project_initiation_document), [Project Charter](/projects/project_charter) |
{:class="table table-single table-narrow"}

## Key Decisions

1. Does the business case still justify the investment, now the costs are better understood?
2. Are the tolerances for time, cost and scope agreed?
3. Should the board authorise the project and the next stage?

## Exit Criteria

- [ ] PID (or charter) approved
- [ ] Business case, project plan and next stage plan baselined
- [ ] Board authorises the project

## Common Pitfalls

| Pitfall | What to do instead |
|---------|--------------------|
| A PID that is written once and never used | Keep it short and refer to it at every stage boundary |
| Controls copied from another project unchanged | Tailor reporting and tolerances to this project's size and risk; the [Project Sizing Tool](/portfolio/project_sizing_tool) can help |
| Stakeholders identified but not analysed | Agree how each key stakeholder will be engaged, not just who they are |
{:class="table table-single table-narrow"}

---

## All initiation pages

{% include stage_pages.html process="initiation" %}
