---
layout: project
name: Delivery Approach
section: Project
process: initiation
themes: [Project Approach, Governance, Knowledge]
tags: [delivery, approach, waterfall, agile, hybrid, methodology]
description: Selecting and documenting the right delivery approach for your project.
last_updated: 2026-01-13
---

# Delivery Approach

The delivery approach defines **how** the project will be executed. Choosing the right approach is critical - it affects planning, team structure, stakeholder engagement, and how you respond to change.

---

## Why Document the Delivery Approach?

A documented delivery approach:
- Sets expectations with stakeholders
- Guides team behaviour and ways of working
- Informs governance and reporting
- Helps identify appropriate tools and techniques
- Enables realistic planning

---

## Delivery Approach Options

<div class="mermaid">
flowchart LR
    subgraph Predictive
        W[Waterfall]
    end
    subgraph Adaptive
        A[Agile]
        S[Scrum]
        K[Kanban]
    end
    subgraph Blended
        H[Hybrid]
    end

    Predictive --- Blended
    Blended --- Adaptive
</div>

### Predictive (Waterfall)

Sequential phases with detailed upfront planning.

| Aspect | Description |
|--------|-------------|
| **Planning** | Comprehensive at start |
| **Scope** | Fixed, changes controlled |
| **Phases** | Sequential: Requirements → Design → Build → Test → Deploy |
| **Deliverables** | At end of project |
| **Best for** | Stable requirements, regulatory environments |
{:class="table table-single table-narrow"}

### Adaptive (Agile)

Iterative delivery with evolving requirements.

| Aspect | Description |
|--------|-------------|
| **Planning** | Progressive elaboration |
| **Scope** | Flexible, prioritised backlog |
| **Iterations** | Short cycles (1-4 weeks) |
| **Deliverables** | Incremental, working product each iteration |
| **Best for** | Evolving requirements, innovation, fast feedback |
{:class="table table-single table-narrow"}

### Hybrid

Combines predictive governance with adaptive delivery.

| Aspect | Description |
|--------|-------------|
| **Planning** | Phase-level predictive, iteration-level adaptive |
| **Scope** | Fixed outcomes, flexible features |
| **Structure** | Stage gates with agile sprints |
| **Best for** | Corporate governance with delivery flexibility |
{:class="table table-single table-narrow"}

---

## Choosing Your Approach

Consider these factors when selecting a delivery approach:

### Requirements Stability

| Situation | Recommended Approach |
|-----------|---------------------|
| Requirements well understood and stable | Predictive |
| Requirements likely to evolve | Adaptive |
| Core requirements fixed, details flexible | Hybrid |
{:class="table table-single table-narrow"}

### Stakeholder Availability

| Situation | Recommended Approach |
|-----------|---------------------|
| Stakeholders available for regular engagement | Adaptive |
| Stakeholders prefer milestone reviews | Predictive |
| Mixed availability | Hybrid |
{:class="table table-single table-narrow"}

### Risk and Uncertainty

| Situation | Recommended Approach |
|-----------|---------------------|
| High technical uncertainty | Adaptive (early feedback) |
| Well-understood technology | Predictive |
| New team, known technology | Hybrid |
{:class="table table-single table-narrow"}

### Governance Requirements

| Situation | Recommended Approach |
|-----------|---------------------|
| Heavy compliance/audit requirements | Predictive or Hybrid |
| Minimal governance overhead | Adaptive |
| Stage gate approvals required | Hybrid |
{:class="table table-single table-narrow"}

---

## Decision Framework

<div class="mermaid">
flowchart LR
    A[Requirements<br/>Clear?] -->|Yes| B[Scope<br/>Fixed?]
    A -->|No| C[Agile]
    B -->|Yes| D[Waterfall]
    B -->|No| E[Hybrid]
</div>

---

## Documenting Your Approach

Your delivery approach document should include:

### 1. Approach Selection
- Which approach and why
- Key factors that influenced the decision

### 2. Lifecycle Stages
- What phases or iterations will be used
- Key milestones and decision points

### 3. Ways of Working
- Team ceremonies (standups, reviews, retrospectives)
- Communication frequency and methods
- Decision-making process

### 4. Roles and Responsibilities
- Key roles in the chosen approach
- RACI for delivery activities

### 5. Tools and Techniques
- Project management tools
- Collaboration platforms
- Documentation approach

### 6. Change Management
- How scope changes will be handled
- Change control process

---

## Approach Comparison

| Factor | Waterfall | Agile | Hybrid |
|--------|-----------|-------|--------|
| **Upfront planning** | Extensive | Minimal | Moderate |
| **Change response** | Formal process | Embraced | Controlled flexibility |
| **Customer involvement** | Milestones | Continuous | Regular checkpoints |
| **Documentation** | Comprehensive | Just enough | Balanced |
| **Risk timing** | Late discovery | Early discovery | Staged discovery |
| **Value delivery** | End of project | Each iteration | Each phase |
{:class="table table-single table-narrow"}

---

## Common Pitfalls

| Pitfall | Impact | Solution |
|---------|--------|----------|
| Choosing approach based on preference | Misaligned to project needs | Use decision framework |
| "Agile" without discipline | Chaos, no predictability | Implement proper ceremonies |
| Waterfall without change process | Scope creep or rigidity | Define change control |
| Hybrid without clear boundaries | Confusion on when rules apply | Document approach clearly |
{:class="table table-single table-narrow"}

---

## Template Outline

```markdown
# Delivery Approach

## 1. Executive Summary
Brief description of chosen approach and rationale.

## 2. Approach Selection
- Selected approach: [Waterfall/Agile/Hybrid]
- Key decision factors
- Constraints considered

## 3. Lifecycle
- Phases/iterations
- Key milestones
- Decision gates

## 4. Ways of Working
- Team ceremonies
- Communication plan
- Escalation process

## 5. Roles
- Key roles and responsibilities
- Team structure

## 6. Tools
- Project management tool
- Collaboration platform
- Documentation repository

## 7. Change Control
- Change request process
- Impact assessment
- Approval authority
```

---

## Related Resources

- [Agile & Scrum](/methodologies/agile-scrum) - Agile methodology guide
- [Waterfall vs Agile](/methodologies/waterfall-vs-agile) - Detailed comparison
- [Hybrid Approaches](/methodologies/hybrid) - Combining methodologies
- [PRINCE2](/methodologies/prince2) - Structured project method
- [Project Planning](/projects/project_planning) - Planning your project
- [Gantt Charts](/planning/gantt-charts) - Schedule visualisation

