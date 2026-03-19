---
layout: portfolio
section: Portfolio
name: Demand Management
topic: Planning
color: purple-500
description: Managing the pipeline of investment requests from intake through evaluation to portfolio entry, ensuring the organisation invests in the right things.
tags: [Portfolio, Demand, Pipeline, Intake, Prioritisation]
themes: [Governance, Planning]
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

## Demand Management

Demand management is the process of capturing, evaluating, and controlling the flow of investment requests into the portfolio. It acts as the front door for organisational change — ensuring that only proposals with sufficient strategic merit, business justification, and feasibility enter the portfolio.

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Purpose:</strong> Without effective demand management, organisations end up with too many initiatives competing for too few resources, resulting in slow delivery, poor quality, and strategic drift.
</div>

---

## Why Demand Management Matters

| Problem Without It | How Demand Management Helps |
|--------------------|-----------------------------|
| **Too many projects** | Controls the volume of work entering the portfolio |
| **No strategic alignment** | Filters out proposals that don't support strategy |
| **Resource overload** | Matches demand to available capacity |
| **Pet projects** | Applies objective evaluation criteria to all proposals |
| **No visibility** | Creates a transparent pipeline of incoming work |
| **Slow decisions** | Defines clear gates and decision timelines |
| **Duplication** | Identifies overlapping or conflicting proposals |
{:class="table table-single table-narrow"}

---

## Demand Pipeline

<div class="mermaid">
flowchart LR
    A[Idea /<br/>Request] --> B[Gate 1:<br/>Initial Screen]
    B --> C[Proposal<br/>Development]
    C --> D[Gate 2:<br/>Business Case]
    D --> E[Prioritisation<br/>& Scheduling]
    E --> F{Gate 3:<br/>Approved?}
    F -->|Yes| G[Enter<br/>Portfolio]
    F -->|Defer| H[Backlog]
    F -->|No| I[Reject]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H,I blue
</div>

---

## Gate 1: Initial Screen

The initial screen is a lightweight assessment to determine whether a proposal merits further investment of time and effort.

### Submission Requirements

| Field | Description | Required |
|-------|-------------|----------|
| **Title** | Clear, descriptive name | Yes |
| **Sponsor** | Named executive sponsor | Yes |
| **Problem statement** | What problem does this solve? | Yes |
| **Strategic alignment** | Which strategic objective(s) does this support? | Yes |
| **Indicative benefits** | Order-of-magnitude benefits estimate | Yes |
| **Indicative cost** | Order-of-magnitude cost estimate | Yes |
| **Urgency** | Is there a deadline or driver? | Yes |
| **Dependencies** | Known dependencies on other work | If applicable |
{:class="table table-single table-narrow"}

### Screening Criteria

| Criterion | Pass | Fail |
|-----------|------|------|
| **Strategic fit** | Clearly supports one or more strategic objectives | No clear strategic link |
| **Sponsor** | Named, appropriate-level sponsor committed | No sponsor or wrong level |
| **Feasibility** | Plausible at first assessment | Clearly infeasible |
| **Duplication** | Distinct from existing portfolio items | Duplicates existing work |
| **Affordability** | Within plausible funding range | Clearly unaffordable |
{:class="table table-single table-narrow"}

### Screening Outcomes

| Outcome | Action |
|---------|--------|
| **Pass** | Progress to proposal development |
| **Merge** | Combine with an existing related proposal |
| **Defer** | Good idea, not the right time — add to backlog |
| **Reject** | Does not meet screening criteria — provide feedback |
{:class="table table-single table-narrow"}

---

## Proposal Development

Proposals that pass the initial screen are developed into a more detailed submission.

### Proposal Content

