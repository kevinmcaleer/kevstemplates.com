---
layout: project
name: Project Resources / OBS
section: Project
process: planning
description: Understanding the Organisational Breakdown Structure and resource organisation.
tags: [Resources, Organisation, OBS, Team]
themes: [Resources, People, OBS, Organisational Breakdown Structure]
last_updated: 2026-01-13
---

# Project Resources & OBS

The Organisational Breakdown Structure (OBS) defines how resources are organised within the project.

---

## What is an OBS?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> The Organisational Breakdown Structure (OBS) is a hierarchical representation of project resources organised by team, function, or department.
</div>

---

## OBS vs WBS

| OBS | WBS |
|-----|-----|
| Shows **who** does the work | Shows **what** work is done |
| Organised by resource/team | Organised by deliverable |
| Answers "who is responsible?" | Answers "what will be delivered?" |
{:class="table table-single table-narrow"}

When OBS and WBS intersect, you can assign accountability for each deliverable.

---

## Example OBS Structure

<div class="mermaid">
flowchart LR
    PM[Project<br/>Manager] --> TL1[Development<br/>Lead]
    PM --> TL2[Test<br/>Lead]
    PM --> TL3[BA<br/>Lead]
    TL1 --> D1[Developer 1]
    TL1 --> D2[Developer 2]
    TL2 --> T1[Tester 1]
    TL3 --> BA1[BA 1]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class PM,TL1,TL2,TL3,D1,D2,T1,BA1 blue
</div>

---

## Resource Types

| Type | Description | Examples |
|------|-------------|----------|
| **Internal** | Organisation employees | Staff, secondees |
| **External** | External resources | Contractors, consultants |
| **Shared** | Shared with other work | Part-time resources |
| **Specialist** | Specific expertise | Architects, security |
{:class="table table-single table-narrow"}

---

## Resource Information

Capture for each resource:

| Field | Description |
|-------|-------------|
| **Name** | Resource identifier |
| **Role** | Position on project |
| **Skills** | Relevant capabilities |
| **Availability** | % time on project |
| **Start/End** | Duration on project |
| **Cost** | Day rate or salary allocation |
| **Reporting line** | Who they report to |
{:class="table table-single table-narrow"}

---

## Responsibility Assignment

Use a RACI matrix to link OBS and WBS:

| | PM | Dev Lead | BA | Tester |
|---|:---:|:---:|:---:|:---:|
| **Requirements** | A | C | R | I |
| **Design** | A | R | C | I |
| **Build** | A | R | I | I |
| **Test** | A | C | I | R |
{:class="table table-single table-narrow"}

- **R** = Responsible (does the work)
- **A** = Accountable (owns the outcome)
- **C** = Consulted (provides input)
- **I** = Informed (kept up to date)

---

## Resource Planning Considerations

| Factor | Questions |
|--------|-----------|
| **Skills** | Do we have the right capabilities? |
| **Capacity** | Is there enough time available? |
| **Availability** | When are resources available? |
| **Location** | Where are resources based? |
| **Cost** | What is the budget impact? |
| **Dependencies** | What other demands exist? |
{:class="table table-single table-narrow"}

---

## Common Challenges

| Challenge | Mitigation |
|-----------|------------|
| Resource conflicts | Early planning, clear priorities |
| Skill gaps | Training, recruitment, contractors |
| Turnover | Knowledge transfer, documentation |
| Over-allocation | Realistic planning, monitoring |
| Availability changes | Contingency planning |
{:class="table table-single table-narrow"}

---

## Resource Checklist

- [ ] OBS defined?
- [ ] Resource requirements identified?
- [ ] Roles and responsibilities clear?
- [ ] RACI matrix completed?
- [ ] Availability confirmed?
- [ ] Costs captured?
- [ ] Reporting lines established?

---

## Related Resources

- [Resource & Cost Modelling](/projects/resource_and_cost_modelling) - Cost planning
- [Project Team](/projects/project_team) - Team structure
- [Deliverables / WBS / PBS](/projects/deliverables_wbs_pbs) - Work breakdown

