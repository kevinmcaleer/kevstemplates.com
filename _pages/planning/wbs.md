---
layout: page
name: Work Breakdown Structure
section: Planning
description: Complete guide to creating Work Breakdown Structures (WBS) including decomposition techniques, WBS dictionary, PBS, and best practices.
tags: [WBS, work breakdown structure, PBS, product breakdown structure, decomposition, scope]
last_updated: 2026-01-13
---

{% include planning_nav.html %}

# Work Breakdown Structure (WBS)

A Work Breakdown Structure is a hierarchical decomposition of the total scope of work. It's the foundation for planning, estimating, scheduling, and controlling a project.

---

## What is a WBS?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> A WBS is a deliverable-oriented hierarchical decomposition of the work to be executed by the project team to accomplish the project objectives and create the required deliverables.
</div>

The WBS:
- Defines **100% of the project scope**
- Organises work into manageable sections
- Provides the basis for estimating and scheduling
- Enables clear assignment of responsibility
- Facilitates progress tracking and reporting

---

## WBS Structure

<div class="mermaid">
flowchart TD
    P[Project] --> D1[Deliverable 1]
    P --> D2[Deliverable 2]
    P --> D3[Deliverable 3]

    D1 --> WP1[Work Package 1.1]
    D1 --> WP2[Work Package 1.2]

    D2 --> WP3[Work Package 2.1]
    D2 --> WP4[Work Package 2.2]
    D2 --> WP5[Work Package 2.3]

    D3 --> WP6[Work Package 3.1]
    D3 --> WP7[Work Package 3.2]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class P,D1,D2,D3,WP1,WP2,WP3,WP4,WP5,WP6,WP7 blue
</div>

### Terminology

| Term | Description |
|------|-------------|
| **Project** | Level 1 - The overall project |
| **Deliverable** | Major output or result |
| **Work Package** | Lowest level - can be estimated, scheduled, assigned |
| **Control Account** | Management control point for scope, cost, schedule |
| **WBS Element** | Any component in the hierarchy |
{:class="table table-single table-narrow"}

---

## The 100% Rule

The most important WBS principle:

> The WBS must include **100% of the work** defined by the project scope and capture **all deliverables** - internal, external, and interim.

This means:
- No work outside the WBS
- No gaps in coverage
- Child elements sum to parent
- If it's not in the WBS, it's not in scope

---

## Creating a WBS

### Top-Down Approach

Start with major deliverables and decompose downward:

1. **Identify major deliverables** from scope statement
2. **Decompose each deliverable** into smaller components
3. **Continue decomposing** until work packages are reached
4. **Verify 100% rule** at each level
5. **Assign WBS codes** for tracking

### Bottom-Up Approach

Start with detailed tasks and group upward:

1. **Brainstorm all tasks** needed
2. **Group related tasks** into work packages
3. **Group work packages** into deliverables
4. **Verify completeness** against scope
5. **Assign WBS codes**

### Decomposition Guidelines

Stop decomposing when the work package:
- Can be **estimated** with confidence
- Can be **scheduled** with start/end dates
- Can be **assigned** to one person or team
- Can be **tracked** for progress
- Takes **8-80 hours** (common guideline)

---

## WBS Formats

### Hierarchical Chart

```
1.0 Website Redesign
├── 1.1 Project Management
│   ├── 1.1.1 Planning
│   ├── 1.1.2 Monitoring
│   └── 1.1.3 Closure
├── 1.2 Design
│   ├── 1.2.1 Wireframes
│   ├── 1.2.2 Visual Design
│   └── 1.2.3 Prototypes
├── 1.3 Development
│   ├── 1.3.1 Front-end
│   ├── 1.3.2 Back-end
│   └── 1.3.3 Integration
└── 1.4 Testing & Launch
    ├── 1.4.1 Testing
    ├── 1.4.2 UAT
    └── 1.4.3 Deployment
```

### Tabular Format

| WBS Code | Element | Level | Type |
|----------|---------|-------|------|
| 1.0 | Website Redesign | 1 | Project |
| 1.1 | Project Management | 2 | Deliverable |
| 1.1.1 | Planning | 3 | Work Package |
| 1.1.2 | Monitoring | 3 | Work Package |
| 1.2 | Design | 2 | Deliverable |
| 1.2.1 | Wireframes | 3 | Work Package |
{:class="table table-single table-narrow"}

---

## WBS Dictionary

The WBS Dictionary provides detailed information about each WBS element:

| Field | Description |
|-------|-------------|
| **WBS Code** | Unique identifier |
| **Name** | Element name |
| **Description** | Detailed scope description |
| **Responsible** | Person/team accountable |
| **Deliverables** | Outputs produced |
| **Acceptance Criteria** | How completion is verified |
| **Dependencies** | Links to other elements |
| **Estimated Effort** | Hours or days |
| **Estimated Cost** | Budget allocation |
| **Assumptions** | Key assumptions made |
| **Risks** | Associated risks |
{:class="table table-single table-narrow"}

