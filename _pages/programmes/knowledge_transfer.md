---
layout: programme
name: Knowledge Transfer
section: Programme
description: Plan knowledge transfer for leavers, planned absences, BAU handovers and supplier changes, with a 14 point agenda and handover checklists.
tags: [programme, project, knowledge, knowledge transfer, KT, handover, transition, succession, maternity leave, planned absence]
themes: [Knowledge Management, Transition]
color: tangerine-300
downloads:
 - name: Knowledge Transfer Plan
   description: Word template combining the 14 point KT agenda, self-help handover checklist, KT schedule and sign-off
   file: knowledge_transfer_plan.docx
 - name: Knowledge Transfer Agenda Tracker
   description: Excel tracker for planning KT sessions by topic, with SMEs, methods, documents, status and a progress summary
   file: knowledge_transfer_agenda.xlsx
 - name: Personal Handover Plan
   description: Short Word template for handing over your own role before planned absence such as maternity or parental leave
   file: personal_handover_plan.docx
last_updated: 2026-10-13
---

# Knowledge Transfer

Knowledge transfer (KT) is the practical job of moving knowledge from one part of an organisation to another, so that it is available to the people who will need it in future. Like [knowledge management](/programmes/knowledge_management), it seeks to organise, create, capture and distribute knowledge. It is more than a communication problem: it needs time, willing people and a plan.

---

## When You Need Knowledge Transfer

| Trigger | What Needs to Move | From | To |
|---------|-------------------|------|----|
| **Planned absence** | Day-to-day work, deadlines, contacts and authority to act | Individual | Temporary cover |
| **Leaver or role change** | How the job is done, contacts, work in progress | Individual | Successor or team |
| **Project to BAU handover** | How to run and support the new service | Project team | Operations and support |
| **Supplier transition** | Service operation, technical detail, history | Outgoing supplier | Incoming supplier or in-house team |
| **Insourcing / outsourcing** | Everything needed to run the service | Current team | New team |
| **Succession planning** | Critical expertise held by one person | Expert | Deputies |
| **Contractor exit** | Specialist knowledge and work in progress | Contractor | Permanent staff |
{:class="table table-single table-narrow"}

---

## Knowledge Transfer Process

<div class="mermaid">
flowchart LR
    A[Scope] --> B[Plan]
    B --> C[Prepare]
    C --> D[Transfer]
    D --> E[Verify]
    E --> F[Sign off]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

| Step | Activities | Output |
|------|-----------|--------|
| **Scope** | Agree what is being transferred, why, and the exit criteria | KT overview |
| **Plan** | Choose the topics from the 14 point agenda, name SMEs, choose methods, estimate effort | KT agenda and schedule |
| **Prepare** | Holder completes the self-help checklist, gathers and updates documents | Completed checklist, document list |
| **Transfer** | Run walkthroughs, shadowing and paired work | Session log |
| **Verify** | Reverse shadowing, recipient rates confidence by topic, gaps closed | Readiness assessment |
| **Sign off** | Holder, recipient and sponsor confirm KT is complete | Signed KT plan |
{:class="table table-single table-narrow"}

Start early. A leaver's notice period or the last month of a supplier contract is rarely enough time.

---

## Key Success Factors

- A motivated knowledge holder, willing to cooperate
- A motivated knowledge recipient, willing to cooperate
- Sufficient time to perform knowledge transfer activities (shadowing, reverse shadowing, workshops)
- Sufficient time to prepare knowledge sharing materials and resources
- A clear transition plan and handover process
- Clear roles and responsibilities for KT, agreed by the holder and the recipient
- Good documentation

If any of these are missing, record it as a risk. An unwilling knowledge holder, such as an outgoing supplier losing a contract, needs contractual and commercial levers, not just goodwill.

---

## Knowledge Transfer Topic Areas

Knowledge to be transferred falls into four areas. **People** enable change, **process** delivers value and **technology** implements it, so a complete transfer covers all of them.

| Technology | Service Management | Organisational | People and Process |
|------------|--------------------|----------------|--------------------|
| Architecture and application environment | Support and development documentation | Roles, responsibilities and ownership | Organisational structure |
| Technical architecture and interfaces | Detailed presentation of components | Governance and control | Business processes, rules, policies and procedures |
| Data description and database | Maintenance and support | Historic pain points | Training, succession planning and sunset plans |
| Development | User management | | |
| Testing | Service support and delivery | | |
| Network and IPs | Disaster recovery | | |
{:class="table table-single table-narrow"}

---

## The 14 Point Knowledge Transfer Agenda

For an application or service handover, work through these fourteen topics. For each one, decide whether it applies, name the subject matter expert (SME), choose a training method, estimate the hours needed and check that the documents exist.

