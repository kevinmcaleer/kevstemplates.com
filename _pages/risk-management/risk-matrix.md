---
layout: page
name: Risk Assessment Matrix
section: Risk Management
description: Guide to using risk assessment matrices (risk heat maps) for visualising and prioritising project risks based on probability and impact.
tags: [risk matrix, heat map, risk assessment, probability, impact, prioritisation]
downloads:
 - name: Risk Assessment Matrix Template
   description: Excel template with 5x5 and 3x3 risk matrices
   file: risk_assessment_matrix.xlsx
last_updated: 2026-01-13
---

{% include risk_nav.html %}

# Risk Assessment Matrix

A **risk assessment matrix** (also called a risk heat map or probability-impact matrix) is a visual tool for evaluating and prioritising risks based on their likelihood of occurring and potential impact.

---

## The 5x5 Risk Matrix

The most common format uses a 5x5 grid with probability on one axis and impact on the other.

<div class="table-responsive">
<table class="table table-bordered text-center">
  <thead>
    <tr>
      <th rowspan="2" class="align-middle">Probability</th>
      <th colspan="5">Impact</th>
    </tr>
    <tr>
      <th style="width:15%">Very Low (1)</th>
      <th style="width:15%">Low (2)</th>
      <th style="width:15%">Medium (3)</th>
      <th style="width:15%">High (4)</th>
      <th style="width:15%">Very High (5)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Very High (5)</th>
      <td class="bg-warning">5</td>
      <td class="bg-warning">10</td>
      <td class="bg-danger text-white">15</td>
      <td class="bg-danger text-white">20</td>
      <td class="bg-danger text-white">25</td>
    </tr>
    <tr>
      <th>High (4)</th>
      <td class="bg-success text-white">4</td>
      <td class="bg-warning">8</td>
      <td class="bg-warning">12</td>
      <td class="bg-danger text-white">16</td>
      <td class="bg-danger text-white">20</td>
    </tr>
    <tr>
      <th>Medium (3)</th>
      <td class="bg-success text-white">3</td>
      <td class="bg-success text-white">6</td>
      <td class="bg-warning">9</td>
      <td class="bg-warning">12</td>
      <td class="bg-danger text-white">15</td>
    </tr>
    <tr>
      <th>Low (2)</th>
      <td class="bg-success text-white">2</td>
      <td class="bg-success text-white">4</td>
      <td class="bg-success text-white">6</td>
      <td class="bg-warning">8</td>
      <td class="bg-warning">10</td>
    </tr>
    <tr>
      <th>Very Low (1)</th>
      <td class="bg-success text-white">1</td>
      <td class="bg-success text-white">2</td>
      <td class="bg-success text-white">3</td>
      <td class="bg-success text-white">4</td>
      <td class="bg-warning">5</td>
    </tr>
  </tbody>
</table>
</div>

---

## Risk Zones

The matrix is typically divided into three zones based on the risk score:

| Zone | Score Range | Response | Typical Actions |
|------|-------------|----------|-----------------|
| **Red (High)** | 15-25 | Active management required | Immediate response plan, escalate to sponsor, allocate contingency |
| **Amber (Medium)** | 5-14 | Monitor closely | Develop mitigation plan, assign owner, regular review |
| **Green (Low)** | 1-4 | Accept or monitor | Document in register, periodic review |
{:class="table table-single table-narrow"}

---

## How to Use the Matrix

### Step 1: Identify Risks
Gather risks through brainstorming, interviews, checklists, and lessons learned.

### Step 2: Assess Probability
Rate the likelihood of each risk occurring using a defined scale:

| Rating | Probability | Description |
|--------|-------------|-------------|
| 5 | Very High | >80% - Almost certain to occur |
| 4 | High | 60-80% - More likely than not |
| 3 | Medium | 40-60% - Could go either way |
| 2 | Low | 20-40% - Unlikely but possible |
| 1 | Very Low | <20% - Rare occurrence |
{:class="table table-single table-narrow"}

### Step 3: Assess Impact
Rate the potential impact if the risk occurs:

| Rating | Impact | Cost Impact | Schedule Impact |
|--------|--------|-------------|-----------------|
| 5 | Very High | >20% budget | >20% schedule |
| 4 | High | 10-20% budget | 10-20% schedule |
| 3 | Medium | 5-10% budget | 5-10% schedule |
| 2 | Low | 1-5% budget | 1-5% schedule |
| 1 | Very Low | <1% budget | <1% schedule |
{:class="table table-single table-narrow"}

### Step 4: Calculate Risk Score
Multiply probability by impact: **Risk Score = P x I**

### Step 5: Plot on Matrix
Place each risk on the matrix and determine its zone.

### Step 6: Prioritise Response
Focus attention on high-scoring risks first.

---

## The 3x3 Risk Matrix

For simpler projects, a 3x3 matrix may be sufficient:

<div class="table-responsive">
<table class="table table-bordered text-center" style="max-width: 400px;">
  <thead>
    <tr>
      <th rowspan="2" class="align-middle">Probability</th>
      <th colspan="3">Impact</th>
    </tr>
    <tr>
      <th>Low</th>
      <th>Medium</th>
      <th>High</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>High</th>
      <td class="bg-warning">Medium</td>
      <td class="bg-danger text-white">High</td>
      <td class="bg-danger text-white">Critical</td>
    </tr>
    <tr>
      <th>Medium</th>
      <td class="bg-success text-white">Low</td>
      <td class="bg-warning">Medium</td>
      <td class="bg-danger text-white">High</td>
    </tr>
    <tr>
      <th>Low</th>
      <td class="bg-success text-white">Low</td>
      <td class="bg-success text-white">Low</td>
      <td class="bg-warning">Medium</td>
    </tr>
  </tbody>
</table>
</div>

---

## Worked Example

Consider a software project with these identified risks:

| Risk ID | Risk Description | P | I | Score | Zone |
|---------|-----------------|---|---|-------|------|
| R001 | Key developer leaves | 3 | 4 | 12 | Amber |
| R002 | Third-party API changes | 2 | 5 | 10 | Amber |
| R003 | Requirements creep | 4 | 4 | 16 | Red |
| R004 | Server hardware failure | 1 | 5 | 5 | Amber |
| R005 | Testing delays | 3 | 3 | 9 | Amber |
| R006 | Budget approval delayed | 2 | 2 | 4 | Green |
{:class="table table-single table-narrow"}

**Priority order**: R003 (16) > R001 (12) > R002 (10) > R005 (9) > R004 (5) > R006 (4)

---

## Best Practices

### Do:
- Use consistent scales across all projects
- Involve the team in assessments
- Consider multiple impact dimensions
- Review and update regularly
- Document assumptions behind ratings

### Don't:
- Let one person assess all risks alone
- Use overly complex scales
- Ignore low-probability, high-impact risks
- Forget to reassess after changes
- Treat the matrix as static

---

## Matrix Variations

### Asymmetric Matrices
Some organisations weight impact more heavily than probability, creating asymmetric zones.

### Multiple Impact Dimensions
Assess impact across several dimensions (cost, time, quality, reputation) and use the highest score.

### Proximity Consideration
Add a third dimension for how soon the risk might occur (imminent risks may need faster response regardless of score).

---

## Related Resources

- [Probability & Impact Scoring](/risk-management/probability-impact) - Detailed scoring guide
- [Risk Response Strategies](/risk-management/risk-responses) - How to respond to each zone
- [Risk Register Best Practices](/risk-management/best-practices) - Recording matrix results
- [Risk Register Template](/projects/risk_register) - Download RAID log

