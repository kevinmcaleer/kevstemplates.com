---
layout: project
section: Projects
name: Post Implementation Review
description: Structured review conducted after go-live to assess whether the solution is working as intended and benefits are being realised.
tags: [PIR, Review, Benefits, Go-Live, Closure]
themes: [Closure, Assurance]
process: closure
downloads:
 - name: PIR Template
   description: Word template for post-implementation review
   file: post_implementation_review.docx
 - name: PIR Checklist
   description: Excel checklist for PIR preparation
   file: pir_checklist.xlsx
last_updated: 2026-01-13
---

# Post Implementation Review

A Post Implementation Review (PIR) assesses whether a project has delivered its intended outcomes, the solution is working effectively, and benefits are on track for realisation.

---

## Purpose

The PIR:
- Confirms solution is working as intended
- Assesses benefits realisation
- Identifies outstanding issues
- Captures lessons learned
- Informs future projects
- Supports continuous improvement

---

## When to Conduct

| Trigger | Timing |
|---------|--------|
| **Standard PIR** | 3-6 months after go-live |
| **Quick check** | 2-4 weeks after go-live |
| **Extended review** | 12 months for major projects |
| **Benefits review** | At benefits realisation milestones |
{:class="table table-single table-narrow"}

### PIR Timing Considerations

| Factor | Impact on Timing |
|--------|------------------|
| **Benefits timeline** | Allow time for benefits to emerge |
| **Stabilisation period** | After hypercare/early life support |
| **User adoption** | Sufficient usage to assess |
| **Seasonal factors** | Consider business cycles |
{:class="table table-single table-narrow"}

---

## PIR Process

<div class="mermaid">
flowchart LR
    A[Plan<br/>Review] --> B[Gather<br/>Data]
    B --> C[Conduct<br/>Review]
    C --> D[Analyse<br/>Findings]
    D --> E[Report &<br/>Actions]
    E --> F[Follow<br/>Up]

    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E,F blue
</div>

---

## PIR Template

### Review Header

| Field | Content |
|-------|---------|
| **Project** | Customer Portal Enhancement |
| **Implementation Date** | 07 June 2026 |
| **PIR Date** | 15 September 2026 |
| **Review Lead** | Jane Smith |
| **Sponsor** | Sarah Williams |
{:class="table table-single table-narrow"}

---

## Assessment Areas

### Solution Effectiveness

| Area | Assessment Question |
|------|---------------------|
| **Functionality** | Does it do what it was meant to do? |
| **Performance** | Does it meet performance requirements? |
| **Reliability** | Is it stable and available? |
| **Usability** | Is it easy to use? |
| **Integration** | Does it work with other systems? |
| **Security** | Is it secure? |
{:class="table table-single table-narrow"}

### Functionality Assessment

| Function | Expected | Actual | Status |
|----------|----------|--------|--------|
| Customer login | Working | Working | ✓ |
| Self-service transactions | 80% available | 85% available | ✓ |
| Account management | Full capability | Full capability | ✓ |
| Reporting | Real-time | Real-time | ✓ |
{:class="table table-single table-narrow"}

### Performance Assessment

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Page load time | <2 sec | 1.4 sec | ✓ |
| Availability | 99.5% | 99.7% | ✓ |
| Concurrent users | 500 | 600+ tested | ✓ |
| Transaction throughput | 1000/hour | 1200/hour | ✓ |
{:class="table table-single table-narrow"}

---

## Benefits Assessment

### Benefits Realisation Status

| Benefit | Target | Actual | % Achieved | Status |
|---------|--------|--------|------------|--------|
| Self-service adoption | 60% by Month 6 | 55% | 92% | Amber |
| Call volume reduction | -25% by Month 12 | -18% (Month 3) | On Track | Green |
| Customer satisfaction | +10 NPS | +8 NPS | 80% | Amber |
| Cost savings | £150k/year | £40k (Month 3) | On Track | Green |
{:class="table table-single table-narrow"}

### Benefits Analysis

| Benefit | Commentary |
|---------|------------|
| **Self-service adoption** | Below target; need adoption campaign |
| **Call volume reduction** | Trending well; on track for year-end |
| **Customer satisfaction** | Improved but below target; UX review needed |
| **Cost savings** | On track; full savings by year end |
{:class="table table-single table-narrow"}

### Benefits Actions

| Action | Owner | Due |
|--------|-------|-----|
| Launch adoption campaign | Marketing | Oct 2026 |
| Conduct UX review | Product | Nov 2026 |
| Review self-service features | BA | Oct 2026 |
{:class="table table-single table-narrow"}

---

## User Feedback

### Feedback Collection Methods

| Method | Sample Size | Timing |
|--------|-------------|--------|
| User survey | 200 customers | Week of PIR |
| User interviews | 10 key users | During PIR |
| Support ticket analysis | All tickets | Since go-live |
| Usage analytics | All users | Since go-live |
{:class="table table-single table-narrow"}

### User Satisfaction

| Aspect | Rating (1-5) | Comments |
|--------|--------------|----------|
| Overall satisfaction | 4.2 | Generally positive |
| Ease of use | 4.0 | Some navigation issues |
| Performance | 4.5 | Fast and responsive |
| Reliability | 4.3 | Few outages |
| Support | 3.8 | Response times varied |
{:class="table table-single table-narrow"}

### Common Feedback Themes

| Theme | Frequency | Action |
|-------|-----------|--------|
| Navigation confusing | 25% | UX improvements |
| Missing feature X | 15% | Phase 2 backlog |
| Slow on mobile | 10% | Performance tuning |
| Great improvement | 45% | - |
{:class="table table-single table-narrow"}

---

## Operational Assessment

