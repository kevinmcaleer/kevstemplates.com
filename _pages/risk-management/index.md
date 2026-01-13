---
layout: page
name: Risk Management
section: Risk Management
description: Comprehensive guide to project risk management including assessment matrices, probability/impact scoring, response strategies, and best practices.
tags: [risk, risk management, risk assessment, risk register, RAID, mitigation]
last_updated: 2026-01-13
---

{% include risk_nav.html %}

# Risk Management

Effective risk management is essential for project success. This section provides comprehensive guidance on identifying, assessing, and responding to project risks.

---

## What is Risk Management?

Risk management is the systematic process of identifying, analysing, and responding to project risks. It involves maximising the probability and impact of positive events (opportunities) and minimising the probability and impact of negative events (threats).

<div class="mermaid">
flowchart LR
    ID[Identify] --> AS[Assess]
    AS --> PL[Plan Response]
    PL --> IM[Implement]
    IM --> MO[Monitor]
    MO --> ID

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class ID,AS,PL,IM,MO blue
</div>

---

## Risk Management Topics

<div class="row">
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-danger text-white">
        <h5 class="mb-0"><i class="fas fa-th mr-2"></i>Risk Assessment Matrix</h5>
      </div>
      <div class="card-body">
        <p>Learn how to use a risk matrix to visualise and prioritise risks based on their probability and impact.</p>
        <ul>
          <li>5x5 and 3x3 matrix formats</li>
          <li>Colour-coded risk zones</li>
          <li>Risk prioritisation techniques</li>
        </ul>
        <a href="/risk-management/risk-matrix" class="btn btn-outline-danger">View Guide</a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-warning text-dark">
        <h5 class="mb-0"><i class="fas fa-calculator mr-2"></i>Probability & Impact Scoring</h5>
      </div>
      <div class="card-body">
        <p>Understand how to score risks using probability and impact scales for consistent assessment.</p>
        <ul>
          <li>Probability scales and definitions</li>
          <li>Impact categories (cost, time, scope, quality)</li>
          <li>Risk score calculation</li>
        </ul>
        <a href="/risk-management/probability-impact" class="btn btn-outline-warning">View Guide</a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-success text-white">
        <h5 class="mb-0"><i class="fas fa-shield-alt mr-2"></i>Risk Response Strategies</h5>
      </div>
      <div class="card-body">
        <p>Explore the different strategies for responding to threats and opportunities.</p>
        <ul>
          <li>Threat responses: Avoid, Mitigate, Transfer, Accept</li>
          <li>Opportunity responses: Exploit, Enhance, Share, Accept</li>
          <li>Contingency planning</li>
        </ul>
        <a href="/risk-management/risk-responses" class="btn btn-outline-success">View Guide</a>
      </div>
    </div>
  </div>

  <div class="col-md-6 mb-4">
    <div class="card h-100">
      <div class="card-header bg-info text-white">
        <h5 class="mb-0"><i class="fas fa-clipboard-list mr-2"></i>Risk Register Best Practices</h5>
      </div>
      <div class="card-body">
        <p>Best practices for creating and maintaining an effective risk register.</p>
        <ul>
          <li>Risk register structure and fields</li>
          <li>RAID log integration</li>
          <li>Review and update cadence</li>
        </ul>
        <a href="/risk-management/best-practices" class="btn btn-outline-info">View Guide</a>
      </div>
    </div>
  </div>
</div>

---

## The Risk Management Process

| Phase | Activities | Outputs |
|-------|-----------|---------|
| **Identify** | Brainstorming, checklists, interviews, SWOT | Risk list |
| **Assess** | Probability/impact scoring, risk matrix | Prioritised risks |
| **Plan** | Select response strategy, assign owners | Risk response plan |
| **Implement** | Execute responses, allocate contingency | Updated risk status |
| **Monitor** | Track triggers, review effectiveness | Risk reports |
{:class="table table-single table-narrow"}

---

## Key Risk Management Principles

### 1. Proactive, Not Reactive
Identify and address risks before they become issues. A risk that has occurred is no longer a risk—it's an issue.

### 2. Proportionate Response
The effort spent managing a risk should be proportionate to its potential impact. Don't over-engineer responses for minor risks.

### 3. Clear Ownership
Every risk must have a single owner responsible for monitoring and implementing the response.

### 4. Regular Review
Risk registers are living documents. Review and update regularly as the project progresses.

### 5. Transparent Communication
Ensure stakeholders are aware of significant risks and the plans to address them.

---

## Risk vs Issue

| Risk | Issue |
|------|-------|
| Uncertain event that **may** occur | Event that **has** occurred |
| Future-focused | Present-focused |
| Managed through mitigation plans | Managed through resolution actions |
| Recorded in Risk Register | Recorded in Issue Log |
| Has probability < 100% | Has probability = 100% |
{:class="table table-single table-narrow"}

---

## Related Resources

- [Risk Register / RAID Log](/projects/risk_register) - Download template
- [Project Healthcheck](/projects/project_healthcheck) - Risk review checklist
- [PRINCE2 Risk Theme](/methodologies/prince2#risk-theme) - PRINCE2 approach to risk
- [Portfolio Risk Management](/portfolio/portfolio_risk_mgmt) - Enterprise-level risk
- [Getting Started](/getting-started/) - New to project management?
- [PM Glossary](/glossary/) - Key PM terminology

