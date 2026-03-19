---
layout: page
name: Product Flow Diagram
section: Best Practice
description: Using product flow diagrams to visualise dependencies between project deliverables
tags: [PFD, Product Flow, Dependencies, Planning, Best Practice]
color: purple-300
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

---

## What is a Product Flow Diagram?

A Product Flow Diagram (PFD) is a visual representation of the sequence and dependencies between the products identified in a [Product Breakdown Structure](/best_practice/pbs). While the PBS shows what needs to be produced, the PFD shows the order in which products must be created.

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Key Principle:</strong> The PFD answers the question "In what order do we need to produce these products?" It shows which products must exist before other products can be created.
</div>

The PFD is the second step in the product-based planning technique, sitting between the PBS and the detailed activity plan. It transforms a static list of deliverables into a dynamic picture of how products flow from start to finish.

---

## Purpose of the PFD

The Product Flow Diagram serves several important functions:

- **Sequencing** -- Determines the logical order for producing deliverables
- **Dependency identification** -- Reveals which products depend on others
- **Parallel work** -- Highlights products that can be developed concurrently
- **Critical path insight** -- Shows the longest chain of dependent products
- **External dependency visibility** -- Makes clear where the project depends on inputs from outside
- **Communication** -- Provides a clear visual for the team and stakeholders
- **Schedule foundation** -- Forms the basis for building the project [Schedule](/best_practice/schedule)

---

## Relationship to Other Planning Tools

<div class="mermaid">
flowchart LR
    A[Product Breakdown<br/>Structure] --> B[Product Flow<br/>Diagram]
    B --> C[Product<br/>Descriptions]
    C --> D[Activity<br/>Planning]
    D --> E[Schedule]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

| Planning Tool | What It Shows | Feeds Into |
|---------------|---------------|------------|
| [PBS](/best_practice/pbs) | All products that need to be created | PFD |
| **PFD** | The sequence and dependencies between products | Product Descriptions, Activity Planning |
| [Product Descriptions](/best_practice/product_descriptions) | Quality criteria for each product | Quality Reviews |
| Activity Planning | Tasks needed to create each product | [Schedule](/best_practice/schedule) |
| [Schedule](/best_practice/schedule) | When products will be produced, with resources | Delivery |
{:class="table table-single table-narrow"}

---

## How to Create a Product Flow Diagram

### Step-by-Step Process

1. **Start with the PBS** -- Gather the list of lowest-level products from the [Product Breakdown Structure](/best_practice/pbs)
2. **Identify the starting products** -- Which products have no predecessors? These are either external products or the first products to be created
3. **Determine dependencies** -- For each product, ask "What other products must exist before this one can be created?"
4. **Draw the flow** -- Arrange products left to right (or top to bottom), connecting them with arrows to show the flow
5. **Mark external products** -- Clearly distinguish products that come from outside the project
6. **Identify parallel streams** -- Look for products that can be developed simultaneously
7. **Validate the sequence** -- Walk through the diagram with the team to confirm the logic
8. **Identify the critical chain** -- Find the longest path through the diagram

### Asking the Right Questions

For each product in the PBS, ask:

- What products must I have before I can start this one?
- What products cannot start until this one is finished?
- Can this product be started at the same time as any other?
- Does this product depend on anything from outside the project?
- Is this product needed by more than one subsequent product?

---

## PFD Notation and Symbols

| Symbol | Meaning | Usage |
|--------|---------|-------|
| **Rectangle** (solid border) | Project product | Products created by the project team |
| **Rectangle** (dashed border) | External product | Products provided from outside the project |
| **Arrow** (solid line) | Dependency | Shows the flow from predecessor to successor |
| **Diamond** (optional) | Decision point | Where the sequence may branch |
{:class="table table-single table-narrow"}

### Reading the Diagram

- Arrows flow from left to right (or top to bottom)
- An arrow from Product A to Product B means "Product A must be completed before Product B can begin"
- Products with no incoming arrows are starting points
- Products with no outgoing arrows are end products
- Multiple arrows into a product means it has several prerequisites
- Multiple arrows from a product means it feeds into several subsequent products

---

## Example: IT System Implementation

The following PFD shows the product flow for a typical IT system implementation project:

<div class="mermaid">
flowchart LR
    EXT1[Business<br/>Requirements<br/>*external*] --> A[Solution<br/>Design]
    EXT2[Existing System<br/>Documentation<br/>*external*] --> A
    A --> B[Technical<br/>Specification]
    A --> C[Test<br/>Strategy]
    B --> D[Developed<br/>Software]
    B --> E[Data Migration<br/>Scripts]
    C --> F[Test<br/>Scripts]
    D --> G[Test<br/>Results]
    E --> G
    F --> G
    G --> H[Training<br/>Materials]
    G --> I[Deployment<br/>Plan]
    H --> J[Trained<br/>Users]
    I --> K[Live<br/>System]
    J --> K

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class EXT1,EXT2,A,B,C,D,E,F,G,H,I,J,K blue
</div>

This diagram reveals several important insights:

- **Parallel streams** -- Technical Specification and Test Strategy can be developed in parallel after Solution Design
- **Convergence point** -- Test Results depends on three prior products (Developed Software, Data Migration Scripts, and Test Scripts)
- **External dependencies** -- Business Requirements and Existing System Documentation must be provided before the project can start designing the solution
- **Critical path** -- The longest chain of dependencies determines the minimum project duration

---

## Dependency Types

When building a PFD, you will encounter different types of dependencies:

| Type | Description | Example |
|------|-------------|---------|
| **Mandatory** | Logically required -- one product genuinely cannot exist without the other | Test scripts cannot be written without a test strategy |
| **Discretionary** | Based on best practice or preference, but not strictly required | Choosing to complete the design before starting development |
| **External** | Depends on something from outside the project | Regulatory approval before deployment |
| **Internal** | Depends on another product within the project | User guide depends on completed software |
{:class="table table-single table-narrow"}

