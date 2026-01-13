---
layout: page
name: Gantt Charts
section: Planning
description: Complete guide to creating and using Gantt charts for project scheduling, including dependencies, milestones, progress tracking, and best practices.
tags: [Gantt, scheduling, timeline, milestones, dependencies, progress tracking, baseline]
last_updated: 2026-01-13
---

{% include planning_nav.html %}

# Gantt Charts

Gantt charts are the most widely used tool for visualising project schedules. They show tasks as horizontal bars along a timeline, making it easy to see what needs to happen, when, and how tasks relate to each other.

---

## What is a Gantt Chart?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> A Gantt chart is a horizontal bar chart that illustrates a project schedule, showing the start and finish dates of activities, milestones, and dependencies between tasks.
</div>

Named after Henry Gantt who popularised them in the 1910s, Gantt charts are used for:

- **Visualising the schedule** - See the entire project at a glance
- **Communicating plans** - Easy to understand for all stakeholders
- **Tracking progress** - Show actual vs planned progress
- **Identifying issues** - Spot delays and overlaps quickly

---

## Gantt Chart Anatomy

### Basic Elements

<div class="mermaid">
gantt
    title Sample Project
    dateFormat  YYYY-MM-DD
    section Planning
    Define scope        :a1, 2026-01-01, 5d
    Create WBS          :a2, after a1, 3d
    section Execution
    Development         :a3, after a2, 10d
    Testing             :a4, after a3, 5d
    section Closure
    Deployment          :milestone, m1, after a4, 0d
</div>

### Components Explained

| Element | Description |
|---------|-------------|
| **Task bar** | Horizontal bar showing duration |
| **Timeline** | Horizontal axis with dates |
| **Task list** | Vertical axis listing activities |
| **Milestone** | Diamond or marker for key dates |
| **Dependencies** | Arrows or lines linking tasks |
| **Progress** | Shading showing completion % |
| **Today line** | Vertical line marking current date |
{:class="table table-single table-narrow"}

---

## Creating a Gantt Chart

### Step-by-Step Process

<div class="mermaid">
flowchart LR
    A[List<br/>Tasks] --> B[Estimate<br/>Durations]
    B --> C[Sequence<br/>Tasks]
    C --> D[Add<br/>Dependencies]
    D --> E[Assign<br/>Resources]
    E --> F[Set<br/>Baseline]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

### 1. List All Tasks

Start with your WBS work packages:
- Break down to manageable activities
- Include project management tasks
- Don't forget testing, reviews, approvals

### 2. Estimate Durations

For each task, determine:
- How long will it take?
- Working days or calendar days?
- Any constraints (deadlines, dependencies)?

### 3. Sequence Tasks

Arrange tasks in logical order:
- What must happen first?
- What can run in parallel?
- What are the dependencies?

### 4. Add Dependencies

Link related tasks:
- Predecessor relationships
- Lead and lag time if needed
- External dependencies

### 5. Assign Resources

Add resource information:
- Who is responsible?
- How much effort?
- Any resource conflicts?

### 6. Set Baseline

Save the original plan:
- Baseline for comparison
- Track variance later
- Don't change without change control

---

## Showing Dependencies

Dependencies show the relationships between tasks.

### Dependency Types on Gantt

| Type | Visual | Meaning |
|------|--------|---------|
| **Finish-to-Start** | Arrow from end to start | Most common - B starts when A finishes |
| **Start-to-Start** | Arrow from start to start | B starts when A starts |
| **Finish-to-Finish** | Arrow from end to end | B finishes when A finishes |
{:class="table table-single table-narrow"}

<div class="mermaid">
gantt
    title Dependency Example
    dateFormat  YYYY-MM-DD
    section Tasks
    Task A              :a, 2026-01-01, 5d
    Task B (FS)         :b, after a, 4d
    Task C (parallel)   :c, 2026-01-01, 6d
</div>

---

## Milestones

Milestones mark significant events or deliverables with zero duration.

### Common Milestones

| Milestone Type | Example |
|----------------|---------|
| **Phase completion** | Design phase complete |
| **Deliverable approval** | Requirements signed off |
| **External event** | Vendor delivery received |
| **Decision point** | Go/No-go decision |
| **Project end** | Project closure |
{:class="table table-single table-narrow"}

<div class="mermaid">
gantt
    title Milestones Example
    dateFormat  YYYY-MM-DD
    section Phase 1
    Requirements        :a1, 2026-01-01, 10d
    Requirements Approved :milestone, m1, after a1, 0d
    section Phase 2
    Development         :a2, after m1, 15d
    Code Complete       :milestone, m2, after a2, 0d
</div>

---

## Progress Tracking

### Showing Progress

Update the Gantt chart to show:

| Indicator | Description |
|-----------|-------------|
| **% Complete** | Shade bar proportionally |
| **Actual dates** | Show when tasks really started/finished |
| **Variance** | Highlight ahead/behind schedule |
| **Status colours** | Green (on track), Amber (at risk), Red (delayed) |
{:class="table table-single table-narrow"}

### Baseline Comparison

Compare current schedule to baseline:

```
Baseline:  [===========]
Current:   [===============]  ← 4 days behind
```

---

## Resource Assignment

### Adding Resources to Gantt

