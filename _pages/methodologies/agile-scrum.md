---
layout: page
name: Agile & Scrum Guide
section: Methodologies
description: Comprehensive guide to Agile methodology and Scrum framework covering sprints, ceremonies, roles, artifacts, and practical implementation tips.
tags: [Agile, Scrum, sprints, user stories, backlog, retrospective, standup]
last_updated: 2026-01-13
---

# Agile & Scrum Guide

**Agile** is a mindset and set of values for delivering value iteratively and incrementally. **Scrum** is the most popular framework for implementing Agile principles in practice.

---

## The Agile Manifesto

Agile is founded on four core values:

| We value... | Over... |
|-------------|---------|
| **Individuals and interactions** | Processes and tools |
| **Working software** | Comprehensive documentation |
| **Customer collaboration** | Contract negotiation |
| **Responding to change** | Following a plan |

> *"While there is value in the items on the right, we value the items on the left more."*

---

## The 12 Agile Principles

1. Highest priority is satisfying the customer through early and continuous delivery
2. Welcome changing requirements, even late in development
3. Deliver working software frequently (weeks rather than months)
4. Business people and developers must work together daily
5. Build projects around motivated individuals and trust them
6. Face-to-face conversation is the most efficient communication
7. Working software is the primary measure of progress
8. Sustainable development pace that can be maintained indefinitely
9. Continuous attention to technical excellence and good design
10. Simplicity—maximising the amount of work not done
11. Self-organising teams produce the best architectures and designs
12. Regular reflection on how to become more effective

---

## Scrum Framework Overview

```
  Product         Sprint          Sprint        Potentially
  Backlog    →    Planning   →    Backlog   →   Shippable
     │                               │          Increment
     │                               │              ▲
     │                               ▼              │
     │                         ┌─────────┐         │
     │                         │  Daily  │         │
     └────────────────────────►│  Scrum  │─────────┘
                               └─────────┘
                                    │
                               ┌────▼────┐
                               │  Sprint │
                               │  Review │
                               └────┬────┘
                                    │
                               ┌────▼────┐
                               │  Sprint │
                               │  Retro  │
                               └─────────┘
```

---

## Scrum Roles

### Product Owner
- **Owns** the Product Backlog
- **Prioritises** items based on business value
- **Represents** stakeholders and customers
- **Accepts** or rejects work results
- **One person**, not a committee

### Scrum Master
- **Facilitates** Scrum events
- **Removes** impediments blocking the team
- **Coaches** team and organisation in Scrum
- **Protects** team from external interference
- **Servant leader**, not a manager

### Development Team
- **Self-organising**: decide how to do the work
- **Cross-functional**: all skills needed to deliver
- **Accountable** as a team for delivery
- **No titles**: everyone is a Developer
- **Ideal size**: 3-9 members

---

## Scrum Events (Ceremonies)

### Sprint
- Fixed time-box: typically 2-4 weeks
- Creates a "Done" increment
- No changes that endanger Sprint Goal
- Scope may be clarified with Product Owner
- Quality standards do not decrease

### Sprint Planning
- **Duration**: Max 8 hours for a 4-week Sprint
- **Attendees**: Entire Scrum Team
- **Outputs**: Sprint Goal, Sprint Backlog

| Topic | Question |
|-------|----------|
| **What** | What can be delivered this Sprint? |
| **How** | How will the work be accomplished? |

### Daily Scrum (Standup)
- **Duration**: 15 minutes maximum
- **Frequency**: Every day, same time/place
- **Attendees**: Development Team (others may observe)

Three questions each member answers:
1. What did I do yesterday toward the Sprint Goal?
2. What will I do today toward the Sprint Goal?
3. Are there any impediments in my way?

### Sprint Review
- **Duration**: Max 4 hours for a 4-week Sprint
- **Attendees**: Scrum Team + stakeholders
- **Purpose**: Inspect increment, adapt backlog

Activities:
- Demo completed work
- Discuss what went well and problems encountered
- Review timeline, budget, marketplace
- Collaborate on what to do next

### Sprint Retrospective
- **Duration**: Max 3 hours for a 4-week Sprint
- **Attendees**: Scrum Team only
- **Purpose**: Inspect and adapt the process

