---
layout: portfolio
section: Portfolio
name: Portfolio Reporting
topic: Reporting
color: fire-red-500
description: Reporting frameworks, dashboards, and management information for portfolio-level visibility and decision-making.
tags: [Portfolio, Reporting, Dashboard, KPIs, Management Information]
themes: [Governance, Reporting]
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

## Portfolio Reporting

Portfolio reporting provides the management information needed to make informed decisions about the organisation's investments. Good portfolio reporting aggregates project and programme data into a strategic view that enables the Portfolio Board and executive team to steer the portfolio effectively.

<div class="alert alert-info">
<i class="fas fa-info-circle mr-2"></i>
<strong>Principle:</strong> Portfolio reports should answer three questions: Are we doing the right things? Are we doing them well? Are we getting the value we expected?
</div>

---

## Reporting Framework

### Report Hierarchy

<div class="mermaid">
flowchart LR
    A[Project<br/>Reports] --> B[Programme<br/>Reports]
    B --> C[Portfolio<br/>Dashboard]
    C --> D[Executive<br/>Summary]
    D --> E[Board<br/>Report]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

### Report Types

| Report | Audience | Frequency | Purpose |
|--------|----------|-----------|---------|
| **Portfolio dashboard** | All stakeholders | Real-time/Weekly | At-a-glance portfolio health |
| **Executive summary** | Board / Executives | Monthly | Strategic overview and decisions |
| **Detailed portfolio report** | Portfolio Board | Monthly | Comprehensive performance analysis |
| **Financial report** | Finance / Sponsors | Monthly | Budget, spend, and forecast |
| **Resource report** | PMO / Resource Managers | Weekly | Capacity and utilisation |
| **Benefits report** | Sponsors / Finance | Quarterly | Benefits realisation tracking |
| **Risk report** | Portfolio Board | Monthly | Aggregated risk exposure |
| **Pipeline report** | PMO / Portfolio Board | Monthly | Incoming demand and pipeline health |
{:class="table table-single table-narrow"}

---

## Portfolio Dashboard

The portfolio dashboard is the primary reporting tool. It provides a single view of portfolio health across key dimensions.

### Dashboard Dimensions

| Dimension | What It Shows | RAG Criteria |
|-----------|---------------|--------------|
| **Strategic alignment** | Portfolio coverage of strategic objectives | Green: All themes covered. Amber: Gaps in coverage. Red: Major misalignment |
| **Delivery performance** | Aggregate schedule and milestone status | Green: >80% on track. Amber: 60–80%. Red: <60% |
| **Financial health** | Spend vs budget across portfolio | Green: Within 5%. Amber: 5–10% variance. Red: >10% variance |
| **Resource utilisation** | Capacity vs demand | Green: 75–85%. Amber: 60–75% or 85–95%. Red: <60% or >95% |
| **Risk exposure** | Portfolio-level risk profile | Green: Within appetite. Amber: Approaching limits. Red: Exceeding appetite |
| **Benefits tracking** | Forecast vs realised benefits | Green: >90% on track. Amber: 75–90%. Red: <75% |
{:class="table table-single table-narrow"}

### Example Dashboard Summary

| Dimension | Status | Trend | Commentary |
|-----------|--------|-------|------------|
| Strategic alignment | Green | → | All strategic themes have active investments |
| Delivery performance | Amber | ↓ | 3 programmes reporting schedule pressure |
| Financial health | Green | → | Portfolio spend within 3% of forecast |
| Resource utilisation | Amber | ↑ | BA capacity constraint being addressed |
| Risk exposure | Green | → | No risks above appetite threshold |
| Benefits tracking | Green | ↑ | Q3 benefits on track, Q4 forecast positive |
{:class="table table-single table-narrow"}

---

## Executive Summary Report

The executive summary distils the portfolio dashboard into a concise briefing for senior leaders.

### Structure

| Section | Content | Length |
|---------|---------|--------|
| **Overall status** | Single RAG with one-line headline | 1 line |
| **Key achievements** | Major milestones completed this period | 3–5 bullets |
| **Issues and escalations** | Items requiring executive attention or decision | 2–3 bullets |
| **Financial summary** | Total spend, forecast, variance | Summary table |
| **Benefits update** | Realisation progress against plan | Summary table |
| **Decisions required** | Items for approval or direction | Numbered list |
| **Forward look** | Key activities and milestones next period | 3–5 bullets |
{:class="table table-single table-narrow"}

