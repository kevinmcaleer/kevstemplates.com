---
layout: project
section: Projects
name: Product Description
description: Defining project products clearly with quality criteria, enabling effective planning, development, and acceptance.
tags: [Product, Quality, Specification, Planning, PRINCE2]
themes: [Quality, Planning]
process: planning
downloads:
 - name: Product Description Template
   description: Word template for product descriptions
   file: product_description.docx
 - name: Product Checklist Template
   description: Excel template for product quality checks
   file: product_checklist.xlsx
last_updated: 2026-01-13
---

# Product Description

A Product Description defines what a product must look like, do, and achieve to be acceptable. It provides the specification against which products are developed and approved.

---

## Purpose

Product Descriptions:
- Define what needs to be delivered
- Set quality expectations
- Enable accurate planning
- Provide acceptance criteria
- Support quality control
- Reduce ambiguity and rework

---

## Product Description Contents

### Essential Elements

| Element | Description |
|---------|-------------|
| **Identifier** | Unique reference (e.g., PD-001) |
| **Title** | Clear, descriptive name |
| **Purpose** | Why the product is needed |
| **Composition** | What the product contains |
| **Derivation** | Source materials/inputs |
| **Format** | Presentation requirements |
| **Quality criteria** | Measurable standards |
| **Quality method** | How quality is checked |
| **Quality tolerance** | Acceptable variance |
| **Quality responsibilities** | Who checks, who approves |
{:class="table table-single table-narrow"}

### Product Description Structure

<div class="mermaid">
flowchart TD
    A[Product Description] --> B[Identity]
    A --> C[Specification]
    A --> D[Quality]
    B --> E[ID & Title]
    B --> F[Purpose]
    C --> G[Composition]
    C --> H[Derivation]
    C --> I[Format]
    D --> J[Criteria]
    D --> K[Method]
    D --> L[Responsibilities]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H,I,J,K,L blue
</div>

---

## Product Description Template

### Example: Customer Portal Login Screen

| Field | Content |
|-------|---------|
| **Product ID** | PD-101 |
| **Product Title** | Customer Portal Login Screen |
| **Project** | Customer Portal Enhancement |
| **Version** | 1.0 |
| **Author** | Jane Smith |
| **Date** | 15 Jan 2026 |
{:class="table table-single table-narrow"}

### Purpose

The login screen provides secure authentication for customers accessing the customer portal, supporting username/password and single sign-on methods.

### Composition

| Component | Description |
|-----------|-------------|
| **Username field** | Email address input with validation |
| **Password field** | Masked input with show/hide toggle |
| **Login button** | Primary action to authenticate |
| **SSO options** | Google, Microsoft, Apple sign-in |
| **Forgot password** | Link to password reset flow |
| **Remember me** | Checkbox for persistent login |
| **Error messaging** | Contextual validation feedback |
| **Loading state** | Progress indicator during auth |
{:class="table table-single table-narrow"}

### Derivation

| Source | Information Used |
|--------|------------------|
| UI Design mockups | Visual design, layout |
| Security standards | Authentication requirements |
| Accessibility guidelines | WCAG 2.1 AA compliance |
| Brand guidelines | Colours, typography |
| API specification | Authentication endpoints |
{:class="table table-single table-narrow"}

### Format and Presentation

| Aspect | Requirement |
|--------|-------------|
| **Technology** | React component |
| **Responsive** | Desktop, tablet, mobile breakpoints |
| **Browser support** | Chrome, Safari, Firefox, Edge (latest 2 versions) |
| **Accessibility** | WCAG 2.1 AA compliant |
| **Performance** | <2 second load time |
{:class="table table-single table-narrow"}

---

## Quality Criteria

### What Makes Good Quality Criteria

| Characteristic | Description |
|----------------|-------------|
| **Specific** | Precisely defined |
| **Measurable** | Can be objectively tested |
| **Achievable** | Realistic to deliver |
| **Relevant** | Matters to stakeholders |
| **Testable** | Can be verified |
{:class="table table-single table-narrow"}

### Example Quality Criteria

| ID | Criterion | Measure |
|----|-----------|---------|
| QC-01 | User can log in with valid credentials | Successful authentication |
| QC-02 | Invalid credentials show error message | Error displayed within 2 seconds |
| QC-03 | SSO authentication works | Redirect to provider, return authenticated |
| QC-04 | Password field masks input | Characters hidden by default |
| QC-05 | Forgot password initiates reset | Email sent within 60 seconds |
| QC-06 | Page meets accessibility standards | Passes automated WCAG checker |
| QC-07 | Works on supported browsers | Manual test on each browser |
| QC-08 | Responsive layout functions | Visual check at breakpoints |
{:class="table table-single table-narrow"}

---

## Quality Method

### How Quality Will Be Checked

| Method | Applied To | Timing |
|--------|-----------|--------|
| **Unit testing** | Individual components | During development |
| **Code review** | Source code | Before merge |
| **Automated testing** | Functional criteria | After integration |
| **Manual testing** | UI/UX criteria | After development |
| **Accessibility audit** | Compliance criteria | Before acceptance |
| **User acceptance** | All criteria | Before handover |
{:class="table table-single table-narrow"}

