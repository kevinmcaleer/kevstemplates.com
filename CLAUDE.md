# CLAUDE.md - Project Guide for kevstemplates.com

## Project Overview

This is a Jekyll-based static website that provides project management templates, quickstart guides, and process guidance. The site is hosted at kevstemplates.com.

## Tech Stack

- **Static Site Generator**: Jekyll
- **CSS Framework**: Bootstrap 4.3.1
- **Styling**: Custom SCSS in `_sass/`
- **JavaScript**: jQuery 3.2.1, Popper.js, Bootstrap JS
- **Diagrams**: Mermaid.js support
- **Icons**: Font Awesome
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

## Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _data/               # YAML data files (navigation.yml, lifecycle.yml)
├── _includes/           # Reusable HTML components (24 files)
├── _layouts/            # Page templates (default, project, programme, portfolio, etc.)
├── _pages/              # Content collections
│   ├── projects/        # Project management templates (27 files)
│   ├── programmes/      # Programme management toolkit
│   ├── portfolio/       # Portfolio management toolkit
│   └── best_practice/   # Best practice guidance
├── _sass/               # SCSS stylesheets
├── _templates/          # Template definitions
├── assets/              # Static assets (css, img, js)
├── bootstrap/           # Bootstrap framework files
├── downloads/           # Downloadable Office templates (DOCX, XLSX)
└── stacks/              # Docker configuration
```

## Content Architecture

### Toolkit Hierarchy

1. **Projects** - Project management lifecycle and templates
2. **Programmes** - Programme-level management guidance
3. **Portfolio** - Portfolio management and PMO planning
4. **Best Practice** - Cross-cutting guidance (communication, assurance, training, etc.)

### Front Matter Format

All content pages use Jekyll front matter:

```yaml
---
layout: project          # Options: project, programme, portfolio, product_description, page
name: Template Name      # Display name
section: Project         # Options: Project, Programmes, Portfolio, Best Practice
process: initiation      # Lifecycle stage: startup, initiation, planning, delivery, closure
description: Brief description
tags: [tag1, tag2]
themes: [governance, lifecycle]
color: teal-100          # Bootstrap color class
downloads:               # Optional downloadable files
  - file: filename.docx
    name: Display Name
---
```

### Color System

Colors are defined in `_sass/_colors.scss`:
- **Teal**: Primary project management (teal-100, teal-300)
- **Fire-Red**: Risks and issues
- **Tangerine**: Knowledge and learning
- **Banana**: People and resources
- **Purple**: Planning and quality
- **Royal-Blue**: Finance
- **Stone**: Neutral controls

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

## Jekyll Conventions

- Content files use `.md` extension with YAML front matter
- Layouts extend `default.html` base template
- Include components with `{% include component.html %}`
- Access data files with `{{ site.data.navigation }}`
- Use Liquid templating for dynamic content

## Build Output

- Generated site outputs to `_site/` (gitignored)
- SASS cache in `.sass-cache/` (gitignored)
- Jekyll cache in `.jekyll-cache/` (gitignored)

## Key Files

- `_config.yml` - Site configuration and collections
- `_layouts/default.html` - Base HTML template
- `_layouts/project.html` - Project toolkit pages with sidebar
- `_includes/project_toolkit.html` - Project tools button grid
- `_includes/site_sidebar.html` - Collapsible site navigation sidebar
- `_sass/_colors.scss` - Color palette definitions
- `_sass/_sidebar.scss` - Sidebar styling
- `_data/site_navigation.yml` - Hierarchical site navigation structure

## Common Tasks

### Preview site locally
```bash
cd stacks && docker-compose up
```

### Add a new project template
1. Create `_pages/projects/new_template.md`
2. Set layout to `project` and section to `Project`
3. Add content in Markdown format

### Modify navigation
Edit `_data/navigation.yml` for main nav or `_data/lifecycle.yml` for project lifecycle.

### Update styling
Edit SCSS files in `_sass/` directory. Changes are compiled automatically in development.

## Notes

- Mermaid.js is loaded for diagram support - use fenced code blocks with `mermaid` language
- All content should be compatible with Kramdown Markdown parser
- Bootstrap 4.3.1 classes available throughout templates
- Site uses responsive 12-column grid layout
