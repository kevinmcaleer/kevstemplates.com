---
layout: page
name: Roles
section: Best Practice
description: Defining and documenting project and programme management roles and responsibilities
tags: [Roles, Responsibilities, RACI, Best Practice]
color: banana-500
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

# Roles

Clearly defined roles and responsibilities are fundamental to effective project and programme governance. When people understand what is expected of them, decision-making is faster, accountability is clear, and the risk of gaps or overlaps in responsibility is minimised.

---

## Why Role Clarity Matters

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Key Principle:</strong> If everyone is responsible, no one is responsible. Clear role definitions ensure that every critical activity has a named owner and that accountability is unambiguous.
</div>

Poor role definition leads to:

- **Duplication of effort** -- multiple people doing the same work
- **Gaps in coverage** -- critical activities that nobody owns
- **Slow decision-making** -- unclear authority leads to escalation and delay
- **Conflict** -- overlapping responsibilities create friction between team members
- **Lack of accountability** -- when things go wrong, no one is answerable

---

## Common Project and Programme Roles

### Core Governance Roles

| Role | Also Known As | Primary Purpose |
|------|--------------|-----------------|
| **Senior Responsible Owner (SRO)** | Executive Sponsor, Programme Director | Ultimately accountable for the delivery of outcomes and benefits |
| **Programme Manager** | Programme Director (in some organisations) | Day-to-day leadership and coordination of the programme |
| **Project Manager** | Delivery Manager, Project Lead | Planning, managing, and delivering the project within agreed constraints |
| **Project Board** | Steering Committee, Programme Board | Providing strategic direction, approving key decisions, managing escalations |
| **Business Change Manager** | Change Lead, Transformation Lead | Ensuring the business is ready to adopt the change and realise benefits |
{:class="table table-single table-narrow"}

### Delivery and Support Roles

| Role | Primary Purpose |
|------|----------------|
| **Business Analyst** | Eliciting, documenting, and managing requirements; bridging business and technical teams |
| **PMO (Project/Programme Management Office)** | Providing governance, standards, reporting, and assurance support |
| **Technical Lead / Architect** | Designing and overseeing the technical solution |
| **Test Manager** | Planning and managing testing activities to assure quality |
| **Change Manager** | Planning and delivering change management activities (communication, training, engagement) |
| **Risk Manager** | Facilitating risk identification, assessment, and response planning |
| **Finance Manager / Controller** | Managing budgets, forecasts, and financial reporting |
| **Procurement / Commercial Lead** | Managing supplier relationships, contracts, and commercial arrangements |
| **Communications Lead** | Developing and delivering stakeholder communications |
| **Training Lead** | Planning and delivering training to impacted groups |
{:class="table table-single table-narrow"}

---

## Role Descriptions

### Senior Responsible Owner (SRO)

The SRO is the single individual with overall accountability for the success of the project or programme. They own the business case and are responsible for ensuring benefits are realised.

**Key responsibilities:**
- Owning the business case and ensuring continued viability
- Chairing the project or programme board
- Making key investment and strategic decisions
- Removing blockers and resolving escalated issues
- Securing and protecting funding and resources
- Championing the initiative within the organisation
- Ensuring benefits are realised after delivery

### Project Manager

The Project Manager is responsible for the day-to-day planning, management, and control of the project.

**Key responsibilities:**
- Developing and maintaining the project plan
- Managing scope, schedule, budget, quality, and risk
- Leading and motivating the project team
- Reporting progress to the project board and stakeholders
- Managing dependencies and interfaces
- Escalating issues that exceed delegated authority
- Ensuring project documentation is complete and current

### Business Analyst

The Business Analyst bridges the gap between business needs and technical solutions.

**Key responsibilities:**
- Eliciting and documenting business requirements
- Analysing current processes and identifying improvements
- Facilitating requirements workshops
- Managing requirements traceability
- Supporting solution design and acceptance testing
- Defining acceptance criteria

### PMO

The PMO provides the framework, standards, and support that enable consistent and effective delivery.

**Key responsibilities:**
- Maintaining project and programme standards and templates
- Supporting planning, scheduling, and resource management
- Producing consolidated reporting and dashboards
- Facilitating assurance reviews and health checks
- Managing the project or programme information repository
- Providing administrative and coordination support

---

## How to Define Roles

### Role Definition Process

<div class="mermaid">
flowchart LR
    A[Identify Required<br/>Activities] --> B[Group into<br/>Logical Roles]
    B --> C[Define<br/>Responsibilities]
    C --> D[Assign to<br/>Individuals]
    D --> E[Communicate<br/>and Confirm]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

### Role Definition Template

Each role should be documented using a consistent structure:

| Element | Description |
|---------|-------------|
| **Role title** | Clear, unambiguous title |
| **Purpose** | One-sentence summary of the role's reason for existing |
| **Reports to** | Who the role holder reports to |
| **Key responsibilities** | 5-10 specific responsibilities |
| **Authority levels** | What the role holder can decide or approve |
| **Key relationships** | Who the role holder works with most closely |
| **Skills and experience** | Required competencies and background |
| **Time commitment** | Full-time, part-time, or percentage allocation |
{:class="table table-single table-narrow"}

---

## RACI Principles

A RACI matrix maps activities to roles, clarifying who is Responsible, Accountable, Consulted, and Informed for each activity.

### RACI Definitions

