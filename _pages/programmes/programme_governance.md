---
layout: programme
section: Programme
name: Programme Governance
description: Establishing effective governance structures, decision-making frameworks, and controls for programme management.
tags: [Governance, Programme, Decision-making, Control, Oversight]
themes: [Governance, Control]
downloads:
 - name: Programme Governance Framework
   description: Template for defining programme governance structure
   file: programme_governance_framework.docx
 - name: Terms of Reference Template
   description: Template for programme board terms of reference
   file: programme_board_tor.docx
last_updated: 2026-01-13
---

# Programme Governance

Programme governance establishes the framework for decision-making, oversight, and control that enables programmes to deliver strategic objectives while managing complexity and risk.

---

## What is Programme Governance?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> Programme governance is the framework of authority, accountability, and decision-making that ensures a programme remains aligned with strategic objectives and delivers its intended benefits.
</div>

Programme governance differs from project governance in scale, complexity, and strategic focus:

| Aspect | Project Governance | Programme Governance |
|--------|-------------------|---------------------|
| **Focus** | Delivery of outputs | Realisation of outcomes and benefits |
| **Scope** | Single project | Multiple related projects |
| **Timeframe** | Defined end date | May be ongoing/evolving |
| **Change** | Controlled, minimised | Expected, managed |
| **Stakeholders** | Project-specific | Strategic, cross-functional |
{:class="table table-single table-narrow"}

---

## Governance Principles

| Principle | Description |
|-----------|-------------|
| **Clear accountability** | Defined roles and decision rights |
| **Strategic alignment** | Connected to organisational strategy |
| **Appropriate oversight** | Right level of control for risk |
| **Transparent decision-making** | Documented, auditable decisions |
| **Benefits focus** | Prioritise outcome over output |
| **Stakeholder engagement** | Involve right people at right time |
| **Continuous assurance** | Ongoing health checks and reviews |
{:class="table table-single table-narrow"}

---

## Governance Structure

### Typical Programme Organisation

<div class="mermaid">
flowchart TD
    A[Sponsoring Group/<br/>Investment Board] --> B[Programme Board]
    B --> C[Programme Manager]
    C --> D[Business Change<br/>Manager]
    C --> E[Project<br/>Managers]
    C --> F[Programme<br/>Office]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

### Key Roles

| Role | Accountability |
|------|----------------|
| **Senior Responsible Owner (SRO)** | Ultimate accountability for programme success |
| **Programme Board** | Strategic direction and major decisions |
| **Programme Manager** | Day-to-day programme leadership |
| **Business Change Manager** | Benefits realisation and change adoption |
| **Project Managers** | Delivery of constituent projects |
| **Programme Office** | Coordination, reporting, standards |
{:class="table table-single table-narrow"}

---

## Senior Responsible Owner (SRO)

The SRO is the single point of accountability for the programme.

### SRO Responsibilities

| Area | Responsibilities |
|------|------------------|
| **Ownership** | Owns the business case, benefits, and outcomes |
| **Leadership** | Provides visible leadership and sponsorship |
| **Governance** | Chairs programme board, ensures effective governance |
| **Decisions** | Makes key decisions, resolves escalations |
| **Resources** | Secures funding and resources |
| **Stakeholders** | Manages senior stakeholder relationships |
| **Assurance** | Ensures appropriate assurance and controls |
{:class="table table-single table-narrow"}

### SRO Time Commitment

| Programme Size | Typical SRO Time |
|----------------|------------------|
| Small | 1-2 days/month |
| Medium | 2-4 days/month |
| Large | 1 day/week or more |
| Transformational | Potentially full-time |
{:class="table table-single table-narrow"}

---

## Programme Board

### Purpose

The Programme Board provides strategic direction and oversight, making decisions that are beyond the Programme Manager's authority.

### Composition

| Member | Role |
|--------|------|
| **SRO** (Chair) | Ultimate accountability |
| **Programme Manager** | Delivery lead (typically non-voting) |
| **Business Change Manager** | Benefits and change |
| **Senior Supplier** | Delivery capability |
| **Key business stakeholders** | Affected areas |
| **Finance representative** | Financial oversight |
| **Programme Office** | Secretariat (non-voting) |
{:class="table table-single table-narrow"}

### Board Responsibilities