---

## Deliverable vs Activity-Based WBS

### Deliverable-Based (Recommended)

Organised around outputs and results:

```
1.0 New Product Launch
├── 1.1 Product
│   ├── 1.1.1 Prototype
│   └── 1.1.2 Final Product
├── 1.2 Documentation
│   ├── 1.2.1 User Manual
│   └── 1.2.2 Training Materials
└── 1.3 Marketing Collateral
    ├── 1.3.1 Brochures
    └── 1.3.2 Website Content
```

**Pros**: Focus on outcomes, easier stakeholder communication

### Activity-Based

Organised around phases or work types:

```
1.0 New Product Launch
├── 1.1 Planning
├── 1.2 Design
├── 1.3 Development
├── 1.4 Testing
└── 1.5 Deployment
```

**Pros**: Familiar to project teams, aligns with lifecycle

---

## Product Breakdown Structure (PBS)

A PBS focuses purely on products/deliverables without activities:

<div class="mermaid">
flowchart TD
    P[Product] --> C1[Component 1]
    P --> C2[Component 2]
    P --> C3[Component 3]

    C1 --> SC1[Sub-component 1.1]
    C1 --> SC2[Sub-component 1.2]

    C2 --> SC3[Sub-component 2.1]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class P,C1,C2,C3,SC1,SC2,SC3 blue
</div>

### PBS vs WBS

| PBS | WBS |
|-----|-----|
| Products only | Products + management work |
| What we're building | All work to build it |
| Technical focus | Complete project scope |
| Input to WBS | Used for planning & control |
{:class="table table-single table-narrow"}

In PRINCE2, you typically create the PBS first, then derive the WBS from it.

---

## WBS Numbering (Coding)

A consistent numbering scheme enables tracking and reporting:

### Decimal System

```
1.0     Level 1
1.1     Level 2
1.1.1   Level 3
1.1.1.1 Level 4
```

### Guidelines

- **Unique codes** - Each element has one code
- **Hierarchical** - Code shows position in structure
- **Consistent depth** - Similar items at same level
- **Room to grow** - Allow for additions (e.g., 1.1, 1.2, 1.3... not 1.1, 1.2, 1.21)

---

## Common WBS Mistakes

### 1. Not Including All Work
**Problem**: Management, QA, or transition work omitted
**Solution**: Include PM, testing, training, and handover activities

### 2. Too Many Levels
**Problem**: Overly detailed, hard to manage
**Solution**: Stop at work packages (8-80 hours)

### 3. Activity Lists, Not Structure
**Problem**: Flat list of tasks without hierarchy
**Solution**: Group into logical deliverables

### 4. Skipping Work Packages
**Problem**: Vague elements that can't be estimated
**Solution**: Decompose until assignable and measurable

### 5. Scope Creep via WBS
**Problem**: New items added without change control
**Solution**: WBS changes follow scope change process

---

## WBS for Agile Projects

In Agile, the WBS equivalent is often:

| Traditional | Agile Equivalent |
|-------------|------------------|
| Project | Product |
| Deliverable | Epic |
| Work Package | User Story |
| Task | Task |
{:class="table table-single table-narrow"}

The Product Backlog serves as a living, prioritised WBS.

---

## WBS Creation Checklist

- [ ] Scope statement reviewed and understood?
- [ ] Major deliverables identified?
- [ ] All work included (100% rule)?
- [ ] Work packages estimable and assignable?
- [ ] Consistent level of detail?
- [ ] WBS codes assigned?
- [ ] Dictionary entries created?
- [ ] Stakeholders reviewed and approved?
- [ ] Baselined for change control?

---

## Worked Example

**Project**: Office Relocation

```
1.0 Office Relocation
├── 1.1 Project Management
│   ├── 1.1.1 Project Planning
│   ├── 1.1.2 Stakeholder Communication
│   └── 1.1.3 Project Closure
├── 1.2 New Office Setup
│   ├── 1.2.1 Lease Negotiation
│   ├── 1.2.2 Fit-out Works
│   ├── 1.2.3 IT Infrastructure
│   └── 1.2.4 Furniture Installation
├── 1.3 Transition
│   ├── 1.3.1 Packing
│   ├── 1.3.2 Physical Move
│   └── 1.3.3 Unpacking
└── 1.4 Old Office Closure
    ├── 1.4.1 Cleaning
    ├── 1.4.2 Repairs
    └── 1.4.3 Lease Termination
```

---

## Related Resources

- [Estimation Techniques](/planning/estimation) - Estimating work packages
- [Critical Path Method](/planning/critical-path) - Scheduling WBS elements
- [Gantt Charts](/planning/gantt-charts) - Visualising the schedule
- [Deliverables / WBS / PBS](/projects/deliverables_wbs_pbs) - Template download
- [PRINCE2 Plans Theme](/methodologies/prince2#plans-theme) - PBS in PRINCE2