### Writing Effective Executive Summaries

- Lead with the most important information
- Use RAG ratings consistently — define what each colour means
- Quantify wherever possible (£, %, dates)
- Clearly separate information items from decision items
- Keep to one page — detail goes in appendices
- Include trend indicators (improving/stable/declining)

---

## Financial Reporting

### Portfolio Financial Summary

| Category | Budget | Actual | Forecast | Variance |
|----------|--------|--------|----------|----------|
| **Run** | £5.0m | £2.1m | £4.8m | -£0.2m |
| **Grow** | £3.5m | £1.4m | £3.6m | +£0.1m |
| **Transform** | £2.0m | £0.8m | £2.1m | +£0.1m |
| **Total** | **£10.5m** | **£4.3m** | **£10.5m** | **£0.0m** |
{:class="table table-single table-narrow"}

### Financial Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| **Budget variance** | (Actual - Budget) / Budget | Within ±5% |
| **Forecast accuracy** | Previous forecast vs actual | Within ±10% |
| **Cost per £ benefit** | Total cost / Total benefits | <£0.50 per £1 |
| **Capitalisation ratio** | Capital spend / Total spend | Per accounting policy |
| **Contingency drawdown** | Contingency used / Contingency allocated | <50% at midpoint |
{:class="table table-single table-narrow"}

---

## Benefits Reporting

### Benefits Realisation Tracker

| Programme | Planned Benefits | Realised to Date | Forecast | Confidence |
|-----------|-----------------|-------------------|----------|------------|
| Programme A | £2.5m p.a. | £1.2m | £2.3m | High |
| Programme B | £1.8m p.a. | £0.4m | £1.6m | Medium |
| Programme C | £3.0m p.a. | £0.0m | £2.8m | Medium |
| **Total** | **£7.3m** | **£1.6m** | **£6.7m** | |
{:class="table table-single table-narrow"}

### Benefits Reporting Principles

| Principle | Description |
|-----------|-------------|
| **Measurable** | Every benefit must have a defined measure and baseline |
| **Owned** | Each benefit has a named business owner |
| **Tracked** | Regular measurement against baseline |
| **Validated** | Finance confirms financial benefits are realised |
| **Timebound** | Clear realisation timeline with milestones |
{:class="table table-single table-narrow"}

---

## Risk Reporting

### Portfolio Risk Heat Map

| Impact | Very High | — | — | — | Critical |
|--------|-----------|---|---|---|----------|
| | High | — | — | Significant | — |
| | Medium | — | Moderate | — | — |
| | Low | Low | — | — | — |
| | | Rare | Unlikely | Possible | Likely |
| | | **Probability** | | | |
{:class="table table-single table-narrow"}

### Top Portfolio Risks

| # | Risk | Owner | Impact | Prob. | Score | Trend | Mitigation |
|---|------|-------|--------|-------|-------|-------|------------|
| 1 | Resource capacity shortfall | PMO Lead | High | Likely | 20 | ↑ | Contractor procurement in progress |
| 2 | Regulatory deadline at risk | Programme A PM | V.High | Possible | 20 | → | Scope reduction options under review |
| 3 | Technology dependency | CTO | High | Possible | 15 | ↓ | Vendor engaged, fix in testing |
{:class="table table-single table-narrow"}

---

## Resource Reporting

### Capacity vs Demand View

| Role | Available FTE | Committed FTE | Pipeline FTE | Surplus/(Deficit) |
|------|--------------|---------------|-------------|-------------------|
| Project Managers | 12 | 10 | 3 | (1) |
| Business Analysts | 15 | 14 | 4 | (3) |
| Developers | 25 | 20 | 8 | (3) |
| Architects | 5 | 5 | 2 | (2) |
| Test Analysts | 10 | 8 | 3 | (1) |
{:class="table table-single table-narrow"}

See [Portfolio Resource Management](/portfolio/portfolio_resource_mgmt) for detailed resource management processes.

---

## Pipeline Reporting

### Demand Pipeline Summary

