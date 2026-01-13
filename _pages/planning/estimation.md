---
layout: page
name: Estimation Techniques
section: Planning
description: Complete guide to project estimation techniques including Planning Poker, T-shirt sizing, three-point PERT estimation, and analogous methods.
tags: [estimation, Planning Poker, T-shirt sizing, PERT, three-point, analogous, parametric]
last_updated: 2026-01-13
---

{% include planning_nav.html %}

# Estimation Techniques

Estimation is one of the most challenging aspects of project management. This guide covers proven techniques for developing realistic estimates, from quick sizing to detailed analysis.

---

## Why Estimation is Hard

<div class="alert alert-warning">
<i class="fas fa-exclamation-triangle mr-2"></i>
<strong>The Cone of Uncertainty:</strong> Early estimates can be 4x too high or 4x too low. Accuracy improves as the project progresses and more is known.
</div>

Common estimation challenges:
- **Optimism bias** - Underestimating effort required
- **Anchoring** - Being influenced by initial numbers
- **Scope ambiguity** - Unclear requirements
- **Hidden complexity** - Unknown unknowns
- **Pressure** - Stakeholders wanting lower numbers

---

## Estimation Techniques Overview

| Technique | Speed | Accuracy | Best For |
|-----------|-------|----------|----------|
| **Expert Judgement** | Fast | Variable | Initial sizing, familiar work |
| **Analogous** | Fast | Medium | Similar past projects exist |
| **Parametric** | Medium | High | Measurable, repeatable work |
| **Three-Point (PERT)** | Medium | High | Uncertain durations |
| **Planning Poker** | Medium | High | Team-based, Agile projects |
| **T-Shirt Sizing** | Very Fast | Low | Backlog grooming, roadmaps |
| **Bottom-Up** | Slow | Very High | Detailed planning phase |
{:class="table table-single table-narrow"}

---

## Planning Poker

Planning Poker is a consensus-based estimation technique popular in Agile teams.

### How It Works

<div class="mermaid">
flowchart LR
    A[Present\nItem] --> B[Discuss\nBriefly]
    B --> C[Everyone\nVotes]
    C --> D{Consensus?}
    D -->|Yes| E[Record\nEstimate]
    D -->|No| F[Discuss\nDifferences]
    F --> C

    style A fill:#e3f2fd
    style C fill:#fff3e0
    style E fill:#c8e6c9
</div>

### The Process

1. **Present the item** - Product Owner describes the user story or task
2. **Brief discussion** - Team asks clarifying questions (2-3 minutes max)
3. **Private voting** - Each team member selects a card without showing others
4. **Reveal simultaneously** - All cards shown at once to avoid anchoring
5. **Discuss outliers** - High and low estimators explain their reasoning
6. **Re-vote if needed** - Repeat until consensus (usually 2-3 rounds max)

### Planning Poker Cards

The most common scale is modified Fibonacci:

| Card | Meaning |
|------|---------|
| 0 | Already done or trivial |
| 1 | Very small |
| 2 | Small |
| 3 | Small-medium |
| 5 | Medium |
| 8 | Medium-large |
| 13 | Large |
| 20 | Very large |
| 40 | Epic - needs breaking down |
| 100 | Way too big |
| ? | No idea - need more info |
| ☕ | Need a break! |
{:class="table table-single table-narrow"}

### Why Fibonacci?

The gaps increase as numbers grow, reflecting that:
- Larger items have more uncertainty
- Precision decreases with size
- Forces rounding up for large estimates

### Tips for Planning Poker

- **Timebox discussions** - Don't debate endlessly
- **Focus on relative size** - Not absolute hours
- **Reference stories** - Compare to known completed work
- **Include the whole team** - Diverse perspectives improve accuracy
- **Respect all estimates** - There are no wrong answers

---

## T-Shirt Sizing

T-shirt sizing is the fastest estimation technique, ideal for high-level sizing of large backlogs.

### The Scale

| Size | Relative Effort | Typical Use |
|------|-----------------|-------------|
| **XS** | Trivial | Config change, minor fix |
| **S** | Small | Simple feature, few hours |
| **M** | Medium | Standard feature, few days |
| **L** | Large | Complex feature, 1-2 weeks |
| **XL** | Very Large | Epic, needs breakdown |
| **XXL** | Huge | Initiative, multiple epics |
{:class="table table-single table-narrow"}

### When to Use

- Initial backlog prioritisation
- Roadmap planning
- Quick portfolio sizing
- Early-stage estimation before detailed planning

### Converting to Numbers

If needed, assign story point ranges:

| Size | Story Points |
|------|--------------|
| XS | 1 |
| S | 2-3 |
| M | 5-8 |
| L | 13-20 |
| XL | 40+ (split first) |
{:class="table table-single table-narrow"}

---

## Three-Point (PERT) Estimation

Three-point estimation accounts for uncertainty by considering optimistic, pessimistic, and most likely scenarios.

