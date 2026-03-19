---
layout: page
name: Planning and Estimating
section: Best Practice
description: Estimation techniques and planning best practices for accurate project forecasting
tags: [Planning, Estimating, Forecasting, Best Practice]
color: royal-blue-100
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

## Introduction

Accurate estimation is one of the most challenging and most critical skills in project management. Poor estimates lead to unrealistic schedules, budget overruns, and stakeholder frustration. Good estimation is not about getting the "right" number — it is about producing a defensible range that reflects genuine uncertainty and supports sound decision-making.

This guide covers the core estimation techniques, how accuracy evolves through the project lifecycle, common biases that distort estimates, and practical steps for improving forecasting quality across your organisation.

## Estimation Approaches

### Analogous Estimation

Analogous (or top-down) estimation uses historical data from similar past projects as the basis for the current estimate. It is quick to produce but relies on the availability and relevance of comparable projects.

| Aspect | Detail |
|--------|--------|
| **When to use** | Early stages when limited detail is available |
| **Accuracy** | Typically ±25–50% |
| **Inputs** | Historical project data, expert judgement |
| **Strengths** | Fast, low cost, easy to communicate |
| **Weaknesses** | Relies on comparability; ignores unique factors |
{:class="table table-single table-narrow"}

### Parametric Estimation

Parametric estimation uses statistical relationships between historical data and project variables (e.g. cost per square metre, hours per function point). It is more rigorous than analogous estimation when reliable parameters exist.

### Bottom-Up Estimation

Bottom-up estimation breaks the work into the smallest manageable components, estimates each individually, and aggregates the results. It is the most accurate approach but requires a well-defined scope.

### Three-Point Estimation (PERT)

Three-point estimation accounts for uncertainty by capturing optimistic (O), most likely (M), and pessimistic (P) values.

**PERT formula:**
`Estimate = (O + 4M + P) / 6`

**Standard deviation:**
`σ = (P − O) / 6`

| Scenario | Duration (days) |
|----------|----------------|
| Optimistic (O) | 10 |
| Most Likely (M) | 15 |
| Pessimistic (P) | 26 |
| **PERT Estimate** | **15.67** |
| **Standard Deviation** | **2.67** |
{:class="table table-single table-narrow"}

## Estimation Accuracy by Project Phase

Estimation accuracy improves as the project progresses and more information becomes available. The "cone of uncertainty" narrows over time.

| Phase | Accuracy Range | Estimation Approach |
|-------|---------------|---------------------|
| Concept / Idea | −50% to +100% | Analogous, expert judgement |
| Feasibility | −30% to +50% | Analogous, parametric |
| Initiation | −20% to +30% | Parametric, early bottom-up |
| Planning | −10% to +15% | Bottom-up, three-point |
| Execution | −5% to +10% | Actuals-based re-forecasting |
{:class="table table-single table-narrow"}

<div class="mermaid">
flowchart LR
    A[Concept<br/>±100%] --> B[Feasibility<br/>±50%]
    B --> C[Initiation<br/>±30%]
    C --> D[Planning<br/>±15%]
    D --> E[Execution<br/>±10%]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

## Group Estimation Techniques

### Planning Poker

Planning poker is widely used in agile environments. Each team member independently selects a card representing their estimate. Estimates are revealed simultaneously and discussed until consensus is reached.

**Steps:**
1. Present the item to be estimated with supporting context
2. Each estimator selects a card privately
3. All cards are revealed at the same time
4. Discuss significant differences — focus on high and low outliers
5. Re-estimate until the team converges

### Delphi Technique

The Delphi technique gathers anonymous estimates from a panel of experts across multiple rounds. After each round, the facilitator shares a summary of responses and rationale. Experts revise their estimates until convergence.

| Round | Activity |
|-------|----------|
| 1 | Experts provide independent estimates and rationale |
| 2 | Facilitator shares anonymised summary; experts revise |
| 3 | Further refinement; convergence typically reached |
| Final | Facilitator calculates the consolidated estimate |
{:class="table table-single table-narrow"}

**Advantages:** Reduces groupthink and anchoring bias, draws on diverse expertise.

## Contingency and Management Reserve

