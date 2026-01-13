# Claude Code Project Guidelines

This file contains guidelines and requirements for Claude Code when working on this project.

## Project Overview

**kevstemplates.com** is a Jekyll-based static site providing project management templates, guides, and resources for project managers, programme managers, and portfolio managers.

## Technology Stack

- **Static Site Generator**: Jekyll
- **Hosting**: GitHub Pages
- **CSS Framework**: Bootstrap 4.3.1
- **Icons**: FontAwesome
- **Diagrams**: Mermaid.js v10
- **Search**: Lunr.js (client-side)

## Content Guidelines

### Diagrams and Workflows

**IMPORTANT**: Always use Mermaid.js for diagrams, flowcharts, and workflow illustrations. Do NOT use ASCII art or text-based diagrams.

Mermaid is included in the default layout and renders automatically.

**Usage in Markdown:**

```markdown
<div class="mermaid">
flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
</div>
```

**Supported diagram types:**
- `flowchart` / `graph` - Flow diagrams
- `sequenceDiagram` - Sequence diagrams
- `classDiagram` - Class diagrams
- `stateDiagram-v2` - State diagrams
- `gantt` - Gantt charts
- `pie` - Pie charts
- `journey` - User journey diagrams

### Page Front Matter

All content pages should include:

```yaml
---
layout: page  # or project, programme, portfolio, product_description
name: Page Title
section: Projects  # Projects, Programmes, Portfolio, Methodologies, Best Practice
description: Brief description for SEO (max 160 chars)
tags: [relevant, tags, here]
last_updated: YYYY-MM-DD
---
```

### Markdown Tables

**IMPORTANT**: All markdown tables must be immediately followed by the table styling class on the next line:

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
{:class="table table-single table-narrow"}
```

This ensures consistent table styling across the site.

### Writing Style

- Use British English spelling (organisation, colour, behaviour)
- Use clear, concise language appropriate for PM professionals
- Include practical examples where possible
- Cross-link to related content within the site

## File Structure

```
_pages/
├── projects/          # Project management content
│   └── lifecycle/     # Project lifecycle stages
├── programmes/        # Programme management content
├── portfolio/         # Portfolio management content
├── methodologies/     # PM methodologies (PRINCE2, Agile, etc.)
└── best_practice/     # Best practice toolkit

_includes/             # Reusable HTML components
_layouts/              # Page layouts
_data/                 # YAML data files (navigation, etc.)
assets/
├── css/              # Stylesheets
├── js/               # JavaScript
└── img/              # Images
downloads/            # Downloadable templates (DOCX, XLSX)
```

## Colour Scheme

Primary colour: Teal `#3F8F92`

Colour classes available (from `_sass/_colors.scss`):
- `teal-100` through `teal-900`
- `fire-red-100` through `fire-red-900`
- `tangerine-100` through `tangerine-900`
- `stone-100` through `stone-900`
- `banana-100` through `banana-900`
- `purple-100` through `purple-900`
- `royal-blue-100` through `royal-blue-900`

## GitHub Issues

- Epics are labelled with "Epic" label
- Features are labelled with "Feature" label
- Features reference their parent Epic in the issue body
- Use sub-issues API to maintain parent-child relationships

## Commits

Include "Closes #XX" in commit messages to auto-close issues.

Always include co-author line:
```
Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```