| Responsibility | Activities |
|----------------|------------|
| **Strategic direction** | Align programme with strategy, approve vision |
| **Decision-making** | Approve plans, changes, exception requests |
| **Oversight** | Monitor progress, risks, benefits |
| **Resources** | Approve funding, resolve resource conflicts |
| **Escalations** | Handle issues beyond PM authority |
| **Assurance** | Commission reviews, act on findings |
{:class="table table-single table-narrow"}

### Meeting Cadence

| Meeting Type | Frequency | Focus |
|--------------|-----------|-------|
| **Full Board** | Monthly | Strategic decisions, major issues |
| **Working Group** | Weekly | Operational coordination |
| **Exception** | As needed | Urgent decisions |
| **Stage Gate** | At transitions | Go/no-go decisions |
{:class="table table-single table-narrow"}

---

## Decision-Making Framework

### Decision Rights Matrix

| Decision Type | Programme Manager | Programme Board | Sponsoring Group |
|---------------|-------------------|-----------------|------------------|
| Day-to-day operations | Approve | Inform | - |
| Project changes < £50k | Approve | Inform | - |
| Project changes £50k-£250k | Recommend | Approve | Inform |
| Project changes > £250k | Recommend | Recommend | Approve |
| New project addition | Recommend | Recommend | Approve |
| Schedule change < 4 weeks | Approve | Inform | - |
| Schedule change > 4 weeks | Recommend | Approve | Inform |
| Benefits target change | Recommend | Approve | Inform |
| Programme closure | Recommend | Recommend | Approve |
{:class="table table-single table-narrow"}

### Escalation Path

<div class="mermaid">
flowchart LR
    A[Issue<br/>Identified] --> B{Within PM<br/>Authority?}
    B -->|Yes| C[PM<br/>Resolves]
    B -->|No| D{Needs<br/>Board?}
    D -->|Yes| E[Programme<br/>Board]
    D -->|No| F[SRO<br/>Decision]
    E --> G{Resolved?}
    G -->|No| H[Sponsoring<br/>Group]
    G -->|Yes| I[Implement]
    F --> I
    H --> I

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H,I blue
</div>

---

## Tolerances and Thresholds

### Programme Tolerances

| Dimension | Green | Amber | Red |
|-----------|-------|-------|-----|
| **Budget** | Within 5% | 5-10% variance | >10% variance |
| **Timeline** | Within 1 month | 1-3 months | >3 months |
| **Benefits** | Within 10% | 10-20% reduction | >20% reduction |
| **Scope** | Minor changes | Significant changes | Major replanning |
| **Risk exposure** | Acceptable | Elevated | Critical |
{:class="table table-single table-narrow"}

### Exception Triggers

When tolerances are breached, an exception report is required:
- Forecast to exceed approved budget
- Milestone slip affecting programme end date
- Benefits shortfall requiring business case review
- Major risk materialises
- Significant scope change proposed

---

## Assurance Framework

### Lines of Defence

<div class="mermaid">
flowchart LR
    A[1st Line:<br/>Programme Team] --> B[2nd Line:<br/>Programme Office/PMO]
    B --> C[3rd Line:<br/>Independent Assurance]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C blue
</div>

| Line | Focus | Activities |
|------|-------|------------|
| **First** | Delivery controls | Quality checks, peer review, testing |
| **Second** | Oversight | PMO reviews, stage gates, reporting |
| **Third** | Independence | External reviews, audit, gateway reviews |
{:class="table table-single table-narrow"}

### Assurance Activities

| Activity | Timing | Owner |
|----------|--------|-------|
| **Health checks** | Monthly | Programme Office |
| **Stage gate reviews** | At transitions | Programme Board |
| **Gateway reviews** | At key stages | Independent reviewers |
| **Benefits reviews** | Quarterly | Business Change Manager |
| **Financial reviews** | Monthly | Finance |
| **Audit** | Annual or as required | Internal Audit |
{:class="table table-single table-narrow"}

---

## Reporting and Communication

### Reporting Hierarchy

| Report | Audience | Frequency | Content |
|--------|----------|-----------|---------|
| **Programme Dashboard** | All stakeholders | Weekly | Status summary |
| **Programme Report** | Programme Board | Monthly | Full status, risks, issues |
| **Executive Summary** | Sponsoring Group | Monthly | Headlines, decisions |
| **Benefits Report** | Board + Sponsors | Quarterly | Benefits tracking |
| **Financial Report** | Finance + Board | Monthly | Budget status |
{:class="table table-single table-narrow"}

