---
layout: page
name: Version Management
section: Best Practice
description: Version control best practices for project documents and deliverables
tags: [Version Control, Documents, Configuration, Best Practice]
color: royal-blue-500
last_updated: 2026-03-19
---

# Table of Contents
{:.no_toc}
* toc
{:toc}

## Introduction

Version management ensures that project teams always work from the correct version of a document, that changes are tracked and traceable, and that previous versions can be recovered if needed. Without version control, teams risk making decisions based on outdated information, duplicating effort, and losing valuable work.

This guide covers the practical standards for versioning project documents and deliverables, from simple numbering schemes through to managing concurrent edits in multi-team environments. It complements the broader guidance on [Document Management](/best-practice/document-management/) and [Configuration Management](/best-practice/configuration-management/).

## Version Numbering Scheme

### Standard Scheme

The most widely used scheme for project documents follows a **Major.Minor** format:

| Component | Format | Meaning |
|-----------|--------|---------|
| Major | Whole number (1, 2, 3) | Significant revision or formal re-approval |
| Minor | Decimal (0.1, 0.2) | Incremental changes within an approved version |
{:class="table table-single table-narrow"}

### Numbering Rules

| Version | Significance |
|---------|-------------|
| v0.1 | First draft |
| v0.2 – v0.9 | Subsequent drafts under review |
| v1.0 | First approved / baselined version |
| v1.1 – v1.9 | Minor updates to the approved version |
| v2.0 | Major revision requiring re-approval |
{:class="table table-single table-narrow"}

### When to Use Each Level

**Increment the minor version (e.g. v1.1 → v1.2) when:**
- Correcting typographical or formatting errors
- Updating data or figures within existing sections
- Adding minor clarifications that do not change the intent

**Increment the major version (e.g. v1.x → v2.0) when:**
- The document scope or purpose changes significantly
- A formal re-approval or re-baseline is required
- Structural changes are made (new sections, removed sections)
- Regulatory or contractual changes require a new issue

## Draft vs Approved Versions

The distinction between draft and approved versions is fundamental.

<div class="mermaid">
flowchart LR
    A[v0.1 Draft] --> B[v0.2 Review]
    B --> C[v0.3 Revised]
    C --> D{Approved?}
    D -->|Yes| E[v1.0 Baseline]
    D -->|No| B
    E --> F[v1.1 Update]
    F --> G{Major Change?}
    G -->|Yes| H[v2.0 Re-baseline]
    G -->|No| I[v1.2 Update]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H,I blue
</div>

| Status | Version Range | Characteristics |
|--------|--------------|-----------------|
| **Draft** | v0.1 – v0.9 | Work in progress; subject to change; not for formal use |
| **Approved** | v1.0+ | Formally reviewed and approved; can be referenced and relied upon |
| **Superseded** | Any | Replaced by a newer version; retained for audit trail only |
| **Archived** | Any | No longer active; held per retention policy |
{:class="table table-single table-narrow"}

**Key rules:**
- Draft documents should be clearly watermarked as "DRAFT"
- Only approved versions should be distributed to external stakeholders
- Superseded versions must be clearly marked and, where possible, removed from active folders

## Version History Table

Every controlled document should include a version history table, typically on the first or second page.

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| v0.1 | 2026-01-10 | J. Smith | Initial draft |
| v0.2 | 2026-01-18 | J. Smith | Incorporated review comments from technical lead |
| v0.3 | 2026-01-25 | J. Smith | Updated section 4 following stakeholder workshop |
| v1.0 | 2026-02-01 | J. Smith | Approved by project board |
| v1.1 | 2026-03-05 | A. Jones | Updated timeline in section 3 |
{:class="table table-single table-narrow"}

**What to record:**
- Version number
- Date of change
- Name of the person who made the change
- Brief, meaningful description of what changed and why

**Avoid:** vague entries like "various updates" or "minor changes" — these provide no audit value.

## Managing Concurrent Edits

When multiple people need to edit the same document, conflicts and lost work can occur. Adopt one of the following strategies.

### Check-Out / Check-In

Traditional approach where only one person can edit the document at a time.

| Pros | Cons |
|------|------|
| Prevents conflicts entirely | Creates bottlenecks |
| Simple to understand | Delays if someone forgets to check in |
| Clear accountability | Not suited to fast-paced environments |
{:class="table table-single table-narrow"}

