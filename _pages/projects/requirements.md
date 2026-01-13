---
layout: project
name: Requirements
section: Project
process: planning
topic: Requirements
description: Capturing, managing, and tracing business and system requirements.
tags: [Requirements, Business Analysis, Traceability]
downloads:
 - name: Requirements Template
   description: Excel Requirements Template
   file: requirements_template.xlsx
themes: [Planning, Delivery]
last_updated: 2026-01-13
---

# Requirements Management

Requirements management ensures that stakeholder needs are captured, documented, and traced through to delivery.

---

## What is a Requirement?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> A requirement is a statement that describes what a system must do or a quality it must have to satisfy stakeholder needs.
</div>

---

## Requirement Types

| Type | Description | Example |
|------|-------------|---------|
| **Business** | What the organisation needs | "Reduce order processing time by 50%" |
| **Stakeholder** | What users need | "Users need to track order status" |
| **Functional** | What the system must do | "System shall display order status" |
| **Non-functional** | How the system performs | "Page load time < 2 seconds" |
| **Transition** | What's needed for implementation | "Migrate 5 years of order history" |
{:class="table table-single table-narrow"}

---

## Requirements Hierarchy

<div class="mermaid">
flowchart LR
    A[Business<br/>Requirements] --> B[Stakeholder<br/>Requirements]
    B --> C[Solution<br/>Requirements]
    C --> D[Functional]
    C --> E[Non-functional]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

---

## Good Requirements

Requirements should be:

| Characteristic | Description |
|----------------|-------------|
| **Clear** | Unambiguous, single interpretation |
| **Complete** | Contains all necessary information |
| **Consistent** | No conflicts with other requirements |
| **Testable** | Can be verified objectively |
| **Traceable** | Linked to source and implementation |
| **Prioritised** | Importance is understood |
| **Feasible** | Achievable within constraints |
{:class="table table-single table-narrow"}

---

## Requirements Process

<div class="mermaid">
flowchart LR
    A[Elicit] --> B[Analyse]
    B --> C[Document]
    C --> D[Validate]
    D --> E[Manage]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

| Activity | Purpose |
|----------|---------|
| **Elicit** | Gather requirements from stakeholders |
| **Analyse** | Understand, clarify, and prioritise |
| **Document** | Record in appropriate format |
| **Validate** | Confirm requirements are correct |
| **Manage** | Track changes and trace delivery |
{:class="table table-single table-narrow"}

---

## Documentation Formats

| Format | Best For |
|--------|----------|
| **User stories** | Agile projects, user perspective |
| **Use cases** | Complex interactions, scenarios |
| **Shall statements** | Formal specifications |
| **Process models** | Workflow requirements |
| **Prototypes** | UI/UX requirements |
{:class="table table-single table-narrow"}

### User Story Format

```
As a [role]
I want [capability]
So that [benefit]
```

### Shall Statement Format

```
The system shall [function]
when [condition]
so that [rationale]
```

---

## Requirements Prioritisation

### MoSCoW Method

| Priority | Meaning |
|----------|---------|
| **Must have** | Essential, project fails without |
| **Should have** | Important, but can work around |
| **Could have** | Nice to have if time permits |
| **Won't have** | Out of scope for this release |
{:class="table table-single table-narrow"}

---

## Requirements Traceability

Traceability links requirements to:
- **Source** - Where did it come from?
- **Related requirements** - What depends on it?
- **Design** - How is it being implemented?
- **Test cases** - How is it being verified?
- **Deliverables** - Where is it delivered?

### Traceability Matrix

| Req ID | Source | Design | Test | Status |
|--------|--------|--------|------|--------|
| REQ-001 | BRD-1 | DES-05 | TC-12 | Complete |
| REQ-002 | User workshop | DES-08 | TC-15 | In progress |
{:class="table table-single table-narrow"}

---

## Managing Requirements Changes

<div class="mermaid">
flowchart LR
    A[Request] --> B[Assess<br/>Impact]
    B --> C[Approve/<br/>Reject]
    C --> D[Update<br/>Baseline]
    D --> E[Communicate]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

All requirement changes should:
- Be formally requested
- Have impact assessed
- Follow approval process
- Update traceability
- Be communicated to stakeholders

---

## Common Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Vague requirements | Use clear, testable language |
| Missing requirements | Thorough stakeholder engagement |
| Scope creep | Strong change control |
| Gold plating | Stick to documented requirements |
| Requirements churn | Establish baseline, manage changes |
| Lost traceability | Maintain traceability matrix |
{:class="table table-single table-narrow"}

---

## Requirements Checklist

- [ ] All requirement types identified?
- [ ] Requirements clearly documented?
- [ ] Prioritisation completed?
- [ ] Stakeholders validated requirements?
- [ ] Traceability established?
- [ ] Change process defined?
- [ ] Baseline established?

---

## Related Resources

- [Requirements Capture](/projects/requirements_capture) - Elicitation techniques
- [Business Requirements](/projects/business_requirements) - Business needs
- [Business Analysis](/projects/business_analysis) - Analysis techniques
- [Test Approach](/projects/test_approach) - Testing against requirements

