---
layout: programme
section: Programme
name: Programme Blueprint
description: Defining the target operating model and future state that the programme will deliver, including capabilities, processes, and organisational design.
tags: [Blueprint, Target Operating Model, TOM, Capabilities, Transformation]
themes: [Planning, Transformation]
downloads:
 - name: Blueprint Template
   description: Template for documenting programme blueprint
   file: programme_blueprint.docx
 - name: Capability Assessment
   description: Template for assessing current vs future capabilities
   file: capability_assessment.xlsx
last_updated: 2026-01-13
---

# Programme Blueprint

The Blueprint defines the target end state that a programme will deliver - the future operating model, capabilities, processes, and organisation that will enable benefits realisation.

---

## What is a Blueprint?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> A Blueprint is a model of the organisation, its working practices, processes, information, and technology that will be needed to deliver the programme's vision and outcomes.
</div>

The Blueprint answers: **"What will the organisation look like when the programme is complete?"**

| Current State | Blueprint (Target State) |
|---------------|-------------------------|
| How we work today | How we will work tomorrow |
| Existing processes | Redesigned processes |
| Current capabilities | Enhanced capabilities |
| Legacy systems | New/upgraded systems |
| Existing structure | Transformed structure |
{:class="table table-single table-narrow"}

---

## Purpose of the Blueprint

The Blueprint serves multiple purposes:

| Purpose | Benefit |
|---------|---------|
| **Vision** | Clear picture of the end state |
| **Scope** | Define what's in/out of programme |
| **Planning** | Basis for project definition |
| **Communication** | Stakeholder alignment |
| **Benefits** | Link to benefits realisation |
| **Change** | Guide for transition planning |
| **Governance** | Baseline for change control |
{:class="table table-single table-narrow"}

---

## Blueprint Components

### The POPIT Model

<div class="mermaid">
flowchart TD
    A[People] --> E[Blueprint]
    B[Organisation] --> E
    C[Processes] --> E
    D[Information] --> E
    F[Technology] --> E

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

| Component | What it Covers |
|-----------|----------------|
| **People** | Skills, capabilities, culture, behaviours |
| **Organisation** | Structure, roles, responsibilities, governance |
| **Processes** | Ways of working, procedures, workflows |
| **Information** | Data, knowledge, reporting, analytics |
| **Technology** | Systems, applications, infrastructure |
{:class="table table-single table-narrow"}

---

## People

### Current vs Future State

| Aspect | Current State | Future State |
|--------|---------------|--------------|
| **Skills** | What skills exist? | What skills are needed? |
| **Capacity** | Current headcount | Future headcount |
| **Capabilities** | Existing competencies | Required competencies |
| **Culture** | Current behaviours | Target behaviours |
| **Location** | Where people work | Where people will work |
{:class="table table-single table-narrow"}

### Skills Assessment

| Skill Area | Current Level | Required Level | Gap |
|------------|---------------|----------------|-----|
| Digital literacy | Basic | Advanced | High |
| Data analysis | Intermediate | Advanced | Medium |
| Customer service | Advanced | Advanced | None |
| Agile delivery | Low | Intermediate | Medium |
{:class="table table-single table-narrow"}

---

## Organisation

### Structural Elements

| Element | Description |
|---------|-------------|
| **Hierarchy** | Reporting lines and levels |
| **Functions** | Departments and teams |
| **Roles** | Job roles and responsibilities |
| **Governance** | Decision-making structure |
| **Interfaces** | How areas interact |
{:class="table table-single table-narrow"}

### Example: Before and After

```
CURRENT:                    FUTURE:
┌─────────────┐             ┌─────────────┐
│   Director  │             │   Director  │
└──────┬──────┘             └──────┬──────┘
       │                           │
  ┌────┴────┐               ┌──────┼──────┐
  │         │               │      │      │
┌─┴─┐     ┌─┴─┐           ┌─┴─┐  ┌─┴─┐  ┌─┴─┐
│Ops│     │IT │           │Ops│  │Dig│  │IT │
└───┘     └───┘           └───┘  └───┘  └───┘

Siloed functions    →    Cross-functional + Digital
```

---

## Processes

