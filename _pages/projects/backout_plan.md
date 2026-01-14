---
layout: project
section: Projects
name: Backout Plan
description: Contingency plan to reverse a deployment or implementation if critical issues arise, ensuring business continuity and minimal disruption.
tags: [Backout, Rollback, Deployment, Risk, Contingency]
themes: [Risk, Delivery]
process: delivery
downloads:
 - name: Backout Plan Template
   description: Word template for creating backout plans
   file: backout_plan.docx
 - name: Backout Checklist
   description: Excel checklist for backout execution
   file: backout_checklist.xlsx
last_updated: 2026-01-13
---

# Backout Plan

A Backout Plan documents how to reverse a deployment or implementation if critical issues are encountered, providing a safety net that enables confident go-live decisions.

---

## Purpose

The Backout Plan:
- Provides a safety net for deployment
- Defines criteria for triggering rollback
- Documents step-by-step reversal process
- Assigns responsibilities for execution
- Enables confident go/no-go decisions
- Minimises business disruption

---

## When to Create

| Situation | Backout Required |
|-----------|------------------|
| **Major deployment** | Yes |
| **System upgrade** | Yes |
| **Database changes** | Yes |
| **Integration changes** | Yes |
| **Process changes** | Consider |
| **Configuration changes** | Consider |
| **Minor patches** | Risk-based |
{:class="table table-single table-narrow"}

---

## Backout Decision Framework

<div class="mermaid">
flowchart TD
    A[Issue<br/>Detected] --> B{Severity?}
    B -->|Critical| C[Invoke<br/>Backout]
    B -->|Major| D{Fixable in<br/>Window?}
    B -->|Minor| E[Log &<br/>Continue]
    D -->|Yes| F[Fix<br/>Forward]
    D -->|No| C
    C --> G[Execute<br/>Backout]
    G --> H[Verify<br/>Reversal]
    H --> I[Post-Backout<br/>Review]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F,G,H,I blue
</div>

---

## Backout Plan Template

### Plan Header

| Field | Content |
|-------|---------|
| **Project** | Customer Portal Enhancement |
| **Release** | Release 2.0 |
| **Deployment Date** | 07 June 2026 |
| **Plan Owner** | John Smith (PM) |
| **Version** | 1.2 |
| **Status** | Approved |
{:class="table table-single table-narrow"}

### Deployment Overview

| Element | Details |
|---------|---------|
| **What is being deployed** | Customer Portal v2.0 |
| **Components affected** | Web application, database, APIs |
| **Environments** | Production |
| **Deployment window** | 02:00-06:00 Saturday |
| **Backout window** | By 06:00 Saturday |
{:class="table table-single table-narrow"}

---

## Backout Triggers

### Trigger Criteria

| Severity | Criteria | Action |
|----------|----------|--------|
| **Critical** | System unavailable | Immediate backout |
| **Critical** | Data corruption | Immediate backout |
| **Critical** | Security breach | Immediate backout |
| **Major** | Core function broken | Backout if not fixable |
| **Major** | Performance degradation >50% | Backout if not fixable |
| **Minor** | Non-critical defect | Log and fix later |
{:class="table table-single table-narrow"}

### Specific Triggers for This Release

| # | Trigger | Threshold |
|---|---------|-----------|
| 1 | Login failure rate | >5% |
| 2 | Transaction errors | >2% |
| 3 | Page load time | >10 seconds |
| 4 | API response time | >5 seconds |
| 5 | Error rate | >1% |
| 6 | Database connectivity | Any failure |
{:class="table table-single table-narrow"}

---

## Backout Decision Authority

### Decision Matrix

| Severity | Decision Maker | Notification |
|----------|----------------|--------------|
| **Critical** | Deployment Lead | PM, Sponsor |
| **Major** | PM | Sponsor |
| **Discretionary** | Sponsor | Steering Group |
{:class="table table-single table-narrow"}

### Contact List

