---
layout: project
name: Financial Forecasting
section: Project
process: delivery
description: Predicting project costs to completion and managing financial variance.
tags: [Financial, Forecasting, Cost, EAC]
themes: [Forecasting, Financial]
last_updated: 2026-01-13
---

# Financial Forecasting

Financial forecasting predicts the final cost of the project based on current performance and remaining work.

---

## Purpose

Financial forecasting enables:
- Early warning of budget issues
- Informed decision-making
- Proactive cost management
- Stakeholder confidence
- Accurate reporting to governance

---

## Key Forecast Metrics

| Metric | Description |
|--------|-------------|
| **Budget** | Approved funding |
| **Actual** | Costs incurred to date |
| **Committed** | Contracted but not yet spent |
| **Forecast** | Predicted total cost |
| **Variance** | Difference from budget |
| **EAC** | Estimate at Completion |
| **ETC** | Estimate to Complete |
{:class="table table-single table-narrow"}

---

## Forecasting Process

<div class="mermaid">
flowchart LR
    A[Gather<br/>Actuals] --> B[Review<br/>Commitments]
    B --> C[Estimate<br/>Remaining]
    C --> D[Calculate<br/>Forecast]
    D --> E[Analyse<br/>Variance]
    E --> F[Report &<br/>Action]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

---

## Calculating EAC (Estimate at Completion)

### Method 1: Bottom-up
```
EAC = Actual + Estimate to Complete
```
Re-estimate remaining work based on current understanding.

### Method 2: Based on current performance
```
EAC = Budget / Cost Performance Index (CPI)
```
Assumes future performance matches current trend.

### Method 3: Based on remaining budget
```
EAC = Actual + (Budget - Earned Value)
```
Assumes remaining work will be completed at budget rate.

---

## Earned Value Forecasting

| Metric | Formula | Meaning |
|--------|---------|---------|
| **CPI** | EV / AC | Cost efficiency |
| **SPI** | EV / PV | Schedule efficiency |
| **EAC** | BAC / CPI | Forecast total cost |
| **ETC** | EAC - AC | Remaining cost |
| **VAC** | BAC - EAC | Variance at completion |
{:class="table table-single table-narrow"}

### Interpreting CPI

| CPI | Meaning |
|-----|---------|
| > 1.0 | Under budget |
| = 1.0 | On budget |
| < 1.0 | Over budget |
{:class="table table-single table-narrow"}

---

## Forecast Accuracy

Forecast accuracy typically improves over time:

| Project Phase | Accuracy Range |
|---------------|----------------|
| Initiation | ±50% |
| Planning | ±25% |
| Early Delivery | ±15% |
| Mid Delivery | ±10% |
| Late Delivery | ±5% |
{:class="table table-single table-narrow"}

---

## Variance Analysis

When forecast differs from budget:

| Question | Purpose |
|----------|---------|
| What is the variance? | Quantify the gap |
| Why did it occur? | Identify root cause |
| Is it one-off or trend? | Assess future impact |
| Can it be recovered? | Identify corrective actions |
| What decisions are needed? | Inform governance |
{:class="table table-single table-narrow"}

---

## Managing Cost Overruns

| Option | Description |
|--------|-------------|
| **Reduce scope** | Defer or remove features |
| **Improve efficiency** | Optimise delivery approach |
| **Use contingency** | Draw on risk reserve |
| **Request more funding** | Seek budget increase |
| **Accept variance** | Proceed with known overrun |
{:class="table table-single table-narrow"}

---

## Forecast Report Content

| Section | Content |
|---------|---------|
| **Summary** | Key figures and RAG status |
| **Actuals** | What's been spent |
| **Commitments** | What's contracted |
| **Forecast** | Predicted total |
| **Variance** | Comparison to budget |
| **Trend** | Direction of travel |
| **Actions** | Corrective measures |
| **Risks** | Financial risks and mitigations |
{:class="table table-single table-narrow"}

---

## Forecasting Frequency

| Phase | Frequency |
|-------|-----------|
| Initiation | Monthly |
| Planning | Fortnightly |
| Delivery | Weekly |
| Go-live | Daily |
{:class="table table-single table-narrow"}

---

## Common Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Optimistic forecasting | Use data, not hope |
| Ignoring commitments | Track all contracted spend |
| Infrequent updates | Forecast regularly |
| Not investigating variance | Always understand the why |
| Hiding bad news | Report honestly and early |
{:class="table table-single table-narrow"}

---

## Forecasting Checklist

- [ ] Actuals collected and reconciled?
- [ ] Commitments identified?
- [ ] Remaining work estimated?
- [ ] EAC calculated?
- [ ] Variance explained?
- [ ] Trends identified?
- [ ] Actions defined?
- [ ] Report distributed?

---

## Related Resources

- [Financial Planning](/projects/financial_planning) - Budget development
- [Project Reporting](/projects/project_reporting) - Status reporting
- [Risk Management](/projects/risk_management) - Risk reserves
- [Project Board](/projects/project_board) - Financial governance

