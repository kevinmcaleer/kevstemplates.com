---
layout: page
name: Requirements Elicitation
section: Best Practice
description: Techniques for gathering, documenting, and validating project requirements from stakeholders
tags: [Requirements, Elicitation, Stakeholders, Best Practice]
color: stone-500
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

## Introduction

Requirements elicitation is the process of discovering, extracting, and documenting what stakeholders need from a project's deliverables. It is arguably the most important activity in the early stages of a project — getting requirements wrong is the single biggest cause of project failure and rework.

Elicitation is not simply about asking people what they want. It requires a structured approach that draws on multiple techniques, engages diverse stakeholders, and produces requirements that are clear, testable, and traceable. This guide covers the practical techniques and standards that project teams should apply.

## Elicitation Techniques

### Interviews

One-to-one or small group conversations with stakeholders to explore their needs, expectations, and constraints in depth.

| Aspect | Guidance |
|--------|---------|
| **When to use** | Complex or sensitive requirements; senior stakeholders; detailed exploration |
| **Preparation** | Research the stakeholder's role and domain; prepare a topic guide (not a rigid script) |
| **Duration** | 45–60 minutes per interview |
| **Recording** | Take notes during the session; share a summary for validation within 48 hours |
| **Tip** | Use open questions to explore, then closed questions to confirm |
{:class="table table-single table-narrow"}

**Useful opening questions:**
- "Walk me through how you do this today."
- "What are the biggest problems you face with the current process?"
- "If you could change one thing, what would it be?"

### Workshops

Facilitated group sessions that bring multiple stakeholders together to discuss, debate, and agree requirements collaboratively.

| Aspect | Guidance |
|--------|---------|
| **When to use** | Cross-functional requirements; building consensus; prioritisation |
| **Preparation** | Define objectives, create an agenda, identify and invite participants, book facilities |
| **Duration** | 2–4 hours; full-day for complex topics |
| **Facilitation** | Use a dedicated facilitator who is not a participant |
| **Recording** | Assign a scribe; use whiteboards, sticky notes, and digital tools |
{:class="table table-single table-narrow"}

**Workshop techniques:**
- Brainstorming and affinity grouping
- Process walkthroughs
- MoSCoW prioritisation exercises
- User story mapping
- Dot voting for quick prioritisation

### Observation

Watching stakeholders perform their work to understand actual processes, workarounds, and pain points that may not be articulated in interviews.

| Type | Description |
|------|------------|
| **Passive observation** | Watch without intervening; record what you see |
| **Active observation** | Ask questions while observing; seek explanations for behaviours |
| **Shadowing** | Follow a user through their full working day |
{:class="table table-single table-narrow"}

**When to use:** When you suspect that documented processes differ from actual practice, or when stakeholders struggle to articulate their needs.

### Surveys and Questionnaires

Structured instruments for gathering information from a large number of stakeholders. Useful for quantitative data and broad opinion gathering.

| Aspect | Guidance |
|--------|---------|
| **When to use** | Large stakeholder groups; validating findings from other techniques |
| **Design** | Keep it short (10–15 questions maximum); mix closed and open questions |
| **Distribution** | Use online tools (Forms, SurveyMonkey) for ease of completion and analysis |
| **Response rate** | Aim for 60%+ through active follow-up and stakeholder engagement |
{:class="table table-single table-narrow"}

### Document Analysis

Reviewing existing documentation to understand current systems, processes, policies, and constraints.

**Sources to review:**
- Existing process documentation and procedures
- System specifications and user manuals
- Previous project documentation and lessons learned
- Regulatory and compliance requirements
- Organisational strategies and business plans
- Existing reports and dashboards

### Prototyping

Creating a preliminary model of the solution to help stakeholders visualise and refine their requirements.

| Prototype Type | Description | Fidelity |
|---------------|------------|----------|
| Paper prototype | Sketches on paper or whiteboard | Very low |
| Wireframe | Digital layout showing structure without detail | Low |
| Clickable mockup | Interactive screens without backend functionality | Medium |
| Working prototype | Functional but incomplete version of the solution | High |
{:class="table table-single table-narrow"}

**When to use:** When requirements are difficult to articulate in words, when the solution involves a user interface, or when stakeholders need to "see it to believe it."

## Elicitation Process

<div class="mermaid">
flowchart LR
    A[Plan<br/>Elicitation] --> B[Conduct<br/>Sessions]
    B --> C[Document<br/>Requirements]
    C --> D[Analyse &<br/>Model]
    D --> E[Validate with<br/>Stakeholders]
    E --> F{Complete?}
    F -->|No| B
    F -->|Yes| G[Baseline<br/>Requirements]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

### Preparing for Elicitation

Effective preparation dramatically improves the quality of elicitation sessions.

| Preparation Step | Detail |
|-----------------|--------|
| Identify stakeholders | Who has knowledge, authority, or interest in these requirements? |
| Understand the domain | Research the business area, terminology, and current systems |
| Select techniques | Choose the right technique(s) for the stakeholder group and requirement type |
| Prepare materials | Create topic guides, agenda, templates, and any visual aids |
| Schedule sessions | Book time with stakeholders well in advance; send pre-reading |
| Define scope boundaries | Clarify what is in and out of scope for each session |
{:class="table table-single table-narrow"}

## Recording Requirements

### Requirement Types

| Type | Description | Examples |
|------|------------|---------|
| **Business requirements** | High-level needs of the organisation | "Reduce order processing time by 30%" |
| **Stakeholder requirements** | Needs of specific stakeholder groups | "Customer service agents need a single view of the customer" |
| **Functional requirements** | What the solution must do | "The system shall generate a monthly invoice for each customer" |
| **Non-functional requirements** | How the solution must perform | "The system shall respond to user queries within 2 seconds" |
| **Constraints** | Limitations on the solution design | "Must integrate with the existing SAP system" |
| **Transition requirements** | Needs related to moving from current to future state | "Historical data for the past 3 years must be migrated" |
{:class="table table-single table-narrow"}

