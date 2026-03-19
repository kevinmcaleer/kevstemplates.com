---
layout: page
name: Configuration Management
section: Best Practice
description: Managing project configuration items to ensure integrity and traceability of deliverables
tags: [Configuration, Management, Control, Best Practice]
color: royal-blue-700
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

## Introduction

Configuration management (CM) is the discipline of identifying, controlling, tracking, and verifying the products and deliverables of a project. It ensures that the project team — and the wider organisation — always knows exactly what has been produced, what version it is, how it relates to other items, and whether it has been properly approved.

CM is not just for software or engineering projects. Any project that produces deliverables — documents, designs, code, hardware, or services — benefits from a structured approach to configuration management.

## What is Configuration Management?

Configuration management answers four fundamental questions:

1. **What do we have?** — Identification of all configuration items
2. **What is its status?** — Current version, approval state, and location
3. **What has changed?** — Full history of changes and the reasons behind them
4. **Is it correct?** — Verification that items match their approved specifications

<div class="mermaid">
flowchart LR
    A[Identification] --> B[Control]
    B --> C[Status Accounting]
    C --> D[Verification & Audit]
    D --> A
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D blue
</div>

## Configuration Items

A configuration item (CI) is any component that is subject to configuration management. CIs can be documents, software modules, hardware components, or any other deliverable that needs to be controlled.

### Types of Configuration Items

| CI Type | Examples |
|---------|---------|
| **Management products** | Project plan, business case, risk register, RAID log |
| **Technical products** | Requirements specification, design documents, test plans |
| **Software** | Source code, executables, configuration files, scripts |
| **Hardware** | Servers, network equipment, end-user devices |
| **Services** | Cloud subscriptions, licences, support agreements |
| **Baselines** | Approved sets of CIs at a defined point in time |
{:class="table table-single table-narrow"}

### CI Attributes

Each configuration item should be recorded with the following attributes:

| Attribute | Description |
|-----------|------------|
| CI identifier | Unique reference code |
| Name | Descriptive name |
| Type / category | Classification of the CI |
| Owner | Person accountable for the CI |
| Version | Current version number |
| Status | Draft, approved, superseded, archived |
| Location | Where the CI is stored |
| Relationships | Links to related CIs (parent, child, dependency) |
| Baseline | Which baseline(s) the CI belongs to |
{:class="table table-single table-narrow"}

## Configuration Management Plan

The configuration management plan (CMP) defines how CM will be implemented on the project. It should be created during the initiation phase and approved before delivery begins.

### CMP Contents

| Section | Description |
|---------|------------|
| Purpose and scope | What CM covers on this project |
| Roles and responsibilities | Who performs CM activities |
| CI identification scheme | Naming and numbering conventions |
| Configuration control process | How changes are requested, assessed, and approved |
| Status accounting procedures | How CI status is recorded and reported |
| Audit and verification approach | How and when CM audits are conducted |
| Tools and infrastructure | Systems used for CM |
| Baselines | Planned baselines and their composition |
{:class="table table-single table-narrow"}

## The Four CM Activities

### 1. Configuration Identification

Identification involves defining and documenting the characteristics of each CI, including its relationships to other CIs.

**Key tasks:**
- Define the CI identification and naming scheme
- Select which items will be placed under configuration control
- Document CI attributes in the configuration management database (CMDB) or register
- Establish the CI hierarchy and relationships

### 2. Configuration Control

Configuration control ensures that changes to CIs are managed through a formal process. No change should be made to a baselined CI without proper authorisation.

<div class="mermaid">
flowchart LR
    A[Change Request<br/>Raised] --> B[Impact<br/>Assessment]
    B --> C[Change Authority<br/>Decision]
    C -->|Approved| D[Implement<br/>Change]
    C -->|Rejected| E[Close Request]
    D --> F[Update CI &<br/>Version]
    F --> G[Update CMDB<br/>& Baseline]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G blue
</div>

**Change authority levels:**

| Change Severity | Authority |
|----------------|-----------|
| Minor (cosmetic, typographical) | Document owner |
| Moderate (content, scope within tolerance) | Project manager |
| Major (scope beyond tolerance, baseline change) | Change control board / project board |
| Strategic (programme or portfolio impact) | Programme board / portfolio board |
{:class="table table-single table-narrow"}

### 3. Configuration Status Accounting

Status accounting is the recording and reporting of information needed to manage CIs effectively. It provides visibility of the current state of all CIs and their change history.

