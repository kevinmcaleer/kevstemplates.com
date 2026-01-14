---
layout: project
section: Projects
name: Work Package
description: Formal delegation of work from a Project Manager to a Team Manager, defining what needs to be delivered, how, and within what constraints.
tags: [Work Package, Delegation, Team, Delivery, PRINCE2]
themes: [Planning, Control]
process: delivery
downloads:
 - name: Work Package Template
   description: Word template for creating work packages
   file: work_package.docx
 - name: Work Package Register
   description: Excel tracker for managing all work packages
   file: work_package_register.xlsx
last_updated: 2026-01-13
---

# Work Package

A Work Package is the formal mechanism for delegating work from a Project Manager to a Team Manager or team member, defining what products need to be delivered, within what constraints, and to what quality standards.

---

## Purpose

The Work Package:
- Formally delegates authority to deliver
- Defines scope of work clearly
- Sets constraints and tolerances
- Specifies quality expectations
- Establishes reporting requirements
- Enables parallel workstreams

---

## Work Package Contents

### Essential Elements

| Element | Description |
|---------|-------------|
| **Work Package ID** | Unique identifier |
| **Description** | What work is being delegated |
| **Products** | Products to be delivered |
| **Constraints** | Time, cost, scope boundaries |
| **Tolerances** | Permitted variance |
| **Interfaces** | Dependencies and handoffs |
| **Reporting** | When and what to report |
| **Approval** | How products will be accepted |
{:class="table table-single table-narrow"}

### Work Package Structure

<div class="mermaid">
flowchart TD
    A[Work Package] --> B[Products]
    A --> C[Constraints]
    A --> D[Interfaces]
    A --> E[Controls]
    B --> F[Product Descriptions]
    B --> G[Quality Criteria]
    C --> H[Time]
    C --> I[Cost]
    C --> J[Scope]
    D --> K[Dependencies]
    D --> L[Handoffs]
    E --> M[Reporting]
    E --> N[Tolerances]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H,I,J,K,L,M,N blue
</div>

---

## Work Package Template

### Header Information

| Field | Content |
|-------|---------|
| **Work Package ID** | WP-001 |
| **Work Package Name** | User Interface Development |
| **Project** | Customer Portal Enhancement |
| **Stage** | Stage 2 - Development |
| **Team Manager** | Jane Smith |
| **Date Issued** | 15 Jan 2026 |
| **Target Completion** | 28 Feb 2026 |
{:class="table table-single table-narrow"}

### Products to Deliver

| Product ID | Product Name | Product Description |
|------------|--------------|---------------------|
| P-101 | Login Screen | See PD-101 |
| P-102 | Dashboard | See PD-102 |
| P-103 | User Profile Page | See PD-103 |
| P-104 | Unit Test Suite | See PD-104 |
{:class="table table-single table-narrow"}

### Constraints

| Constraint Type | Constraint |
|-----------------|------------|
| **Time** | Must complete by 28 Feb 2026 |
| **Cost** | Budget of £25,000 |
| **Scope** | Products listed above only |
| **Resources** | Team of 3 developers |
| **Technical** | Must use React framework |
| **Dependencies** | API endpoints available by 20 Jan |
{:class="table table-single table-narrow"}

### Tolerances

| Dimension | Tolerance |
|-----------|-----------|
| **Time** | +5 days / -0 days |
| **Cost** | +£2,500 / -£2,500 (10%) |
| **Scope** | No change without approval |
| **Quality** | All acceptance criteria must be met |
{:class="table table-single table-narrow"}

---

## Interfaces and Dependencies

### Inputs Required

| Input | Source | Required By |
|-------|--------|-------------|
| API specifications | Technical Architect | 15 Jan |
| UI design mockups | Design Team | 15 Jan |
| Test data | QA Team | 20 Jan |
| Access credentials | IT Operations | 15 Jan |
{:class="table table-single table-narrow"}

### Outputs/Handoffs

| Output | Recipient | Due Date |
|--------|-----------|----------|
| Completed code | QA Team | 25 Feb |
| Technical documentation | Operations | 28 Feb |
| Deployment package | Release Team | 28 Feb |
{:class="table table-single table-narrow"}

### Dependencies

| Dependency | Type | Impact if Delayed |
|------------|------|-------------------|
| API endpoints | Predecessor | Cannot start integration |
| Design approval | Predecessor | Cannot finalise UI |
| Test environment | Resource | Cannot test |
| Security review | Successor | Delays release |
{:class="table table-single table-narrow"}

---

## Reporting Requirements

### Progress Reporting

| Report Type | Frequency | Content |
|-------------|-----------|---------|
| **Checkpoint report** | Weekly | Progress, issues, forecast |
| **Issue escalation** | As needed | Issues outside tolerance |
| **Product handover** | On completion | Quality check results |
{:class="table table-single table-narrow"}

### Checkpoint Report Content

| Section | Content |
|---------|---------|
| **Period** | Reporting dates |
| **Progress** | Products completed, in progress |
| **Quality** | Results of quality activities |
| **Issues** | Problems encountered |
| **Forecast** | Expected completion |
| **Escalations** | Items for PM attention |
{:class="table table-single table-narrow"}

