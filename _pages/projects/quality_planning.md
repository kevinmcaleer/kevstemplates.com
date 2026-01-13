---
layout: project
name: Quality Planning
section: Project
process: planning
description: Defining quality standards, acceptance criteria, and quality assurance activities.
tags: [Planning, Quality, QA, Testing]
themes: [Planning, Quality]
last_updated: 2026-01-13
---

# Quality Planning

Quality planning defines how the project will ensure deliverables meet required standards and stakeholder expectations.

---

## What is Project Quality?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> Quality is the degree to which deliverables meet requirements and are fit for purpose. It's about meeting expectations, not exceeding them unnecessarily.
</div>

---

## Quality Management Components

| Component | Description |
|-----------|-------------|
| **Quality Planning** | Defining standards and approach |
| **Quality Assurance** | Process to ensure quality is built in |
| **Quality Control** | Testing and verification of outputs |
{:class="table table-single table-narrow"}

---

## Quality Planning Activities

| Activity | Purpose |
|----------|---------|
| **Define standards** | What quality levels are required? |
| **Set acceptance criteria** | How will we know it's good enough? |
| **Plan reviews** | When will quality be checked? |
| **Assign responsibilities** | Who ensures quality? |
| **Define processes** | How will quality be managed? |
{:class="table table-single table-narrow"}

---

## Acceptance Criteria

Good acceptance criteria are:

| Characteristic | Description |
|---------------|-------------|
| **Specific** | Clearly defined, not vague |
| **Measurable** | Can be objectively verified |
| **Achievable** | Realistic to accomplish |
| **Relevant** | Aligned to requirements |
| **Testable** | Can be validated |
{:class="table table-single table-narrow"}

### Examples

| Poor | Better |
|------|--------|
| "System must be fast" | "Page load time < 2 seconds" |
| "Report must be accurate" | "Report matches source data 100%" |
| "Easy to use" | "Users complete task in < 3 clicks" |
{:class="table table-single table-narrow"}

---

## Quality Assurance Activities

<div class="mermaid">
flowchart LR
    A[Define<br/>Standards] --> B[Plan<br/>Reviews]
    B --> C[Conduct<br/>Reviews]
    C --> D[Track<br/>Issues]
    D --> E[Verify<br/>Resolution]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

### Review Types

| Review | Purpose | When |
|--------|---------|------|
| **Peer review** | Check work with colleagues | During development |
| **Technical review** | Verify technical quality | Before testing |
| **Walkthrough** | Explain and validate approach | At key milestones |
| **Inspection** | Formal defect detection | Before sign-off |
{:class="table table-single table-narrow"}

---

## Quality Control

Quality control verifies that deliverables meet acceptance criteria:

| Activity | Description |
|----------|-------------|
| **Testing** | Verifying functionality works |
| **Inspection** | Checking against standards |
| **Validation** | Confirming fitness for purpose |
| **Verification** | Confirming built correctly |
{:class="table table-single table-narrow"}

---

## Quality Roles

| Role | Responsibility |
|------|----------------|
| **Project Manager** | Overall quality responsibility |
| **Quality Manager** | Define and monitor quality approach |
| **Team Members** | Build quality into deliverables |
| **Reviewers** | Provide independent assessment |
| **Customer** | Accept deliverables |
{:class="table table-single table-narrow"}

---

## Quality Metrics

Track quality through:

| Metric | What It Measures |
|--------|------------------|
| **Defect count** | Number of issues found |
| **Defect density** | Issues per unit of work |
| **Review coverage** | % of deliverables reviewed |
| **Test coverage** | % of requirements tested |
| **First-time pass rate** | % passing first review/test |
| **Customer satisfaction** | Stakeholder perception |
{:class="table table-single table-narrow"}

---

## Cost of Quality

| Cost Type | Examples |
|-----------|----------|
| **Prevention costs** | Training, planning, process design |
| **Appraisal costs** | Testing, reviews, inspections |
| **Internal failure** | Rework, retesting, delays |
| **External failure** | Warranty, support, reputation |
{:class="table table-single table-narrow"}

**Key insight**: Investing in prevention and appraisal reduces total cost of quality.

---

## Quality Checklist

- [ ] Quality standards defined?
- [ ] Acceptance criteria documented?
- [ ] Review points scheduled?
- [ ] Responsibilities assigned?
- [ ] Quality metrics identified?
- [ ] Defect tracking process in place?

---

## Related Resources

- [Test Approach](/projects/test_approach) - Testing strategy
- [Requirements](/projects/requirements) - Requirements management
- [Project Reporting](/projects/project_reporting) - Status reporting

