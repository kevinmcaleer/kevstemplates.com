---
layout: page
name: Probability & Impact Scoring
section: Risk Management
description: Detailed guide to scoring project risks using probability and impact scales. Includes definitions, examples, and best practices for consistent risk assessment.
tags: [risk scoring, probability, impact, risk assessment, quantitative risk]
last_updated: 2026-01-13
---

{% include risk_nav.html %}

# Probability & Impact Scoring

Consistent risk scoring enables objective comparison and prioritisation of risks. This guide provides detailed scales and criteria for assessing both probability and impact.

---

## The Risk Score Formula

<div class="alert alert-info">
<strong>Risk Score = Probability x Impact</strong>
<br>
Where both Probability and Impact are rated on a scale (typically 1-5)
</div>

---

## Probability Scale

Probability (or likelihood) measures how likely a risk is to occur.

### 5-Point Probability Scale

| Score | Rating | Probability Range | Description | Indicators |
|-------|--------|-------------------|-------------|------------|
| 5 | **Very High** | >80% | Almost certain | Has happened on similar projects, known issue |
| 4 | **High** | 60-80% | Likely | Strong possibility based on experience |
| 3 | **Medium** | 40-60% | Possible | Could happen, 50/50 chance |
| 2 | **Low** | 20-40% | Unlikely | Not expected but possible |
| 1 | **Very Low** | <20% | Rare | Would be surprising if it occurred |
{:class="table table-single table-narrow"}

### Probability Assessment Questions

When assessing probability, consider:
- Has this happened before on similar projects?
- What external factors could trigger this risk?
- How much control do we have over this risk?
- What is the track record of the parties involved?
- Are there any early warning signs present?

---

## Impact Scales

Impact measures the effect on project objectives if the risk occurs. Different impact dimensions may be assessed separately.

### Cost Impact Scale

| Score | Rating | Budget Impact | Example |
|-------|--------|---------------|---------|
| 5 | **Very High** | >20% | Major budget overrun, project viability threatened |
| 4 | **High** | 10-20% | Significant additional funding required |
| 3 | **Medium** | 5-10% | Manageable with contingency |
| 2 | **Low** | 1-5% | Minor cost increase |
| 1 | **Very Low** | <1% | Negligible financial impact |
{:class="table table-single table-narrow"}

### Schedule Impact Scale

| Score | Rating | Schedule Impact | Example |
|-------|--------|-----------------|---------|
| 5 | **Very High** | >20% slip | Major deadline missed, contractual penalties |
| 4 | **High** | 10-20% slip | Significant delay, milestone missed |
| 3 | **Medium** | 5-10% slip | Noticeable delay, recovery possible |
| 2 | **Low** | 1-5% slip | Minor delay, absorbed within float |
| 1 | **Very Low** | <1% slip | Negligible schedule impact |
{:class="table table-single table-narrow"}

### Scope/Quality Impact Scale

| Score | Rating | Impact | Example |
|-------|--------|--------|---------|
| 5 | **Very High** | Deliverable unusable | Product fails to meet core requirements |
| 4 | **High** | Major functionality affected | Key features compromised |
| 3 | **Medium** | Some functionality affected | Secondary features impacted |
| 2 | **Low** | Minor reduction | Nice-to-have features descoped |
| 1 | **Very Low** | Barely noticeable | Cosmetic impact only |
{:class="table table-single table-narrow"}

### Reputation/Strategic Impact Scale

| Score | Rating | Impact | Example |
|-------|--------|--------|---------|
| 5 | **Very High** | Severe damage | National media coverage, regulatory action |
| 4 | **High** | Significant damage | Major stakeholder relationship damaged |
| 3 | **Medium** | Moderate damage | Internal escalation, some stakeholder concern |
| 2 | **Low** | Minor damage | Limited visibility, quickly resolved |
| 1 | **Very Low** | Negligible | No stakeholder awareness |
{:class="table table-single table-narrow"}

---

## Combining Impact Dimensions

When a risk could affect multiple dimensions, there are several approaches:

### Option 1: Highest Score
Use the highest impact score across all dimensions.