| Role | Name | Phone | Availability |
|------|------|-------|--------------|
| Deployment Lead | Jane Doe | xxx-xxxx | On-site |
| Project Manager | John Smith | xxx-xxxx | On-call |
| Sponsor | Sarah Williams | xxx-xxxx | On-call |
| IT Operations | Dave Jones | xxx-xxxx | On-site |
| DBA | Mike Brown | xxx-xxxx | On-call |
{:class="table table-single table-narrow"}

---

## Pre-Backout Requirements

### Before Deployment

| Requirement | Owner | Status |
|-------------|-------|--------|
| Database backup complete | DBA | ☐ |
| Application backup complete | Ops | ☐ |
| Configuration backup | Ops | ☐ |
| Backout scripts tested | Dev | ☐ |
| Rollback verified in staging | QA | ☐ |
| Team briefed on backout | PM | ☐ |
{:class="table table-single table-narrow"}

### Backup Details

| Component | Backup Location | Verified |
|-----------|-----------------|----------|
| Database | /backup/db/portal_20260607 | ☐ |
| Application files | /backup/app/portal_v1.9 | ☐ |
| Configuration | /backup/config/portal_20260607 | ☐ |
| Load balancer config | /backup/lb/portal_20260607 | ☐ |
{:class="table table-single table-narrow"}

---

## Backout Procedure

### Step-by-Step Process

| Step | Action | Owner | Duration | Verify |
|------|--------|-------|----------|--------|
| 1 | Announce backout to team | PM | 2 min | Team notified |
| 2 | Stop incoming traffic | Ops | 5 min | No new connections |
| 3 | Notify users (if applicable) | Support | 5 min | Message displayed |
| 4 | Stop application servers | Ops | 5 min | Services stopped |
| 5 | Restore database | DBA | 30 min | DB restored |
| 6 | Restore application | Ops | 15 min | Files restored |
| 7 | Restore configuration | Ops | 10 min | Config restored |
| 8 | Start application servers | Ops | 5 min | Services started |
| 9 | Verify system health | QA | 15 min | All checks pass |
| 10 | Resume traffic | Ops | 5 min | System live |
| 11 | Notify stakeholders | PM | 5 min | Comms sent |
| **Total** | | | **~100 min** | |
{:class="table table-single table-narrow"}

### Detailed Steps

#### Step 1: Announce Backout

```
Action: Announce backout decision to deployment team
Owner: Project Manager
Commands/Actions:
- Call: "Backout invoked. All team members standby."
- Confirm: Each team member acknowledges
Verification: Verbal confirmation from all team members
```

#### Step 5: Restore Database

```
Action: Restore database from pre-deployment backup
Owner: DBA
Commands:
1. Stop database connections
   $ sqlplus / as sysdba
   SQL> ALTER SYSTEM KILL SESSION 'sid,serial#';

2. Restore from backup
   $ rman target /
   RMAN> RESTORE DATABASE;
   RMAN> RECOVER DATABASE;

3. Open database
   SQL> ALTER DATABASE OPEN RESETLOGS;

Verification:
- Run: SELECT COUNT(*) FROM customers;
- Expected: Match pre-deployment count
- Run: SELECT version FROM system_info;
- Expected: v1.9
```

#### Step 6: Restore Application

```
Action: Restore application files from backup
Owner: Operations
Commands:
1. Stop application
   $ systemctl stop portal

2. Remove deployed version
   $ rm -rf /opt/portal/current/*

3. Restore previous version
   $ cp -r /backup/app/portal_v1.9/* /opt/portal/current/

4. Verify files
   $ ls -la /opt/portal/current/

Verification:
- File count matches backup
- Version file shows v1.9
```

---

## Post-Backout Actions

### Immediate Actions

| Action | Owner | Timeframe |
|--------|-------|-----------|
| Verify system operational | QA | Immediately |
| Notify stakeholders | PM | Within 30 min |
| Document what happened | PM | Within 2 hours |
| Schedule post-mortem | PM | Within 24 hours |
{:class="table table-single table-narrow"}

### Communication

| Audience | Message | Channel | Owner |
|----------|---------|---------|-------|
| Users | Service restored, apology | Banner/email | Support |
| Stakeholders | Status update | Email | PM |
| Management | Incident summary | Email | PM |
| Team | Debrief meeting | Meeting | PM |
{:class="table table-single table-narrow"}

