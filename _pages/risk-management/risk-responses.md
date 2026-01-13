---
layout: page
name: Risk Response Strategies
section: Risk Management
description: Complete guide to risk response strategies for threats and opportunities. Learn when to avoid, mitigate, transfer, accept, exploit, enhance, or share risks.
tags: [risk response, mitigation, risk transfer, contingency, risk strategy, opportunities]
last_updated: 2026-01-13
---

{% include risk_nav.html %}

# Risk Response Strategies

Once risks are identified and assessed, you must decide how to respond. Different strategies are appropriate for threats (negative risks) and opportunities (positive risks).

---

## Response Strategy Overview

<div class="mermaid">
flowchart TB
    R{Risk Type?}
    R -->|Threat| T[Threat Responses]
    R -->|Opportunity| O[Opportunity Responses]

    T --> AV[Avoid]
    T --> MI[Mitigate]
    T --> TR[Transfer]
    T --> AC1[Accept]

    O --> EX[Exploit]
    O --> EN[Enhance]
    O --> SH[Share]
    O --> AC2[Accept]

    style T fill:#ffcdd2
    style O fill:#c8e6c9
</div>

---

## Threat Response Strategies

Threats are negative risks that could harm project objectives.

### 1. Avoid

**Definition**: Eliminate the threat by removing its cause or changing the project plan.

**When to use**:
- High-impact, high-probability risks
- When avoidance is practical without significant trade-offs
- Early in the project when changes are less costly

**Examples**:

| Risk | Avoidance Action |
|------|------------------|
| Untested technology may fail | Use proven technology instead |
| Supplier may not deliver on time | Use in-house resources |
| Regulatory approval may be delayed | Remove regulated features from scope |
| Key resource unavailable | Reschedule to ensure availability |
{:class="table table-single table-narrow"}

**Considerations**:
- May require scope changes
- Could increase cost or extend schedule
- Some risks cannot be avoided

---

### 2. Mitigate (Reduce)

**Definition**: Take action to reduce the probability and/or impact of the threat.

**When to use**:
- When avoidance isn't practical
- When proactive action can meaningfully reduce risk
- For medium-to-high risks where cost of mitigation is justified

**Examples**:

| Risk | Mitigation Action |
|------|-------------------|
| Key developer may leave | Cross-train team members, document code |
| Requirements may change | Implement change control, frequent reviews |
| Integration may fail | Early prototyping, continuous integration |
| Quality issues | Additional testing, code reviews |
{:class="table table-single table-narrow"}

**Mitigation Planning**:

<div class="mermaid">
flowchart LR
    A[Identify Actions] --> B[Assign Owner]
    B --> C[Set Deadline]
    C --> D[Allocate Budget]
    D --> E[Track Progress]
    E --> F[Reassess Risk]

    style A fill:#e3f2fd
    style F fill:#c8e6c9
</div>

---

### 3. Transfer

**Definition**: Shift the impact (and sometimes management) of a threat to a third party.

**When to use**:
- When another party can better manage the risk
- For financial risks (insurance)
- When contractual arrangements make sense

**Examples**:

| Risk | Transfer Mechanism |
|------|-------------------|
| Financial loss | Insurance policy |
| Technical failure | Warranty or SLA with vendor |
| Delivery risk | Fixed-price contract with supplier |
| Security breach | Managed security service provider |
{:class="table table-single table-narrow"}

**Important**: Transfer shifts impact, not necessarily the risk itself. The project may still be affected if the third party fails to manage it.

**Common Transfer Methods**:
- Insurance
- Warranties and guarantees
- Performance bonds
- Fixed-price contracts
- Indemnity clauses
- Outsourcing

---

### 4. Accept

**Definition**: Acknowledge the risk without taking proactive action to address it.

**When to use**:
- Low-impact, low-probability risks
- When cost of response exceeds potential impact
- When no viable response exists

**Types of Acceptance**:

| Type | Description | Action |
|------|-------------|--------|
| **Passive** | Do nothing, deal with it if it occurs | None |
| **Active** | Establish contingency for if it occurs | Create contingency plan and reserve |
{:class="table table-single table-narrow"}

**Contingency Planning**:
- Define trigger conditions
- Document response actions
- Allocate contingency budget/time
- Assign contingency owner

---

## Opportunity Response Strategies

Opportunities are positive risks that could benefit project objectives.

### 1. Exploit

**Definition**: Ensure the opportunity is realised by eliminating uncertainty.

