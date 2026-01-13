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
- **Containerization**: Docker with docker-compose

## Development Setup

### Using Docker (Recommended)

```bash
cd stacks
docker-compose up
```

This starts a development server at http://localhost:4000 with LiveReload on port 35729.

### Local Jekyll

```bash
bundle install
bundle exec jekyll serve --watch --livereload
```

## Content Guidelines

### Diagrams and Workflows

**IMPORTANT**: Always use Mermaid.js for diagrams, flowcharts, and workflow illustrations. Do NOT use ASCII art or text-based diagrams.

Mermaid is included in the default layout and renders automatically.

**Flowchart Direction**: Prefer **Left-to-Right (LR)** flowcharts over Top-Down (TD). LR flowcharts fit better on the page and are easier to read.

**Flowchart Styling**: Apply the blue class to all nodes for consistent styling:

```markdown
<div class="mermaid">
flowchart LR
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
    classDef blue fill:#108BB9,stroke:none,color:#fff
    class A,B,C,D,E blue
</div>
```

**Note**: List all node IDs in the `class` statement to apply the blue styling.

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
process: initiation  # Lifecycle stage: startup, initiation, planning, delivery, closure
themes: [governance, lifecycle]
color: teal-100  # Bootstrap color class
downloads:  # Optional downloadable files
  - file: filename.docx
    name: Display Name
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
.
├── _config.yml          # Jekyll configuration
├── _data/               # YAML data files
│   ├── navigation.yml   # Top navigation
│   ├── lifecycle.yml    # Project lifecycle stages
│   └── site_navigation.yml  # Hierarchical sidebar navigation
├── _includes/           # Reusable HTML components
├── _layouts/            # Page templates (default, project, programme, portfolio, etc.)
├── _pages/              # Content collections
│   ├── projects/        # Project management templates
│   │   └── lifecycle/   # Project lifecycle stages
│   ├── programmes/      # Programme management content
│   ├── portfolio/       # Portfolio management content
│   ├── methodologies/   # PM methodologies (PRINCE2, Agile, etc.)
│   └── best_practice/   # Best practice toolkit
├── _sass/               # SCSS stylesheets
├── _templates/          # Template definitions
├── assets/              # Static assets (css, img, js)
├── bootstrap/           # Bootstrap framework files
├── downloads/           # Downloadable templates (DOCX, XLSX)
└── stacks/              # Docker configuration
```

## Content Architecture

### Toolkit Hierarchy

1. **Projects** - Project management lifecycle and templates
2. **Programmes** - Programme-level management guidance
3. **Portfolio** - Portfolio management and PMO planning
4. **Best Practice** - Cross-cutting guidance (communication, assurance, training, etc.)

### Colour Scheme

Primary colour: Teal `#3F8F92`

Colour classes available (from `_sass/_colors.scss`):
- `teal-100` through `teal-900`
- `fire-red-100` through `fire-red-900` (Risks and issues)
- `tangerine-100` through `tangerine-900` (Knowledge and learning)
- `stone-100` through `stone-900` (Neutral controls)
- `banana-100` through `banana-900` (People and resources)
- `purple-100` through `purple-900` (Planning and quality)
- `royal-blue-100` through `royal-blue-900` (Finance)

## Adding New Content

### New Template Page

1. Create a new `.md` file in the appropriate `_pages/` subdirectory
2. Add front matter with required fields (layout, name, section)
3. Write content in Markdown
4. If downloadable files are needed, add them to `downloads/` and reference in front matter

### New Downloadable Template

1. Place the file (DOCX, XLSX, PPTX) in `downloads/`
2. Reference in the page's front matter under `downloads:`

### New Navigation Item

Edit `_data/navigation.yml` for top nav or `_data/lifecycle.yml` for project lifecycle.

### Update Site Sidebar Navigation

The site has a collapsible sidebar navigation (`_includes/site_sidebar.html`) with a hierarchical structure inspired by Microsoft TechNet. Edit `_data/site_navigation.yml` to modify the sidebar structure:

```yaml
# Hierarchy: Tomes > Volumes > Books > Sections > Chapters > Pages
- name: Tome Name
  icon: fa-icon-name
  link: /tome-link
  volumes:
    - name: Volume Name
      icon: fa-icon-name
      books:
        - name: Book Name
          icon: fa-icon-name
          sections:
            - name: Section Name
              link: /section-link
```

The sidebar automatically expands to show the current page's location in the hierarchy.

## Key Files

- `_config.yml` - Site configuration and collections
- `_layouts/default.html` - Base HTML template
- `_layouts/project.html` - Project toolkit pages with sidebar
- `_includes/project_toolkit.html` - Project tools button grid
- `_includes/site_sidebar.html` - Collapsible site navigation sidebar
- `_sass/_colors.scss` - Color palette definitions
- `_sass/_sidebar.scss` - Sidebar styling
- `_data/site_navigation.yml` - Hierarchical site navigation structure

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

## Notes

- Mermaid.js is loaded for diagram support - use fenced code blocks with `mermaid` language
- All content should be compatible with Kramdown Markdown parser
- Bootstrap 4.3.1 classes available throughout templates
- Site uses responsive 12-column grid layout
