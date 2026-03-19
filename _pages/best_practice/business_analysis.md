---
layout: page
name: Business Analysis
section: Best Practice
description: Business analysis techniques and frameworks for understanding business needs and defining solutions
tags: [Business Analysis, Requirements, Solutions, Best Practice]
color: stone-400
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

## Introduction

Business analysis bridges the gap between business needs and delivered solutions. The business analyst (BA) works across stakeholder groups to understand the current state, define the desired future state, and identify the options for getting there. Effective business analysis reduces the risk of delivering the wrong thing — one of the most costly failures in project delivery.

This guide covers the core techniques, frameworks, and deliverables that BAs use on projects, along with practical guidance on working within both traditional and agile delivery models.

## The BA Role in Projects

The BA's involvement spans the full project lifecycle, with the heaviest engagement during initiation and planning.

<div class="mermaid">
flowchart LR
    A[Pre-Project<br/>Problem Definition] --> B[Initiation<br/>Feasibility & Options]
    B --> C[Planning<br/>Requirements & Design]
    C --> D[Delivery<br/>Support & Validation]
    D --> E[Closure<br/>Benefits Review]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

| Phase | BA Activities |
|-------|--------------|
| Pre-project | Problem or opportunity definition, initial stakeholder identification |
| Initiation | Feasibility assessment, current state analysis, options appraisal |
| Planning | Requirements elicitation and documentation, process design, solution modelling |
| Delivery | Requirements clarification, change impact assessment, acceptance criteria validation |
| Closure | Benefits realisation review, lessons learned, knowledge transfer |
{:class="table table-single table-narrow"}

## Analysis Techniques

### SWOT Analysis

SWOT examines internal strengths and weaknesses alongside external opportunities and threats. It is a quick way to frame the strategic context for a project or initiative.

| | **Positive** | **Negative** |
|---|---|---|
| **Internal** | Strengths | Weaknesses |
| **External** | Opportunities | Threats |
{:class="table table-single table-narrow"}

**When to use:** Early-stage analysis, strategic context setting, options appraisal.

### PESTLE Analysis

PESTLE examines the external environment across six dimensions:

| Factor | Focus |
|--------|-------|
| **P**olitical | Government policy, regulation, political stability |
| **E**conomic | Economic growth, exchange rates, inflation, funding |
| **S**ocial | Demographics, cultural trends, public attitudes |
| **T**echnological | Technology maturity, innovation, digital transformation |
| **L**egal | Legislation, compliance, contractual obligations |
| **E**nvironmental | Sustainability, climate, environmental regulations |
{:class="table table-single table-narrow"}

**When to use:** Understanding the broader environment that may affect the project or its outcomes.

### MoSCoW Prioritisation

MoSCoW categorises requirements by their importance to the project's success:

| Category | Meaning | Guidance |
|----------|---------|----------|
| **Must** | Essential — the solution is unusable without this | Non-negotiable for the current delivery |
| **Should** | Important — significant value but not critical | Include if possible; can be deferred briefly |
| **Could** | Desirable — adds value but not essential | Include only if time and resources allow |
| **Won't** | Not this time — explicitly excluded from this delivery | May be considered for future phases |
{:class="table table-single table-narrow"}

**Best practice:** Must-have requirements should not exceed 60% of the total effort to leave room for contingency.

### Gap Analysis

Gap analysis compares the current state with the desired future state to identify what needs to change.

<div class="mermaid">
flowchart LR
    A[Current State<br/>As-Is] --> B[Gap<br/>What needs to change]
    B --> C[Future State<br/>To-Be]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C blue
</div>

**Steps:**
1. Document the current state in detail (processes, systems, capabilities)
2. Define the desired future state based on business objectives
3. Identify the gaps between current and future
4. Categorise gaps by type (process, technology, people, data)
5. Determine what interventions are needed to close each gap

### Process Mapping

Process mapping visualises how work flows through an organisation. It is essential for understanding the current state and designing improved processes.

**Levels of process mapping:**

| Level | Name | Purpose |
|-------|------|---------|
| 1 | Value chain | High-level view of end-to-end processes |
| 2 | Process flow | Detailed steps within a single process |
| 3 | Procedure | Step-by-step instructions for individual tasks |
{:class="table table-single table-narrow"}

**Common notations:** BPMN (Business Process Model and Notation), swimlane diagrams, flowcharts.

## Stakeholder Analysis for BAs

Stakeholder analysis for business analysis is more granular than the project-level equivalent. The BA needs to understand not just who the stakeholders are, but what each stakeholder knows, needs, and contributes.

| Stakeholder Attribute | Why It Matters |
|----------------------|----------------|
| Domain knowledge | Determines what information they can provide |
| Decision authority | Determines whether they can approve requirements |
| Availability | Determines the elicitation approach |
| Attitude to change | Determines the level of engagement and resistance management needed |
| Communication preference | Determines how to present findings and gather feedback |
{:class="table table-single table-narrow"}

