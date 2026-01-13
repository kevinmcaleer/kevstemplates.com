---
layout: page
title: PM Case Studies
name: Project Management Case Studies
description: Real-world project management case studies and worked examples covering IT projects, office relocations, product launches, and more.
permalink: /case-studies/
tags: [case studies, examples, worked examples, scenarios, practical]
last_updated: 2026-01-13
---

# Project Management Case Studies

Learn from practical examples and real-world scenarios. These case studies demonstrate how PM concepts, tools, and techniques apply in practice.

---

## Why Case Studies?

| Benefit | Description |
|---------|-------------|
| **Practical application** | See concepts in real context |
| **Learn from experience** | Understand what works (and what doesn't) |
| **Exam preparation** | Many PM exams use scenario-based questions |
| **Build confidence** | Practice before applying to real projects |
{:class="table table-single table-narrow"}

---

## Featured Case Studies

<div class="row">
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0"><i class="fas fa-laptop-code mr-2"></i>IT System Implementation</h5>
      </div>
      <div class="card-body">
        <p><strong>Scenario:</strong> Implementing a new CRM system for a mid-sized company</p>
        <ul>
          <li>Stakeholder management challenges</li>
          <li>Scope creep and change control</li>
          <li>Testing and go-live planning</li>
        </ul>
        <a href="/case-studies/crm-implementation" class="btn btn-outline-primary">View Case Study</a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-success text-white">
        <h5 class="mb-0"><i class="fas fa-building mr-2"></i>Office Relocation</h5>
      </div>
      <div class="card-body">
        <p><strong>Scenario:</strong> Moving 200 employees to a new office location</p>
        <ul>
          <li>Complex logistics and dependencies</li>
          <li>Multiple stakeholder groups</li>
          <li>Risk management in practice</li>
        </ul>
        <a href="/case-studies/office-relocation" class="btn btn-outline-success">View Case Study</a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-info text-white">
        <h5 class="mb-0"><i class="fas fa-rocket mr-2"></i>Product Launch</h5>
      </div>
      <div class="card-body">
        <p><strong>Scenario:</strong> Launching a new mobile application</p>
        <ul>
          <li>Agile delivery in practice</li>
          <li>Marketing and development coordination</li>
          <li>MVP and iterative releases</li>
        </ul>
        <a href="/case-studies/product-launch" class="btn btn-outline-info">View Case Study</a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-warning text-dark">
        <h5 class="mb-0"><i class="fas fa-exclamation-triangle mr-2"></i>Project Recovery</h5>
      </div>
      <div class="card-body">
        <p><strong>Scenario:</strong> Turning around a failing project</p>
        <ul>
          <li>Project health assessment</li>
          <li>Recovery planning</li>
          <li>Stakeholder communication</li>
        </ul>
        <a href="/case-studies/project-recovery" class="btn btn-outline-warning">View Case Study</a>
      </div>
    </div>
  </div>
</div>

---

## Case Study: CRM System Implementation

### Background

**Company**: MidCo Services (fictional)
**Industry**: Professional services
**Employees**: 150
**Project duration**: 6 months
**Budget**: £250,000

### The Challenge

MidCo's existing customer management was fragmented across spreadsheets, email, and an outdated contact database. They needed a unified CRM to:
- Centralise customer information
- Improve sales pipeline visibility
- Enable better customer service
- Generate management reports

### Project Approach

<div class="mermaid">
flowchart LR
    A[Discovery] --> B[Selection]
    B --> C[Design]
    C --> D[Build]
    D --> E[Test]
    E --> F[Deploy]
    F --> G[Support]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

### Key Stakeholders

| Stakeholder | Interest | Influence | Strategy |
|-------------|----------|-----------|----------|
| **MD** | ROI, timeline | High | Regular steering updates |
| **Sales Director** | Pipeline features | High | Design workshops, demos |
| **IT Manager** | Integration, security | Medium | Technical reviews |
| **Sales Team** | Ease of use | Medium | Training, early access |
| **Finance** | Budget, reporting | Medium | Monthly cost reviews |
{:class="table table-single table-narrow"}

### Challenges Encountered

#### 1. Scope Creep

**Situation**: After initial requirements were signed off, the Sales Director requested additional features for marketing automation.

**Impact**: Potentially £40,000 additional cost and 6-week delay.

**Resolution**:
- Documented change request formally
- Assessed impact on scope, time, and cost
- Presented options to steering committee
- Decision: Defer marketing automation to Phase 2
- **Lesson**: Strong change control prevents project bloat

#### 2. Data Migration Issues

**Situation**: Legacy data was inconsistent with duplicate records and missing fields.

**Impact**: Risk of poor data quality undermining the new system.

**Resolution**:
- Conducted data quality assessment early
- Created data cleansing rules
- Assigned data owners to validate their records
- Built data migration in stages with validation
- **Lesson**: Never underestimate data migration complexity

#### 3. User Resistance

**Situation**: Some sales team members were comfortable with spreadsheets and resistant to change.

**Impact**: Risk of low adoption after go-live.

**Resolution**:
- Identified and engaged change champions
- Involved users in design decisions
- Provided extensive training
- Celebrated early wins publicly
- **Lesson**: Change management is as important as technology

### Risk Register Extract

| Risk | Probability | Impact | Score | Response |
|------|-------------|--------|-------|----------|
| Data migration fails | Medium | High | 12 | Staged migration with rollback |
| User adoption low | High | High | 16 | Change management programme |
| Vendor delays | Medium | Medium | 9 | Buffer in schedule, penalty clauses |
| Integration issues | Medium | High | 12 | Early prototyping, technical spikes |
{:class="table table-single table-narrow"}

### Outcome

| Metric | Target | Actual |
|--------|--------|--------|
| **Timeline** | 6 months | 6.5 months |
| **Budget** | £250,000 | £245,000 |
| **User satisfaction** | 80% | 87% |
| **Data migrated** | 100% | 98% (2% archived) |
{:class="table table-single table-narrow"}

### Lessons Learned

| Category | Lesson | Action for Future |
|----------|--------|-------------------|
| **Scope** | Early scope definition prevents creep | Require sign-off before design |
| **Data** | Data quality is a project in itself | Assess data early, budget time |
| **People** | Resistance is normal, plan for it | Include change management in plan |
| **Testing** | UAT needs real users and real data | Plan UAT cycles with business |
| **Training** | One session isn't enough | Provide ongoing support post go-live |
{:class="table table-single table-narrow"}

---

## Case Study: Office Relocation

### Background

**Company**: TechStart Ltd (fictional)
**Employees**: 200
**Timeline**: 3 months
**Budget**: £150,000

### The Challenge

TechStart's lease was expiring, requiring a move to new premises. The project needed to:
- Minimise business disruption
- Complete within lease expiry deadline
- Stay within budget
- Maintain employee satisfaction

### Work Breakdown Structure

```
1.0 Office Relocation
├── 1.1 Project Management
│   ├── 1.1.1 Planning
│   ├── 1.1.2 Stakeholder communication
│   └── 1.1.3 Risk management
├── 1.2 New Office Preparation
│   ├── 1.2.1 Fit-out works
│   ├── 1.2.2 IT infrastructure
│   ├── 1.2.3 Furniture
│   └── 1.2.4 Access and security
├── 1.3 Physical Move
│   ├── 1.3.1 Packing
│   ├── 1.3.2 Transportation
│   └── 1.3.3 Unpacking
└── 1.4 Old Office Closure
    ├── 1.4.1 Cleaning
    ├── 1.4.2 Repairs
    └── 1.4.3 Handover
```

### Critical Path Analysis

<div class="mermaid">
flowchart LR
    A[Lease signed] --> B[Fit-out design]
    B --> C[Fit-out works]
    C --> D[IT install]
    D --> E[Furniture]
    E --> F[Move weekend]
    F --> G[Old office handover]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

**Critical path duration**: 11 weeks
**Available time**: 13 weeks
**Float**: 2 weeks

### Risk Management

| Risk | Response | Contingency |
|------|----------|-------------|
| Fit-out delayed | Weekly progress meetings, penalty clauses | 2-week float, weekend overtime |
| IT infrastructure issues | Early testing, backup connectivity | Mobile hotspots, temporary setup |
| Moving company availability | Book early, confirm repeatedly | Backup moving company identified |
| Staff unavailability for packing | Flexible packing windows | Professional packers on standby |
{:class="table table-single table-narrow"}

### Stakeholder Communication Plan

| Stakeholder | Method | Frequency | Content |
|-------------|--------|-----------|---------|
| All staff | Email newsletter | Weekly | Progress, what to expect |
| Department heads | Meeting | Fortnightly | Decisions needed, risks |
| Senior leadership | Dashboard | Weekly | RAG status, budget, risks |
| Building landlord | Calls | As needed | Handover requirements |
{:class="table table-single table-narrow"}

### Outcome

The project completed on time and under budget:
- **Timeline**: Completed 3 days early
- **Budget**: £142,000 (£8,000 under)
- **Disruption**: Only 1 day of reduced productivity
- **Employee satisfaction**: 92% positive

### Key Success Factors

1. **Early planning** - Started 4 months before move
2. **Clear ownership** - Department champions for each area
3. **Regular communication** - No surprises for staff
4. **Contingency** - 2-week buffer proved valuable
5. **Weekend move** - Minimised business disruption

---

## Mini Case Studies

### Scenario 1: The Unrealistic Deadline

**Situation**: Sponsor demands project completion in 4 weeks when estimates suggest 8 weeks.

**What would you do?**

<details>
<summary>Click to reveal approach</summary>

**Recommended approach**:
1. Document the estimate with breakdown
2. Identify what could be delivered in 4 weeks (MVP)
3. Present options: full scope in 8 weeks, or reduced scope in 4 weeks
4. Discuss risks of compression (quality, team burnout)
5. Let sponsor make informed decision
6. Document the decision and constraints

**Key principle**: Never just accept an impossible deadline. Provide options and make trade-offs visible.
</details>

---

### Scenario 2: The Absent Sponsor

**Situation**: Your project sponsor is too busy to attend steering meetings or make decisions.

**What would you do?**

<details>
<summary>Click to reveal approach</summary>

**Recommended approach**:
1. Document the impact of delayed decisions
2. Request a brief weekly slot (15 mins) rather than long meetings
3. Prepare decisions in writing for email approval
4. Identify a delegate who can act on sponsor's behalf
5. Escalate through governance if project is at risk
6. Keep a decision log showing delays

**Key principle**: Projects need engaged sponsors. Make the cost of absence visible.
</details>

---

### Scenario 3: Team Conflict

**Situation**: Two team members have a personal conflict affecting their work and team morale.

**What would you do?**

<details>
<summary>Click to reveal approach</summary>

**Recommended approach**:
1. Address early - don't let it fester
2. Speak to each person privately first
3. Focus on behaviour and impact, not personalities
4. Facilitate a discussion to find common ground
5. Set clear expectations for professional conduct
6. Escalate to HR if behaviour continues
7. Document everything

**Key principle**: Conflict is normal, but must be managed. Focus on impact and behaviour.
</details>

---

## Using Case Studies for Learning

### For Self-Study

1. Read the scenario and challenge
2. Before reading the solution, write your approach
3. Compare your approach to the case study
4. Note differences and consider why

### For Team Learning

1. Present the scenario without the outcome
2. Discuss in groups: What would you do?
3. Share approaches and rationale
4. Reveal the actual approach
5. Discuss what worked and what you'd do differently

### For Exam Preparation

- Practice explaining your reasoning
- Reference PM frameworks and techniques
- Consider stakeholder perspectives
- Think about trade-offs and options

---

## Related Resources

- [Project Lifecycle](/projects/) - Stages referenced in case studies
- [Risk Management](/risk-management/) - Risk techniques in practice
- [Stakeholder Management](/projects/identify_stakeholders) - Stakeholder approaches
- [Change Control](/projects/project_change_control) - Managing scope changes
- [Lessons Learned](/projects/lessons_learned) - Capturing project knowledge

