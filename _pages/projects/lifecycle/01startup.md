---
layout: project
section: Project
name: Project Startup
description: The first stage of the project lifecycle where the Project Mandate and Project Brief are created to capture initial project scope and objectives.
tags: [startup, lifecycle, project mandate, project brief]
themes: [governance]
color: teal-100
last_updated: 2026-11-17
---

# Project Startup

{% include project_startup.html %}

Startup confirms there is a worthwhile and viable project before money and people are committed to it. It is short, often a few days to a few weeks, and ends with a decision on whether to initiate the project.

---

## Entry Criteria

- A Project Mandate, or an equivalent request, from the business or a programme
- A sponsor willing to own the business case

## Key Activities

<div class="mermaid">
flowchart LR
    A[Project<br/>Mandate] --> B[Appoint executive<br/>and PM]
    B --> C[Capture previous<br/>lessons]
    C --> D[Design and appoint<br/>project board]
    D --> E[Outline<br/>business case]
    E --> F[Project<br/>Brief]
    F --> G[Plan the<br/>initiation stage]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

| Activity | Templates and guides |
|----------|----------------------|
| Appoint the executive and project manager | [Project Sponsor](/projects/project_sponsor), [Project Manager](/projects/project_manager) |
| Review lessons from similar projects | [Lessons Learned](/projects/lessons_learned) |
| Design and appoint the project board | [Project Roles](/projects/project_roles), [Senior User](/projects/senior_user), [Senior Supplier](/projects/senior_supplier) |
| Outline the business case | [Business Case](/projects/business_case) |
| Choose the delivery approach | [Delivery Approach](/projects/delivery_approach) |
| Assemble the Project Brief | [Project Brief](/projects/project_brief) |
{:class="table table-single table-narrow"}

## Key Decisions

1. Is the project worthwhile, viable and aligned to strategy?
2. Who sits on the project board, and do they have the authority they need?
3. Should the project go into initiation, be changed or be stopped?

## Exit Criteria

- [ ] Project Brief approved by the project board
- [ ] Plan and budget for the initiation stage agreed
- [ ] Board authorises initiation

## Common Pitfalls

| Pitfall | What to do instead |
|---------|--------------------|
| Skipping startup because "everyone knows what we are doing" | A one-page brief still flushes out different assumptions about scope and outcome |
| A sponsor in name only | Confirm the executive has budget authority and the time to chair the board |
| Starting design work in startup | Keep startup to viability; detailed work belongs in initiation and planning |
{:class="table table-single table-narrow"}

---

## All startup pages

{% include stage_pages.html process="startup" %}