| Section | Content | Detail Level |
|---------|---------|-------------|
| **Problem / Opportunity** | Detailed description of the business need | Full |
| **Strategic alignment** | Mapping to specific strategic objectives and measures | Full |
| **Options analysis** | At least 3 options including do nothing | Summary for each |
| **Recommended option** | Preferred approach with justification | Full |
| **Benefits** | Quantified benefits with measures and baselines | Detailed |
| **Costs** | Capital and revenue costs by year | Detailed |
| **Risks** | Key risks with probability, impact, and mitigations | Top 5–10 |
| **Resources** | Required skills and estimated effort | By role and phase |
| **Timeline** | High-level milestones and target dates | Key milestones |
| **Dependencies** | Internal and external dependencies | All known |
{:class="table table-single table-narrow"}

### PMO Support During Development

The PMO should support proposal development by:

- Providing templates and guidance
- Checking for overlaps with existing portfolio items
- Advising on resource availability and constraints
- Ensuring consistency of cost and benefit assumptions
- Facilitating access to subject matter experts

---

## Gate 2: Business Case Review

A formal review of the developed proposal to determine whether it has sufficient merit to proceed to prioritisation.

### Review Criteria

| Criterion | Weight | Assessment |
|-----------|--------|------------|
| **Strategic alignment** | 25% | Strength of link to strategic objectives |
| **Financial case** | 20% | ROI, NPV, payback period, cost/benefit ratio |
| **Deliverability** | 15% | Confidence in the delivery approach |
| **Risk profile** | 15% | Acceptability of residual risks |
| **Resource feasibility** | 10% | Availability of required skills and capacity |
| **Dependencies** | 10% | Manageable dependencies |
| **Urgency** | 5% | Time-sensitivity of the opportunity |
{:class="table table-single table-narrow"}

### Scoring

| Score | Meaning |
|-------|---------|
| **5** | Excellent — compelling case, high confidence |
| **4** | Good — strong case with minor gaps |
| **3** | Adequate — acceptable case, some concerns |
| **2** | Weak — significant gaps or concerns |
| **1** | Poor — fundamental issues, not ready |
{:class="table table-single table-narrow"}

### Minimum Threshold

Proposals must score at least **60%** (weighted) to progress to prioritisation. Proposals scoring below threshold should be returned for rework or rejected.

---

## Prioritisation and Scheduling

Proposals that clear Gate 2 join the prioritisation queue alongside existing portfolio items.

### Prioritisation Process

<div class="mermaid">
flowchart LR
    A[Eligible<br/>Proposals] --> B[Score Against<br/>Criteria]
    B --> C[Forced<br/>Ranking]
    C --> D[Capacity<br/>Check]
    D --> E[Schedule<br/>Sequencing]
    E --> F[Submit for<br/>Approval]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

### Sequencing Considerations

| Factor | Description |
|--------|-------------|
| **Dependencies** | Some investments must precede others |
| **Resource availability** | When key resources become available |
| **Strategic windows** | Market or regulatory deadlines |
| **Benefits timing** | Earlier starts mean earlier returns |
| **Risk reduction** | Sequencing to reduce portfolio risk |
| **Change capacity** | Organisation's ability to absorb change |
{:class="table table-single table-narrow"}

---

## Gate 3: Portfolio Approval

Formal decision to add the investment to the active portfolio, committing budget and resources.

### Approval Decision

| Decision | Criteria |
|----------|----------|
| **Approve** | Business case approved, resources available, funding allocated |
| **Approve with conditions** | Approved subject to specific conditions being met |
| **Defer** | Approved in principle but not yet — schedule for future start |
| **Return for rework** | Case not strong enough — specific improvements required |
| **Reject** | Does not meet criteria — provide feedback to sponsor |
{:class="table table-single table-narrow"}

### Approval Authority

| Investment Size | Approval Authority |
|-----------------|--------------------|
| < £50k | PMO Head / Head of Function |
| £50k – £250k | Portfolio Board |
| £250k – £1m | Portfolio Board with Executive endorsement |
| > £1m | Executive Board / Investment Committee |
{:class="table table-single table-narrow"}

---

## Managing the Backlog

Not all proposals will be approved immediately. A well-managed backlog ensures good ideas are not lost.

### Backlog Management