| ID | Topic | Covers |
|----|-------|--------|
| **A1** | Architecture overview and application environment | Business purpose, criticality, functional overview, how it is organised, team, external contacts, certifications, roadmap and sunset plan, partners, tools and vendors, hardware, IP addresses, network topology, configuration, monthly effort |
| **A2** | Technical architecture and interfaces | Detailed architecture with diagrams, interfaces and dependencies on other services |
| **A3** | Support and development documentation | What exists, how it is organised, where it is, who can view and update it |
| **A4** | Components detailed presentation | Components, modules and sub-systems, documentation and code walkthroughs, macros and scripts |
| **A5** | Data description and database programs | Database details, scheduled jobs, recovery procedures, backup and restore, reporting |
| **A6** | Maintenance and support | Support flow and volumes, application management and operation, directory structure, logs, configuration files, security, errors, critical changes, DBA and network requests, alarms |
| **A7** | Development | Change requests and validation, change board and release team, scope and design documents, build and test, coding standards, release installation, work in progress |
| **A8** | User management | Login procedure, account management and administration |
| **A9** | Testing | Tools, test cases and regression, test data, test systems, scenarios and expected results, support test scripts, last 6 months of releases and defects |
| **A10** | Network and IP administration | Network and server locations, IPs, network administration |
| **A11** | Service support and delivery | Service description, availability, metrics, SLAs, performance, roles, supported hours, support levels, incident, problem, change, release and configuration management, escalations |
| **A12** | Disaster recovery | DR plan, recovery contacts |
| **A13** | Non-functional requirements | Performance, availability, security and compliance requirements the service must keep meeting |
| **A14** | Historic and end user pain points | Recurring incidents, user complaints and workarounds, mistakes in danger of being repeated |
{:class="table table-single table-narrow"}

The [Knowledge Transfer Agenda Tracker](/downloads/knowledge_transfer_agenda.xlsx) breaks these into 88 sub-topics you can plan and track individually.

---

## Self-Help Handover Checklist

When a person is leaving or changing role, ask them to complete a self-help checklist before KT sessions start. It gets their knowledge onto paper and gives the successor something to work from.

| Part | Focus | Example Questions |
|------|-------|-------------------|
| **1. Key information** | The day job | What activities need skills others may not have? Which documents, websites and tools do you rely on? What issues are outstanding? |
| **2. Your knowledge** | Specialist expertise | What knowledge helps you make decisions that took time to learn? What training helped you most? |
| **3. Contacts and skills** | Relationships | Who relies on you as their only point of contact? Who do you go to for advice? Which external relationships do you manage? |
| **4. Lessons learned** | Experience | What are you asked most often? How do you spot problems a newcomer would miss? What mistakes are in danger of being repeated? |
| **5. Any other information** | Loose ends | What unofficial roles do you perform? What work will be incomplete when you leave, and who should finish it? |
| **6. Key documentation** | Documents and sites | Which critical documents and sites does your successor need, where are they and who will own them? |
| **7. Personal network map** | People | The people, external contacts and networks you use, and why they matter (seven per group at most) |
{:class="table table-single table-narrow"}

Ask the leaver to tidy as they go: remove superseded documents, assign new owners, save useful emails and attachments to the team site, and share bookmarked websites.

---

## Personal Handover for Planned Absence

Maternity, paternity, adoption and shared parental leave, sabbaticals, secondments and planned medical leave all need a handover, but rarely the full 14 point agenda. The person is coming back, the cover is temporary, and the aim is simple: nothing is dropped, the cover can act, and the person on leave can switch off.

<div class="mermaid">
flowchart LR
    A[Leave agreed] --> B[Write handover plan]
    B --> C[Handover meetings]
    C --> D[Cover tries tasks]
    D --> E[Before I go checks]
    E --> F[Absence]
    F --> G[Handback]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

A controlled handover captures:

| What to Capture | Why It Matters | Example |
|-----------------|----------------|---------|
| **Absence details** | Everyone knows the dates and who is covering | Last working day, expected return, main cover |
| **Staying in touch** | The person on leave is only contacted when it matters | What to contact me about, one named contact, keeping in touch days |
| **Responsibilities and authority** | Cover can make decisions, not just keep things ticking over | Approvals, budget limits, chairing meetings, unofficial roles |
| **Work in progress** | Work picks up where it was left | Status, next steps, due date, where the latest version is saved |
| **Key dates and deadlines** | Nothing that falls during the absence is missed | Reporting cycles, contract renewals, annual reviews |
| **Regular tasks and meetings** | The routine keeps running, or is paused on purpose | Frequency, instructions, who covers it, can it pause |
| **Key contacts** | Cover knows who to call and stakeholders know who to call instead | Name, role, why they matter, introduced to cover |
| **Documents, systems and access** | Cover can get to what they need on day one | Shared mailboxes, approval workflows, document ownership |
| **Risks and things to watch** | Problems are spotted early | What to look out for and who to escalate to |
| **Things only I know** | Tacit know-how is not lost | Frequent questions, workarounds, history and politics |
| **Handback** | The return is planned, not a surprise | What changed, decisions made, what returns and what stays with cover |
{:class="table table-single table-narrow"}