### Information Flow

<div class="mermaid">
flowchart TD
    A[Project Status<br/>Reports] --> B[Programme<br/>Office]
    B --> C[Programme<br/>Report]
    C --> D[Programme<br/>Board]
    D --> E[Executive<br/>Summary]
    E --> F[Sponsoring<br/>Group]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

---

## Stage Gates

### Purpose

Stage gates provide formal decision points to assess programme health and approve continuation.

### Typical Stage Gates

| Gate | Timing | Decision |
|------|--------|----------|
| **G0: Concept** | Before initiation | Approve concept and funding |
| **G1: Definition** | After planning | Approve full business case |
| **G2: Delivery** | Major tranches | Continue/adjust/stop |
| **G3: Transition** | Before go-live | Approve implementation |
| **G4: Closure** | Post-implementation | Confirm closure, lessons |
{:class="table table-single table-narrow"}

### Gate Review Criteria

| Area | Questions |
|------|-----------|
| **Business case** | Still valid? Benefits achievable? |
| **Progress** | On track? Issues resolved? |
| **Risks** | Acceptable? Mitigations effective? |
| **Resources** | Available? Capability sufficient? |
| **Stakeholders** | Engaged? Concerns addressed? |
| **Readiness** | Ready for next stage? |
{:class="table table-single table-narrow"}

---

## Programme Office

### Functions

| Function | Activities |
|----------|------------|
| **Planning & Scheduling** | Master schedule, dependencies, milestones |
| **Reporting** | Consolidate status, produce reports |
| **Risk & Issue Management** | Aggregate risks, track issues |
| **Financial Tracking** | Budget monitoring, forecasting |
| **Change Control** | Process changes, maintain baselines |
| **Document Management** | Standards, templates, repository |
| **Governance Support** | Meeting coordination, actions |
| **Assurance** | Health checks, compliance |
{:class="table table-single table-narrow"}

### Programme Office vs PMO

| Programme Office | PMO |
|------------------|-----|
| Dedicated to one programme | Serves multiple programmes/projects |
| Reports to Programme Manager | Reports to Head of PMO |
| Focus on programme delivery | Focus on standards, methodology |
| Temporary (programme duration) | Permanent organisational function |
{:class="table table-single table-narrow"}

---

## Governance Documentation

### Key Documents

| Document | Purpose |
|----------|---------|
| **Programme Mandate** | Initial authorisation |
| **Programme Brief** | Outline scope and approach |
| **Programme Definition Document** | Full programme definition |
| **Business Case** | Justification and benefits |
| **Benefits Realisation Plan** | How benefits will be achieved |
| **Programme Plan** | Master schedule and approach |
| **Governance Framework** | Roles, responsibilities, processes |
| **Terms of Reference** | Board composition and operation |
{:class="table table-single table-narrow"}

---

## Common Governance Challenges

| Challenge | Mitigation |
|-----------|------------|
| **Unclear accountability** | Document RACI, enforce single ownership |
| **Slow decision-making** | Define decision rights, escalation paths |
| **Board not engaged** | Right membership, prepared meetings |
| **Over-governance** | Right-size controls to risk |
| **Under-governance** | Ensure minimum viable controls |
| **Conflicting priorities** | Clear programme objectives, arbitration |
| **Stakeholder politics** | SRO leadership, transparent process |
{:class="table table-single table-narrow"}

---

## Governance Checklist

### Setup
- [ ] SRO appointed with appropriate authority?
- [ ] Programme Board established with right membership?
- [ ] Roles and responsibilities documented?
- [ ] Decision rights matrix defined?
- [ ] Tolerances set and agreed?
- [ ] Escalation paths clear?
- [ ] Meeting cadence established?
- [ ] Terms of Reference approved?

### Ongoing
- [ ] Board meetings effective?
- [ ] Decisions being made in timely manner?
- [ ] Escalations handled appropriately?
- [ ] Reporting providing right information?
- [ ] Assurance activities happening?
- [ ] Governance adapting to programme needs?

---

## Related Resources

- [Programme Lifecycle](/programmes/programme_lifecycle) - Programme stages
- [Programme Assurance](/programmes/programme_assurance) - Assurance activities
- [Programme Healthcheck](/programmes/programme_healthcheck) - Health assessment
- [Project Governance](/projects/project_governance) - Project-level governance
- [Stakeholder Management](/programmes/stakeholder_management) - Stakeholder engagement

