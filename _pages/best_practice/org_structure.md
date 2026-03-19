---
layout: page
name: Organisational Structure
section: Best Practice
description: Designing effective organisational structures for projects, programmes, and PMOs
tags: [Organisation, Structure, Governance, Best Practice]
color: stone-200
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

# Organisational Structure

The organisational structure of a project, programme, or PMO determines how decisions are made, how information flows, and how effectively teams work together. Getting the structure right is a critical enabler of delivery success.

---

## Why Structure Matters

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Key Principle:</strong> Structure follows strategy. The right organisational structure depends on what you are trying to deliver, the culture of the host organisation, and the complexity of the change.
</div>

A well-designed structure:
- Clarifies decision-making authority and accountability
- Enables efficient communication and escalation
- Aligns resources to delivery priorities
- Provides clear reporting lines and governance
- Reduces duplication and confusion
- Supports effective stakeholder engagement

---

## Types of Organisational Structure

Organisations typically adopt one of three structural models, each with different implications for project delivery.

### Comparison of Structural Models

| Characteristic | Functional | Matrix | Projectised |
|---------------|-----------|--------|------------|
| **Authority of PM** | Low | Moderate to High | High |
| **Resource availability** | Low | Moderate | High |
| **Budget control** | Functional Manager | Shared | Project Manager |
| **PM role** | Part-time, coordinator | Part-time to full-time | Full-time |
| **Admin support** | Part-time | Part-time to full-time | Full-time |
| **Team location** | Within functions | Mixed | Co-located or dedicated |
{:class="table table-single table-narrow"}

### Functional Structure

In a functional structure, staff are grouped by specialism (e.g., IT, Finance, HR). Projects are delivered within functional silos.

**Advantages:**
- Clear line management and career paths
- Deep specialist expertise within functions
- Stable team structures

**Disadvantages:**
- Cross-functional projects are difficult to coordinate
- Project managers have limited authority
- Resource conflicts between project and BAU work

### Matrix Structure

A matrix structure overlays project teams across functional departments. Staff report to both a functional manager and a project manager.

<div class="mermaid">
flowchart LR
    A[Executive<br>Sponsor] --> B[Functional<br>Manager A]
    A --> C[Functional<br>Manager B]
    A --> D[Project<br>Manager]
    B --> E[Team<br>Member 1]
    C --> F[Team<br>Member 2]
    D --> E
    D --> F
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

**Types of matrix:**

| Matrix Type | PM Authority | Resource Control | Best For |
|------------|-------------|-----------------|----------|
| **Weak matrix** | Low | Functional manager controls | Small projects within a function |
| **Balanced matrix** | Shared | Negotiated between PM and functional manager | Medium-complexity projects |
| **Strong matrix** | High | PM has primary control | Large, cross-functional projects |
{:class="table table-single table-narrow"}

### Projectised Structure

In a projectised organisation, teams are formed specifically for the project and report directly to the project manager. Resources are fully dedicated.

**Advantages:**
- Clear authority and accountability
- Dedicated resources with no competing priorities
- Faster decision-making

**Disadvantages:**
- Inefficient use of specialists across projects
- Team members face uncertainty at project end
- Knowledge can be lost when teams disperse

---

## Choosing the Right Structure

<div class="mermaid">
flowchart LR
    A{Project<br>Complexity?} -->|Low| B{Cross-functional?}
    A -->|High| C[Strong Matrix<br>or Projectised]
    B -->|No| D[Functional]
    B -->|Yes| E[Weak or<br>Balanced Matrix]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

Consider the following factors when selecting a structure:

| Factor | Favours Functional | Favours Matrix | Favours Projectised |
|--------|-------------------|----------------|-------------------|
| **Project size** | Small | Medium | Large |
| **Duration** | Short | Medium | Long |
| **Complexity** | Low | Medium | High |
| **Strategic importance** | Low | Medium | High |
| **Cross-functional dependency** | Low | High | High |
| **Resource availability** | Shared acceptable | Some dedication | Full dedication needed |
{:class="table table-single table-narrow"}

---

## Project Team Structure

A typical project team structure includes the following roles and layers.

### Core Project Roles

| Role | Accountability | Reports To |
|------|---------------|------------|
| **Senior Responsible Owner (SRO)** | Overall accountability for the project outcome | Executive Board |
| **Project Sponsor** | Secures funding, removes barriers, champions the project | SRO or Executive |
| **Project Manager** | Day-to-day delivery, planning, reporting | Sponsor or SRO |
| **Business Change Manager** | Ensures the organisation can adopt the change | SRO or Sponsor |
| **Technical Lead** | Technical design, build, and quality | Project Manager |
| **Business Analyst** | Requirements, analysis, process design | Project Manager |
| **Test Manager** | Test strategy, planning, and execution | Project Manager |
| **Team Members** | Specialist delivery tasks | Project Manager or Team Lead |
{:class="table table-single table-narrow"}

<div class="alert alert-warning">
<i class="fas fa-exclamation-triangle mr-2"></i>
<strong>Common Mistake:</strong> Combining the Sponsor and SRO roles, or making the Project Manager accountable for business change. Keep these roles separate to maintain proper checks and balances.
</div>

---

## Programme Structure

Programmes require additional structural layers to coordinate multiple projects and manage benefits realisation.

### Programme Roles

| Role | Accountability |
|------|---------------|
| **Programme Director** | Strategic leadership of the programme |
| **Programme Manager** | Day-to-day management and coordination of projects |
| **Business Change Manager(s)** | Transition management and benefits realisation |
| **Programme Office** | Standards, reporting, resource coordination |
| **Project Managers** | Delivery of individual projects within the programme |
| **Design Authority** | Technical coherence across projects |
{:class="table table-single table-narrow"}

### Programme Governance Layers

