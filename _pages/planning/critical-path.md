---
layout: page
name: Critical Path Method
section: Planning
description: Complete guide to Critical Path Method (CPM) including network diagrams, forward and backward pass, float calculation, and schedule compression techniques.
tags: [CPM, critical path, network diagram, float, slack, scheduling, fast-tracking, crashing]
last_updated: 2026-01-13
---

{% include planning_nav.html %}

# Critical Path Method (CPM)

The Critical Path Method is a project scheduling technique that identifies the longest sequence of dependent activities and determines the minimum project duration.

---

## What is the Critical Path?

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Definition:</strong> The critical path is the longest sequence of activities that must be completed on time for the project to finish by its deadline. Any delay on the critical path directly delays the project.
</div>

Key characteristics:
- **Determines minimum duration** - The project cannot finish faster than the critical path
- **Zero float** - Activities on the critical path have no scheduling flexibility
- **Multiple paths possible** - A project can have more than one critical path
- **Dynamic** - The critical path can change as the project progresses

---

## Network Diagram Basics

A network diagram shows the sequence and dependencies between project activities.

### Activity-on-Node (AON)

The most common format - activities are represented as nodes (boxes):

<div class="mermaid">
flowchart LR
    A[Activity A<br/>3 days] --> B[Activity B<br/>4 days]
    A --> C[Activity C<br/>2 days]
    B --> D[Activity D<br/>3 days]
    C --> D

    style A fill:#e3f2fd
    style B fill:#fff3e0
    style C fill:#fff3e0
    style D fill:#c8e6c9
</div>

### Node Information

Each activity node typically contains:

| Field | Description |
|-------|-------------|
| **Activity ID** | Unique identifier |
| **Activity Name** | Description of the work |
| **Duration** | Time to complete |
| **ES** | Early Start |
| **EF** | Early Finish |
| **LS** | Late Start |
| **LF** | Late Finish |
| **Float** | Scheduling flexibility |
{:class="table table-single table-narrow"}

---

## Dependency Types

| Type | Description | Example |
|------|-------------|---------|
| **Finish-to-Start (FS)** | B starts after A finishes | Most common - build foundation before walls |
| **Start-to-Start (SS)** | B starts when A starts | Parallel activities - begin design and prototyping together |
| **Finish-to-Finish (FF)** | B finishes when A finishes | Testing finishes when development finishes |
| **Start-to-Finish (SF)** | B finishes when A starts | Rare - shift handover scenarios |
{:class="table table-single table-narrow"}

### Lead and Lag

- **Lead** - Acceleration of the successor (negative lag)
- **Lag** - Delay before successor can start

Example: Painting can start 2 days after plastering (FS + 2 day lag for drying)

---

## Forward Pass

The forward pass calculates the **earliest** times activities can start and finish.

### Rules

1. Start at the first activity (ES = 0)
2. **EF = ES + Duration**
3. For the next activity: **ES = Maximum EF of all predecessors**
4. Continue to the end

### Worked Example

<div class="mermaid">
flowchart LR
    subgraph "Forward Pass"
        A["A<br/>ES:0 EF:3<br/>Dur: 3"] --> B["B<br/>ES:3 EF:7<br/>Dur: 4"]
        A --> C["C<br/>ES:3 EF:5<br/>Dur: 2"]
        B --> D["D<br/>ES:7 EF:10<br/>Dur: 3"]
        C --> D
    end

    style A fill:#e3f2fd
    style B fill:#ffcdd2
    style C fill:#e8f5e9
    style D fill:#ffcdd2
</div>

| Activity | Duration | Predecessors | ES | EF |
|----------|----------|--------------|----|----|
| A | 3 | - | 0 | 3 |
| B | 4 | A | 3 | 7 |
| C | 2 | A | 3 | 5 |
| D | 3 | B, C | 7 | 10 |
{:class="table table-single table-narrow"}

**Project Duration** = 10 days (highest EF)

---

## Backward Pass

The backward pass calculates the **latest** times activities can occur without delaying the project.

