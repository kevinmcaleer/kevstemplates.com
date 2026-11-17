---
layout: project
section: Project
name: Project Closure
description: The final stage where lessons learned are captured, the Project Closure Report is completed, and project resources are released.
tags: [closure, lifecycle, lessons learned, handover]
themes: [governance]
color: teal-100
last_updated: 2026-11-17
---

# Project Closure

{% include closure.html %}

Closure makes sure the project ends in a controlled way: products are handed over, the business case is reviewed, lessons are captured and the team is released. Closure applies to early termination too.

---

## Entry Criteria

- All products delivered, or a board decision to close early

## Key Activities

<div class="mermaid">
flowchart LR
    A[Confirm<br/>acceptance] --> B[Hand over<br/>products]
    B --> C[Early life<br/>support]
    C --> D[Evaluate the<br/>project]
    D --> E[Plan benefits<br/>reviews]
    E --> F[Board closes<br/>the project]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

| Activity | Templates and guides |
|----------|----------------------|
| Confirm acceptance of the products | [Closure Meeting](/projects/closure_meeting) |
| Hand over to operations and support | [Handover Document](/projects/handover_document), [Early Life Support](/projects/early_life_support), [Support Model](/projects/support_model) |
| Evaluate the project and capture lessons | [End of Project Report](/projects/end_of_project_report), [Project Closure Report](/projects/project_closure_report), [Lessons Learned](/projects/lessons_learned) |
| Plan the post-project review of benefits | [Benefits Review](/projects/benefits_review), [Post Implementation Review](/projects/post_implementation_review) |
| Release people and close the books | [Project Resources / OBS](/projects/project_resources_obs), [Financial Forecasting](/projects/financial_forecasting) |
{:class="table table-single table-narrow"}

## Key Decisions

1. Have the products been accepted, and is operations ready to take ownership?
2. Are follow-on actions, open risks and issues handed to named owners?
3. When will benefits be reviewed, and by whom?

## Exit Criteria

- [ ] Products handed over and accepted
- [ ] End of project report and lessons approved
- [ ] Benefits review plan agreed
- [ ] Board confirms closure and the team is released

## Common Pitfalls

| Pitfall | What to do instead |
|---------|--------------------|
| The team leaves before closure is done | Plan closure as a stage with its own time and budget |
| Lessons written but never read | Share them with the PMO and start the next project by reading them |
| Benefits never measured | Name the owner and dates for benefits reviews before the project closes |
{:class="table table-single table-narrow"}

---

## All closure pages

{% include stage_pages.html process="closure" %}
