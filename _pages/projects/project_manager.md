---
layout: project
name: Project Manager
section: Project
process: startup
description: The Project Manager role - day-to-day leader of the project, accountable to the Project Board for delivering within agreed tolerances.
tags: [Roles, Project Manager, Delivery, Governance]
themes: [Governance, Stakeholder Engagement]
last_updated: 2026-05-18
---

# Project Manager

The Project Manager runs the project day-to-day. They plan the work, coordinate the team, manage risks and report progress — and they are accountable to the Project Board for delivering the agreed products within agreed tolerances.

---

## Purpose

The Project Manager exists to:

- **Plan and run** the work needed to deliver the project's products
- **Coordinate** the team and any third-party suppliers
- **Manage** risks, issues, changes and dependencies
- **Report** progress honestly to the Project Board
- **Escalate** when tolerances are at risk
- **Close** the project cleanly and capture lessons learned

---

## Key Responsibilities

| Phase | Responsibility |
|-------|----------------|
| **Startup** | Draft the Project Brief; agree appointments with the Executive |
| **Initiation** | Author the PID; baseline plan, cost, quality and benefits |
| **Stage planning** | Produce stage plans; agree tolerances with the Board |
| **Delivery** | Authorise work packages; track progress; manage risks and issues |
| **Reporting** | Produce highlight, exception and end-of-stage reports |
| **Change** | Run change control within tolerance; escalate beyond |
| **Closure** | Confirm acceptance; produce the End Project Report; capture lessons |
{:class="table table-single table-narrow"}

---

## Authority and Tolerance

The Project Manager makes decisions within the tolerances set by the Project Board. Outside those tolerances, decisions belong to the Board.

<div class="mermaid">
flowchart LR
    A[Issue<br/>or Change] --> B{Within<br/>Tolerance?}
    B -->|Yes| C[PM<br/>Decides]
    B -->|No| D[Escalate<br/>to Board]
    C --> E[Record<br/>and Report]
    D --> E

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

Typical tolerances cover:

| Tolerance | Example |
|-----------|---------|
| **Cost** | +/- 10% of stage budget |
| **Time** | +/- 2 weeks on stage end date |
| **Scope** | No removal of agreed must-haves |
| **Quality** | All defined acceptance criteria met |
| **Risk** | No new red risks without escalation |
| **Benefits** | No reduction in committed benefits |
{:class="table table-single table-narrow"}

Tolerances are agreed up front. Treat them as the contract between the Project Manager and the Project Board.

---

## Relationship to Other Roles

| Role | Relationship | What the PM Owes Them |
|------|-------------|----------------------|
| **[Executive](/projects/executive)** | Reports to | Honest progress, timely escalation, sound advice |
| **[Project Sponsor](/projects/project_sponsor)** | Engages with | Strategic context, removal-of-blocker requests |
| **[Senior User](/projects/senior_user)** | Collaborates with | Visibility of requirements progress, user impact of changes |
| **[Senior Supplier](/projects/senior_supplier)** | Collaborates with | Realistic asks, clarity on commitments |
| **Project team** | Leads | Clear direction, removed blockers, recognition |
| **Stakeholders** | Communicates with | Tailored updates, managed expectations |
{:class="table table-single table-narrow"}

The Project Manager is **not** on the Project Board — they report to it. This distinction matters: the PM advises, the Board decides.

---

## Core Skills

| Skill Area | Examples |
|------------|----------|
| **Planning** | Decomposition, estimating, scheduling, dependency mapping |
| **Risk** | Identification, assessment, response planning |
| **Stakeholder** | Engagement, influence, communication |
| **Leadership** | Motivating teams, resolving conflict, building trust |
| **Commercial** | Vendor management, budget control, contract awareness |
| **Reporting** | Concise, honest, decision-focused communication |
| **Domain** | Enough understanding to challenge solutions sensibly |
{:class="table table-single table-narrow"}

---

## A Week in the Life

The mix varies by stage, but a typical delivery-stage week looks like:

| Activity | Approx Share |
|----------|--------------|
| **Communication** (1:1s, stand-ups, stakeholder updates) | 30-40% |
| **Planning and replanning** | 15-20% |
| **Risk, issue and change management** | 10-15% |
| **Reporting** (highlight reports, board prep) | 10-15% |
| **Team support and unblocking** | 10-15% |
| **Quality, governance, admin** | 10% |
{:class="table table-single table-narrow"}

If you're spending all your time in spreadsheets and none with people, something is wrong.

---

## Common Project Manager Pitfalls

| Pitfall | Symptom | Mitigation |
|---------|---------|------------|
| **The optimistic PM** | Status always green until it isn't | Surface risks early; use ranges, not point estimates |
| **The hero PM** | Holds everything in their head | Document; build redundancy; delegate |
| **The admin PM** | Updates plans but doesn't lead | Spend more time with the team and stakeholders |
| **The hidden escalation** | Avoids telling the Board bad news | Escalate early; the Board hates surprises more than problems |
| **The scope softie** | Quietly absorbs creep | Use change control; show impact every time |
{:class="table table-single table-narrow"}

---

## What Good Project Managers Do

- Tell the Board what they need to hear, not what they want to hear
- Plan honestly — including the buffer they actually believe in
- Spend time with the team, not just on the team's outputs
- Escalate early and small, not late and large
- Own the outcome, even when the cause is outside their control
- Make the next person's job easier — through clean handovers and good documentation

---

## Related Resources

- [Project Roles](/projects/project_roles) - Overview of all key roles
- [Project Sponsor](/projects/project_sponsor) - The senior champion
- [Executive](/projects/executive) - The Project Board chair
- [Senior User](/projects/senior_user) - User representative on the Board
- [Senior Supplier](/projects/senior_supplier) - Supplier representative on the Board
- [Identify Stakeholders](/projects/identify_stakeholders) - Wider stakeholder management
- [Project Initiation Document](/projects/project_initiation_document) - PM-authored baseline
- [Project Reporting](/projects/project_reporting) - How PMs report to the Board
- [Project Change Control](/projects/project_change_control) - Managing change within tolerance