**Tip:** Map stakeholders to specific requirements areas. Not every stakeholder needs to be involved in every requirement — targeted engagement is more efficient and produces better results.

## Current State vs Future State Analysis

### Current State (As-Is)

The current state analysis documents how things work today. It should be evidence-based, not assumption-based.

**Techniques for understanding the current state:**
- Process observation and shadowing
- Interviews with process participants
- Review of existing documentation and system configurations
- Data analysis (volumes, error rates, cycle times)

### Future State (To-Be)

The future state describes how things should work after the project delivers its solution. It should be traceable to business objectives.

**Key questions:**
- What business outcomes must the future state deliver?
- What processes will change and how?
- What new capabilities will be needed?
- What existing capabilities will be retired?
- How will the transition from current to future state be managed?

## Options Appraisal

Options appraisal evaluates alternative approaches to achieving the desired outcome. A minimum of three options is standard practice.

| Option | Description | Advantages | Disadvantages | Cost | Risk |
|--------|------------|------------|---------------|------|------|
| Option 1 — Do nothing | Maintain current state | No cost, no disruption | Problem persists | £0 | Low |
| Option 2 — Do minimum | Tactical fix or workaround | Low cost, quick to implement | Does not fully address the need | £ | Medium |
| Option 3 — Recommended | Full solution addressing all requirements | Delivers full benefits | Higher cost and complexity | ££ | Medium |
| Option 4 — Do maximum | Comprehensive transformation | Maximum long-term value | High cost, longer timeline | £££ | High |
{:class="table table-single table-narrow"}

**Evaluation criteria:** cost, benefits, risk, feasibility, strategic alignment, time to deliver, organisational readiness.

## Feasibility Assessment

Feasibility assessment determines whether a proposed solution is viable across multiple dimensions.

| Dimension | Key Questions |
|-----------|--------------|
| **Technical** | Can the technology support the solution? Is it proven? |
| **Economic** | Do the benefits justify the costs? What is the payback period? |
| **Operational** | Can the organisation operate and maintain the solution? |
| **Schedule** | Can the solution be delivered within the required timeframe? |
| **Legal / Regulatory** | Are there compliance or legal constraints? |
| **Organisational** | Is there sufficient appetite, capacity, and capability for change? |
{:class="table table-single table-narrow"}

## BA Deliverables

| Deliverable | Description | Phase |
|------------|------------|-------|
| Business needs statement | Describes the problem or opportunity | Pre-project |
| Stakeholder map | Identifies and categorises stakeholders | Initiation |
| Current state analysis | Documents the as-is processes, systems, and capabilities | Initiation |
| Options paper | Evaluates alternative solutions | Initiation |
| Business requirements document | Captures high-level business requirements | Planning |
| Functional specification | Details the functional requirements for the solution | Planning |
| Non-functional requirements | Performance, security, usability, and other quality requirements | Planning |
| Process models | Visualises to-be processes | Planning |
| User stories and acceptance criteria | Requirements in agile format | Planning / Delivery |
| Traceability matrix | Links requirements to tests and deliverables | Throughout |
{:class="table table-single table-narrow"}

## Working with Agile Teams

In agile environments, the BA role adapts but does not disappear. The BA contributes to backlog refinement, ensures user stories are well-formed, and maintains the link between business objectives and delivery.

### BA Responsibilities in Agile

| Activity | BA Contribution |
|----------|----------------|
| Backlog refinement | Writing and refining user stories with acceptance criteria |
| Sprint planning | Clarifying requirements, answering team questions |
| Sprint review | Validating that delivered work meets business intent |
| Stakeholder engagement | Ongoing communication with business stakeholders |
| Impact assessment | Evaluating the effect of changes on requirements and scope |
{:class="table table-single table-narrow"}

### User Story Format

```
As a [role],
I want [capability],
So that [business benefit].
```

**Acceptance criteria** should be specific, testable, and agreed with stakeholders before development begins. Use the Given-When-Then format for clarity:

```
Given [context],
When [action],
Then [expected outcome].
```

### Tips for BAs in Agile

- Stay one to two sprints ahead of the development team in requirements refinement
- Keep detailed analysis for complex or high-risk stories; not every story needs a specification
- Collaborate closely with the product owner — the BA provides analysis rigour, the product owner provides prioritisation authority
- Use visual models (process flows, wireframes, data models) to communicate more effectively than written specifications

## Related Resources

- [Requirements Elicitation](/best-practice/requirements-elicitation/) — Detailed techniques for gathering requirements
- [Planning and Estimating](/best-practice/planning-and-estimating/) — Using analysis outputs to inform estimation
- [Document Management](/best-practice/document-management/) — Managing BA deliverables and documentation
- [Configuration Management](/best-practice/configuration-management/) — Controlling requirements as configuration items
