---
layout: page
name: Schedule
section: Best Practice
description: Best practices for developing and maintaining effective project schedules
tags: [Schedule, Planning, Milestones, Gantt, Best Practice]
color: purple-400
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

---

## What is a Project Schedule?

A project schedule is a time-based model that defines when project activities will be performed, how long they will take, what resources are needed, and in what sequence work must occur. It transforms the scope and deliverables into a realistic timeline for delivery.

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Key Principle:</strong> A schedule is not a wish list of dates. It is a model built from estimated durations, resource availability, and logical dependencies. If you cannot explain how you arrived at each date, your schedule is a guess.
</div>

The schedule is the primary tool for coordinating work, tracking progress, and communicating the plan to stakeholders. It underpins all delivery governance, from daily stand-ups to board-level reporting.

---

## Schedule Development Process

<div class="mermaid">
flowchart LR
    A[Define<br/>Scope] --> B[Identify<br/>Activities]
    B --> C[Sequence<br/>Activities]
    C --> D[Estimate<br/>Durations]
    D --> E[Assign<br/>Resources]
    E --> F[Optimise &<br/>Level]
    F --> G[Set<br/>Baseline]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

| Step | Key Actions | Outputs |
|------|-------------|---------|
| **Define Scope** | Confirm deliverables via [PBS](/best_practice/pbs) and [Product Descriptions](/best_practice/product_descriptions) | Scope baseline |
| **Identify Activities** | Break products into the activities needed to create them | Activity list |
| **Sequence Activities** | Determine dependencies using the [PFD](/best_practice/pfd) and logical relationships | Network diagram |
| **Estimate Durations** | Apply estimation techniques to determine how long each activity takes | Duration estimates |
| **Assign Resources** | Allocate people, equipment, and materials to activities | Resource assignments |
| **Optimise & Level** | Resolve over-allocations and compress the timeline where possible | Optimised schedule |
| **Set Baseline** | Approve and lock the schedule as the baseline for progress measurement | Schedule baseline |
{:class="table table-single table-narrow"}

---

## Types of Schedules

Different audiences need different levels of schedule detail. Most projects maintain schedules at multiple levels:

| Type | Detail Level | Audience | Typical Format |
|------|-------------|----------|---------------|
| **Milestone schedule** | Key dates only | Senior stakeholders, Project Board | Milestone chart or timeline |
| **Summary schedule** | Major phases and deliverables | Programme managers, PMO | Summary Gantt chart |
| **Detailed schedule** | All activities, dependencies, resources | Project Manager, Team Managers | Full Gantt chart with dependencies |
| **Team schedule** | Sprint/iteration level detail | Delivery teams | Kanban board, sprint backlog |
{:class="table table-single table-narrow"}

### Milestone Schedule

A milestone schedule shows only the key dates -- decision points, deliverable handovers, governance gates, and external commitments. It is the schedule most often shared with senior stakeholders.

See [Milestone Management](/best_practice/milestone_management) for detailed guidance on defining and managing milestones.

### Summary Schedule

The summary schedule shows major phases, workstreams, and deliverables with their start and end dates. It provides enough detail to understand the project timeline without overwhelming the audience.

### Detailed Schedule

The detailed schedule contains all activities, dependencies, resource assignments, and milestones. It is the working schedule used by the Project Manager and delivery teams.

---

## Estimating Durations

Accurate estimation is the foundation of a credible schedule. Several techniques are available:

| Technique | Description | Best Used When |
|-----------|-------------|----------------|
| **Expert judgement** | Experienced practitioners estimate based on their knowledge | Domain experts are available |
| **Analogous estimation** | Compare with similar past projects or activities | Historical data exists |
| **Parametric estimation** | Use a mathematical model (e.g., lines of code per day) | Quantifiable metrics are available |
| **Three-point estimation** | Calculate from optimistic, most likely, and pessimistic estimates | Uncertainty is high |
| **Bottom-up estimation** | Estimate each component and sum them up | Detailed scope is defined |
| **Planning poker** | Team members independently estimate, then discuss differences | Agile teams |
{:class="table table-single table-narrow"}

### Three-Point Estimation Formula

The PERT (Programme Evaluation and Review Technique) formula provides a weighted average:

**Expected Duration = (Optimistic + 4 x Most Likely + Pessimistic) / 6**

