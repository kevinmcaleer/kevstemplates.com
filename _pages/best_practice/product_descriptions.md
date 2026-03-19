---
layout: page
name: Product Descriptions
section: Best Practice
description: How to write effective product descriptions that clearly define project deliverables and quality criteria
tags: [Product Descriptions, Quality, Deliverables, Best Practice]
color: purple-100
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

---

## What is a Product Description?

A product description is a structured document that defines a project deliverable (or "product") in sufficient detail for it to be produced, reviewed, and approved. Originating from the PRINCE2 methodology, product descriptions provide clarity on what needs to be delivered, to what standard, and how quality will be verified.

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Key Principle:</strong> A well-written product description removes ambiguity. If two people read it independently, both should understand exactly what needs to be produced and how to judge whether it is fit for purpose.
</div>

Every significant deliverable in your project should have a product description. This ensures the project team, suppliers, and stakeholders share a common understanding of what "done" looks like.

---

## Purpose of Product Descriptions

Product descriptions serve several critical functions:

- **Clarity** -- Define exactly what each deliverable consists of and what it must achieve
- **Quality control** -- Establish measurable quality criteria before work begins
- **Estimation** -- Provide a basis for estimating effort, cost, and duration
- **Accountability** -- Assign responsibility for producing and approving each product
- **Acceptance** -- Give stakeholders a clear framework for accepting or rejecting deliverables
- **Scope management** -- Prevent scope creep by documenting what is and is not included

---

## Components of a Product Description

A complete product description contains the following elements:

| Component | Purpose | Example |
|-----------|---------|---------|
| **Identifier** | Unique reference code for traceability | PRD-001, BP-003 |
| **Title** | Clear, descriptive name | "User Acceptance Test Report" |
| **Purpose** | Why this product is needed | "To confirm the system meets business requirements" |
| **Composition** | What the product contains or consists of | "Test results, defect summary, sign-off section" |
| **Derivation** | Source materials or inputs needed | "Test scripts, requirements specification" |
| **Format and Presentation** | Physical form and any standards | "Word document, using corporate template" |
| **Quality Criteria** | Measurable standards the product must meet | "All Priority 1 defects resolved" |
| **Quality Method** | How quality will be checked | "Peer review followed by formal inspection" |
| **Quality Skills** | Competencies needed to review the product | "Senior business analyst with domain expertise" |
| **Quality Tolerance** | Permitted deviation from quality criteria | "No more than 5 minor defects outstanding" |
{:class="table table-single table-narrow"}

---

## The Product Description Process

<div class="mermaid">
flowchart LR
    A[Identify<br/>Products] --> B[Draft Product<br/>Description]
    B --> C[Define Quality<br/>Criteria]
    C --> D[Agree with<br/>Stakeholders]
    D --> E[Produce<br/>Product]
    E --> F[Review Against<br/>Description]
    F --> G[Approve or<br/>Rework]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

1. **Identify products** from the [Product Breakdown Structure](/best_practice/pbs) and project plan
2. **Draft** the product description using the standard components
3. **Define quality criteria** that are specific, measurable, and testable
4. **Agree** the description with the product owner, quality reviewers, and key stakeholders
5. **Produce** the product according to the description
6. **Review** the completed product against the quality criteria
7. **Approve** or send back for rework based on the review outcome

---

## Writing Good Quality Criteria

Quality criteria are the most important part of any product description. Poor criteria lead to subjective judgements and disputes about whether a deliverable is acceptable.

### Characteristics of Good Quality Criteria

| Characteristic | Poor Example | Good Example |
|---------------|-------------|-------------|
| **Specific** | "Report must be good quality" | "Report must include all 12 KPIs defined in the dashboard specification" |
| **Measurable** | "System should be fast" | "Page load time must not exceed 2 seconds under normal load" |
| **Testable** | "Users should be happy" | "At least 80% of test participants complete the task without assistance" |
| **Achievable** | "Zero defects" | "No Priority 1 or 2 defects outstanding at release" |
| **Relevant** | "Document looks professional" | "Document follows the corporate branding guidelines v3.2" |
{:class="table table-single table-narrow"}

### Quality Criteria Categories

When defining criteria, consider these categories:

- **Completeness** -- Does the product contain everything it should?
- **Accuracy** -- Is the content correct and free from errors?
- **Consistency** -- Does it align with related products and standards?
- **Usability** -- Can the intended audience use it effectively?
- **Compliance** -- Does it meet regulatory or organisational standards?
- **Performance** -- Does it meet non-functional requirements?

---

## Examples for Common Deliverables

### Example 1: Business Requirements Document

| Component | Content |
|-----------|---------|
| **Identifier** | PRD-012 |
| **Title** | Business Requirements Document |
| **Purpose** | To capture and document the agreed business requirements for the CRM replacement project |
| **Composition** | Business context, stakeholder needs, functional requirements, non-functional requirements, constraints, assumptions, acceptance criteria |
| **Derivation** | Project brief, stakeholder interviews, workshop outputs, existing system documentation |
| **Format** | Word document using the corporate requirements template (v2.1) |
| **Quality Criteria** | All requirements are uniquely numbered; each requirement uses "shall" or "should" language; all requirements are traceable to a business objective; no duplicate or contradictory requirements |
| **Quality Method** | Peer review by senior BA, followed by formal review with business stakeholders |
| **Quality Skills** | Senior business analyst with CRM domain experience; business stakeholder with authority to approve requirements |
| **Quality Tolerance** | Maximum 3 requirements flagged as "to be confirmed" at sign-off |
{:class="table table-single table-narrow"}