### Real-Time Co-Authoring

Modern collaboration tools (SharePoint, Google Docs, Confluence) allow simultaneous editing.

| Pros | Cons |
|------|------|
| No waiting for access | Can be chaotic without coordination |
| Faster turnaround | Version history can be noisy |
| Built-in conflict resolution | Requires reliable network connectivity |
{:class="table table-single table-narrow"}

### Section Ownership

Assign specific sections to specific authors. Each author is responsible for their section and coordinates with others for cross-cutting changes.

**Best practice:** Regardless of which approach you use, always define a single document owner who is accountable for the overall integrity and coherence of the document.

## Version Control for Different Document Types

Different types of project deliverables require different version control approaches.

| Document Type | Approach | Tool |
|--------------|----------|------|
| Office documents (Word, Excel) | Manual versioning with naming convention and version history table | SharePoint, file shares |
| Wiki pages | Automatic version history built into the platform | Confluence, SharePoint |
| Source code | Branching and merging with commit history | Git, Azure DevOps |
| Design artefacts | Version-controlled with linked change requests | Design tools, PLM systems |
| Contracts and legal documents | Formal version control with legal review at each version | Document management system |
| Meeting minutes | Date-stamped, no versioning required after approval | Any |
{:class="table table-single table-narrow"}

## Version Control Process

<div class="mermaid">
flowchart LR
    A[Identify Need<br/>for Change] --> B[Check Out /<br/>Create Copy]
    B --> C[Make Changes]
    C --> D[Update Version<br/>History]
    D --> E[Increment<br/>Version Number]
    E --> F[Review &<br/>Approve]
    F --> G[Publish New<br/>Version]
    G --> H[Archive Previous<br/>Version]
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H blue
</div>

### Step-by-Step

1. **Identify the need** — A change is required due to new information, a defect, or a change request
2. **Check out or create a working copy** — Prevent others from editing simultaneously (where applicable)
3. **Make the changes** — Edit the document content as required
4. **Update the version history** — Record what changed, when, and by whom
5. **Increment the version number** — Apply the correct major or minor increment
6. **Review and approve** — Obtain the required sign-off before publishing
7. **Publish** — Replace the previous version in the authoritative location
8. **Archive** — Move the superseded version to an archive folder

## Relationship to Configuration Management

Version management is a subset of the broader discipline of configuration management (CM). While version management focuses on tracking changes to individual documents, CM provides a framework for managing all project deliverables (configuration items) and their relationships.

| Aspect | Version Management | Configuration Management |
|--------|-------------------|------------------------|
| **Scope** | Individual documents | All configuration items |
| **Focus** | Change tracking and numbering | Identification, control, status, audit |
| **Granularity** | Document level | System or product level |
| **Tools** | File naming, version history tables | Configuration management database (CMDB) |
{:class="table table-single table-narrow"}

For detailed guidance on configuration management, see the [Configuration Management](/best-practice/configuration-management/) page.

## Common Pitfalls

| Pitfall | Consequence | Prevention |
|---------|-------------|------------|
| Emailing documents as attachments | Multiple uncontrolled copies in circulation | Share links, not files |
| Saving copies to local drives | Divergent versions with no audit trail | Use the central repository only |
| Skipping the version history update | No record of what changed or why | Make it part of the save process |
| Using "Final" in the filename | Leads to "Final_v2_FINAL_really_final.docx" | Use version numbers only |
| Not archiving superseded versions | Confusion over which version is current | Move old versions to an archive folder |
| Inconsistent numbering across the team | Misaligned version references in communication | Agree and publish the numbering standard |
{:class="table table-single table-narrow"}

## Tools and Automation

Where possible, use tools that automate version control:

- **SharePoint / OneDrive** — Built-in version history with check-out/check-in and co-authoring
- **Confluence** — Automatic page versioning with comparison view
- **Git-based systems** — Full change tracking with branching and merging
- **Document management systems** — Workflow-driven versioning with audit trails

Manual version control (filename-based) should only be used when no automated alternative is available.

## Related Resources

- [Document Management](/best-practice/document-management/) — Broader document management framework including naming, access, and retention
- [Configuration Management](/best-practice/configuration-management/) — System-level control of all project deliverables
- [Planning and Estimating](/best-practice/planning-and-estimating/) — Managing estimation artefact versions through the planning cycle