### Post-Backout Review

| Question | Response |
|----------|----------|
| What triggered the backout? | |
| Was the trigger appropriate? | |
| Did backout execute as planned? | |
| What was the actual duration? | |
| What could be improved? | |
| Root cause of original issue? | |
| Plan for next attempt? | |
{:class="table table-single table-narrow"}

---

## Testing the Backout

### Pre-Deployment Testing

| Test | Environment | Status |
|------|-------------|--------|
| Full backout rehearsal | Staging | ☐ |
| Database restore test | Staging | ☐ |
| Application restore test | Staging | ☐ |
| End-to-end verification | Staging | ☐ |
| Time the backout | Staging | ☐ |
{:class="table table-single table-narrow"}

### Test Results

| Test | Expected Duration | Actual Duration | Issues |
|------|-------------------|-----------------|--------|
| Database restore | 30 min | | |
| Application restore | 15 min | | |
| Total backout | 100 min | | |
| Verification | 15 min | | |
{:class="table table-single table-narrow"}

---

## Risk Considerations

### Backout Risks

| Risk | Mitigation |
|------|------------|
| Backup corruption | Test backups before deployment |
| Incomplete restore | Verify all components in staging |
| Data loss (new transactions) | Minimal deployment window |
| Team unavailable | Clear on-call roster |
| Unknown dependencies | Thorough impact analysis |
{:class="table table-single table-narrow"}

### Cannot Backout Scenarios

| Scenario | Alternative |
|----------|-------------|
| Database schema incompatible | Data migration scripts |
| Third-party changes | Coordinate with vendor |
| Distributed systems | Coordinated rollback |
| Data loss unacceptable | Forward-fix only |
{:class="table table-single table-narrow"}

---

## Alternative Strategies

### Fix-Forward vs Backout

| Factor | Favour Fix-Forward | Favour Backout |
|--------|-------------------|----------------|
| Time to fix | Quick (<1 hour) | Long (>2 hours) |
| Confidence | High | Low |
| Risk | Low | High |
| Business impact | Moderate | Severe |
| Data integrity | No risk | At risk |
{:class="table table-single table-narrow"}

### Partial Backout

| Scenario | Approach |
|----------|----------|
| Single component failure | Rollback that component only |
| Feature-specific issue | Disable feature via config |
| Performance issue | Scale down, investigate |
{:class="table table-single table-narrow"}

---

## Documentation

### During Backout

| Document | Owner |
|----------|-------|
| Timeline of events | PM |
| Commands executed | Ops |
| Issues encountered | All |
| Decisions made | PM |
{:class="table table-single table-narrow"}

### After Backout

| Document | Purpose | Owner |
|----------|---------|-------|
| Incident report | Official record | PM |
| Root cause analysis | Understanding | Tech Lead |
| Updated backout plan | Improvement | PM |
| Lessons learned | Future reference | PM |
{:class="table table-single table-narrow"}

---

## Backout Plan Checklist

### Planning Phase
- [ ] Components identified?
- [ ] Backup procedures defined?
- [ ] Restore procedures documented?
- [ ] Triggers defined?
- [ ] Decision authority clear?
- [ ] Contact list current?
- [ ] Team briefed?

### Pre-Deployment
- [ ] Backups completed?
- [ ] Backups verified?
- [ ] Scripts tested?
- [ ] Team available?
- [ ] Communication ready?

### During Deployment
- [ ] Monitoring active?
- [ ] Team on standby?
- [ ] Triggers being checked?
- [ ] Communication channels open?

### Post-Backout (if invoked)
- [ ] System verified?
- [ ] Stakeholders notified?
- [ ] Incident documented?
- [ ] Post-mortem scheduled?
- [ ] Plan updated?

---

## Related Resources

- [Implementation Approach](/projects/implementation_approach) - Deployment strategy
- [Service Transition](/projects/service_transition) - Go-live planning
- [Risk Register](/projects/risk_register) - Risk management
- [Test Approach](/projects/test_approach) - Testing strategy
- [Support Model](/projects/support_model) - Operational support