| Stage | Count | Total Value | Avg. Age (days) |
|-------|-------|-------------|----------------|
| **New requests** | 8 | £4.2m | 12 |
| **Under evaluation** | 5 | £3.1m | 28 |
| **Business case** | 3 | £2.0m | 45 |
| **Awaiting approval** | 2 | £1.5m | 15 |
| **Approved, not started** | 4 | £2.8m | 22 |
{:class="table table-single table-narrow"}

### Pipeline Health Indicators

| Indicator | Measure | Target | Actual |
|-----------|---------|--------|--------|
| **Pipeline ratio** | Pipeline value / Annual capacity | 1.5–2.0x | 1.7x |
| **Conversion rate** | Proposals approved / Proposals submitted | >50% | 55% |
| **Time to decision** | Average days from submission to decision | <60 days | 48 days |
| **Rejection rate** | Proposals rejected / Proposals submitted | <30% | 22% |
{:class="table table-single table-narrow"}

---

## Reporting Cadence

### Annual Reporting Calendar

| Month | Key Reports | Key Reviews |
|-------|-------------|-------------|
| **January** | Year-end benefits report, Annual portfolio review | Strategic alignment review |
| **April** | Q1 benefits report, Pipeline review | Quarterly portfolio review |
| **July** | Q2 benefits report, Mid-year financial review | Quarterly portfolio review |
| **October** | Q3 benefits report, Budget planning input | Quarterly portfolio review, Annual planning |
| **Monthly** | Dashboard, Executive summary, Financial report | Portfolio board |
| **Weekly** | Resource report, Delivery highlights | PMO team review |
{:class="table table-single table-narrow"}

---

## Data Quality

Good reporting depends on good data. The PMO should establish and enforce data quality standards.

### Data Quality Framework

| Dimension | Standard | How to Enforce |
|-----------|----------|----------------|
| **Timeliness** | Reports updated by close of business Friday | Automated reminders, escalation for late returns |
| **Completeness** | All mandatory fields populated | Validation rules in PPM tool |
| **Accuracy** | Financial data reconciled to finance systems | Monthly reconciliation process |
| **Consistency** | Standard definitions and RAG criteria | Portfolio reporting guidelines |
| **Ownership** | Named individual responsible for each data set | RACI for reporting |
{:class="table table-single table-narrow"}

---

## Building Effective Reports

### Design Principles

| Principle | Application |
|-----------|-------------|
| **Audience-first** | Tailor content and detail to the reader |
| **Insight over data** | Interpret the numbers — what does this mean? |
| **Exception-based** | Highlight what needs attention, not everything |
| **Actionable** | Every escalation should have a recommended action |
| **Visual** | Use charts, RAG ratings, and trend indicators |
| **Consistent** | Same format each period for easy comparison |
{:class="table table-single table-narrow"}

### Common Reporting Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| **Data dump** | Readers overwhelmed, key messages lost | Lead with insight, put data in appendices |
| **Optimistic RAG** | Risks hidden until too late | Independent RAG assessment by PMO |
| **No trend data** | Can't see direction of travel | Always show trend alongside current status |
| **Missing context** | Numbers without explanation | Add brief commentary to every RAG change |
| **Inconsistent definitions** | Comparing unlike with unlike | Publish and enforce reporting standards |
{:class="table table-single table-narrow"}

---

## Portfolio Reporting Checklist

### Setup
- [ ] Report types and audiences defined?
- [ ] Reporting cadence agreed?
- [ ] RAG criteria and thresholds documented?
- [ ] Data sources and collection process established?
- [ ] Report templates created and approved?
- [ ] Data quality standards in place?

### Ongoing
- [ ] Reports produced on time each period?
- [ ] Data quality checks performed?
- [ ] Insights and commentary included (not just data)?
- [ ] Reports driving decisions and actions?
- [ ] Reporting burden proportionate to value?
- [ ] Templates and standards reviewed annually?

---

## Related Resources

- [Portfolio Management](/portfolio/portfolio_management) - Portfolio management framework
- [Portfolio Healthcheck](/portfolio/portfolio_healthcheck) - Health assessment
- [Portfolio Risk Management](/portfolio/portfolio_risk_mgmt) - Risk management
- [Portfolio Resource Management](/portfolio/portfolio_resource_mgmt) - Resource reporting
- [Project Reporting](/projects/project_reporting) - Project-level reporting
