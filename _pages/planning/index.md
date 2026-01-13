---
layout: page
name: Planning & Scheduling
section: Planning
description: Comprehensive guides to project planning and scheduling including estimation techniques, WBS, Critical Path Method, and Gantt charts.
tags: [planning, scheduling, estimation, WBS, CPM, Gantt, project plan]
last_updated: 2026-01-13
---

{% include planning_nav.html %}

# Planning & Scheduling

Effective planning is the foundation of successful project delivery. This section covers essential planning techniques from estimation through to schedule development and control.

---

## The Planning Process

<div class="mermaid">
flowchart LR
    SC[Define\nScope] --> WBS[Create\nWBS]
    WBS --> EST[Estimate\nDurations]
    EST --> SEQ[Sequence\nActivities]
    SEQ --> CPM[Identify\nCritical Path]
    CPM --> SCH[Develop\nSchedule]
    SCH --> OPT[Optimise]

    style SC fill:#e3f2fd
    style WBS fill:#fff3e0
    style EST fill:#e8f5e9
    style SEQ fill:#fce4ec
    style CPM fill:#f3e5f5
    style SCH fill:#fff8e1
    style OPT fill:#c8e6c9
</div>

---

## Planning Topics

<div class="row">
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0"><i class="fas fa-calculator mr-2"></i>Estimation Techniques</h5>
      </div>
      <div class="card-body">
        <p>Learn different approaches to estimating project work, from expert judgement to team-based techniques.</p>
        <ul>
          <li>Planning Poker and team estimation</li>
          <li>T-shirt sizing for quick estimates</li>
          <li>Three-point (PERT) estimation</li>
          <li>Analogous and parametric methods</li>
        </ul>
        <a href="/planning/estimation" class="btn btn-outline-primary">View Guide</a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-success text-white">
        <h5 class="mb-0"><i class="fas fa-sitemap mr-2"></i>Work Breakdown Structure</h5>
      </div>
      <div class="card-body">
        <p>Decompose project scope into manageable components using hierarchical work breakdown structures.</p>
        <ul>
          <li>WBS creation techniques</li>
          <li>Deliverable vs activity-based WBS</li>
          <li>Product Breakdown Structure (PBS)</li>
          <li>WBS dictionary and coding</li>
        </ul>
        <a href="/planning/wbs" class="btn btn-outline-success">View Guide</a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-warning text-dark">
        <h5 class="mb-0"><i class="fas fa-project-diagram mr-2"></i>Critical Path Method</h5>
      </div>
      <div class="card-body">
        <p>Identify the longest path through your project to determine minimum duration and schedule flexibility.</p>
        <ul>
          <li>Network diagram creation</li>
          <li>Forward and backward pass</li>
          <li>Float and slack calculation</li>
          <li>Schedule compression techniques</li>
        </ul>
        <a href="/planning/critical-path" class="btn btn-outline-warning">View Guide</a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-info text-white">
        <h5 class="mb-0"><i class="fas fa-chart-gantt mr-2"></i>Gantt Charts</h5>
      </div>
      <div class="card-body">
        <p>Visualise your project schedule using Gantt charts for effective communication and tracking.</p>
        <ul>
          <li>Creating effective Gantt charts</li>
          <li>Showing dependencies and milestones</li>
          <li>Resource assignment and levelling</li>
          <li>Progress tracking and baselines</li>
        </ul>
        <a href="/planning/gantt-charts" class="btn btn-outline-info">View Guide</a>
      </div>
    </div>
  </div>
</div>

---

## Planning Fundamentals

### Why Planning Matters

| Benefit | Description |
|---------|-------------|
| **Direction** | Provides clear roadmap for the team |
| **Coordination** | Enables resource allocation and dependency management |
| **Communication** | Stakeholders understand timeline and milestones |
| **Control** | Baseline for measuring progress and variance |
| **Risk reduction** | Identifies issues before they occur |
{:class="table table-single table-narrow"}

### Planning Levels

| Level | Horizon | Detail | Owner |
|-------|---------|--------|-------|
| **Strategic** | 1-5 years | High-level milestones | Portfolio/Programme |
| **Release** | 3-12 months | Features and deliverables | Product Owner/PM |
| **Iteration** | 2-4 weeks | Tasks and activities | Team |
| **Daily** | 1 day | Individual work items | Team members |
{:class="table table-single table-narrow"}

---

## Planning Approaches

### Predictive (Waterfall)
- Detailed upfront planning
- Full scope defined at start
- Changes through formal control
- Best for: stable requirements, fixed contracts

### Adaptive (Agile)
- Progressive elaboration
- Rolling wave planning
- Scope emerges over time
- Best for: evolving requirements, innovation

### Hybrid
- Phase-level predictive planning
- Iteration-level adaptive planning
- Best for: governance needs with flexibility

---

## Related Resources

- [Project Planning](/projects/project_planning) - Seven steps to planning
- [Risk Management](/risk-management) - Managing planning risks
- [Agile & Scrum](/methodologies/agile-scrum) - Agile planning approaches
- [PRINCE2](/methodologies/prince2) - Plans theme in PRINCE2