### Quality Tolerance

| Criterion | Tolerance |
|-----------|-----------|
| **Functionality** | 100% of criteria must pass |
| **Performance** | Within 10% of target |
| **Accessibility** | Zero critical/major issues |
| **Browser compatibility** | Must work on all listed |
{:class="table table-single table-narrow"}

---

## Quality Responsibilities

### RACI for Quality

| Activity | Developer | QA | Tech Lead | Product Owner |
|----------|-----------|-----|-----------|---------------|
| Develop product | R | I | C | I |
| Unit testing | R | C | I | - |
| Code review | I | - | R/A | - |
| Integration testing | C | R | I | I |
| UAT | I | C | I | R/A |
| Final approval | - | I | C | R/A |
{:class="table table-single table-narrow"}

R = Responsible, A = Accountable, C = Consulted, I = Informed

---

## Types of Products

### Management Products

| Product | Purpose |
|---------|---------|
| **Project Brief** | Initial project definition |
| **PID** | Baseline project documentation |
| **Stage Plan** | Detailed stage planning |
| **Highlight Report** | Progress reporting |
| **End Stage Report** | Stage completion |
| **Lessons Log** | Learning capture |
{:class="table table-single table-narrow"}

### Specialist Products

| Category | Examples |
|----------|----------|
| **Documents** | Requirements, design specs, user guides |
| **Software** | Code, databases, configurations |
| **Hardware** | Servers, devices, infrastructure |
| **Services** | APIs, integrations, processes |
| **Training** | Materials, sessions, certifications |
{:class="table table-single table-narrow"}

---

## Creating Product Descriptions

### Process

<div class="mermaid">
flowchart LR
    A[Identify<br/>Products] --> B[Draft<br/>Description]
    B --> C[Define<br/>Quality]
    C --> D[Review &<br/>Agree]
    D --> E[Baseline]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

### Tips for Writing

| Tip | Rationale |
|-----|-----------|
| **Be specific** | Vague criteria lead to disputes |
| **Make it testable** | If you can't test it, remove it |
| **Use examples** | Clarify expectations |
| **Get input** | Involve those who build and use |
| **Keep it current** | Update if requirements change |
{:class="table table-single table-narrow"}

---

## Product Breakdown Structure

### Linking to PBS

| PBS Level | Products |
|-----------|----------|
| **Final product** | Customer Portal |
| **Major components** | Login, Dashboard, Profile, Reports |
| **Sub-components** | Login: Screen, API, Tests, Documentation |
{:class="table table-single table-narrow"}

### Product Flow Diagram

<div class="mermaid">
flowchart TD
    A[Requirements] --> B[Design]
    B --> C[Login Screen]
    B --> D[Dashboard]
    B --> E[Profile]
    C --> F[Integration Testing]
    D --> F
    E --> F
    F --> G[User Acceptance]
    G --> H[Deployed Portal]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H blue
</div>

---

## Product Checklist

### Quality Review Checklist

| Criterion | Pass | Fail | N/A | Comments |
|-----------|------|------|-----|----------|
| QC-01: Valid login works | ☐ | ☐ | ☐ | |
| QC-02: Invalid login shows error | ☐ | ☐ | ☐ | |
| QC-03: SSO authentication | ☐ | ☐ | ☐ | |
| QC-04: Password masking | ☐ | ☐ | ☐ | |
| QC-05: Password reset | ☐ | ☐ | ☐ | |
| QC-06: Accessibility | ☐ | ☐ | ☐ | |
| QC-07: Browser compatibility | ☐ | ☐ | ☐ | |
| QC-08: Responsive layout | ☐ | ☐ | ☐ | |
{:class="table table-single table-narrow"}

### Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Developed by** | | | |
| **Reviewed by** | | | |
| **Approved by** | | | |
{:class="table table-single table-narrow"}

---

## Common Issues

| Issue | Prevention |
|-------|------------|
| **Vague criteria** | Use measurable, testable language |
| **Missing criteria** | Review with developers and users |
| **Over-specification** | Focus on what matters |
| **No quality method** | Define how each criterion is tested |
| **Outdated descriptions** | Update under change control |
| **Unclear responsibilities** | Assign specific names/roles |
{:class="table table-single table-narrow"}

---

## Product Description Checklist

### Creating
- [ ] Unique ID assigned?
- [ ] Purpose clearly stated?
- [ ] Composition complete?
- [ ] Sources identified?
- [ ] Format specified?
- [ ] Quality criteria SMART?
- [ ] Quality method defined?
- [ ] Tolerances set?
- [ ] Responsibilities assigned?
- [ ] Stakeholders reviewed?

### Using
- [ ] Referenced in Work Package?
- [ ] Development team briefed?
- [ ] Quality checks scheduled?
- [ ] Checklist prepared?
- [ ] Approval process clear?

---

## Related Resources

- [Work Package](/projects/work_package) - Work delegation
- [Quality Planning](/projects/quality_planning) - Quality approach
- [Deliverables WBS PBS](/projects/deliverables_wbs_pbs) - Product breakdown
- [Requirements](/projects/requirements) - Requirements capture
- [Test Approach](/projects/test_approach) - Testing strategy

