---
layout: page
name: Product Breakdown Structure
section: Best Practice
description: Creating product breakdown structures to decompose project deliverables into manageable components
tags: [PBS, Product Breakdown, Planning, Best Practice]
color: purple-200
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

---

## What is a Product Breakdown Structure?

A Product Breakdown Structure (PBS) is a hierarchical decomposition of the project's final product into its constituent sub-products and components. It answers the fundamental planning question: "What do we need to produce?"

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Key Principle:</strong> Plan around products, not activities. A PBS defines what needs to be delivered. Activities and tasks are derived from the products, not the other way around.
</div>

The PBS is a cornerstone of product-based planning, a technique used in PRINCE2 and widely applicable to any project methodology. By identifying all products first, you ensure nothing is missed and every piece of work is tied to a tangible deliverable.

---

## PBS vs WBS

The Product Breakdown Structure is often confused with the Work Breakdown Structure (WBS). While related, they serve different purposes:

| Aspect | PBS (Product Breakdown Structure) | WBS (Work Breakdown Structure) |
|--------|-----------------------------------|-------------------------------|
| **Focus** | What needs to be delivered | What work needs to be done |
| **Elements** | Products and deliverables | Activities and tasks |
| **Question** | "What do we need to produce?" | "What work is required?" |
| **Approach** | Output-oriented | Activity-oriented |
| **Sequence** | Created first | Derived from the PBS |
| **Methodology** | PRINCE2, product-based planning | PMI/PMBOK, activity-based planning |
| **Completeness** | Easier to verify (can you see the product?) | Harder to verify (have you listed all tasks?) |
{:class="table table-single table-narrow"}

<div class="mermaid">
flowchart LR
    A[Product Breakdown<br/>Structure] --> B[Product Flow<br/>Diagram]
    B --> C[Product<br/>Descriptions]
    C --> D[Activity &<br/>Task Planning]
    D --> E[Schedule &<br/>Resource Plan]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

The PBS feeds into the [Product Flow Diagram](/best_practice/pfd) which shows dependencies, and then into [Product Descriptions](/best_practice/product_descriptions) which define quality criteria. Only after these steps should you plan activities and build the [Schedule](/best_practice/schedule).

---

## Why Use a PBS?

- **Completeness** -- Systematically identifies all deliverables so nothing is overlooked
- **Shared understanding** -- Gives the team and stakeholders a visual picture of what the project will produce
- **Scope definition** -- Clearly shows what is in scope and what is not
- **Estimation basis** -- Each product can be estimated for effort, cost, and duration
- **Quality planning** -- Each product can have quality criteria defined via a [Product Description](/best_practice/product_descriptions)
- **Progress tracking** -- Products are either complete or not, making progress easier to measure than activities

---

## How to Create a PBS

### Step-by-Step Process

1. **Identify the final product** -- Start with the overall project output at the top of the hierarchy
2. **Decompose into major components** -- Break the final product into its main sub-products
3. **Continue decomposing** -- Break each sub-product into further components until you reach products that can be assigned, estimated, and quality-checked
4. **Identify external products** -- Mark any products that come from outside the project (inputs, existing systems, third-party deliverables)
5. **Validate completeness** -- Review with the team and stakeholders to ensure nothing is missing
6. **Number each product** -- Assign unique identifiers for traceability

### Decomposition Guidelines

| Guideline | Description |
|-----------|-------------|
| **Manageable size** | Each lowest-level product should be assignable to one person or team |
| **Estimable** | You should be able to estimate the effort to produce it |
| **Verifiable** | You should be able to inspect it and confirm it meets quality criteria |
| **Meaningful** | Each product should have a clear purpose and add value |
| **3-5 levels deep** | Most projects need 3-5 levels of decomposition |
| **5-9 children** | Each parent should ideally have between 5 and 9 sub-products |
{:class="table table-single table-narrow"}

---

## PBS Notation

A PBS uses a simple hierarchical tree structure. Products are typically shown as boxes or rectangles, with the final product at the top and sub-products branching below.

### Conventions

| Symbol | Meaning |
|--------|---------|
| Rectangle (solid border) | Product created by the project |
| Rectangle (dashed border) | External product (not created by this project) |
| Ellipse / rounded rectangle | Optional: used for product groups or categories |
| Lines | Parent-child decomposition relationship |
{:class="table table-single table-narrow"}

### Example: Website Redesign Project

<div class="mermaid">
flowchart LR
    A[Website<br/>Redesign] --> B[Design<br/>Products]
    A --> C[Technical<br/>Products]
    A --> D[Content<br/>Products]
    A --> E[Management<br/>Products]

    B --> B1[Brand<br/>Guidelines]
    B --> B2[Wireframes]
    B --> B3[Visual<br/>Designs]

    C --> C1[Front-end<br/>Code]
    C --> C2[CMS<br/>Configuration]
    C --> C3[Hosting<br/>Environment]

    D --> D1[Page<br/>Content]
    D --> D2[Media<br/>Assets]
    D --> D3[SEO<br/>Metadata]

    E --> E1[Test<br/>Report]
    E --> E2[Training<br/>Materials]
    E --> E3[Handover<br/>Pack]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,B1,B2,B3,C1,C2,C3,D1,D2,D3,E1,E2,E3 blue
</div>

---

## Levels of Decomposition

The number of levels depends on the size and complexity of the project. More levels provide greater detail but increase the overhead of managing the PBS.