| Approach | Description |
|----------|-------------|
| **Resource column** | Add column showing assigned resource |
| **Resource row** | Separate swimlane per resource |
| **Colour coding** | Different colours per resource |
| **Resource histogram** | Stacked chart below showing workload |
{:class="table table-single table-narrow"}

### Resource Levelling

When resources are over-allocated:

1. **Identify conflicts** - Same person on parallel tasks
2. **Prioritise** - Which task is more critical?
3. **Adjust schedule** - Delay lower priority tasks
4. **Split tasks** - If possible, work in phases
5. **Add resources** - If budget allows

---

## Gantt Chart Best Practices

### Do

| Practice | Why |
|----------|-----|
| **Use consistent time units** | Easier to read and compare |
| **Show dependencies** | Explains the sequence |
| **Include milestones** | Highlights key dates |
| **Keep tasks manageable** | 1-2 weeks max per bar |
| **Update regularly** | Reflects reality |
| **Use colour meaningfully** | Status, phase, or resource |
{:class="table table-single table-narrow"}

### Don't

| Practice | Why |
|----------|-----|
| **Too much detail** | Becomes unreadable |
| **Too little detail** | Can't track progress |
| **Ignore critical path** | Miss the important tasks |
| **Static charts** | Quickly become outdated |
| **Missing dependencies** | Hides the real sequence |
{:class="table table-single table-narrow"}

---

## Gantt Chart Levels

Different audiences need different levels of detail:

| Level | Audience | Detail | Timeframe |
|-------|----------|--------|-----------|
| **Executive** | Sponsors, steering | Phases, major milestones | Full project |
| **Management** | PM, leads | Work packages, deliverables | Months |
| **Team** | Team members | Tasks, activities | Weeks |
{:class="table table-single table-narrow"}

### Executive Summary Gantt

<div class="mermaid">
gantt
    title Project Overview
    dateFormat  YYYY-MM-DD
    section Phases
    Initiation          :a1, 2026-01-01, 14d
    Planning            :a2, after a1, 21d
    Execution           :a3, after a2, 60d
    Closure             :a4, after a3, 14d
    section Milestones
    Project Approved    :milestone, m1, 2026-01-15, 0d
    Go-Live             :milestone, m2, 2026-04-15, 0d
</div>

---

## Common Gantt Chart Mistakes

### 1. No Dependencies Shown
**Problem**: Tasks appear independent when they're not
**Solution**: Always show task relationships

### 2. Summary Tasks Only
**Problem**: Can't track detailed progress
**Solution**: Break down to trackable work packages

### 3. Over-Optimistic Durations
**Problem**: Schedule slips immediately
**Solution**: Use realistic estimates, add contingency

### 4. Ignoring Resource Capacity
**Problem**: Impossible schedules
**Solution**: Check resource availability, level workload

### 5. No Baseline
**Problem**: Can't measure variance
**Solution**: Set and protect the baseline schedule

### 6. Set and Forget
**Problem**: Chart becomes irrelevant
**Solution**: Update weekly, track actuals

---

## Gantt Chart Tools

### Software Options

| Tool | Best For | Cost |
|------|----------|------|
| **Microsoft Project** | Full project management | Paid |
| **Smartsheet** | Collaborative, cloud-based | Paid |
| **Monday.com** | Team collaboration | Paid |
| **GanttProject** | Simple, free option | Free |
| **Excel/Sheets** | Quick, manual charts | Free |
| **Mermaid.js** | Documentation, code-based | Free |
{:class="table table-single table-narrow"}

---

## Gantt Chart Checklist

Before sharing your Gantt chart, verify:

- [ ] All tasks from WBS included?
- [ ] Durations realistic?
- [ ] Dependencies shown?
- [ ] Milestones marked?
- [ ] Resources assigned?
- [ ] Critical path visible?
- [ ] Baseline set?
- [ ] Time scale appropriate for audience?
- [ ] Legend explains colours/symbols?
- [ ] Update date shown?

---

## Worked Example

### Office Move Project

<div class="mermaid">
gantt
    title Office Relocation
    dateFormat  YYYY-MM-DD
    section Planning
    Site selection      :a1, 2026-01-06, 10d
    Lease negotiation   :a2, after a1, 14d
    Lease Signed        :milestone, m1, after a2, 0d
    section Fit-out
    Design layout       :b1, after m1, 7d
    Construction        :b2, after b1, 21d
    IT infrastructure   :b3, after b1, 14d
    Fit-out Complete    :milestone, m2, after b2, 0d
    section Transition
    Packing             :c1, after m2, 5d
    Physical move       :c2, after c1, 2d
    Unpacking           :c3, after c2, 3d
    Move Complete       :milestone, m3, after c3, 0d
    section Closure
    Old office handover :d1, after c2, 7d
    Project closure     :d2, after m3, 5d
</div>

**Key observations:**
- Critical path runs through lease → fit-out → move
- IT infrastructure runs in parallel with construction
- Old office handover starts during unpacking
- Clear milestones mark phase completions

---

## Related Resources

- [Work Breakdown Structure](/planning/wbs) - Source of tasks for Gantt
- [Critical Path Method](/planning/critical-path) - Identifying the critical path
- [Estimation Techniques](/planning/estimation) - Estimating task durations
- [Risk Management](/risk-management) - Schedule risk management