| Activity | Frequency |
|----------|-----------|
| **Review backlog items** | Quarterly |
| **Reassess deferred proposals** | When capacity becomes available |
| **Archive stale proposals** | After 12 months without activity |
| **Notify sponsors** | When status changes |
| **Update estimates** | Annually for long-standing items |
{:class="table table-single table-narrow"}

### Backlog Prioritisation

| Status | Meaning | Action |
|--------|---------|--------|
| **Ready** | Approved, waiting for capacity | Schedule when resources available |
| **Conditional** | Approved subject to conditions | Monitor conditions |
| **Parked** | Good idea, not strategically aligned now | Review at next strategic cycle |
| **Stale** | No sponsor activity for >12 months | Archive and notify sponsor |
{:class="table table-single table-narrow"}

---

## Demand Metrics

### Key Performance Indicators

| Metric | Definition | Target |
|--------|------------|--------|
| **Pipeline volume** | Number of active proposals in pipeline | Monitored, not targeted |
| **Pipeline value** | Total estimated value of pipeline | 1.5–2x annual capacity |
| **Time to decision** | Days from submission to final decision | < 60 days |
| **Conversion rate** | % of submissions that enter portfolio | 40–60% |
| **Rejection rate** | % of submissions rejected | < 30% |
| **Screen-to-approval** | Average time through all gates | < 90 days |
| **Rework rate** | % of proposals returned for rework | < 20% |
| **Backlog age** | Average age of backlog items | < 6 months |
{:class="table table-single table-narrow"}

---

## Roles and Responsibilities

| Role | Responsibilities |
|------|-----------------|
| **Sponsor** | Submit proposals, champion the business case, own benefits |
| **PMO** | Manage the pipeline, facilitate evaluation, maintain standards |
| **Portfolio Board** | Make approval decisions, set priorities |
| **Finance** | Validate financial assumptions, confirm funding |
| **Resource Manager** | Confirm resource availability and feasibility |
| **Business Analyst** | Support proposal development and options analysis |
{:class="table table-single table-narrow"}

---

## Common Challenges

| Challenge | Symptoms | Mitigation |
|-----------|----------|------------|
| **Bypassing the process** | Projects starting without approval | Executive enforcement, no funding without approval |
| **Too slow** | Good opportunities missed | Streamline gates, set SLAs for decisions |
| **Too bureaucratic** | Small requests caught in heavy process | Tiered process — light touch for small investments |
| **Poor quality submissions** | High rework rate, slow progress | Better templates, PMO coaching, exemplars |
| **Political prioritisation** | Loudest voice wins | Transparent scoring, published criteria |
| **No capacity signal** | Approving more than can be delivered | Mandatory capacity check before approval |
{:class="table table-single table-narrow"}

### Tiered Approach

| Tier | Investment Size | Process |
|------|----------------|---------|
| **Tier 1: Light** | < £50k | Single-page proposal, PMO approval |
| **Tier 2: Standard** | £50k – £500k | Full 3-gate process |
| **Tier 3: Enhanced** | > £500k | Full process + independent review |
{:class="table table-single table-narrow"}

---

## Demand Management Checklist

### Setup
- [ ] Demand intake process defined and communicated?
- [ ] Submission templates available?
- [ ] Gate criteria and scoring published?
- [ ] Approval authorities documented?
- [ ] Roles and responsibilities agreed?
- [ ] Pipeline tracking tool in place?

### Ongoing
- [ ] All new proposals entering through the front door?
- [ ] Gates being applied consistently?
- [ ] Decisions made within target timescales?
- [ ] Backlog reviewed quarterly?
- [ ] Demand metrics tracked and reported?
- [ ] Process reviewed annually for improvement?

---

## Related Resources

- [Portfolio Management](/portfolio/portfolio_management) - Portfolio management framework
- [Portfolio Lifecycle](/portfolio/portfolio_lifecycle) - End-to-end portfolio lifecycle
- [Portfolio Resource Management](/portfolio/portfolio_resource_mgmt) - Resource and capacity planning
- [PMO Planning Process](/portfolio/pmo_planning_process) - PMO planning and process
- [PMO Strategy](/portfolio/pmo_strategy) - PMO strategy and operating model