### Rules

1. Start at the last activity (LF = Project Duration)
2. **LS = LF - Duration**
3. For the previous activity: **LF = Minimum LS of all successors**
4. Continue to the start

### Continuing the Example

| Activity | Duration | LF | LS |
|----------|----------|----|----|
| D | 3 | 10 | 7 |
| B | 4 | 7 | 3 |
| C | 2 | 7 | 5 |
| A | 3 | 3 | 0 |
{:class="table table-single table-narrow"}

---

## Calculating Float (Slack)

Float is the amount of time an activity can be delayed without affecting the project end date.

### Float Formula

**Total Float = LS - ES** (or LF - EF)

### Complete Example

| Activity | ES | EF | LS | LF | Float | Critical? |
|----------|----|----|----|----|-------|-----------|
| A | 0 | 3 | 0 | 3 | 0 | Yes |
| B | 3 | 7 | 3 | 7 | 0 | Yes |
| C | 3 | 5 | 5 | 7 | 2 | No |
| D | 7 | 10 | 7 | 10 | 0 | Yes |
{:class="table table-single table-narrow"}

**Critical Path**: A → B → D (all activities with zero float)

<div class="mermaid">
flowchart LR
    A["A (3)"] --> B["B (4)"]
    A --> C["C (2)"]
    B --> D["D (3)"]
    C --> D

    style A fill:#ffcdd2,stroke:#c62828,stroke-width:3px
    style B fill:#ffcdd2,stroke:#c62828,stroke-width:3px
    style C fill:#e8f5e9
    style D fill:#ffcdd2,stroke:#c62828,stroke-width:3px
</div>

---

## Types of Float

| Type | Description |
|------|-------------|
| **Total Float** | Time activity can slip without delaying project |
| **Free Float** | Time activity can slip without delaying any successor |
| **Project Float** | Difference between deadline and calculated end date |
{:class="table table-single table-narrow"}

**Free Float = ES of successor - EF of current activity**

In our example, Activity C has:
- Total Float = 2 days
- Free Float = 7 - 5 = 2 days (same, because D is its only successor)

---

## Schedule Compression

When the critical path is longer than required, use compression techniques:

### Crashing

Adding resources to reduce duration of critical path activities.

| Aspect | Description |
|--------|-------------|
| **Method** | Add people, equipment, overtime |
| **Focus** | Critical path activities only |
| **Cost** | Usually increases cost |
| **Best for** | Activities where more resources help |
| **Limitation** | Law of diminishing returns |
{:class="table table-single table-narrow"}

**Crashing Steps:**
1. Identify critical path activities
2. Determine crash cost per time unit saved
3. Crash lowest-cost activity first
4. Recalculate critical path (may change)
5. Repeat until deadline met or no more options

### Fast-Tracking

Performing activities in parallel that were planned sequentially.

| Aspect | Description |
|--------|-------------|
| **Method** | Overlap activities |
| **Focus** | Activities with flexible dependencies |
| **Cost** | May not increase direct cost |
| **Best for** | Tasks that can overlap safely |
| **Risk** | Increases rework risk |
{:class="table table-single table-narrow"}

<div class="mermaid">
flowchart LR
    subgraph "Original (Sequential)"
        A1[Design] --> B1[Build] --> C1[Test]
    end
</div>

<div class="mermaid">
flowchart LR
    subgraph "Fast-Tracked (Overlapped)"
        A2[Design] --> B2[Build]
        A2 -.-> C2[Test]
        B2 --> C2
    end
</div>

### Comparison

| Technique | Cost Impact | Risk Impact | Best When |
|-----------|-------------|-------------|-----------|
| **Crashing** | Higher | Lower | Budget available, resources help |
| **Fast-tracking** | Lower | Higher | Tasks can safely overlap |
{:class="table table-single table-narrow"}

---

## CPM Process Summary