### Writing Good Requirements

A well-written requirement is:

| Quality | Description | Example |
|---------|------------|---------|
| **Clear** | Unambiguous; one interpretation only | "The system shall send a confirmation email within 5 minutes of order submission" |
| **Testable** | Can be verified through testing or inspection | Not: "The system should be fast" |
| **Atomic** | Describes a single capability or constraint | Not: "The system shall generate reports and send email notifications" |
| **Traceable** | Linked to a business need and to test cases | Includes a unique ID and links to source |
| **Feasible** | Technically and economically achievable | Validated with the technical team |
| **Necessary** | Required to meet a business objective | Each requirement maps to a stated need |
{:class="table table-single table-narrow"}

### Requirement Attributes

Every requirement should be recorded with standard attributes to support management and traceability.

| Attribute | Description |
|-----------|------------|
| Requirement ID | Unique identifier (e.g. REQ-001) |
| Title | Short descriptive name |
| Description | Detailed requirement statement |
| Type | Functional, non-functional, constraint, etc. |
| Priority | MoSCoW or numeric priority |
| Source | Who or what raised this requirement |
| Owner | Person accountable for this requirement |
| Status | Draft, approved, implemented, verified |
| Acceptance criteria | How this requirement will be tested or verified |
| Related requirements | Links to dependent or related requirements |
{:class="table table-single table-narrow"}

## Validation and Sign-Off

### Validation Techniques

| Technique | Description |
|-----------|------------|
| **Structured walkthrough** | Present requirements to stakeholders section by section for review |
| **Peer review** | Another BA or subject matter expert reviews for quality and completeness |
| **Prototyping** | Use a prototype to validate that requirements reflect actual needs |
| **Test case derivation** | Write test cases from requirements; if a test cannot be defined, the requirement is unclear |
| **Traceability check** | Verify that every requirement traces to a business need and forward to a test |
{:class="table table-single table-narrow"}

### Sign-Off Process

1. Distribute the requirements document to all reviewers with a clear deadline
2. Conduct a structured walkthrough session
3. Capture and resolve all comments and queries
4. Update the requirements document to incorporate agreed changes
5. Obtain formal sign-off from the designated approver(s)
6. Baseline the approved requirements

**Important:** Sign-off does not mean requirements are frozen forever. It establishes a baseline from which changes are managed through formal change control.

## Requirements Traceability

Requirements traceability links each requirement forward to design, build, and test artefacts, and backward to business objectives. A traceability matrix is the standard tool.

| Req ID | Requirement | Business Objective | Design Ref | Test Case | Status |
|--------|------------|-------------------|-----------|-----------|--------|
| REQ-001 | System shall generate monthly invoice | Reduce billing errors by 50% | DES-003 | TC-012 | Approved |
| REQ-002 | Invoice shall include VAT breakdown | Comply with HMRC regulations | DES-004 | TC-013 | Approved |
| REQ-003 | User shall receive email confirmation | Improve customer experience | DES-007 | TC-018 | Draft |
{:class="table table-single table-narrow"}

**Benefits of traceability:**
- Ensures no requirement is missed during design, build, or test
- Supports impact analysis when changes are requested
- Provides evidence of coverage for audits and governance reviews
- Helps identify gold-plating (work that does not trace to a requirement)

## Common Pitfalls

| Pitfall | Consequence | Prevention |
|---------|-------------|------------|
| **Relying on a single technique** | Incomplete or biased requirements | Use at least two complementary techniques |
| **Not involving the right stakeholders** | Missing critical requirements | Conduct thorough stakeholder analysis first |
| **Confusing requirements with solutions** | Constraining design options unnecessarily | Focus on "what" not "how" |
| **Ambiguous language** | Different interpretations leading to rework | Use precise, testable language; avoid "should", "may", "etc." |
| **Scope creep through requirements** | Uncontrolled growth in scope | Baseline requirements and use change control |
| **Insufficient non-functional requirements** | Solution that works but performs poorly | Explicitly elicit performance, security, usability, and scalability needs |
| **Analysis paralysis** | Delay from over-analysis before delivery starts | Use iterative elaboration; detail requirements closer to delivery |
| **Not validating with end users** | Requirements reflect management assumptions, not user reality | Include end users in elicitation and validation |
{:class="table table-single table-narrow"}

## Elicitation Planning Checklist

| # | Action | Done? |
|---|--------|-------|
| 1 | Stakeholder analysis completed and stakeholders identified | ☐ |
| 2 | Elicitation techniques selected for each stakeholder group | ☐ |
| 3 | Sessions scheduled with all required participants | ☐ |
| 4 | Pre-reading and context materials distributed | ☐ |
| 5 | Requirements template and naming convention agreed | ☐ |
| 6 | Recording and documentation approach confirmed | ☐ |
| 7 | Validation and sign-off process defined | ☐ |
| 8 | Traceability matrix set up and ready for population | ☐ |
| 9 | Change control process for requirements defined | ☐ |
| 10 | Requirements management tool selected and configured | ☐ |
{:class="table table-single table-narrow"}

## Related Resources

- [Business Analysis](/best-practice/business-analysis/) — Broader BA techniques and frameworks that support elicitation
- [Planning and Estimating](/best-practice/planning-and-estimating/) — Using requirements to inform project estimates
- [Document Management](/best-practice/document-management/) — Managing requirements documents and artefacts
- [Configuration Management](/best-practice/configuration-management/) — Controlling requirements baselines through configuration management
- [Version Management](/best-practice/version-management/) — Versioning requirements documents as they evolve