Questions to answer:
- What went well this Sprint?
- What could be improved?
- What will we commit to improve next Sprint?

---

## Scrum Artifacts

### Product Backlog
- Ordered list of everything needed in the product
- Single source of requirements
- Owned by the Product Owner
- Never complete—evolves with product and environment
- Items refined to be ready for Sprint Planning

**Product Backlog Item (PBI) attributes:**
- Description
- Order/Priority
- Estimate
- Acceptance Criteria

### Sprint Backlog
- Product Backlog items selected for the Sprint
- Plus the plan for delivering them
- Owned by the Development Team
- Highly visible, real-time picture of work
- Updated throughout the Sprint

### Increment
- Sum of all completed PBIs
- Must be in usable condition
- Must meet Definition of Done
- Potentially releasable

---

## User Stories

User stories are a common format for expressing requirements in Agile.

### Format
```
As a [type of user]
I want [goal/desire]
So that [benefit/reason]
```

### Example
```
As a project manager
I want to export reports to PDF
So that I can share them with stakeholders who don't have system access
```

### INVEST Criteria
Good user stories are:

| Letter | Meaning | Description |
|--------|---------|-------------|
| **I** | Independent | Can be developed in any order |
| **N** | Negotiable | Details can be discussed |
| **V** | Valuable | Delivers value to user |
| **E** | Estimable | Can be sized |
| **S** | Small | Fits in a Sprint |
| **T** | Testable | Clear acceptance criteria |

---

## Estimation Techniques

### Story Points
- Relative measure of effort/complexity
- Common scales: Fibonacci (1, 2, 3, 5, 8, 13, 21)
- Team-specific, not comparable across teams
- Focus on relative sizing, not absolute time

### Planning Poker
1. Each estimator has cards (e.g., 1, 2, 3, 5, 8, 13, 21)
2. Product Owner presents story
3. Team discusses briefly
4. Everyone reveals estimate simultaneously
5. High/low estimators explain reasoning
6. Repeat until consensus

### T-Shirt Sizing
- Quick, rough estimation: XS, S, M, L, XL
- Good for initial backlog sizing
- Convert to story points when refined

---

## Definition of Done (DoD)

A shared understanding of what "complete" means. Example:

- [ ] Code written and peer-reviewed
- [ ] Unit tests written and passing
- [ ] Integration tests passing
- [ ] Documentation updated
- [ ] Deployed to staging environment
- [ ] Product Owner has accepted
- [ ] No known defects

---

## Velocity

- Measure of work completed per Sprint (in story points)
- Used for forecasting, not performance evaluation
- Calculate: Average of last 3-5 Sprints
- Only compare within the same team

**Example Velocity Chart:**

| Sprint | Story Points Completed |
|--------|----------------------|
| 1 | 21 |
| 2 | 18 |
| 3 | 24 |
| 4 | 22 |
| **Average** | **21.25** |

---

## Common Agile Metrics

| Metric | What it Measures | Use |
|--------|-----------------|-----|
| **Velocity** | Work completed per Sprint | Forecasting |
| **Burndown** | Work remaining in Sprint | Daily tracking |
| **Burnup** | Work completed over time | Release planning |
| **Cycle Time** | Time from start to done | Process efficiency |
| **Lead Time** | Time from request to delivery | Customer perspective |

---

## Scrum Certifications

| Certification | Provider | Level |
|--------------|----------|-------|
| PSM I, II, III | Scrum.org | Scrum Master |
| PSPO I, II, III | Scrum.org | Product Owner |
| CSM | Scrum Alliance | Scrum Master |
| CSPO | Scrum Alliance | Product Owner |
| SAFe | Scaled Agile | Enterprise |
| PMI-ACP | PMI | General Agile |

---

## Related Resources

- [Methodologies Overview](/methodologies) - Compare with other approaches
- [Waterfall vs Agile](/methodologies/waterfall-vs-agile) - When to use which
- [Hybrid Approaches](/methodologies/hybrid) - Combining Agile with traditional
- [Project Toolkit](/projects) - Templates adaptable for Agile