### Contingency Reserve

Contingency reserve covers **known risks** — identified risks that have been assessed but may or may not materialise. It is typically included within the project baseline.

- Calculated from risk register using expected monetary value (probability × impact)
- Owned by the project manager
- Drawn down as risks are retired or realised

### Management Reserve

Management reserve covers **unknown risks** — events that cannot be foreseen. It sits outside the project baseline and requires senior management approval to access.

| Reserve Type | Covers | Owned By | In Baseline? |
|-------------|--------|----------|-------------|
| Contingency | Known risks | Project Manager | Yes |
| Management | Unknown risks | Sponsor / PMO | No |
{:class="table table-single table-narrow"}

## Common Estimation Biases

Understanding cognitive biases helps teams produce more realistic estimates.

| Bias | Description | Mitigation |
|------|------------|------------|
| **Optimism bias** | Tendency to underestimate duration, cost, and risk | Use three-point estimates; reference class forecasting |
| **Anchoring** | Over-reliance on the first number mentioned | Use blind estimation (Planning Poker, Delphi) |
| **Planning fallacy** | Ignoring past experience and focusing on best-case | Compare with historical actuals |
| **Scope creep bias** | Estimating for current scope without allowance for growth | Include contingency; define change control |
| **Student syndrome** | Delaying work until the deadline approaches | Use shorter iterations; track progress frequently |
| **Parkinson's law** | Work expands to fill the time available | Use challenging but achievable targets |
{:class="table table-single table-narrow"}

## Improving Estimation Accuracy

### Capture Actuals

Systematic recording of actual effort, duration, and cost is the single most effective way to improve future estimates. Without this data, every project starts from scratch.

### Use Reference Class Forecasting

Rather than building an estimate from the inside out, compare the project to a reference class of similar completed projects. This technique, advocated by Daniel Kahneman, counteracts optimism bias.

### Calibrate Estimators

Track individual and team estimation accuracy over time. Identify who consistently overestimates or underestimates and adjust accordingly.

### Decompose the Work

Smaller work packages are easier to estimate accurately. The work breakdown structure (WBS) is your primary tool for decomposition.

<div class="mermaid">
flowchart LR
    A[Define Scope] --> B[Build WBS]
    B --> C[Estimate Packages]
    C --> D[Add Contingency]
    D --> E[Validate with Team]
    E --> F[Baseline Estimate]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

## Estimation Checklist

Use this checklist before finalising and communicating any estimate.

| # | Check | Done? |
|---|-------|-------|
| 1 | Scope is clearly defined and agreed | ☐ |
| 2 | Assumptions are documented and communicated | ☐ |
| 3 | Exclusions are explicitly stated | ☐ |
| 4 | Historical data has been referenced where available | ☐ |
| 5 | Estimates are provided as ranges, not single points | ☐ |
| 6 | At least two estimation techniques have been used | ☐ |
| 7 | Subject matter experts have been consulted | ☐ |
| 8 | Contingency reserve has been calculated from the risk register | ☐ |
| 9 | Dependencies on third parties are identified and reflected | ☐ |
| 10 | The estimate has been reviewed and challenged by a peer | ☐ |
| 11 | Confidence level and accuracy range are stated | ☐ |
| 12 | Basis of estimate document is completed | ☐ |
{:class="table table-single table-narrow"}

## Key Principles

- **Estimate in ranges** — a single number implies false precision. Always communicate the confidence interval.
- **Separate estimation from commitment** — the estimate reflects what is likely; the commitment reflects what the organisation agrees to deliver. Conflating the two damages both.
- **Revisit estimates regularly** — as uncertainty reduces, update the estimate. An estimate from six months ago is not an estimate; it is a guess.
- **Document the basis** — every estimate should record assumptions, exclusions, data sources, and the technique used.

## Related Resources

- [Business Analysis](/best-practice/business-analysis/) — Analysis techniques that inform estimation inputs
- [Requirements Elicitation](/best-practice/requirements-elicitation/) — Gathering complete requirements to reduce estimation uncertainty
- [Document Management](/best-practice/document-management/) — Managing estimation artefacts and basis of estimate documents
