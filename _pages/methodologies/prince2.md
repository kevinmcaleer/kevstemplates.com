---
layout: page
name: PRINCE2 Fundamentals
section: Methodologies
description: Complete guide to PRINCE2 project management methodology covering the 7 principles, 7 themes, and 7 processes for controlled project delivery.
tags: [PRINCE2, methodology, governance, principles, themes, processes]
last_updated: 2026-01-13
---

{% include methodologies_nav.html %}

# PRINCE2 Fundamentals

**PRINCE2** (Projects IN Controlled Environments) is a structured project management methodology widely used across industries worldwide. Originally developed by the UK government, it provides a flexible framework that can be tailored to any project size.

---

## The PRINCE2 Structure

PRINCE2 is built on three integrated elements:

<div class="mermaid">
flowchart TB
    subgraph principles["7 PRINCIPLES"]
        P1["Guiding obligations"]
    end
    subgraph themes["7 THEMES"]
        T1["Aspects to manage throughout"]
    end
    subgraph processes["7 PROCESSES"]
        PR1["Steps from start to finish"]
    end
    principles --- themes --- processes

    style principles fill:#e3f2fd
    style themes fill:#fff3e0
    style processes fill:#e8f5e9
</div>

---

## The 7 Principles

These are the guiding obligations that determine whether a project is genuinely using PRINCE2.

### 1. Continued Business Justification
- Every project must have a valid business reason
- Justification is documented in the **Business Case**
- Reviewed at each stage gate
- Project stops if justification no longer exists

### 2. Learn from Experience
- Lessons are sought from previous projects at the start
- Lessons are recorded throughout the project
- Lessons are passed on at project closure
- Supports continuous improvement

### 3. Defined Roles and Responsibilities
- Clear accountability at all levels
- Three primary interests: Business, User, Supplier
- Defined in the **Project Management Team** structure
- Everyone knows what they're responsible for

### 4. Manage by Stages
- Project is planned and controlled stage by stage
- Senior management control at stage boundaries
- Provides regular review points
- Limits risk exposure

### 5. Manage by Exception
- Tolerances are set for time, cost, scope, quality, risk, benefits
- Escalation only when tolerances are forecast to be exceeded
- Empowers project manager within defined limits
- Efficient use of senior management time

### 6. Focus on Products
- Focus on defining and delivering products (outputs)
- Products must meet quality criteria
- Clear product descriptions
- Quality is planned, not inspected in

### 7. Tailor to the Environment
- PRINCE2 must be tailored to the project
- Consider size, complexity, risk, environment
- Avoid "PRINCE2 in a box" approach
- Document tailoring decisions

---

## The 7 Themes

Themes are aspects of project management that must be addressed continuously throughout the project.

| Theme | Purpose | Key Question |
|-------|---------|--------------|
| **Business Case** | Establish viability | Why are we doing this? |
| **Organisation** | Define accountability | Who is involved? |
| **Quality** | Define and verify fitness | What do we need to deliver? |
| **Plans** | Define how, when, by whom | How will we achieve it? |
| **Risk** | Identify and manage uncertainty | What if...? |
| **Change** | Control changes to baseline | What's the impact? |
| **Progress** | Monitor and compare | Where are we now? |
{:class="table table-single table-narrow"}

### Business Case Theme
- Documents justification for the project
- Contains costs, benefits, risks, timescales
- Updated at each stage boundary
- Owned by the Executive

### Organisation Theme
- Defines the project management team structure
- **Project Board**: Executive, Senior User, Senior Supplier
- **Project Manager**: Day-to-day management
- **Team Manager**: Delivering work packages

### Quality Theme
- Quality planning: what, how, by whom
- **Product Descriptions** define acceptance criteria
- Quality control: inspections, reviews, testing
- Quality assurance: independent verification

### Plans Theme
- **Project Plan**: High-level, whole project
- **Stage Plan**: Detailed, current stage
- **Team Plan**: Optional, work package level
- **Exception Plan**: Replaces current plan when tolerances exceeded

### Risk Theme
- Risk identification, assessment, and response
- **Risk Register** tracks all identified risks
- Response types: Avoid, Reduce, Transfer, Accept, Share
- Continuous activity throughout project