<div class="mermaid">
flowchart TD
    A[Define Activities] --> B[Sequence Activities]
    B --> C[Estimate Durations]
    C --> D[Draw Network Diagram]
    D --> E[Forward Pass]
    E --> F[Backward Pass]
    F --> G[Calculate Float]
    G --> H[Identify Critical Path]
    H --> I{Duration OK?}
    I -->|Yes| J[Baseline Schedule]
    I -->|No| K[Compress Schedule]
    K --> D

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H,I,J,K blue
</div>

---

## Common CPM Mistakes

### 1. Ignoring Resource Constraints
**Problem**: CPM assumes unlimited resources
**Solution**: Apply resource levelling after CPM analysis

### 2. Single Critical Path Focus
**Problem**: Near-critical paths ignored
**Solution**: Monitor paths with low float (< 5 days)

### 3. Static Analysis
**Problem**: Critical path treated as fixed
**Solution**: Recalculate as actuals are recorded

### 4. Forgetting External Dependencies
**Problem**: Third-party deliverables not included
**Solution**: Include all dependencies, even external ones

---

## CPM Checklist

- [ ] All activities identified and sequenced?
- [ ] Durations estimated realistically?
- [ ] Dependencies correctly defined?
- [ ] Forward pass calculated?
- [ ] Backward pass calculated?
- [ ] Float calculated for all activities?
- [ ] Critical path identified?
- [ ] Near-critical paths noted?
- [ ] Schedule compression options evaluated?
- [ ] Resource constraints considered?

---

## Worked Example: Website Project

### Activity List

| ID | Activity | Duration | Predecessors |
|----|----------|----------|--------------|
| A | Requirements | 5 | - |
| B | Design | 8 | A |
| C | Database Setup | 3 | A |
| D | Front-end Dev | 10 | B |
| E | Back-end Dev | 12 | B, C |
| F | Integration | 4 | D, E |
| G | Testing | 6 | F |
| H | Deployment | 2 | G |
{:class="table table-single table-narrow"}

### Network Diagram

<div class="mermaid">
flowchart LR
    A[A: Req<br/>5d] --> B[B: Design<br/>8d]
    A --> C[C: DB<br/>3d]
    B --> D[D: Front<br/>10d]
    B --> E[E: Back<br/>12d]
    C --> E
    D --> F[F: Integrate<br/>4d]
    E --> F
    F --> G[G: Test<br/>6d]
    G --> H[H: Deploy<br/>2d]

    style A fill:#ffcdd2,stroke:#c62828,stroke-width:2px
    style B fill:#ffcdd2,stroke:#c62828,stroke-width:2px
    style C fill:#e8f5e9
    style D fill:#e8f5e9
    style E fill:#ffcdd2,stroke:#c62828,stroke-width:2px
    style F fill:#ffcdd2,stroke:#c62828,stroke-width:2px
    style G fill:#ffcdd2,stroke:#c62828,stroke-width:2px
    style H fill:#ffcdd2,stroke:#c62828,stroke-width:2px
</div>

### Analysis Results

| Activity | ES | EF | LS | LF | Float | Critical |
|----------|----|----|----|----|-------|----------|
| A | 0 | 5 | 0 | 5 | 0 | Yes |
| B | 5 | 13 | 5 | 13 | 0 | Yes |
| C | 5 | 8 | 10 | 13 | 5 | No |
| D | 13 | 23 | 15 | 25 | 2 | No |
| E | 13 | 25 | 13 | 25 | 0 | Yes |
| F | 25 | 29 | 25 | 29 | 0 | Yes |
| G | 29 | 35 | 29 | 35 | 0 | Yes |
| H | 35 | 37 | 35 | 37 | 0 | Yes |
{:class="table table-single table-narrow"}

**Critical Path**: A → B → E → F → G → H
**Project Duration**: 37 days

---

## Related Resources

- [Work Breakdown Structure](/planning/wbs) - Defining activities for CPM
- [Estimation Techniques](/planning/estimation) - Estimating activity durations
- [Gantt Charts](/planning/gantt-charts) - Visualising the schedule
- [Risk Management](/risk-management) - Managing schedule risks