### The Formula

**Expected Duration (E) = (O + 4M + P) / 6**

Where:
- **O** = Optimistic estimate (best case)
- **M** = Most likely estimate (normal conditions)
- **P** = Pessimistic estimate (worst case)

### Standard Deviation

**SD = (P - O) / 6**

This measures estimate uncertainty. Higher SD = more risk.

### Worked Example

**Task**: Develop user authentication module

| Scenario | Estimate | Reasoning |
|----------|----------|-----------|
| Optimistic (O) | 3 days | Everything goes smoothly |
| Most Likely (M) | 5 days | Normal conditions |
| Pessimistic (P) | 12 days | Integration issues, rework |
{:class="table table-single table-narrow"}

**Calculation**:
- E = (3 + 4×5 + 12) / 6 = (3 + 20 + 12) / 6 = **5.8 days**
- SD = (12 - 3) / 6 = **1.5 days**

**Interpretation**: Plan for ~6 days, but could range from 4.3 to 7.3 days (±1 SD).

### When to Use Three-Point

- Unfamiliar or risky tasks
- Critical path activities
- When stakeholders need confidence ranges
- Formal project proposals

---

## Analogous Estimation

Analogous estimation uses historical data from similar past projects.

### Process

1. **Identify similar projects** - Same type, size, complexity
2. **Gather actual data** - What did they really take?
3. **Adjust for differences** - Scale up/down as needed
4. **Document assumptions** - Why this comparison is valid

### Example

| Past Project | Duration | Team Size | Our Project |
|--------------|----------|-----------|-------------|
| Mobile App v1 | 6 months | 5 | Similar scope |
| Adjustment | | | +20% (new tech) |
| **Estimate** | **7.2 months** | 5 | |
{:class="table table-single table-narrow"}

### Pros and Cons

| Pros | Cons |
|------|------|
| Quick and simple | Requires similar past data |
| Based on real data | Differences may not be obvious |
| Good for early estimates | Can perpetuate past mistakes |
{:class="table table-single table-narrow"}

---

## Parametric Estimation

Parametric estimation uses statistical relationships between variables.

### Formula

**Estimate = Unit Rate × Quantity**

### Examples

| Domain | Parameter | Unit Rate | Quantity | Estimate |
|--------|-----------|-----------|----------|----------|
| Software | Lines of code | 10 LOC/hour | 5,000 LOC | 500 hours |
| Construction | Cost per m² | £150/m² | 200 m² | £30,000 |
| Testing | Hours per test case | 2 hrs/case | 100 cases | 200 hours |
{:class="table table-single table-narrow"}

### Requirements for Parametric

- Reliable historical data
- Measurable parameters
- Linear or known relationship
- Similar conditions

---

## Bottom-Up Estimation

The most detailed and accurate approach, but also most time-consuming.

### Process

<div class="mermaid">
flowchart LR
    A[Decompose\ninto tasks] --> B[Estimate\neach task]
    B --> C[Add\ncontingency]
    C --> D[Sum\ntotals]
    D --> E[Validate\nagainst top-down]

    style A fill:#e3f2fd
    style E fill:#c8e6c9
</div>

1. **Break down work** - Use WBS to identify all tasks
2. **Estimate each task** - Get estimates from those doing the work
3. **Add dependencies** - Account for sequencing
4. **Include contingency** - Buffer for unknowns
5. **Roll up totals** - Sum to get project estimate

### When to Use

- Detailed planning phase
- Fixed-price contracts
- High-stakes projects
- When accuracy is critical

---

## Estimation Best Practices

### Do:
- **Involve the team** - Those doing the work should estimate
- **Use ranges** - Single-point estimates are often wrong
- **Track actuals** - Compare estimates to reality
- **Re-estimate** - Update as you learn more
- **Document assumptions** - What did you assume?

### Don't:
- **Pad secretly** - Be transparent about contingency
- **Estimate under pressure** - Rushed estimates are poor estimates
- **Ignore history** - Learn from past projects
- **Confuse effort with duration** - 40 hours ≠ 1 week
- **Forget dependencies** - Tasks rarely happen in isolation

---

## Estimation Checklist

Before finalising estimates, verify:

- [ ] Right people involved in estimating?
- [ ] Scope clearly understood?
- [ ] Assumptions documented?
- [ ] Risks considered?
- [ ] Dependencies identified?
- [ ] Contingency appropriate?
- [ ] Compared to similar past work?
- [ ] Estimate ranges provided?

---

## Related Resources

- [Work Breakdown Structure](/planning/wbs) - Breaking down scope for estimation
- [Critical Path Method](/planning/critical-path) - Using estimates in scheduling
- [Gantt Charts](/planning/gantt-charts) - Visualising estimated schedules
- [Risk Management](/risk-management) - Managing estimation risk
- [Agile & Scrum](/methodologies/agile-scrum) - Story points and velocity

