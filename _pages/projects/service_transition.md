---
layout: project
name: Service Transition
section: Project
process: delivery
description: Transitioning the solution from project delivery into live service operation.
tags: [Transition, Service, Handover, Operations]
themes: [Delivery, Operations]
last_updated: 2026-11-17
redirect_from:
  - /projects/support_model
  - /projects/support_model.html
---

# Service Transition

Service transition moves the solution from project delivery into live operational service, ensuring support teams are ready to maintain it.

---

## Purpose

Service transition ensures:
- Smooth handover to operations
- Support teams are prepared
- Service levels are defined
- Knowledge is transferred
- Ongoing maintenance is planned

---

## Transition Process

<div class="mermaid">
flowchart LR
    A[Plan<br/>Transition] --> B[Prepare<br/>Operations]
    B --> C[Knowledge<br/>Transfer]
    C --> D[Handover]
    D --> E[Early Life<br/>Support]
    E --> F[BAU]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

---

## Transition Activities

| Activity | Purpose |
|----------|---------|
| **Service design** | Define how service will operate |
| **Support model** | Establish support structure |
| **Knowledge transfer** | Share technical and operational knowledge |
| **Documentation** | Complete operational documentation |
| **SLA definition** | Agree service levels |
| **Tool setup** | Configure monitoring and ticketing |
| **Training** | Train support staff |
{:class="table table-single table-narrow"}

---

## Key Stakeholders

| Stakeholder | Role in Transition |
|-------------|-------------------|
| **Project team** | Provide knowledge, complete documentation |
| **Operations team** | Receive handover, prepare for support |
| **Service manager** | Own ongoing service delivery |
| **Business owner** | Accept service into operation |
| **Vendor** | Provide support commitments |
{:class="table table-single table-narrow"}

---

## Documentation Required

| Document | Purpose |
|----------|---------|
| **Operations manual** | How to run the service |
| **Support guide** | How to resolve issues |
| **Runbooks** | Step-by-step procedures |
| **Architecture docs** | System design and components |
| **Contact list** | Escalation and vendor contacts |
| **Known issues** | Outstanding defects and workarounds |
{:class="table table-single table-narrow"}

---

## Service Level Agreements

Define expectations for:

| Metric | Example |
|--------|---------|
| **Availability** | 99.5% uptime |
| **Response time** | P1: 15 mins, P2: 1 hour |
| **Resolution time** | P1: 4 hours, P2: 8 hours |
| **Support hours** | 8am-6pm Mon-Fri |
| **Escalation path** | L1 → L2 → L3 → Vendor |
{:class="table table-single table-narrow"}

---

## Knowledge Transfer

<div class="mermaid">
flowchart LR
    A[Identify<br/>Knowledge] --> B[Document]
    B --> C[Train]
    C --> D[Shadow]
    D --> E[Reverse<br/>Shadow]
    E --> F[Handover]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

### Knowledge Areas

| Area | Content |
|------|---------|
| **Technical** | Architecture, code, configuration |
| **Operational** | Procedures, monitoring, maintenance |
| **Business** | Processes, users, stakeholders |
| **Vendor** | Contracts, contacts, support |
{:class="table table-single table-narrow"}

---

## Transition Criteria

### Entry Criteria (ready to transition)
- Solution tested and approved
- Documentation complete
- Support team trained
- Tools configured
- SLAs agreed

### Exit Criteria (transition complete)
- Formal handover accepted
- Support team operating independently
- No critical issues outstanding
- Early life support period completed

---

## Common Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Late planning | Start transition planning early |
| Insufficient documentation | Document throughout delivery |
| No knowledge transfer | Schedule dedicated handover time |
| Unclear ownership | Define service owner clearly |
| Missing SLAs | Agree service levels before go-live |
{:class="table table-single table-narrow"}

---

## Transition Checklist

- [ ] Transition plan created?
- [ ] Support model defined?
- [ ] Documentation complete?
- [ ] Knowledge transfer done?
- [ ] Support team trained?
- [ ] Tools configured?
- [ ] SLAs agreed?
- [ ] Handover accepted?
- [ ] Early life support planned?

---

## Support Model

The support model defines how the delivered solution will be supported in live operation: team structure, processes and service levels. Agree it early in delivery so the support teams can be recruited, trained and ready before go-live.

### Purpose

Planning the support model ensures:
- Smooth transition from project to operations
- Clear ownership and accountability
- Defined service levels
- Appropriate skills and resources
- Sustainable ongoing support


### Key Components

| Component | Description |
|-----------|-------------|
| **Support tiers** | L1, L2, L3 support structure and escalation |
| **Service levels** | Response times, resolution targets, availability |
| **Team structure** | Roles, responsibilities, and sizing |
| **Processes** | Incident, problem, change management |
| **Tools** | Service desk, monitoring, knowledge base |
| **Knowledge transfer** | Training and documentation for support teams |
{:class="table table-single table-narrow"}


### Support Tiers

| Tier | Responsibility | Typical Issues |
|------|----------------|----------------|
| **L1 - Service Desk** | First contact, triage, known issues | Password resets, FAQs, logging tickets |
| **L2 - Application Support** | Technical investigation, fixes | Configuration, data issues, workarounds |
| **L3 - Development/Vendor** | Complex issues, code changes | Bugs, enhancements, integrations |
{:class="table table-single table-narrow"}


### Considerations

- Volume of expected support requests
- Business criticality and required availability
- In-house vs outsourced support
- On-call and out-of-hours requirements
- Handover and training timeline

---

---

## Related Resources

- [Knowledge Transfer](/programmes/knowledge_transfer) - KT plan, 14 point agenda and handover checklist
- [Technical Readiness](/projects/technical_readiness) - Technical preparation
- [Early Life Support](/projects/early_life_support) - Post go-live support
- [Implementation Approach](/projects/delivery_approach#implementation-approach) - Go-live planning