### Process Categories

| Category | Examples |
|----------|----------|
| **Core** | Customer service, order fulfilment, claims |
| **Supporting** | HR, finance, IT support |
| **Management** | Planning, governance, performance |
{:class="table table-single table-narrow"}

### Process Definition

For each key process:

| Element | Current | Future |
|---------|---------|--------|
| **Purpose** | Why it exists | Why it will exist |
| **Inputs** | What triggers it | What will trigger it |
| **Activities** | Steps involved | Redesigned steps |
| **Outputs** | What it produces | What it will produce |
| **Systems** | Tools used | Tools to be used |
| **Roles** | Who performs it | Who will perform it |
| **Metrics** | How measured | How will be measured |
{:class="table table-single table-narrow"}

### Process Improvement

<div class="mermaid">
flowchart LR
    A[Current<br/>Process] --> B[Pain<br/>Points]
    B --> C[Improvement<br/>Opportunities]
    C --> D[Future<br/>Process]
    D --> E[Benefits]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

---

## Information

### Data and Information Needs

| Category | Considerations |
|----------|----------------|
| **Data** | What data is needed? Quality? Sources? |
| **Reporting** | What reports? Frequency? Audience? |
| **Analytics** | What insights? Dashboards? |
| **Knowledge** | What knowledge to capture/share? |
| **Compliance** | Regulatory requirements? Retention? |
{:class="table table-single table-narrow"}

### Data Quality Assessment

| Data Domain | Current Quality | Target Quality | Gap |
|-------------|-----------------|----------------|-----|
| Customer | 70% accurate | 95% accurate | High |
| Product | 85% complete | 99% complete | Medium |
| Financial | 95% reliable | 99% reliable | Low |
| Operational | 60% timely | 90% timely | High |
{:class="table table-single table-narrow"}

---

## Technology

### Technology Landscape

| Layer | Current | Future |
|-------|---------|--------|
| **Applications** | Legacy systems list | Target applications |
| **Integration** | Point-to-point | API/Integration layer |
| **Infrastructure** | On-premise | Cloud/hybrid |
| **Data** | Siloed databases | Data platform |
| **Security** | Perimeter-based | Zero trust |
{:class="table table-single table-narrow"}

### System Disposition

| System | Current Role | Future State |
|--------|--------------|--------------|
| CRM v1 | Customer management | Replace with CRM v2 |
| ERP | Finance, HR | Upgrade |
| Legacy Portal | Customer self-service | Retire |
| New Platform | N/A | Implement |
| Data Warehouse | Reporting | Migrate to cloud |
{:class="table table-single table-narrow"}

---

## Creating the Blueprint

### Development Process

<div class="mermaid">
flowchart LR
    A[Understand<br/>Current State] --> B[Define<br/>Vision]
    B --> C[Design<br/>Future State]
    C --> D[Validate with<br/>Stakeholders]
    D --> E[Finalise<br/>Blueprint]
    E --> F[Baseline &<br/>Control]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

### Blueprint Development Steps

| Step | Activities | Outputs |
|------|------------|---------|
| **1. Current state** | Document as-is, pain points | Current state model |
| **2. Vision** | Define target outcomes | Vision statement |
| **3. Design** | Design future state components | Draft blueprint |
| **4. Validate** | Review with stakeholders | Feedback, refinement |
| **5. Finalise** | Complete documentation | Approved blueprint |
| **6. Baseline** | Version control, change process | Controlled document |
{:class="table table-single table-narrow"}

---

## Gap Analysis

### Identifying Gaps

For each Blueprint component, identify:

| Question | Purpose |
|----------|---------|
| **Where are we now?** | Current state baseline |
| **Where do we need to be?** | Target state from Blueprint |
| **What's the gap?** | Difference to bridge |
| **How do we close it?** | Projects, initiatives, changes |
{:class="table table-single table-narrow"}

### Gap Analysis Template

| Component | Current | Target | Gap | Initiatives |
|-----------|---------|--------|-----|-------------|
| Digital skills | 20% staff | 80% staff | 60% | Training programme |
| CRM system | Legacy | Cloud CRM | Replace | CRM Project |
| Customer process | Manual | Automated | Automate | Process redesign |
| Data quality | 70% | 95% | 25% | Data cleansing |
{:class="table table-single table-narrow"}