| Estimate Type | Multiplier | Description |
|--------------|-----------|-------------|
| Optimistic (O) | 1 | Best case scenario, everything goes well |
| Most Likely (M) | 4 | Most probable duration under normal conditions |
| Pessimistic (P) | 1 | Worst case scenario, significant problems occur |
{:class="table table-single table-narrow"}

### Common Estimation Pitfalls

- **Confusing effort with duration** -- 40 hours of effort does not equal 5 days if the person is only 50% allocated
- **Forgetting non-productive time** -- Allow for meetings, admin, holidays, and sickness
- **Anchoring bias** -- Do not let a target date influence the estimate; estimate the work, then check the date
- **Optimism bias** -- Most people underestimate; apply a contingency factor based on project risk
- **Not involving the doers** -- The people who will do the work should provide the estimates

---

## Scheduling Techniques

### Critical Path Method (CPM)

The critical path is the longest sequence of dependent activities that determines the minimum project duration. Any delay on the critical path delays the entire project.

<div class="mermaid">
flowchart LR
    A[Requirements<br/>10 days] --> B[Design<br/>15 days]
    B --> C[Build<br/>20 days]
    C --> D[Test<br/>10 days]
    D --> E[Deploy<br/>5 days]

    A --> F[Procure<br/>Hardware<br/>8 days]
    F --> G[Configure<br/>Environment<br/>5 days]
    G --> D

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

In this example:
- **Critical path**: Requirements > Design > Build > Test > Deploy = 60 days
- **Non-critical path**: Requirements > Procure Hardware > Configure Environment > Test > Deploy = 33 days
- **Float on non-critical path**: 60 - 33 = 27 days of scheduling flexibility

### Key CPM Concepts

| Concept | Definition |
|---------|------------|
| **Critical path** | Longest path through the network; determines minimum project duration |
| **Total float** | Time an activity can be delayed without delaying the project end date |
| **Free float** | Time an activity can be delayed without delaying any successor |
| **Near-critical path** | Paths with very little float that could become critical |
| **Critical chain** | Critical path adjusted for resource constraints and buffers |
{:class="table table-single table-narrow"}

### Resource Levelling

Resource levelling adjusts the schedule to resolve situations where resources are over-allocated:

| Scenario | Solution | Impact |
|----------|----------|--------|
| One person assigned to two parallel tasks | Sequence the tasks | May extend the schedule |
| Team over-allocated during a peak period | Spread work across a longer period | May extend the schedule |
| Specialist needed for multiple workstreams | Prioritise and schedule in sequence | May extend the schedule |
| Too much work for available capacity | Add resources, reduce scope, or extend timeline | Depends on constraint |
{:class="table table-single table-narrow"}

<div class="alert alert-warning">
<i class="fas fa-exclamation-triangle mr-2"></i>
<strong>Important:</strong> Resource levelling almost always extends the schedule. If the baseline end date is fixed, you may need to use schedule compression techniques instead.
</div>

---

## Schedule Compression

When the schedule needs to be shortened, two primary techniques are available:

| Technique | Description | Risk |
|-----------|-------------|------|
| **Crashing** | Add resources to critical path activities to reduce their duration | Increased cost; diminishing returns |
| **Fast-tracking** | Perform sequential activities in parallel | Increased risk of rework |
{:class="table table-single table-narrow"}

### When to Use Each Technique

- **Crashing** works best when activities are effort-driven and additional resources can genuinely reduce the duration (e.g., more developers, more testers)
- **Fast-tracking** works best when the dependency between activities is discretionary rather than mandatory (e.g., starting development before design is fully complete)

Both techniques increase risk. Always assess the trade-off before applying them.

---

## Baseline Management

The schedule baseline is the approved version of the schedule against which progress is measured. Effective baseline management is essential for credible reporting.

### Baseline Principles

| Principle | Description |
|-----------|-------------|
| **Set it formally** | The baseline is approved by the Project Board or sponsor |
| **Protect it** | Do not change the baseline without formal approval |
| **Measure against it** | Report progress by comparing actuals to the baseline |
| **Re-baseline when necessary** | If scope changes significantly, re-baseline with approval |
| **Keep history** | Maintain previous baselines for trend analysis |
{:class="table table-single table-narrow"}

### When to Re-baseline

- Approved scope changes that materially affect the schedule
- A fundamental change in approach or delivery strategy
- When the current baseline no longer provides a meaningful basis for comparison
- Never to "hide" slippage -- re-baselining should be transparent and approved