### Example 2: Training Materials

| Component | Content |
|-----------|---------|
| **Identifier** | PRD-045 |
| **Title** | End User Training Pack |
| **Purpose** | To enable end users to operate the new system independently after go-live |
| **Composition** | Trainer guide, participant workbook, quick reference card, exercise scenarios, assessment quiz |
| **Derivation** | System design document, user interface screenshots, business process maps |
| **Format** | PowerPoint for trainer guide; PDF for participant materials; laminated A4 for quick reference |
| **Quality Criteria** | Covers all 15 core business processes; step-by-step instructions with screenshots for each process; quiz achieves 80% pass rate in pilot session; materials reviewed by subject matter expert |
| **Quality Method** | Dry-run training session with 5 pilot participants |
| **Quality Skills** | Experienced trainer; subject matter expert from operations team |
| **Quality Tolerance** | Minor typographical errors acceptable if corrected before full rollout |
{:class="table table-single table-narrow"}

### Example 3: Test Plan

| Component | Content |
|-----------|---------|
| **Identifier** | PRD-030 |
| **Title** | System Integration Test Plan |
| **Purpose** | To define the approach, scope, and schedule for system integration testing |
| **Composition** | Test scope, entry and exit criteria, test environment requirements, test data approach, defect management process, roles and responsibilities, schedule |
| **Derivation** | Technical design document, integration architecture, non-functional requirements |
| **Format** | Word document using the test management template |
| **Quality Criteria** | All integration points documented; entry and exit criteria are measurable; test environment matches production configuration; schedule aligns with project plan |
| **Quality Method** | Review by test manager and technical architect |
| **Quality Skills** | Test manager with integration testing experience; technical architect |
| **Quality Tolerance** | Test environment may differ from production in scale but not in configuration |
{:class="table table-single table-narrow"}

---

## The Project Product Description

The Project Product Description is a special product description that defines the overall output of the project. It is created during project initiation and forms part of the Project Brief or Project Initiation Document.

It answers the question: "What will this project deliver as its final result?"

The Project Product Description includes the same components as a standard product description, plus:

- **Customer's quality expectations** -- What the customer expects in broad terms
- **Acceptance criteria** -- Specific conditions that must be met for the project output to be accepted
- **Acceptance method** -- How acceptance will be confirmed (e.g., formal sign-off, user acceptance testing)
- **Acceptance responsibilities** -- Who has authority to accept the final product

---

## Tips for Writing Effective Product Descriptions

1. **Write them early** -- Create product descriptions during planning, not after the product is built
2. **Involve the right people** -- Engage producers, reviewers, and approvers when drafting
3. **Be precise but not prescriptive** -- Define what the product must achieve without dictating how to build it
4. **Use consistent language** -- Adopt standard terms like "shall" (mandatory) and "should" (desirable)
5. **Keep them proportionate** -- A simple deliverable needs a brief description; a complex one needs more detail
6. **Review and update** -- Product descriptions may need revision as the project progresses
7. **Link to quality reviews** -- Use product descriptions as the basis for all quality review activities

---

## Common Mistakes

| Mistake | Impact | Solution |
|---------|--------|----------|
| No product descriptions at all | Deliverables are poorly defined and disputed | Create descriptions for all significant products |
| Vague quality criteria | Subjective judgements about acceptance | Use measurable, testable criteria |
| Written after the product is built | Becomes a retrospective justification | Write descriptions during planning |
| Too detailed or prescriptive | Constrains the producer unnecessarily | Focus on the "what" not the "how" |
| No quality tolerance defined | Minor deviations trigger unnecessary rework | Set reasonable tolerances |
| Not agreed with stakeholders | Stakeholders reject products that meet the criteria | Review and agree descriptions with all parties |
| Static documents never updated | Descriptions become outdated and ignored | Review at stage boundaries |
{:class="table table-single table-narrow"}

---

## Product Description Quality Checklist

Use this checklist before finalising any product description:

- [ ] Identifier is unique and follows the project naming convention
- [ ] Title clearly identifies the product
- [ ] Purpose explains why the product is needed
- [ ] Composition lists all components or sections
- [ ] Derivation identifies all source materials
- [ ] Format and presentation are specified
- [ ] Quality criteria are specific, measurable, and testable
- [ ] Quality method is defined and appropriate
- [ ] Quality skills identify the right reviewers
- [ ] Quality tolerance is set and agreed
- [ ] The description has been agreed with the product owner

---

## Related Resources

- [Product Breakdown Structure](/best_practice/pbs) -- Identifying all the products that need descriptions
- [Product Flow Diagram](/best_practice/pfd) -- Visualising dependencies between products
- [Schedule](/best_practice/schedule) -- Using product descriptions to inform scheduling
- [Milestone Management](/best_practice/milestone_management) -- Linking products to milestone delivery
