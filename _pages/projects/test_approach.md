---
layout: project
name: Test Approach
section: Project
process: delivery
description: Defining the test strategy, approach, and test phases for the project.
tags: [Testing, Quality, UAT, Strategy]
themes: [Quality, Planning]
last_updated: 2026-01-13
---

# Test Approach

The Test Approach defines how testing will be conducted to verify the solution meets requirements and is fit for purpose.

---

## Purpose

A clear test approach ensures:
- Testing is planned and resourced appropriately
- Defects are found before go-live
- Stakeholders have confidence in quality
- Acceptance criteria are verified
- Risks are identified and mitigated

---

## Test Strategy vs Test Approach

| Test Strategy | Test Approach |
|---------------|---------------|
| Organisation-wide standards | Project-specific application |
| Defines what should be done | Defines how it will be done |
| Relatively stable | Tailored per project |
| Owned by QA function | Owned by project |
{:class="table table-single table-narrow"}

---

## Test Levels

<div class="mermaid">
flowchart LR
    A[Unit<br/>Testing] --> B[Integration<br/>Testing]
    B --> C[System<br/>Testing]
    C --> D[UAT]
    D --> E[Operational<br/>Testing]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>

| Level | Description | Responsibility |
|-------|-------------|----------------|
| **Unit Testing** | Individual components work | Development team |
| **Integration Testing** | Components work together | Development/Test team |
| **System Testing** | End-to-end functionality | Test team |
| **UAT** | Business requirements met | Business users |
| **Operational Testing** | Non-functional requirements | Operations/Test team |
{:class="table table-single table-narrow"}

---

## Test Types

| Type | Purpose |
|------|---------|
| **Functional** | Verify features work correctly |
| **Regression** | Ensure changes don't break existing functionality |
| **Performance** | Verify speed and scalability |
| **Security** | Identify vulnerabilities |
| **Usability** | Assess user experience |
| **Accessibility** | Verify compliance with accessibility standards |
| **Data Migration** | Validate migrated data |
{:class="table table-single table-narrow"}

---

## Test Planning Activities

| Activity | Description |
|----------|-------------|
| **Define scope** | What will and won't be tested |
| **Identify test types** | Which types of testing apply |
| **Plan resources** | Who will test and when |
| **Define environments** | Where testing will occur |
| **Set entry/exit criteria** | When to start and stop |
| **Plan data** | What test data is needed |
| **Define defect process** | How issues are managed |
{:class="table table-single table-narrow"}

---

## Entry and Exit Criteria

### Entry Criteria (ready to start)
- Test environment available
- Test data prepared
- Test cases written
- Code deployed to test environment
- Required documentation available

### Exit Criteria (ready to proceed)
- All planned tests executed
- Critical/high defects resolved
- Test coverage targets met
- Sign-off obtained
- Outstanding risks documented

---

## Test Environment Strategy

| Environment | Purpose | Data |
|-------------|---------|------|
| **Development** | Developer testing | Synthetic data |
| **Integration** | Integration testing | Synthetic data |
| **System Test** | Full system testing | Representative data |
| **UAT** | Business acceptance | Production-like data |
| **Pre-production** | Final validation | Masked production data |
{:class="table table-single table-narrow"}

---

## Test Data Considerations

- **Availability**: Can we get appropriate data?
- **Relevance**: Does it cover required scenarios?
- **Privacy**: Is sensitive data masked?
- **Volume**: Is there enough for performance testing?
- **Refresh**: Can we reset data between test cycles?

---

## Defect Management

<div class="mermaid">
flowchart LR
    A[Identify] --> B[Log]
    B --> C[Triage]
    C --> D[Fix]
    D --> E[Retest]
    E --> F[Close]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

### Defect Severity

| Severity | Description |
|----------|-------------|
| **Critical** | System unusable, no workaround |
| **High** | Major function broken, workaround difficult |
| **Medium** | Function impaired, workaround exists |
| **Low** | Minor issue, cosmetic defect |
{:class="table table-single table-narrow"}

---

## User Acceptance Testing (UAT)

UAT confirms the solution meets business needs:

| Aspect | Description |
|--------|-------------|
| **Who** | Business users, not IT |
| **What** | Business scenarios, not technical tests |
| **When** | After system testing complete |
| **Success** | Business sign-off obtained |
{:class="table table-single table-narrow"}

### UAT Best Practices
- Involve users in test case development
- Use realistic business scenarios
- Provide training before testing
- Allocate dedicated time for users
- Have support available during testing

---

## Test Metrics

| Metric | What It Measures |
|--------|------------------|
| **Test coverage** | % of requirements with tests |
| **Test execution** | % of tests run |
| **Pass rate** | % of tests passing |
| **Defect count** | Number of defects found |
| **Defect closure rate** | Rate of defect resolution |
| **Defect leakage** | Defects found after UAT |
{:class="table table-single table-narrow"}

---

## Test Approach Checklist

- [ ] Test scope defined?
- [ ] Test types identified?
- [ ] Test phases planned?
- [ ] Resources allocated?
- [ ] Environments available?
- [ ] Test data strategy defined?
- [ ] Entry/exit criteria set?
- [ ] Defect process agreed?
- [ ] UAT approach planned?

---

## Related Resources

- [Quality Planning](/projects/quality_planning) - Quality management
- [Requirements](/projects/requirements) - Requirements to test against
- [Implementation Approach](/projects/implementation_approach) - Go-live planning

