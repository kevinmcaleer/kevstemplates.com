---
layout: page
name: Document Management
section: Best Practice
description: Best practices for managing project documentation including storage, naming conventions, and access control
tags: [Documents, Management, Information, Best Practice]
color: royal-blue-300
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

## Introduction

Effective document management underpins every aspect of project delivery. Without clear standards for creating, storing, naming, versioning, and retiring documents, teams waste time searching for information, work from outdated versions, and lose critical knowledge when people move on.

This guide sets out the principles and practical standards that project teams should adopt from day one. It complements the more detailed guidance on [Version Management](/best-practice/version-management/) and [Configuration Management](/best-practice/configuration-management/).

## Document Management Principles

| Principle | Description |
|-----------|------------|
| **Single source of truth** | Every document has one authoritative location. Copies are discouraged. |
| **Right access, right time** | Documents are accessible to those who need them, with appropriate permissions. |
| **Consistent naming** | A standard naming convention is applied across the project. |
| **Version clarity** | It is always clear which version is current and what has changed. |
| **Lifecycle awareness** | Documents are created, reviewed, approved, used, and eventually archived or destroyed. |
| **Minimal duplication** | Reduce redundancy by linking rather than copying. |
{:class="table table-single table-narrow"}

## Folder Structure

A well-designed folder structure is essential. It should reflect how people look for documents, not how the project team is organised internally.

### Recommended Top-Level Structure

```
Project Name/
├── 01 - Governance
│   ├── Project Charter
│   ├── Terms of Reference
│   └── Decision Log
├── 02 - Planning
│   ├── Project Plan
│   ├── Resource Plan
│   └── Budget
├── 03 - Requirements
│   ├── Business Requirements
│   └── Technical Requirements
├── 04 - Design
├── 05 - Delivery
│   ├── Status Reports
│   └── Meeting Minutes
├── 06 - Testing
├── 07 - Change Control
├── 08 - Risk and Issues
├── 09 - Communications
├── 10 - Closure
└── 99 - Archive
```

**Tips:**
- Use numbered prefixes to control sort order
- Keep the structure shallow — no more than three or four levels deep
- Agree the structure before the project starts and resist ad hoc changes
- Document the structure in the project management plan

## Naming Conventions

A consistent naming convention eliminates ambiguity about what a document contains, when it was created, and which version it is.

### Recommended Format

`[ProjectCode]_[DocumentType]_[Description]_v[Version].[ext]`

**Examples:**
- `PRJ001_Plan_Project-Schedule_v1.0.xlsx`
- `PRJ001_Report_Monthly-Status_2026-03_v0.2.docx`
- `PRJ001_RAID_Risk-Register_v2.1.xlsx`

### Naming Rules

| Rule | Detail |
|------|--------|
| No spaces | Use hyphens or underscores instead |
| Date format | Use ISO 8601: `YYYY-MM-DD` |
| Version format | Major.Minor (e.g. v1.0, v1.1, v2.0) |
| Keep it short | Aim for under 80 characters in the filename |
| No special characters | Avoid `& % # @ !` and similar |
| Be descriptive | The filename should make sense without opening the file |
{:class="table table-single table-narrow"}

## Version Control

Version control ensures that everyone works from the correct version and that changes are traceable. See the detailed [Version Management](/best-practice/version-management/) guide for full coverage.

**Key rules:**
- Draft documents use versions below 1.0 (e.g. v0.1, v0.2)
- Approved documents start at v1.0
- Minor changes increment the decimal (v1.1, v1.2)
- Major changes increment the whole number (v2.0, v3.0)
- Every version change is recorded in a version history table

## Document Lifecycle

Every project document passes through a defined lifecycle. Understanding this lifecycle helps teams manage documents proactively rather than reactively.

<div class="mermaid">
flowchart LR
    A[Create] --> B[Review]
    B --> C[Approve]
    C --> D[Distribute]
    D --> E[Use & Update]
    E --> F{Still Needed?}
    F -->|Yes| B
    F -->|No| G[Archive]
    G --> H[Destroy]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H blue
</div>