Start as soon as the leave dates are agreed, and hold the handover meetings at least two weeks before the last day so the cover can try key tasks while the person is still around. Agree contact arrangements with the line manager, and check your organisation's HR policy on keeping in touch during leave.

<a href="/downloads/personal_handover_plan.docx" class="btn btn-orange mb-3"><i class="fa-solid fa-file-arrow-down"></i> Personal Handover Plan (Word)</a>

---

## Knowledge Transfer Methods

| Method | Description | Best For |
|--------|-------------|----------|
| **Mentorship** | An experienced person guides the recipient over time | Judgement-heavy roles |
| **Guided experience** | The recipient does the work with the holder on hand | Routine operational tasks |
| **Work shadowing** | The recipient watches the holder do the job | Early in the transfer |
| **Reverse shadowing** | The holder watches the recipient and gives feedback | Proving capability before sign-off |
| **Paired work** | Holder and recipient work side by side | Code, configuration, analysis |
| **Simulation** | Practice in a safe, realistic scenario | Rare or high-risk events such as disaster recovery |
| **Guided experimentation** | The recipient tries approaches, the holder reviews | Troubleshooting and problem solving |
| **Workshops and walkthroughs** | Structured sessions on a topic, document or code base | Architecture and process overviews |
| **Community of practice** | A group sharing knowledge on a topic over time | Knowledge spread across many people |
| **Narrative transfer** | Stories and case studies of what happened and why | History, pain points and lessons |
{:class="table table-single table-narrow"}

A good pattern for each topic is **tell, show, do, review**: a walkthrough, then shadowing, then guided experience, then reverse shadowing.

---

## Roles and Responsibilities

| Role | Responsibilities |
|------|------------------|
| **KT sponsor** | Agrees scope and time for KT, resolves availability conflicts, signs off completion |
| **KT lead** | Plans and schedules sessions, tracks progress against the agenda, reports risks |
| **Knowledge holder** | Prepares materials, runs sessions, updates documentation, answers questions |
| **Knowledge recipient** | Attends sessions, practises the work, confirms understanding |
| **Line managers** | Release time for holder and recipient, confirm the recipient is ready |
{:class="table table-single table-narrow"}

---

## Verifying Knowledge Transfer

Attendance at a session does not prove knowledge has been transferred. Before sign-off, ask the recipient to rate their confidence in each topic:

| Rating | Meaning |
|--------|---------|
| **1** | Aware of it |
| **2** | Could do it with help |
| **3** | Could do it using the documentation |
| **4** | Can do it unaided |
| **5** | Could teach it to others |
{:class="table table-single table-narrow"}

Test anything rated 3 or below through reverse shadowing, and record follow-up actions with owners and dates before the knowledge holder leaves.

---

## Common Pitfalls

| Pitfall | Consequence | How to Avoid It |
|---------|-------------|-----------------|
| Starting too late | Gaps found after the holder has gone | Trigger KT as soon as a leaver, contract end or go-live date is known |
| Documents only | Tacit knowledge is lost | Use shadowing and paired work, not just handover packs |
| No verification | False confidence at sign-off | Use confidence ratings and reverse shadowing |
| Holder too busy | Sessions cancelled or rushed | Plan KT effort and backfill the holder's day job |
| Forgetting the history | Old problems return | Always cover A14, historic and end user pain points |
| Ignoring contacts | Recipient does not know who to call | Complete the personal network map |
{:class="table table-single table-narrow"}

---

## Templates

<a href="/downloads/knowledge_transfer_plan.docx" class="btn btn-orange mb-3"><i class="fa-solid fa-file-arrow-down"></i> Knowledge Transfer Plan (Word)</a>

The KT plan brings together the KT overview, success factors, roles, the 14 point agenda with sub-topic checklists, the self-help handover checklist, a session schedule, readiness ratings and sign-off.

<a href="/downloads/knowledge_transfer_agenda.xlsx" class="btn btn-orange mb-3"><i class="fa-solid fa-file-arrow-down"></i> Knowledge Transfer Agenda Tracker (Excel)</a>

The tracker lists every sub-topic with drop-downs for applicability, method, document status and progress, and a summary sheet showing completion and planned hours by topic.

<a href="/downloads/personal_handover_plan.docx" class="btn btn-orange mb-3"><i class="fa-solid fa-file-arrow-down"></i> Personal Handover Plan (Word)</a>

A shorter, personal template for planned absence such as maternity or parental leave: cover and delegated authority, work in progress, key dates, contacts, access, a before I go checklist and a handback section for the return.

---

## Related Resources

- [Knowledge Management](/programmes/knowledge_management) - The wider discipline
- [Handover Document](/projects/handover_document) - Formal handover to operations
- [Service Transition](/projects/service_transition) - Moving a service into live
- [Early Life Support](/projects/early_life_support) - Support after go-live
- [Lessons Learned](/projects/lessons_learned) - Capturing project experience
- [Training](/best_practice/training) - Training delivery