---

## Blueprint and Projects

The Blueprint drives project definition:

<div class="mermaid">
flowchart TD
    A[Blueprint<br/>Component] --> B[Gap<br/>Identified]
    B --> C[Project<br/>Defined]
    C --> D[Project<br/>Delivers]
    D --> E[Blueprint<br/>Realised]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

### Mapping Projects to Blueprint

| Blueprint Element | Gap | Project(s) |
|-------------------|-----|------------|
| New CRM capability | No CRM | CRM Implementation |
| Digital skills | Skills gap | Training Programme |
| Automated processes | Manual processes | Process Automation |
| Integrated data | Data silos | Data Platform |
| New org structure | Current structure | Restructure |
{:class="table table-single table-narrow"}

---

## Benefits Linkage

The Blueprint connects to benefits realisation:

| Blueprint Element | Capability Delivered | Benefit Enabled |
|-------------------|---------------------|-----------------|
| New CRM | 360° customer view | Improved retention |
| Automated processes | Faster processing | Reduced costs |
| Digital skills | Self-service capability | Customer satisfaction |
| Data platform | Better insights | Revenue growth |
{:class="table table-single table-narrow"}

---

## Transitional States

For complex transformations, define intermediate states:

### Transition Architecture

| Phase | State | Description |
|-------|-------|-------------|
| **Current** | As-is | Today's operation |
| **Transition 1** | Foundation | Core infrastructure, quick wins |
| **Transition 2** | Build | Major capabilities delivered |
| **Transition 3** | Optimise | Full capability, refinement |
| **Target** | To-be | Blueprint fully realised |
{:class="table table-single table-narrow"}

---

## Blueprint Governance

### Change Control

Changes to the Blueprint should be controlled:

| Change Type | Approval |
|-------------|----------|
| Minor clarification | Programme Manager |
| Component scope change | Programme Board |
| Major redesign | SRO + Sponsoring Group |
{:class="table table-single table-narrow"}

### Version Control

- Maintain version history
- Document rationale for changes
- Communicate updates to stakeholders
- Update dependent documents (projects, benefits)

---

## Blueprint Documentation

### Document Structure

| Section | Content |
|---------|---------|
| **Executive summary** | Overview and key messages |
| **Vision and objectives** | What we're trying to achieve |
| **Current state** | As-is model and pain points |
| **Future state** | Target model (POPIT) |
| **Gap analysis** | Differences to bridge |
| **Transition approach** | How we get there |
| **Dependencies** | External factors |
| **Assumptions** | Key assumptions made |
| **Risks** | Blueprint-related risks |
{:class="table table-single table-narrow"}

---

## Common Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| **Too detailed too early** | Progressive elaboration |
| **Technology-only focus** | Use POPIT model |
| **No current state** | Document baseline first |
| **No stakeholder buy-in** | Involve stakeholders in design |
| **Static document** | Treat as living document |
| **Disconnected from benefits** | Explicit linkage to benefits |
| **Unrealistic target** | Validate feasibility |
{:class="table table-single table-narrow"}

---

## Blueprint Checklist

### Development
- [ ] Vision and objectives clear?
- [ ] Current state documented?
- [ ] All POPIT components covered?
- [ ] Future state defined?
- [ ] Gap analysis complete?
- [ ] Stakeholders validated design?
- [ ] Feasibility confirmed?

### Linkage
- [ ] Connected to benefits?
- [ ] Projects mapped to Blueprint?
- [ ] Transition states defined?
- [ ] Dependencies identified?

### Governance
- [ ] Document approved?
- [ ] Version controlled?
- [ ] Change process defined?
- [ ] Communication plan in place?

---

## Related Resources

- [Benefits Realisation](/programmes/benefits_realisation) - Connecting to benefits
- [Programme Lifecycle](/programmes/programme_lifecycle) - Programme stages
- [Business Case](/projects/business_case) - Investment justification
- [Stakeholder Management](/programmes/stakeholder_management) - Stakeholder engagement