| Letter | Role | Definition | Rule |
|:------:|------|------------|------|
| **R** | Responsible | The person who does the work | There can be multiple Rs per activity |
| **A** | Accountable | The person who is ultimately answerable | There must be exactly one A per activity |
| **C** | Consulted | People whose input is sought before a decision | Two-way communication |
| **I** | Informed | People who are told after a decision is made | One-way communication |
{:class="table table-single table-narrow"}

### RACI Best Practices

- **Every row must have exactly one A** -- if no one is accountable, the activity is at risk
- **Minimise the number of Rs** -- too many responsible parties leads to confusion
- **Distinguish C from I carefully** -- consultation implies the right to influence; information does not
- **Review the columns** -- if one role has too many As, they may be a bottleneck
- **Validate with role holders** -- ensure people agree with and understand their RACI assignments
- **Keep it at the right level** -- too granular and it becomes unmanageable; too high-level and it is not useful

### Example RACI Matrix

| Activity | SRO | Project Manager | Business Analyst | PMO | Change Manager |
|----------|:---:|:---:|:---:|:---:|:---:|
| Approve business case | **A** | R | C | I | C |
| Develop project plan | I | **A/R** | C | C | C |
| Capture requirements | C | A | **R** | I | C |
| Manage risks | I | **A/R** | C | C | I |
| Produce status report | I | **R** | C | **A** | I |
| Deliver training | I | I | C | I | **A/R** |
| Approve go-live | **A** | R | C | I | R |
{:class="table table-single table-narrow"}

---

## Role Conflicts and Resolution

Role conflicts arise when responsibilities overlap, authority is unclear, or when individuals hold multiple roles with competing interests.

### Common Role Conflicts

| Conflict | Cause | Resolution |
|----------|-------|------------|
| **SRO also acting as Project Manager** | Small project or resource constraints | Acknowledge dual role, ensure governance is not compromised, consider delegating PM responsibilities |
| **Business Analyst and Tester as same person** | Resource constraints | Manage conflict of interest by having requirements reviewed independently |
| **Multiple Project Managers with overlapping scope** | Poor scope definition | Clarify boundaries, create a RACI for shared areas, establish a coordination mechanism |
| **Change Manager and Communications Lead overlap** | Unclear role boundaries | Define distinct responsibilities, agree a shared communication plan |
| **PMO perceived as policing rather than supporting** | Cultural issue, unclear PMO mandate | Redefine PMO purpose, focus on value-add, seek feedback from delivery teams |
{:class="table table-single table-narrow"}

### Resolution Approach

<div class="mermaid">
flowchart LR
    A[Identify<br/>Conflict] --> B[Clarify<br/>Boundaries]
    B --> C[Agree<br/>Resolution]
    C --> D[Document<br/>and Communicate]
    D --> E[Monitor<br/>Effectiveness]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

---

## Role-Based Governance

Roles should be embedded in the governance framework, with clear escalation paths and decision-making authority at each level.

### Governance Layers

| Layer | Roles | Decision Authority | Meeting Cadence |
|-------|-------|-------------------|-----------------|
| **Strategic** | SRO, Portfolio Board | Investment decisions, strategic direction, programme closure | Monthly or quarterly |
| **Directing** | Project Board, Programme Manager | Stage gate approvals, scope changes, exception management | Monthly or per stage |
| **Managing** | Project Manager, PMO | Day-to-day delivery decisions, resource allocation, risk response | Weekly |
| **Delivering** | Team leads, BAs, developers, testers | Technical decisions, task management, quality assurance | Daily or as needed |
{:class="table table-single table-narrow"}

### Delegation of Authority

| Decision Type | Authority Level | Escalation Trigger |
|-------------|----------------|-------------------|
| Expenditure within budget tolerance | Project Manager | Forecast exceeds tolerance |
| Schedule changes within tolerance | Project Manager | Slippage exceeds tolerance |
| Scope changes within tolerance | Project Manager | Scope change exceeds tolerance |
| Expenditure beyond tolerance | Project Board / SRO | Always |
| Changes to benefits case | SRO | Always |
| Contract variations | Commercial Lead + Project Manager | Above delegated financial limit |
{:class="table table-single table-narrow"}

---

## Tips for Effective Role Management

1. **Document roles early** -- define and agree roles during initiation, not after problems emerge.
2. **Communicate widely** -- ensure all team members and stakeholders understand the role structure.
3. **Review regularly** -- roles may need to evolve as the project progresses through lifecycle stages.
4. **Avoid role overload** -- no individual should hold so many responsibilities that they become a single point of failure.
5. **Respect the hierarchy** -- ensure escalation paths are understood and used appropriately.
6. **Invest in induction** -- when new team members join, provide a clear brief on their role and the wider role structure.
7. **Use a RACI for contentious areas** -- where responsibilities are disputed, a RACI provides an objective framework for resolution.

---

## Related Resources

- [Recruitment Interviews](/best_practice/recruitment_interviews) -- hiring the right people for PM roles
- [Communication](/best_practice/communication) -- communicating roles and responsibilities effectively
- [People Impact Assessment](/best_practice/people_impact_assessment) -- understanding how role changes affect people
- [Organisational Impact Assessment](/best_practice/org_impact_assessment) -- assessing structural change
- [Organisational Structure](/best_practice/org_structure) -- designing the organisation around roles
- [Project Resources and OBS](/projects/project_resources_obs) -- resource planning and organisation breakdown structure