**When to use**:
- High-value opportunities
- When ensuring realisation justifies the investment

**Examples**:

| Opportunity | Exploitation Action |
|-------------|---------------------|
| Early completion possible | Add resources to guarantee it |
| New technology could reduce costs | Commit to using the technology |
| Skilled resource available | Secure them for the project |
{:class="table table-single table-narrow"}

---

### 2. Enhance

**Definition**: Increase the probability and/or positive impact of the opportunity.

**When to use**:
- When you can influence the opportunity
- When enhancement cost is justified by potential benefit

**Examples**:

| Opportunity | Enhancement Action |
|-------------|---------------------|
| May finish under budget | Optimise processes to increase savings |
| New market may emerge | Invest in market research and preparation |
| Team may exceed quality targets | Provide additional training and tools |
{:class="table table-single table-narrow"}

---

### 3. Share

**Definition**: Allocate ownership of the opportunity to a third party best able to capture it.

**When to use**:
- When another party has better capability
- When partnership increases chance of realisation

**Examples**:

| Opportunity | Sharing Arrangement |
|-------------|---------------------|
| New market opportunity | Joint venture with local partner |
| Innovation potential | Partnership with research institution |
| Cost savings possible | Gain-share agreement with supplier |
{:class="table table-single table-narrow"}

---

### 4. Accept

**Definition**: Be willing to take advantage of the opportunity if it arises, but don't actively pursue it.

**When to use**:
- Low-value opportunities
- When pursuit cost exceeds expected benefit
- When it's outside project scope to pursue

---

## Choosing the Right Strategy

### Decision Framework

| Risk Score | Threat Response | Opportunity Response |
|------------|-----------------|----------------------|
| **Critical (20-25)** | Avoid or Transfer | Exploit |
| **High (15-19)** | Mitigate or Transfer | Exploit or Enhance |
| **Medium (5-14)** | Mitigate or Accept (Active) | Enhance or Share |
| **Low (1-4)** | Accept (Passive) | Accept |
{:class="table table-single table-narrow"}

### Cost-Benefit Analysis

Before implementing a response, consider:

| Factor | Question |
|--------|----------|
| Response cost | What will the response cost? |
| Risk reduction | By how much will the risk be reduced? |
| Secondary risks | Could the response create new risks? |
| Residual risk | What risk remains after the response? |
{:class="table table-single table-narrow"}

---

## Response Planning Template

For each risk requiring active management, document:

| Field | Description |
|-------|-------------|
| Risk ID | Unique identifier |
| Risk Description | What might happen |
| Response Strategy | Avoid/Mitigate/Transfer/Accept |
| Response Actions | Specific steps to take |
| Owner | Person responsible |
| Deadline | When actions must be complete |
| Cost | Budget for response |
| Trigger | How we'll know if risk is occurring |
| Contingency Plan | What to do if risk occurs despite response |
{:class="table table-single table-narrow"}

---

## Residual and Secondary Risks

### Residual Risk
The risk that remains after responses have been implemented. Some residual risk is usually accepted.

### Secondary Risk
A new risk created by implementing a risk response.

**Example**:
- **Original risk**: Key supplier may fail to deliver
- **Response**: Contract with backup supplier
- **Secondary risk**: Coordination complexity between suppliers

Always assess whether secondary risks are acceptable before implementing responses.

---

## Contingency vs Management Reserve

| Type | Purpose | Controlled By | Used For |
|------|---------|---------------|----------|
| **Contingency Reserve** | Known risks (known unknowns) | Project Manager | Identified risks that occur |
| **Management Reserve** | Unknown risks (unknown unknowns) | Sponsor/PMO | Unidentified risks |
{:class="table table-single table-narrow"}

---

## Escalation

Some risks require escalation beyond the project manager's authority:

**Escalate when**:
- Risk exceeds project manager's authority/tolerance
- Response requires executive decision
- Risk affects multiple projects or programmes
- Contractual or legal implications exist
- Stakeholder relationships at risk

**Escalation path**:
1. Project Manager
2. Project Sponsor
3. Programme Manager / PMO
4. Steering Committee / Board

---

## Related Resources

- [Risk Assessment Matrix](/risk-management/risk-matrix) - Prioritising risks
- [Probability & Impact Scoring](/risk-management/probability-impact) - Assessing risks
- [Risk Register Best Practices](/risk-management/best-practices) - Recording responses
- [PRINCE2 Risk Theme](/methodologies/prince2#risk-theme) - PRINCE2 approach