---

## Quality Requirements

### Quality Expectations

| Aspect | Requirement |
|--------|-------------|
| **Standards** | Must comply with coding standards v2.1 |
| **Testing** | Unit test coverage >80% |
| **Review** | Code review by senior developer |
| **Documentation** | Inline comments, README files |
| **Acceptance** | Product Owner sign-off |
{:class="table table-single table-narrow"}

### Quality Methods

| Method | When Applied |
|--------|--------------|
| **Code review** | Before merge to main branch |
| **Unit testing** | During development |
| **Integration testing** | After API integration |
| **User acceptance** | Before handover |
{:class="table table-single table-narrow"}

---

## Approval Process

### Work Package Approval

<div class="mermaid">
flowchart LR
    A[PM Creates<br/>Work Package] --> B[Team Manager<br/>Review]
    B --> C{Accepted?}
    C -->|Yes| D[Work<br/>Begins]
    C -->|No| E[Negotiate/<br/>Adjust]
    E --> A

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

### Product Approval

| Step | Responsibility |
|------|----------------|
| **Product complete** | Team Manager confirms |
| **Quality check** | As per quality method |
| **Handover** | To recipient/PM |
| **Acceptance** | PM signs off |
{:class="table table-single table-narrow"}

---

## Work Package Authorisation

### Agreement Checklist

Before accepting a Work Package, the Team Manager should confirm:

| Check | Verified |
|-------|----------|
| Products clearly defined? | ☐ |
| Quality criteria understood? | ☐ |
| Constraints realistic? | ☐ |
| Tolerances appropriate? | ☐ |
| Dependencies identified? | ☐ |
| Resources available? | ☐ |
| Risks acceptable? | ☐ |
| Reporting clear? | ☐ |
{:class="table table-single table-narrow"}

### Formal Agreement

| Field | PM | Team Manager |
|-------|-----|--------------|
| **Name** | | |
| **Signature** | | |
| **Date** | | |
{:class="table table-single table-narrow"}

---

## Managing Work Packages

### Work Package Register

| WP ID | Name | Team Manager | Start | Due | Status | RAG |
|-------|------|--------------|-------|-----|--------|-----|
| WP-001 | UI Development | J Smith | 15 Jan | 28 Feb | In Progress | Green |
| WP-002 | API Integration | M Jones | 20 Jan | 15 Feb | In Progress | Amber |
| WP-003 | Data Migration | P Brown | 01 Feb | 28 Feb | Not Started | Green |
| WP-004 | Testing | S Wilson | 15 Feb | 15 Mar | Not Started | Green |
{:class="table table-single table-narrow"}

### Status Tracking

| Status | Meaning |
|--------|---------|
| **Not Started** | Work Package issued but not commenced |
| **In Progress** | Work actively being performed |
| **On Hold** | Paused due to dependency/issue |
| **Complete** | All products delivered and accepted |
| **Cancelled** | Work Package withdrawn |
{:class="table table-single table-narrow"}

---

## Work Package Closure

### Closure Activities

| Activity | Description |
|----------|-------------|
| **Product handover** | All products delivered |
| **Quality confirmation** | Quality records complete |
| **Lessons captured** | Lessons learned documented |
| **Resources released** | Team reassigned |
| **PM acceptance** | Formal sign-off |
{:class="table table-single table-narrow"}

### Closure Confirmation

| Element | Confirmed |
|---------|-----------|
| All products delivered? | ☐ |
| Quality criteria met? | ☐ |
| Documentation complete? | ☐ |
| Handovers completed? | ☐ |
| Issues closed/transferred? | ☐ |
| Lessons captured? | ☐ |
{:class="table table-single table-narrow"}

---

## Common Issues

| Issue | Prevention |
|-------|------------|
| **Unclear scope** | Detailed product descriptions |
| **Missing dependencies** | Thorough interface analysis |
| **Unrealistic constraints** | Team Manager input before issue |
| **Poor quality** | Clear quality criteria |
| **Late escalation** | Regular checkpoints |
| **Scope creep** | Firm change control |
{:class="table table-single table-narrow"}

---

## Work Package Checklist

### Before Issuing
- [ ] Products clearly defined?
- [ ] Product Descriptions attached?
- [ ] Constraints realistic?
- [ ] Tolerances set?
- [ ] Dependencies identified?
- [ ] Quality requirements clear?
- [ ] Reporting requirements specified?
- [ ] Team Manager consulted?

### During Delivery
- [ ] Checkpoint reports received?
- [ ] Issues escalated timely?
- [ ] Dependencies tracked?
- [ ] Quality activities happening?

### At Closure
- [ ] All products received?
- [ ] Quality confirmed?
- [ ] Handovers complete?
- [ ] Lessons captured?
- [ ] Register updated?

---

## Related Resources

- [Product Description](/projects/product_description) - Defining products
- [Stage Plan](/projects/stage_plan) - Stage-level planning
- [Project Planning](/projects/project_planning) - Planning techniques
- [Quality Planning](/projects/quality_planning) - Quality approach
- [Checkpoint Report](/projects/project_reporting) - Progress reporting