| Stage | Description | Responsibility |
|-------|------------|----------------|
| Create | Author drafts the document using an approved template | Author |
| Review | Relevant stakeholders review for accuracy and completeness | Reviewers |
| Approve | Document owner formally approves the document | Approver |
| Distribute | Document is made available to the intended audience | Author / PMO |
| Use & Update | Document is referenced and updated as needed | All users |
| Archive | Document is moved to long-term storage when no longer active | PMO |
| Destroy | Document is permanently deleted per retention policy | PMO / Records |
{:class="table table-single table-narrow"}

## Access Control

Not all documents should be visible to all stakeholders. Access control protects sensitive information and prevents unauthorised changes.

### Access Levels

| Level | Description | Example Users |
|-------|------------|---------------|
| **Owner** | Full control including delete | Document author, PMO |
| **Editor** | Can modify content | Core project team |
| **Reviewer** | Can comment but not edit | Subject matter experts |
| **Viewer** | Read-only access | Wider stakeholders |
| **No Access** | Cannot see the document | External parties, public |
{:class="table table-single table-narrow"}

### Sensitive Documents

The following document types typically require restricted access:

- Commercial and financial documents (budgets, contracts, invoices)
- HR-related documents (performance reviews, disciplinary records)
- Security-related documents (penetration test results, vulnerability assessments)
- Legally privileged documents
- Board papers and strategic plans before public release

## Document Review and Approval

### Review Process

1. Author completes the draft and self-reviews
2. Author circulates to designated reviewers with a clear deadline
3. Reviewers provide comments using tracked changes or a review form
4. Author consolidates feedback and resolves conflicts
5. Updated document is submitted for formal approval
6. Approver signs off (or rejects with reasons)

### Review Frequency

| Document Type | Review Frequency |
|--------------|-----------------|
| Project Plan | At each stage gate, minimum monthly |
| Risk Register | Fortnightly or at each risk review |
| Status Report | Weekly or as per reporting cycle |
| Business Case | At each stage gate |
| Lessons Learned | At stage gate and project closure |
| RACI Matrix | When roles or scope change significantly |
{:class="table table-single table-narrow"}

## Retention and Archival

### Retention Periods

Retention periods should align with organisational policy and regulatory requirements. Typical guidance:

| Document Category | Minimum Retention |
|-------------------|-------------------|
| Contracts and legal agreements | 7 years after completion |
| Financial records | 7 years |
| Project management documents | 5 years after closure |
| Correspondence and emails | 3 years after closure |
| Working drafts | Destroy after project closure |
{:class="table table-single table-narrow"}

### Archival Process

- Remove working drafts and superseded versions before archiving
- Ensure archived documents are in a format that remains readable (e.g. PDF/A)
- Record the archive location and retention period in a register
- Set calendar reminders for destruction dates

## Tools and Systems

| Tool Type | Examples | Best For |
|-----------|----------|----------|
| SharePoint / Teams | Microsoft 365 | Enterprise collaboration and permissions |
| Confluence | Atlassian | Wiki-style documentation with version history |
| Google Drive | Google Workspace | Lightweight collaboration |
| Document management system | OpenText, M-Files | Regulated industries with strict compliance |
| Project management tool | Jira, Azure DevOps | Linking documents to work items |
{:class="table table-single table-narrow"}

**Selection criteria:**
- Integration with existing organisational tools
- Version control capabilities
- Access control and audit trail
- Search and retrieval performance
- Support for document workflows (review, approval)

## Document Quality Standards

High-quality documents share common characteristics:

| Standard | Description |
|----------|------------|
| **Template compliance** | Uses the approved organisational or project template |
| **Completeness** | All required sections are populated |
| **Accuracy** | Content is factually correct and up to date |
| **Clarity** | Written in plain language appropriate to the audience |
| **Consistency** | Terminology, formatting, and style are uniform |
| **Traceability** | References to source documents and decisions are included |
{:class="table table-single table-narrow"}

## Related Resources

- [Version Management](/best-practice/version-management/) — Detailed guidance on version numbering and control
- [Configuration Management](/best-practice/configuration-management/) — Managing configuration items across the project
- [Requirements Elicitation](/best-practice/requirements-elicitation/) — Documenting and managing requirements
- [Planning and Estimating](/best-practice/planning-and-estimating/) — Planning artefacts and their management
