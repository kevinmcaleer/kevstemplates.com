---
layout: project
section: Project
name: Project Planning
description: The planning stage for requirements gathering, design, and detailed documentation. Structure your project for successful delivery.
tags: [planning, lifecycle, requirements, design]
themes: [governance]
color: teal-100
last_updated: 2026-11-17
---

# Project Planning

{% include planning.html %}

Planning turns the agreed scope into the detail that delivery will work to: requirements, products, designs, estimates and the stage plan. On larger projects it is a stage of its own; on smaller ones it happens at the start of each delivery stage.

---

## Entry Criteria

- Approved PID and project plan
- Board authority for the planning stage

## Key Activities

<div class="mermaid">
flowchart LR
    A[Capture<br/>requirements] --> B[Define<br/>products]
    B --> C[Break down<br/>the work]
    C --> D[Estimate and<br/>schedule]
    D --> E[Plan resources<br/>and cost]
    E --> F[Stage plan<br/>approved]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

| Activity | Templates and guides |
|----------|----------------------|
| Capture and agree requirements | [Requirements](/projects/requirements), [Business Requirements](/projects/requirements#business-requirements), [Service Requirements](/projects/requirements#service-requirements) |
| Define the products and their quality criteria | [Product Description](/projects/product_description), [Deliverables / WBS / PBS](/projects/deliverables_wbs_pbs) |
| Map processes and design the solution | [SIPOC Process Worksheet](/projects/sipoc), [Design](/projects/design), [Programme Blueprint](/programmes/blueprint) |
| Estimate, schedule and cost the work | [Stage Plan](/projects/stage_plan), [Financial Planning](/projects/financial_planning), [Resource & Cost Modelling](/projects/resource_and_cost_modelling) |
| Plan testing, training and implementation | [Test Approach](/projects/test_approach), [Training Plan](/projects/training_plan), [Implementation Approach](/projects/delivery_approach#implementation-approach) |
| Run planning workshops | [Workshop Planner](/projects/workshop_planner) |
{:class="table table-single table-narrow"}

## Key Decisions

1. Are the requirements complete and agreed by the senior user?
2. Is the stage plan achievable within tolerance?
3. Are the right people available when the plan needs them?

## Exit Criteria

- [ ] Requirements and product descriptions agreed
- [ ] Stage plan, budget and resource plan approved
- [ ] Board authorises delivery

## Common Pitfalls

| Pitfall | What to do instead |
|---------|--------------------|
| Planning activities instead of products | Start from a product breakdown so the plan is driven by what will be delivered |
| Estimates given as single numbers | Use ranges and record assumptions; see [Estimation Techniques](/planning/estimation) |
| Requirements signed off without the people who will use the result | Involve the senior user and end users in reviews |
{:class="table table-single table-narrow"}

---

## All planning pages

{% include stage_pages.html process="planning" %}