---

## Schedule Quality Checklist

Use this checklist to verify the quality of your schedule before baselining:

- [ ] All deliverables from the [PBS](/best_practice/pbs) are represented as activities or milestones
- [ ] All activities have realistic duration estimates (not just target dates)
- [ ] All activities have at least one predecessor and one successor (except project start and end)
- [ ] Dependencies are logical and justified, not arbitrary
- [ ] Resources are assigned and not over-allocated
- [ ] The critical path is identified and realistic
- [ ] [Milestones](/best_practice/milestone_management) are placed at key decision points and deliverable completions
- [ ] Contingency or management reserve is included where appropriate
- [ ] Holidays, leave, and non-working days are accounted for
- [ ] External dependencies are identified and dates agreed with the external party
- [ ] The schedule has been reviewed by the team and key stakeholders
- [ ] The baseline has been formally approved

---

## Schedule Tracking and Control

Once the schedule is baselined, ongoing tracking is essential:

<div class="mermaid">
flowchart LR
    A[Collect<br/>Progress Data] --> B[Update<br/>Schedule]
    B --> C[Analyse<br/>Variance]
    C --> D[Take Corrective<br/>Action]
    D --> E[Report<br/>Status]
    E --> A

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

| Activity | Frequency | Responsibility |
|----------|-----------|----------------|
| **Collect progress** | Weekly | Team Managers |
| **Update schedule** | Weekly | Project Manager / Planner |
| **Analyse variance** | Weekly | Project Manager |
| **Corrective action** | As needed | Project Manager |
| **Report status** | Weekly / fortnightly | Project Manager |
| **Board review** | Monthly / at stage gates | Project Board |
{:class="table table-single table-narrow"}

### Key Metrics to Track

- **Schedule Variance (SV)** -- Difference between planned and actual progress
- **Schedule Performance Index (SPI)** -- Ratio of earned value to planned value (SPI < 1.0 = behind schedule)
- **Milestone hit rate** -- Percentage of milestones achieved on time
- **Critical path status** -- Is the critical path on track?
- **Float consumption** -- Are non-critical activities consuming their float?

---

## Common Scheduling Mistakes

| Mistake | Impact | Solution |
|---------|--------|----------|
| No dependencies defined | Schedule is just a list of dates with no logical basis | Define predecessor/successor relationships for all activities |
| Target dates used instead of estimates | Schedule cannot respond to changes | Estimate durations and let the schedule calculate dates |
| Resources ignored | People are over-allocated and cannot deliver | Assign resources and perform resource levelling |
| No baseline set | Cannot measure progress or identify slippage | Formally baseline the schedule before execution begins |
| Activities too large | Cannot track progress meaningfully | Break activities down to 1-2 week durations |
| Activities too small | Excessive admin overhead | Consolidate trivial activities |
| No contingency | Every small delay impacts the end date | Include management reserve or buffer time |
| Schedule not updated | Decisions based on outdated information | Update weekly and report variances |
| Only one level of schedule | Detail overwhelms senior stakeholders; summary frustrates the team | Maintain milestone, summary, and detailed schedules |
| Ignoring the critical path | Effort spent on non-critical work while critical tasks slip | Monitor the critical path and prioritise accordingly |
{:class="table table-single table-narrow"}

---

## Tools for Scheduling

| Tool | Best For | Considerations |
|------|----------|---------------|
| **Microsoft Project** | Complex schedules with dependencies and resources | Industry standard; steep learning curve |
| **Smartsheet** | Collaborative scheduling with non-PM users | Easy to share; less powerful than MS Project |
| **Jira / Azure DevOps** | Agile teams, sprint planning | Good for iterative delivery; weaker on Gantt views |
| **Excel / Google Sheets** | Simple milestone plans and summary schedules | Flexible but no scheduling engine |
| **Primavera P6** | Large-scale programmes and construction projects | Enterprise-grade; complex to set up |
{:class="table table-single table-narrow"}

---

## Related Resources

- [Product Breakdown Structure](/best_practice/pbs) -- Defining deliverables before scheduling
- [Product Flow Diagram](/best_practice/pfd) -- Mapping dependencies between deliverables
- [Product Descriptions](/best_practice/product_descriptions) -- Defining what each deliverable must contain
- [Milestone Management](/best_practice/milestone_management) -- Defining and tracking key schedule milestones