<div class="alert alert-warning">
<i class="fas fa-exclamation-triangle mr-2"></i>
<strong>Warning:</strong> Challenge all dependencies. Unnecessary dependencies constrain the schedule and reduce flexibility. Ask "Would it truly be impossible to start this product without the predecessor?" If the answer is no, the dependency may be discretionary.
</div>

---

## Identifying External Dependencies

External dependencies are critical risks to the project. They represent products or inputs that the project team cannot directly control.

### Sources of External Dependencies

- **Client or customer** -- Requirements, approvals, sign-offs, test data
- **Third-party suppliers** -- Software components, infrastructure, specialist services
- **Other projects** -- Shared platforms, integrated systems, common components
- **Regulatory bodies** -- Permits, licences, compliance certificates
- **Business operations** -- Access to environments, availability of subject matter experts

### Managing External Dependencies

| Action | Description |
|--------|-------------|
| **Identify early** | Map all external dependencies during planning |
| **Assign ownership** | Nominate someone responsible for tracking each external dependency |
| **Agree dates** | Get commitment from the external party on delivery dates |
| **Build contingency** | Add buffer time for external dependencies in the schedule |
| **Monitor actively** | Track external dependencies in the risk register and at project meetings |
| **Escalate promptly** | Raise delays immediately rather than waiting for impact |
{:class="table table-single table-narrow"}

---

## Using the PFD for Scheduling

The PFD directly informs the project [Schedule](/best_practice/schedule):

<div class="mermaid">
flowchart LR
    A[PFD shows<br/>product sequence] --> B[Estimate effort<br/>for each product]
    B --> C[Identify parallel<br/>streams]
    C --> D[Determine<br/>critical path]
    D --> E[Allocate<br/>resources]
    E --> F[Build schedule<br/>with milestones]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

### From PFD to Schedule

1. **Add duration estimates** -- For each product, estimate how long it will take to produce
2. **Identify the critical path** -- The longest chain of dependent products determines the minimum project duration
3. **Find float** -- Products not on the critical path have scheduling flexibility (float)
4. **Assign resources** -- Allocate people to products, checking for over-allocation
5. **Set milestones** -- Place [milestones](/best_practice/milestone_management) at key product completion points
6. **Build the Gantt chart** -- Translate the product flow into a time-based schedule

---

## PFD at Different Planning Levels

The level of detail in a PFD should match the planning level:

| Planning Level | PFD Detail | Audience |
|---------------|-----------|----------|
| **Project level** | High-level product groups and major dependencies | Senior stakeholders, Project Board |
| **Stage level** | Individual products within the current stage | Project Manager, Team Managers |
| **Work package level** | Sub-products and detailed dependencies | Team members, specialists |
{:class="table table-single table-narrow"}

At the project level, the PFD might show 10-15 major product groups. At the stage level, it could show 20-40 individual products. Avoid creating a single diagram with hundreds of products -- break it into manageable sections.

---

## Quality Checking the PFD

Before finalising a PFD, verify it against this checklist:

- [ ] All products from the PBS are represented
- [ ] External products are clearly marked
- [ ] Every product (except starting products) has at least one predecessor
- [ ] Every product (except end products) has at least one successor
- [ ] No circular dependencies exist (A depends on B depends on A)
- [ ] Dependencies are genuine, not assumed
- [ ] Parallel streams are identified where possible
- [ ] The critical path is identifiable
- [ ] The diagram has been reviewed with the project team
- [ ] External dependency owners have been identified

---

## Common Mistakes

| Mistake | Impact | Solution |
|---------|--------|----------|
| Skipping the PFD entirely | Dependencies are discovered late, causing delays | Always create a PFD, even a simple one |
| Showing activities instead of products | Diagram becomes a process flow, not a product flow | Use nouns (the deliverable), not verbs (the activity) |
| Missing external dependencies | Project is delayed by inputs it cannot control | Systematically identify all external inputs |
| Over-connecting products | Too many dependencies reduce scheduling flexibility | Challenge every dependency -- is it truly mandatory? |
| Not updating the PFD | Diagram becomes outdated as the project evolves | Review and update at each stage boundary |
| Making it too complex | Diagram becomes unreadable and unusable | Break large PFDs into sub-diagrams by product group |
| Ignoring parallel opportunities | Schedule is longer than necessary | Actively look for products that can be developed concurrently |
{:class="table table-single table-narrow"}

---

## Tips for Effective PFDs

1. **Use a workshop format** -- Build the PFD collaboratively with the team using sticky notes on a wall
2. **Start from both ends** -- Work forwards from the starting products and backwards from the final product to ensure completeness
3. **Keep it visible** -- Display the PFD prominently so the team can reference it daily
4. **Colour-code** -- Use different colours for different product groups or workstreams
5. **Number products consistently** -- Use the same identifiers as the PBS and [Product Descriptions](/best_practice/product_descriptions)
6. **Challenge "finish-to-start"** -- Consider whether a product genuinely needs its predecessor to be 100% complete, or whether it can start when the predecessor is partially done
7. **Link to risk management** -- Any dependency is a potential risk; ensure critical dependencies are captured in the risk register

---

## Related Resources

- [Product Breakdown Structure](/best_practice/pbs) -- Identifying all products before mapping dependencies
- [Product Descriptions](/best_practice/product_descriptions) -- Defining quality criteria for each product in the flow
- [Schedule](/best_practice/schedule) -- Translating the product flow into a time-based plan
- [Milestone Management](/best_practice/milestone_management) -- Setting milestones at key points in the product flow
