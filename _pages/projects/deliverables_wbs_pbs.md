---
layout: project
name: Deliverables / WBS / PBS
section: Project
process: planning
themes: [quality, planning]
tags: [planning, wbs, pbs, product breakdown structure, work breakdown structure, deliverables]
description: How to define project deliverables and create Work Breakdown Structures and Product Breakdown Structures.
last_updated: 2026-01-13
---

# Deliverables / WBS / PBS

Clearly defining what the project will produce is essential for planning, estimation, and stakeholder alignment. This page covers the key tools for breaking down project scope.

---

## What is a Deliverable?

A deliverable is a tangible or intangible output produced as a result of project work. Deliverables can be:

| Type | Examples |
|------|----------|
| **Products** | Software application, building, report |
| **Services** | Training delivery, support capability |
| **Results** | Process improvement, cost reduction |
| **Documents** | Business case, design specification |
{:class="table table-single table-narrow"}

### Deliverable Characteristics

Good deliverables are:
- **Measurable** - Can be verified as complete
- **Specific** - Clearly described
- **Achievable** - Within project capability
- **Relevant** - Aligned to project objectives

---

## Product Breakdown Structure (PBS)

The PBS shows **what** the project will produce - the products and their components.

<div class="mermaid">
flowchart LR
    P[Final Product] --> C1[Component 1]
    P --> C2[Component 2]
    P --> C3[Component 3]
    C1 --> S1[Sub-component 1.1]
    C1 --> S2[Sub-component 1.2]
    C2 --> S3[Sub-component 2.1]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class P,C1,C2,C3,S1,S2,S3 blue
</div>

### Creating a PBS

1. **Identify the final product** - What is the project ultimately delivering?
2. **Break into major components** - What are the main parts?
3. **Decompose further** - Continue until manageable pieces
4. **Verify completeness** - Does this cover everything?

### PBS Example: Website Project

```
Website
├── Front-end
│   ├── Homepage
│   ├── Navigation
│   └── Contact Form
├── Back-end
│   ├── Database
│   ├── API
│   └── Admin Panel
└── Documentation
    ├── User Guide
    └── Technical Docs
```

---

## Work Breakdown Structure (WBS)

The WBS shows **all the work** needed to create the deliverables - including management activities.

<div class="mermaid">
flowchart LR
    P[Project] --> D1[Deliverable 1]
    P --> D2[Deliverable 2]
    P --> PM[Project Management]
    D1 --> WP1[Work Package 1.1]
    D1 --> WP2[Work Package 1.2]
    D2 --> WP3[Work Package 2.1]
    PM --> WP4[Planning]
    PM --> WP5[Reporting]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class P,D1,D2,PM,WP1,WP2,WP3,WP4,WP5 blue
</div>

### The 100% Rule

The WBS must capture **100% of the project scope**:
- All deliverables included
- All work to produce them
- Project management activities
- If it's not in the WBS, it's not in scope

### WBS vs PBS

| PBS | WBS |
|-----|-----|
| Products only | Products + all work |
| What we're building | How we'll build it |
| Technical focus | Complete project scope |
| Input to WBS | Used for planning & control |
{:class="table table-single table-narrow"}

**Tip**: Create the PBS first to understand products, then expand into WBS by adding management work.

---

## Work Packages

The lowest level of the WBS is the **work package** - a unit of work that can be:

- **Estimated** - Duration and effort
- **Scheduled** - Start and end dates
- **Assigned** - To a person or team
- **Tracked** - Progress measured

### Work Package Guideline

A common rule is the **8-80 hour rule**:
- No less than 8 hours (1 day)
- No more than 80 hours (2 weeks)

This ensures packages are small enough to manage but not so detailed as to be burdensome.

---

## Creating Your Breakdown Structures

### Step-by-Step Process

<div class="mermaid">
flowchart LR
    A[Define<br/>Scope] --> B[Create<br/>PBS]
    B --> C[Expand<br/>to WBS]
    C --> D[Define Work<br/>Packages]
    D --> E[Assign<br/>Owners]
    E --> F[Estimate &<br/>Schedule]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

1. **Start with scope statement** - What are the project objectives?
2. **Identify major deliverables** - What products will we create?
3. **Build the PBS** - Break down products into components
4. **Expand to WBS** - Add management and support work
5. **Define work packages** - Decompose to manageable units
6. **Assign ownership** - Who is responsible for each package?

---

## Common Mistakes

| Mistake | Solution |
|---------|----------|
| Missing project management | Include planning, reporting, closure |
| Too detailed too early | Start high-level, elaborate progressively |
| Activity lists not structure | Group into logical hierarchy |
| Forgetting quality activities | Include testing, reviews, sign-offs |
| No ownership assigned | Every work package needs an owner |
{:class="table table-single table-narrow"}

---

## Templates

Consider documenting your breakdown structures using:
- **Spreadsheet** - Tabular format with WBS codes
- **Mind map** - Visual hierarchical view
- **Project tool** - MS Project, Smartsheet, etc.

Key fields to capture:
- WBS Code (e.g., 1.2.3)
- Name
- Description
- Owner
- Estimated effort
- Dependencies

---

## Related Resources

- [Work Breakdown Structure Guide](/planning/wbs) - Comprehensive WBS guide with worked examples
- [Estimation Techniques](/planning/estimation) - Estimating work packages
- [Critical Path Method](/planning/critical-path) - Scheduling WBS elements
- [Project Planning](/projects/project_planning) - Overall planning approach
- [Requirements](/projects/requirements) - Defining what's needed