| Level | Name | Description | Example |
|-------|------|-------------|---------|
| 1 | **Final product** | The overall project deliverable | New CRM System |
| 2 | **Product groups** | Major categories of deliverables | Software, Data, Training |
| 3 | **Products** | Individual deliverables | Sales Module, Data Migration Script, User Guide |
| 4 | **Sub-products** | Components of a product | Contact Management, Pipeline Tracker, Dashboard |
| 5 | **Product elements** | Lowest-level components (if needed) | Contact Search Screen, Contact Edit Form |
{:class="table table-single table-narrow"}

### When to Stop Decomposing

Stop breaking down products when:

- The product can be assigned to a single person or small team
- You can write a meaningful [Product Description](/best_practice/product_descriptions) for it
- You can estimate the effort to produce it with reasonable confidence
- You can define clear quality criteria and review it upon completion
- Further decomposition would add complexity without adding value

---

## Product Categories

When building a PBS, it helps to think about three categories of products:

### Specialist Products

These are the deliverables specific to the project's purpose -- the things the project exists to create. Examples include software applications, buildings, reports, or business processes.

### Management Products

These are the documents and artefacts needed to manage the project itself. They include plans, reports, logs, and registers. Examples:

- Project Initiation Document
- Stage plans
- Highlight reports
- Risk register
- Lessons log

### Quality Products

These are products created specifically to verify the quality of other products. Examples:

- Test plans and test results
- Review records
- Inspection reports
- Audit findings

---

## Using the PBS for Planning

The PBS is not just a diagram -- it is the foundation for the entire planning process:

| Planning Activity | How the PBS Helps |
|-------------------|-------------------|
| **Scope definition** | The PBS defines what is in and out of scope |
| **Dependency analysis** | Feed the PBS into a [Product Flow Diagram](/best_practice/pfd) to identify dependencies |
| **Quality planning** | Write a [Product Description](/best_practice/product_descriptions) for each product |
| **Estimation** | Estimate effort and cost for each lowest-level product |
| **Scheduling** | Build the [Schedule](/best_practice/schedule) from the product dependencies and estimates |
| **Resource planning** | Identify the skills needed for each product |
| **Progress tracking** | Track completion of products rather than percentage of activities |
| **Stage planning** | Group products into stages or sprints for incremental delivery |
{:class="table table-single table-narrow"}

---

## Linking PBS to Product Descriptions

Every product identified at the lowest level of the PBS should have a corresponding [Product Description](/best_practice/product_descriptions). The PBS provides the "what" and the product description provides the "how good."

<div class="mermaid">
flowchart LR
    A[PBS identifies<br/>all products] --> B[Write Product<br/>Description for each]
    B --> C[Define quality<br/>criteria]
    C --> D[Plan quality<br/>reviews]
    D --> E[Build into<br/>schedule]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

You do not need a product description for every product in the PBS. Focus on:

- Products that will be reviewed or inspected
- Products that are complex or high-risk
- Products that will be delivered to stakeholders or customers
- Products where quality expectations need to be explicitly agreed

---

## Maintaining the PBS

The PBS is a living document that evolves as the project progresses:

- **Review at stage boundaries** -- Update the PBS when planning each new stage
- **Add newly identified products** -- As understanding grows, new products may emerge
- **Remove products no longer needed** -- If scope changes, update the PBS accordingly
- **Track completion status** -- Mark products as complete when they pass quality review
- **Version control** -- Maintain a version history to track changes over time

---

## Common Mistakes

| Mistake | Impact | Solution |
|---------|--------|----------|
| Listing activities instead of products | PBS becomes a task list, not a deliverable map | Ask "What will be produced?" not "What will be done?" |
| Inconsistent levels of detail | Some areas over-decomposed, others under-decomposed | Apply consistent decomposition criteria across all branches |
| Forgetting management products | Plans, reports, and logs are missing from the PBS | Include a "Management Products" branch |
| Forgetting external products | Dependencies on external inputs are missed | Identify and mark all external products |
| Not involving the team | Products are missed because one person cannot think of everything | Workshop the PBS with the project team |
| Creating the PBS and never updating it | PBS becomes outdated and ignored | Review and update at each stage boundary |
| Too much detail too early | Effort wasted on detailed decomposition for distant work | Apply rolling wave: detail for near-term, summary for later stages |
{:class="table table-single table-narrow"}

---

## PBS Workshop Approach

A practical way to build a PBS is through a team workshop:

1. **Prepare** -- Brief the team on the project scope and objectives
2. **Brainstorm products** -- Use sticky notes to capture all deliverables the team can think of
3. **Group and organise** -- Cluster similar products together and identify parent-child relationships
4. **Build the hierarchy** -- Arrange products into a tree structure on a wall or whiteboard
5. **Identify gaps** -- Walk through the structure and look for missing products
6. **Mark external products** -- Identify which products come from outside the project
7. **Number and document** -- Assign identifiers and capture the structure digitally
8. **Review** -- Validate the PBS with stakeholders who were not in the workshop

---

## Related Resources

- [Product Descriptions](/best_practice/product_descriptions) -- Defining quality criteria for each product
- [Product Flow Diagram](/best_practice/pfd) -- Mapping dependencies between products
- [Schedule](/best_practice/schedule) -- Building a schedule from the PBS
- [Milestone Management](/best_practice/milestone_management) -- Linking products to milestones
