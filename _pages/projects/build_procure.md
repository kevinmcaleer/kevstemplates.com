---
layout: project
name: Build / Procure
section: Project
process: delivery
description: Building or procuring the solution components based on the design.
tags: [Build, Procure, Development, Vendor]
themes: [Delivery, Technical]
last_updated: 2026-01-13
---

# Build / Procure

The build/procure phase creates or acquires the solution components defined in the design.

---

## Purpose

Build/procure activities ensure:
- Solution is constructed to specification
- Components are fit for purpose
- Quality standards are met
- Delivery timeline is achieved
- Costs are controlled

---

## Build vs Procure Decision

<div class="mermaid">
flowchart LR
    A[Requirement] --> B{Build or<br/>Procure?}
    B -->|Build| C[Internal<br/>Development]
    B -->|Procure| D[External<br/>Acquisition]
    C --> E[Solution]
    D --> E

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

| Factor | Build | Procure |
|--------|-------|---------|
| **Customisation** | Full control | Limited by product |
| **Time to deliver** | Longer | Faster |
| **Cost** | Development cost | Licence/purchase cost |
| **Skills needed** | In-house expertise | Vendor expertise |
| **Maintenance** | Internal responsibility | Vendor support |
| **Risk** | Development risk | Vendor dependency |
{:class="table table-single table-narrow"}

---

## Build Activities

| Activity | Description |
|----------|-------------|
| **Development** | Writing code, creating components |
| **Configuration** | Setting up systems and tools |
| **Integration** | Connecting components together |
| **Unit testing** | Testing individual components |
| **Documentation** | Technical and user documentation |
| **Code review** | Quality assurance of code |
{:class="table table-single table-narrow"}

---

## Procure Activities

| Activity | Description |
|----------|-------------|
| **Requirements spec** | Define what's needed |
| **Market research** | Identify potential vendors |
| **RFP/RFQ** | Request proposals/quotes |
| **Evaluation** | Assess vendor responses |
| **Selection** | Choose preferred vendor |
| **Contracting** | Negotiate and sign contract |
| **Implementation** | Install and configure |
{:class="table table-single table-narrow"}

---

## Build Process

<div class="mermaid">
flowchart LR
    A[Design] --> B[Develop]
    B --> C[Unit Test]
    C --> D[Code Review]
    D --> E[Integration]
    E --> F[System Test]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

---

## Procurement Process

<div class="mermaid">
flowchart LR
    A[Requirements] --> B[RFP]
    B --> C[Evaluate]
    C --> D[Select]
    D --> E[Contract]
    E --> F[Implement]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

---

## Build Best Practices

| Practice | Benefit |
|----------|---------|
| **Version control** | Track changes, enable rollback |
| **Coding standards** | Consistent, maintainable code |
| **Code reviews** | Catch issues early |
| **Automated testing** | Fast, reliable testing |
| **CI/CD** | Faster, safer deployments |
| **Documentation** | Support future maintenance |
{:class="table table-single table-narrow"}

---

## Procurement Best Practices

| Practice | Benefit |
|----------|---------|
| **Clear requirements** | Better vendor responses |
| **Structured evaluation** | Fair, objective selection |
| **Reference checks** | Validate vendor claims |
| **Contract clarity** | Avoid disputes |
| **SLAs** | Define service expectations |
| **Exit clauses** | Protect against vendor issues |
{:class="table table-single table-narrow"}

---

## Quality Assurance

| Approach | Application |
|----------|-------------|
| **Peer review** | Code and document review |
| **Testing** | Functional and non-functional |
| **Standards compliance** | Meet organisational standards |
| **Acceptance criteria** | Verify requirements met |
{:class="table table-single table-narrow"}

---

## Common Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Scope creep | Strong change control |
| Technical debt | Balance speed with quality |
| Vendor lock-in | Consider exit strategy |
| Integration issues | Plan integration early |
| Underestimating effort | Use historical data |
{:class="table table-single table-narrow"}

---

## Build/Procure Checklist

- [ ] Build vs procure decision made?
- [ ] Design specifications complete?
- [ ] Resources allocated?
- [ ] Development/procurement started?
- [ ] Quality assurance in place?
- [ ] Progress tracked?
- [ ] Integration planned?
- [ ] Documentation produced?

---

## Related Resources

- [Design](/projects/design) - Solution design
- [Test Approach](/projects/test_approach) - Testing strategy
- [Technical Readiness](/projects/technical_readiness) - Technical preparation
- [Implementation Approach](/projects/implementation_approach) - Deployment planning