| Risk | Cost | Schedule | Quality | **Overall** |
|------|------|----------|---------|-------------|
| R001 | 2 | 4 | 3 | **4** |
| R002 | 5 | 2 | 1 | **5** |
{:class="table table-single table-narrow"}

### Option 2: Weighted Average
Apply weights based on project priorities.

| Dimension | Weight | R001 Score | Weighted |
|-----------|--------|------------|----------|
| Cost | 40% | 2 | 0.8 |
| Schedule | 40% | 4 | 1.6 |
| Quality | 20% | 3 | 0.6 |
| **Total** | | | **3.0** |
{:class="table table-single table-narrow"}

### Option 3: Primary Dimension
Designate one dimension as primary based on project type.

---

## Risk Score Interpretation

Using a 5x5 matrix, risk scores range from 1 to 25:

<div class="mermaid">
flowchart LR
    subgraph Low["LOW (1-4)"]
        L1[Accept or Monitor]
    end
    subgraph Med["MEDIUM (5-14)"]
        M1[Plan Response]
    end
    subgraph High["HIGH (15-25)"]
        H1[Urgent Action]
    end

    style Low fill:#c8e6c9
    style Med fill:#fff3e0
    style High fill:#ffcdd2
</div>

| Score Range | Risk Level | Management Approach |
|-------------|------------|---------------------|
| 1-4 | Low | Accept, monitor, or transfer to issue log if minimal |
| 5-9 | Medium-Low | Assign owner, develop basic response plan |
| 10-14 | Medium-High | Active management, contingency planning |
| 15-19 | High | Escalate, urgent response required |
| 20-25 | Critical | Executive attention, may require project pause |
{:class="table table-single table-narrow"}

---

## Worked Example

**Project**: Website redesign
**Risk**: Third-party payment provider goes offline during launch week

### Step 1: Assess Probability
- Provider has had outages before: +1
- Launch week is high-traffic period: +1
- No recent stability issues reported: -1
- **Assessment**: Medium probability (3)

### Step 2: Assess Impact
| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Cost | 3 | Lost sales, support costs |
| Schedule | 4 | Launch delay possible |
| Quality | 2 | Workaround available |
| Reputation | 4 | Customer complaints |
{:class="table table-single table-narrow"}

**Highest Impact**: 4 (Schedule and Reputation)

### Step 3: Calculate Score
**Risk Score = 3 x 4 = 12** (Medium-High)

### Step 4: Determine Response
Score of 12 requires active management and contingency planning.

---

## Common Pitfalls

### Anchoring Bias
Don't let the first assessment influence others. Assess each risk independently.

### Optimism Bias
Teams often underestimate probability. Challenge "it won't happen to us" thinking.

### Impact Underestimation
Consider knock-on effects. A schedule delay may also impact cost and reputation.

### Inconsistent Scales
Ensure everyone uses the same definitions. One person's "medium" shouldn't be another's "high".

### Static Assessments
Probability and impact change over time. Reassess regularly.

---

## Calibration Techniques

### Reference Class Forecasting
Compare to similar past projects. If 3 of 10 similar projects had this issue, probability is ~30%.

### Delphi Technique
Gather independent assessments from multiple experts, then discuss and converge.

### Pre-Mortem Analysis
Imagine the risk has occurred. Work backwards to assess how likely that scenario is.

---

## Quantitative vs Qualitative

| Approach | When to Use | Pros | Cons |
|----------|-------------|------|------|
| **Qualitative** (1-5 scales) | Most projects | Quick, simple, intuitive | Subjective, less precise |
| **Quantitative** (% and £) | Large/complex projects | Precise, enables EMV | Time-consuming, requires data |
{:class="table table-single table-narrow"}

### Expected Monetary Value (EMV)
For quantitative analysis: **EMV = Probability (%) x Impact (£)**

Example: 30% chance of £50,000 cost overrun = EMV of £15,000

---

## Related Resources

- [Risk Assessment Matrix](/risk-management/risk-matrix) - Visualising scores
- [Risk Response Strategies](/risk-management/risk-responses) - Responding to scored risks
- [Risk Register Best Practices](/risk-management/best-practices) - Recording assessments
- [PRINCE2 Risk Theme](/methodologies/prince2#risk-theme) - PRINCE2 approach