### Support Performance

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Incidents | <20/month | 15/month | ✓ |
| Critical incidents | 0 | 1 | ✗ |
| Resolution time (P1) | <4 hours | 3 hours avg | ✓ |
| Resolution time (P2) | <8 hours | 6 hours avg | ✓ |
| Customer satisfaction | >90% | 88% | ~ |
{:class="table table-single table-narrow"}

### Outstanding Issues

| Issue | Severity | Status | Owner |
|-------|----------|--------|-------|
| Mobile display bug | Medium | In progress | Dev team |
| Integration timeout | Low | Monitoring | Ops |
| Report formatting | Low | Backlog | BA |
{:class="table table-single table-narrow"}

---

## Project Delivery Assessment

### Delivery vs Plan

| Dimension | Planned | Actual | Variance |
|-----------|---------|--------|----------|
| Duration | 6 months | 6.5 months | +8% |
| Budget | £200,000 | £188,000 | -6% |
| Scope | 100% | 95% | -5% |
| Quality | All criteria | All met | Met |
{:class="table table-single table-narrow"}

### Project Effectiveness

| Question | Rating | Evidence |
|----------|--------|----------|
| Did project deliver what was needed? | Good | Core requirements met |
| Was delivery efficient? | Good | Under budget |
| Was quality adequate? | Good | Few defects post-live |
| Were stakeholders satisfied? | Good | Positive feedback |
{:class="table table-single table-narrow"}

---

## Lessons Learned

### What Worked Well

| Area | Success Factor | Recommendation |
|------|----------------|----------------|
| Stakeholder engagement | Regular demos | Continue practice |
| Quality approach | Early testing | Mandate for projects |
| Team collaboration | Co-location | Promote approach |
| Risk management | Proactive identification | Maintain rigour |
{:class="table table-single table-narrow"}

### What Could Improve

| Area | Issue | Recommendation |
|------|-------|----------------|
| Third-party coordination | Delays from vendor | Earlier engagement |
| UAT resourcing | Availability issues | Book resources earlier |
| Documentation | Left to end | Parallel documentation |
| Change management | Adoption slower than hoped | Invest more in change |
{:class="table table-single table-narrow"}

---

## PIR Findings Summary

### Overall Assessment

| Area | Rating | Commentary |
|------|--------|------------|
| **Solution Effectiveness** | Green | Working as intended |
| **Benefits Realisation** | Amber | On track but attention needed |
| **User Satisfaction** | Amber | Good but improvements needed |
| **Operational Performance** | Green | Stable and supported |
| **Project Delivery** | Green | Delivered successfully |
{:class="table table-single table-narrow"}

### Key Findings

| # | Finding | Implication |
|---|---------|-------------|
| 1 | Solution working well | No major remediation needed |
| 2 | Adoption below target | Investment in change needed |
| 3 | UX issues identified | UX review and fixes required |
| 4 | Benefits on track overall | Continue monitoring |
| 5 | Good project delivery | Lessons for future projects |
{:class="table table-single table-narrow"}

---

## Actions and Recommendations

### Immediate Actions

| Action | Owner | Priority | Due |
|--------|-------|----------|-----|
| Launch adoption campaign | Marketing | High | Oct 2026 |
| Fix mobile display issues | Dev | Medium | Oct 2026 |
| Complete UX review | Product | High | Nov 2026 |
{:class="table table-single table-narrow"}

### Recommendations

| Recommendation | Audience |
|----------------|----------|
| Continue benefits tracking to Month 12 | Sponsor |
| Invest in adoption support | Business |
| Apply lessons to future projects | PMO |
| Consider Phase 2 to address gaps | Portfolio Board |
{:class="table table-single table-narrow"}

---

## Follow-Up

### Next Review Points

| Review | Date | Focus |
|--------|------|-------|
| Benefits check | Dec 2026 | Month 6 benefits |
| Annual review | Jun 2027 | Full year benefits |
{:class="table table-single table-narrow"}

### Ongoing Monitoring

| Metric | Frequency | Owner |
|--------|-----------|-------|
| Self-service adoption | Monthly | Digital Team |
| Call volumes | Monthly | Operations |
| Customer satisfaction | Quarterly | CX Team |
| System performance | Continuous | IT Ops |
{:class="table table-single table-narrow"}

---

## PIR Report Distribution

| Audience | Content |
|----------|---------|
| Sponsor | Full report |
| Steering Group | Executive summary |
| PMO | Full report + lessons |
| IT Operations | Operational sections |
| Business | Benefits sections |
{:class="table table-single table-narrow"}

---

## PIR Checklist

### Planning
- [ ] PIR date scheduled?
- [ ] Participants identified?
- [ ] Data sources identified?
- [ ] Questions prepared?

### Data Gathering
- [ ] Benefits data collected?
- [ ] User feedback gathered?
- [ ] Operational metrics obtained?
- [ ] Issue logs reviewed?
- [ ] Project documentation reviewed?

### Review
- [ ] Solution effectiveness assessed?
- [ ] Benefits realisation evaluated?
- [ ] User satisfaction measured?
- [ ] Operational performance reviewed?
- [ ] Lessons captured?

### Reporting
- [ ] Findings documented?
- [ ] Actions identified?
- [ ] Report distributed?
- [ ] Follow-up scheduled?

---

## Related Resources

- [Benefits Review](/projects/benefits_review) - Benefits assessment
- [End of Project Report](/projects/end_of_project_report) - Project closure
- [Lessons Learned](/projects/lessons_learned) - Learning capture
- [Project Healthcheck](/projects/project_healthcheck) - Health assessment
- [Project Closure Report](/projects/project_closure_report) - Closure documentation

