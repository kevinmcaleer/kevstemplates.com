---
layout: project
name: Design
section: Project
process: delivery
description: Creating the detailed design for the solution based on requirements.
tags: [Design, Architecture, Solution, Delivery]
themes: [Delivery, Technical]
last_updated: 2026-11-17
redirect_from:
  - /projects/detail_stage
  - /projects/detail_stage.html
---

# Design

The design phase translates requirements into a detailed specification of how the solution will be built.

---

## Purpose

Design activities ensure:
- Requirements are translated into buildable specifications
- Technical approach is defined and agreed
- Risks are identified early
- Build team has clear guidance
- Solution is fit for purpose

---

## Design Levels

<div class="mermaid">
flowchart LR
    A[High-Level<br/>Design] --> B[Detailed<br/>Design]
    B --> C[Technical<br/>Specifications]
    C --> D[Build]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D blue
</div>

| Level | Description | Output |
|-------|-------------|--------|
| **High-Level Design** | Overall architecture and approach | Architecture document |
| **Detailed Design** | Component-level specifications | Design documents |
| **Technical Specs** | Implementation details | Build specifications |
{:class="table table-single table-narrow"}

---

## Design Activities

| Activity | Purpose |
|----------|---------|
| **Architecture design** | Define overall structure |
| **Component design** | Specify individual components |
| **Interface design** | Define how components interact |
| **Data design** | Structure data models |
| **Security design** | Address security requirements |
| **UX/UI design** | Define user experience |
{:class="table table-single table-narrow"}

---

## Design Inputs

| Input | Source |
|-------|--------|
| **Business requirements** | Requirements documentation |
| **Functional requirements** | Solution specifications |
| **Non-functional requirements** | Performance, security, etc. |
| **Constraints** | Technical, budget, timeline |
| **Standards** | Organisational guidelines |
| **Existing systems** | Integration requirements |
{:class="table table-single table-narrow"}

---

## Design Outputs

| Output | Description |
|--------|-------------|
| **Architecture document** | High-level solution structure |
| **Design specifications** | Detailed component designs |
| **Data models** | Database and data structures |
| **Interface specifications** | API and integration designs |
| **Security design** | Security controls and measures |
| **UI/UX designs** | Wireframes, mockups, prototypes |
{:class="table table-single table-narrow"}

---

## Design Principles

1. **Keep it simple** - Avoid unnecessary complexity
2. **Design for change** - Build in flexibility
3. **Reuse where possible** - Leverage existing components
4. **Consider non-functionals** - Performance, security, scalability
5. **Document decisions** - Record rationale for choices
6. **Validate early** - Review designs before building

---

## Design Review

Before proceeding to build, validate design through:

| Review Type | Focus |
|-------------|-------|
| **Peer review** | Technical accuracy |
| **Architecture review** | Standards compliance |
| **Security review** | Security requirements |
| **Business review** | Requirements coverage |
{:class="table table-single table-narrow"}

---

## Common Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Over-engineering | Focus on actual requirements |
| Under-specifying | Provide enough detail to build |
| Ignoring NFRs | Address non-functional requirements |
| No traceability | Link design to requirements |
| Skipping reviews | Always validate before build |
{:class="table table-single table-narrow"}

---

## Design Checklist

- [ ] Requirements understood and documented?
- [ ] Architecture approach defined?
- [ ] Components identified and specified?
- [ ] Interfaces designed?
- [ ] Data model complete?
- [ ] Security addressed?
- [ ] Non-functional requirements covered?
- [ ] Design reviewed and approved?
- [ ] Build team briefed?

---

## Detail Stage

On larger projects, detailed design happens in a separate detail stage between planning and build. It elaborates requirements and designs until they are ready to build.

### Purpose

The Detail Stage bridges the gap between initial planning and delivery by:
- Elaborating requirements to sufficient detail
- Creating detailed designs and specifications
- Confirming technical feasibility
- Refining estimates and plans
- Preparing for build/implementation


### Key Activities

| Activity | Description |
|----------|-------------|
| **Requirements elaboration** | Breaking down high-level requirements into detailed specs |
| **Solution design** | Creating detailed technical and business designs |
| **Interface definition** | Specifying integration points and data flows |
| **Process design** | Documenting detailed business processes |
| **Test planning** | Developing detailed test cases and scripts |
{:class="table table-single table-narrow"}


### Inputs

- Approved business case
- High-level requirements
- Solution architecture
- Project plan

### Outputs

- Detailed requirements specification
- Detailed design documents
- Updated estimates
- Build-ready specifications

---

---

## Related Resources

- [Requirements](/projects/requirements) - Requirements to design against
- [Programme Blueprint](/programmes/blueprint) - Solution blueprint
- [Test Approach](/projects/test_approach) - Testing the design
- [Build / Procure](/projects/build_procure) - Building the solution