| Layer | Forum | Purpose | Frequency |
|-------|-------|---------|-----------|
| **Strategic** | Programme Board | Direction, funding, major decisions | Monthly |
| **Management** | Programme Team Meeting | Coordination, dependency management | Weekly or fortnightly |
| **Delivery** | Project Boards | Individual project governance | As defined per project |
| **Assurance** | Assurance Reviews | Independent scrutiny | At stage gates or quarterly |
{:class="table table-single table-narrow"}

---

## PMO Positioning

The Project Management Office (PMO) can sit at different levels in the organisation, each serving different purposes.

| PMO Type | Scope | Function | Authority |
|----------|-------|----------|-----------|
| **Project Office** | Single project | Admin support, reporting, scheduling | Low |
| **Programme Office** | Programme | Standards, resource coordination, reporting | Medium |
| **Enterprise PMO** | Organisation-wide | Portfolio governance, capability, methodology | High |
| **Centre of Excellence** | Organisation-wide | Best practice, training, maturity improvement | Advisory |
{:class="table table-single table-narrow"}

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Best Practice:</strong> The PMO should have a clear mandate. An under-empowered PMO becomes an admin function; an over-empowered PMO can become a bottleneck. Define the PMO's authority in its terms of reference.
</div>

---

## RACI for Governance

A RACI matrix clarifies roles and responsibilities across governance activities. Assign one of four levels to each role per activity:

| Letter | Meaning | Description |
|--------|---------|-------------|
| **R** | Responsible | Does the work |
| **A** | Accountable | Ultimately answerable (one person only) |
| **C** | Consulted | Provides input before the work is done |
| **I** | Informed | Notified after the work is done |
{:class="table table-single table-narrow"}

### Example RACI

| Activity | SRO | Sponsor | PM | BCM | Team |
|----------|-----|---------|-----|-----|------|
| Approve business case | A | R | C | C | I |
| Manage day-to-day delivery | I | I | A/R | I | R |
| Approve stage gate | A | R | C | C | I |
| Manage benefits realisation | I | C | I | A/R | I |
| Manage risks and issues | I | C | A/R | C | R |
| Stakeholder engagement | C | A | R | R | I |
{:class="table table-single table-narrow"}

<div class="alert alert-warning">
<i class="fas fa-exclamation-triangle mr-2"></i>
<strong>Rule:</strong> There must be exactly one "A" per row. If accountability is shared, no one is truly accountable.
</div>

---

## Governance Boards

### Board Design Principles

- **Clear terms of reference** -- purpose, authority, membership, quorum, frequency
- **Decision rights** -- what the board can approve and what must be escalated
- **Right membership** -- senior enough to make decisions, not so senior that attendance drops
- **Regular cadence** -- predictable rhythm that aligns with reporting cycles
- **Documented decisions** -- all decisions recorded in minutes and a Decision Log

### Typical Governance Hierarchy

<div class="mermaid">
flowchart LR
    A[Portfolio Board] --> B[Programme Board]
    B --> C[Project Board]
    C --> D[Working Groups]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D blue
</div>

---

## Team Sizing

Research and experience suggest practical limits for team sizing.

| Guideline | Size | Rationale |
|-----------|------|-----------|
| **Scrum team** | 5-9 people | Optimal for agile delivery; beyond this, communication overhead increases |
| **Span of control** | 5-7 direct reports | Manageable workload for a single line manager |
| **Project core team** | 8-12 people | Enough expertise without excessive coordination |
| **Programme team** | 3-7 project managers | One programme manager can effectively coordinate this many workstreams |
{:class="table table-single table-narrow"}

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Brooks' Law:</strong> Adding people to a late project makes it later. Communication overhead grows exponentially with team size. Consider this before scaling up.
</div>

---

## Common Structural Problems and Solutions

| Problem | Symptoms | Solution |
|---------|----------|----------|
| **Unclear accountability** | Decisions not made, blame culture | Define RACI, clarify terms of reference |
| **Too many reporting lines** | Conflicting priorities, confused teams | Simplify structure, establish single point of accountability |
| **Missing Business Change Manager** | Change not adopted, benefits not realised | Appoint a dedicated BCM with authority |
| **Sponsor not engaged** | Blockers unresolved, no air cover | Escalate or replace; agree minimum time commitment |
| **PMO without authority** | Standards ignored, reporting inconsistent | Strengthen PMO mandate in governance framework |
| **Siloed teams** | Poor communication, duplicated effort | Introduce cross-functional forums, shared tools, and integrated planning |
| **Overly complex governance** | Slow decisions, meeting fatigue | Simplify layers, delegate authority, reduce meeting frequency |
| **No Design Authority** | Inconsistent technical decisions | Establish a Design Authority with clear remit |
{:class="table table-single table-narrow"}

---

## Structure Checklist

| Criteria | Yes / No |
|----------|----------|
| The project or programme has a defined organisational structure | |
| All key roles are filled with named individuals | |
| A RACI matrix exists and has been agreed | |
| Terms of reference exist for all governance boards | |
| Reporting lines are clear and documented | |
| The structure matches the complexity and scale of the initiative | |
| The PMO has a clear mandate and appropriate authority | |
| Team sizes are manageable with appropriate spans of control | |
| There is a single point of accountability for the overall outcome | |
{:class="table table-single table-narrow"}

---

## Related Resources

- [Meeting Management](/best_practice/meeting_management) -- running effective governance meetings
- [Assurance](/best_practice/assurance) -- assurance frameworks and gate reviews
- [Roles](/best_practice/roles) -- detailed role descriptions for projects and programmes
- [Project Resources and OBS](/projects/project_resources_obs) -- organisational breakdown structures
- [Stakeholder Register](/projects/stakeholder_register) -- identifying and managing stakeholders