### Change Theme
- **Issue Register** captures all issues
- Issue types: Request for Change, Off-specification, Problem/Concern
- Change Authority may be delegated
- Configuration management maintains product integrity

### Progress Theme
- Monitoring actual vs planned
- **Checkpoint Reports**: Team to PM (regular)
- **Highlight Reports**: PM to Board (periodic)
- Stage boundaries provide control points

---

## The 7 Processes

Processes provide the steps for managing a project from start to finish.

<div class="mermaid">
flowchart TD
    SU[Starting Up a Project\nSU] --> DP[Directing a Project\nDP]
    DP --> IP[Initiating a Project\nIP]
    IP --> CS[Controlling a Stage\nCS]
    CS --> MP[Managing Product Delivery\nMP]
    MP --> CS
    CS --> SB[Managing a Stage Boundary\nSB]
    SB --> DP
    SB --> CS
    SB --> CP[Closing a Project\nCP]

    style SU fill:#e1f5fe
    style DP fill:#fff3e0
    style IP fill:#e8f5e9
    style CS fill:#fce4ec
    style MP fill:#f3e5f5
    style SB fill:#fff8e1
    style CP fill:#efebe9
</div>

### Starting Up a Project (SU)
- Appoint Executive and Project Manager
- Capture previous lessons
- Design project management team
- Prepare outline Business Case
- Select project approach
- Plan initiation stage

### Directing a Project (DP)
- Project Board activities throughout
- Authorise initiation, stages, and closure
- Give ad hoc direction
- Final process: Authorise project closure

### Initiating a Project (IP)
- Create Project Initiation Documentation (PID)
- Refine Business Case
- Create Project Plan
- Set up controls
- Assemble PID for approval

### Controlling a Stage (CS)
- Day-to-day project manager activities
- Authorise work packages
- Review work package status
- Report highlights
- Capture and examine issues
- Escalate issues and risks
- Take corrective action

### Managing Product Delivery (MP)
- Team Manager activities
- Accept work packages
- Execute work packages
- Deliver work packages

### Managing a Stage Boundary (SB)
- Plan next stage
- Update Project Plan
- Update Business Case
- Report stage end
- Produce Exception Plan (if required)

### Closing a Project (CP)
- Prepare planned or premature closure
- Hand over products
- Evaluate the project
- Recommend project closure

---

## Key PRINCE2 Documents

| Document | Created | Purpose |
|----------|---------|---------|
| Project Brief | SU | Initial project definition |
| Business Case | SU → Throughout | Justification for project |
| PID | IP | Complete project definition |
| Project Plan | IP | High-level plan |
| Stage Plan | IP/SB | Detailed stage plan |
| Work Package | CS | Authorisation to do work |
| Checkpoint Report | MP | Team progress report |
| Highlight Report | CS | PM to Board progress report |
| End Stage Report | SB | Stage summary |
| End Project Report | CP | Project summary |
| Lessons Report | CP | Lessons for future |
{:class="table table-single table-narrow"}

---

## PRINCE2 Certification Path

| Level | Description | Prerequisite |
|-------|-------------|--------------|
| **Foundation** | Understand terminology and method | None |
| **Practitioner** | Apply method to scenarios | Foundation |
| **Agile Foundation** | Understand PRINCE2 Agile | None |
| **Agile Practitioner** | Apply PRINCE2 Agile | Foundation or Agile Foundation |
{:class="table table-single table-narrow"}

---

## Related Resources

- [Methodologies Overview](/methodologies) - Compare with other approaches
- [Project Lifecycle](/projects/lifecycle) - How PRINCE2 maps to lifecycle stages
- [Project Initiation Document](/projects/project_initiation_document) - PID template
- [Hybrid Approaches](/methodologies/hybrid) - PRINCE2 Agile
- [Risk Management Overview](/risk-management) - Comprehensive risk management guide
- [Risk Assessment Matrix](/risk-management/risk-matrix) - Risk scoring and prioritisation
- [Risk Response Strategies](/risk-management/risk-responses) - Avoid, Mitigate, Transfer, Accept