**Status accounting outputs:**
- Current version and status of every CI
- History of all changes including who, when, and why
- Baseline composition and any deviations
- Outstanding change requests and their status

### 4. Configuration Verification and Audit

Verification and audit confirm that the actual CIs match their documented descriptions. Audits can be functional (does the CI meet its requirements?) or physical (does the CI match its documented configuration?).

| Audit Type | Focus | Timing |
|-----------|-------|--------|
| **Functional audit** | Does the CI meet its requirements and specifications? | Before baseline, at stage gates |
| **Physical audit** | Does the physical CI match the documented configuration? | Before deployment, at release |
| **CM process audit** | Are CM processes being followed correctly? | Periodic, or after incidents |
{:class="table table-single table-narrow"}

## Baselines

A baseline is a formally approved set of configuration items that serves as a reference point for future changes. Once a baseline is established, changes can only be made through the configuration control process.

### Common Baselines

| Baseline | Content | When Established |
|----------|---------|-----------------|
| **Requirements baseline** | Approved requirements specification | End of requirements phase |
| **Design baseline** | Approved design documents and architecture | End of design phase |
| **Build baseline** | Source code, build scripts, configuration | Before testing |
| **Test baseline** | Test plans, test cases, test data | Before test execution |
| **Release baseline** | Deployable package with all components | Before go-live |
| **Operational baseline** | Live configuration including infrastructure | After go-live |
{:class="table table-single table-narrow"}

### Baseline Management

- Each baseline is uniquely identified and recorded in the CMDB
- The composition of each baseline is documented (which CIs, which versions)
- Changes to baselined items trigger the change control process
- Baselines can be compared to identify drift or unauthorised changes

## Change Control Integration

Configuration management and change control are closely linked. Change control governs the decision to make a change; configuration management governs the implementation and tracking of that change.

| Activity | Change Control | Configuration Management |
|----------|---------------|------------------------|
| Request a change | ✓ | |
| Assess impact | ✓ | ✓ (identifies affected CIs) |
| Approve or reject | ✓ | |
| Implement the change | | ✓ |
| Update version and status | | ✓ |
| Verify correctness | | ✓ |
| Report status | | ✓ |
{:class="table table-single table-narrow"}

## CM for Different Project Types

### Traditional (Waterfall) Projects

- Baselines established at each stage gate
- Formal change control through a change control board
- CMDB maintained as a register or spreadsheet for smaller projects

### Agile Projects

- Baselines established at each release or iteration
- Change is managed through backlog refinement and sprint planning
- Version control systems (e.g. Git) serve as the primary CM tool for software
- Lighter-weight documentation with more emphasis on automated tracking

### Infrastructure and Operations

- CMDB is a core tool (often part of ITIL service management)
- CIs include hardware, software, licences, and network components
- Discovery tools automatically populate and verify the CMDB
- Change management processes are tightly integrated

## Roles and Responsibilities

| Role | Responsibilities |
|------|-----------------|
| **Configuration Manager** | Maintains the CMDB; administers CM processes; conducts audits |
| **Project Manager** | Ensures CM plan is in place and followed; acts as change authority for moderate changes |
| **Change Control Board** | Approves or rejects major changes to baselined CIs |
| **CI Owner** | Accountable for the accuracy and currency of their CI |
| **All team members** | Follow CM processes; raise change requests; do not make unauthorised changes |
{:class="table table-single table-narrow"}

## Getting Started Checklist

| # | Action | Done? |
|---|--------|-------|
| 1 | Appoint a configuration manager or assign CM responsibilities | ☐ |
| 2 | Define the CI identification and naming scheme | ☐ |
| 3 | Identify all configuration items and record in a register | ☐ |
| 4 | Establish the configuration management plan | ☐ |
| 5 | Define the change control process for CIs | ☐ |
| 6 | Set up the CMDB or configuration register | ☐ |
| 7 | Establish the first baseline | ☐ |
| 8 | Brief the team on CM processes and expectations | ☐ |
| 9 | Schedule periodic CM audits | ☐ |
| 10 | Integrate CM reporting into project status reports | ☐ |
{:class="table table-single table-narrow"}

## Related Resources

- [Version Management](/best-practice/version-management/) — Document-level version control practices
- [Document Management](/best-practice/document-management/) — Broader document management framework
- [Business Analysis](/best-practice/business-analysis/) — Managing requirements as configuration items
- [Requirements Elicitation](/best-practice/requirements-elicitation/) — Gathering and controlling requirements baselines
