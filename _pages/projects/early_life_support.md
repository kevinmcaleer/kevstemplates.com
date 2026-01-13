---
layout: project
name: Early Life Support
section: Project
process: closure
description: Providing enhanced support immediately after go-live to ensure successful adoption.
tags: [Support, Hypercare, Go-Live, Transition]
themes: [Closure, Operations]
last_updated: 2026-01-13
---

# Early Life Support

Early Life Support (ELS), also known as Hypercare, provides enhanced support immediately after go-live to stabilise the solution and support users.

---

## Purpose

Early Life Support ensures:
- Issues are resolved quickly
- Users are supported during transition
- Defects are identified and fixed
- Solution stabilises before BAU
- Lessons are captured

---

## ELS Timeline

<div class="mermaid">
flowchart LR
    A[Go-Live] --> B[ELS<br/>Period]
    B --> C[Transition<br/>Review]
    C --> D[BAU<br/>Handover]
    D --> E[Normal<br/>Operations]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

Typical ELS duration: **2-4 weeks** depending on complexity

---

## ELS vs BAU Support

| Aspect | Early Life Support | BAU Support |
|--------|-------------------|-------------|
| **Duration** | Fixed period (2-4 weeks) | Ongoing |
| **Staffing** | Enhanced, project team involved | Standard support team |
| **Response** | Faster SLAs | Normal SLAs |
| **Focus** | Stabilisation, adoption | Maintenance, incidents |
| **Escalation** | Direct to project team | Standard process |
{:class="table table-single table-narrow"}

---

## ELS Activities

| Activity | Purpose |
|----------|---------|
| **Floor walking** | On-site user support |
| **Incident triage** | Rapid issue assessment |
| **Defect fixing** | Quick resolution of bugs |
| **User coaching** | Help users adapt |
| **Performance monitoring** | Track system health |
| **Feedback collection** | Gather user input |
| **Daily stand-ups** | Coordinate support efforts |
{:class="table table-single table-narrow"}

---

## ELS Team Structure

| Role | Responsibility |
|------|----------------|
| **ELS Manager** | Coordinate support activities |
| **Technical lead** | Resolve technical issues |
| **Business analyst** | Support process questions |
| **Trainers** | Provide additional coaching |
| **Floor walkers** | On-site user assistance |
| **Support desk** | Log and track issues |
{:class="table table-single table-narrow"}

---

## Issue Management

### Priority Levels

| Priority | Description | Response | Resolution |
|----------|-------------|----------|------------|
| **P1 Critical** | System down | 15 mins | 4 hours |
| **P2 High** | Major function broken | 30 mins | 8 hours |
| **P3 Medium** | Function impaired | 2 hours | 24 hours |
| **P4 Low** | Minor issue | 4 hours | 48 hours |
{:class="table table-single table-narrow"}

---

## Daily ELS Routine

| Time | Activity |
|------|----------|
| **Morning** | Stand-up, review overnight issues |
| **Throughout day** | Floor walking, incident support |
| **Afternoon** | Issue triage, defect prioritisation |
| **End of day** | Status report, handover to next day |
{:class="table table-single table-narrow"}

---

## Monitoring During ELS

Track these metrics:

| Metric | Why |
|--------|-----|
| **Incident count** | Volume of issues |
| **Resolution time** | Speed of fixes |
| **User adoption** | System usage levels |
| **Performance** | Response times, errors |
| **User satisfaction** | Feedback scores |
{:class="table table-single table-narrow"}

---

## Exit Criteria

ELS ends when:

- [ ] Incident volumes at acceptable level
- [ ] No critical defects outstanding
- [ ] Users operating independently
- [ ] Performance within targets
- [ ] Support team ready for BAU
- [ ] Knowledge transfer complete
- [ ] Lessons learned captured

---

## Transition to BAU

<div class="mermaid">
flowchart LR
    A[ELS<br/>Review] --> B[Confirm<br/>Readiness]
    B --> C[Formal<br/>Handover]
    C --> D[BAU<br/>Begins]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D blue
</div>

### Handover Includes
- Outstanding issues list
- Known workarounds
- User feedback summary
- Recommendations for improvement
- Updated documentation

---

## Common Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Too short ELS period | Plan adequate duration |
| Project team exits too early | Ensure proper handover |
| No success criteria | Define exit criteria upfront |
| Insufficient staffing | Resource appropriately |
| Poor issue tracking | Use formal logging process |
{:class="table table-single table-narrow"}

---

## ELS Checklist

- [ ] ELS plan created?
- [ ] Team assigned and briefed?
- [ ] Support tools ready?
- [ ] Escalation paths defined?
- [ ] SLAs agreed?
- [ ] Monitoring in place?
- [ ] Exit criteria defined?
- [ ] BAU team ready to receive?

---

## Related Resources

- [Service Transition](/projects/service_transition) - Transition planning
- [Support Model](/projects/support_model) - Support structure
- [Implementation Approach](/projects/implementation_approach) - Go-live planning
- [Lessons Learned](/projects/lessons_learned) - Capture insights

