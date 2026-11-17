---
layout: default
title: Themes
name: Themes
description: Browse guides and templates by management theme, such as governance, planning, stakeholder engagement and control.
permalink: /themes/
---

# Themes

Browse guides and templates by management theme. Open a theme to see its pages.

{% assign theme_array = '' | split: ',' %}
{% for page in site.pages %}{% for theme in page.themes %}{% assign t = theme | downcase | strip %}{% assign theme_array = theme_array | push: t %}{% endfor %}{% endfor %}
{% assign unique_themes = theme_array | uniq | sort_natural %}

<div class="theme-list">
{%- for theme in unique_themes -%}
{%- assign matches = "" | split: "" -%}
{%- for p in site.pages -%}
{%- assign p_themes = p.themes | join: "|" | downcase | split: "|" -%}
{%- if p_themes contains theme -%}{%- assign matches = matches | push: p -%}{%- endif -%}
{%- endfor %}
<details class="theme-group" id="{{ theme | slugify }}">
<summary><span class="theme-name">{{ theme | capitalize }}</span> <span class="badge badge-light">{{ matches.size }}</span></summary>
<ul class="list-unstyled mt-2">
{%- for p in matches %}
<li class="mb-2"><a href="{{ p.url }}">{{ p.name | default: p.title }}</a>{% if p.description %}<br><small class="text-muted">{{ p.description | truncate: 100 }}</small>{% endif %}</li>
{%- endfor %}
</ul>
</details>
{%- endfor %}
</div>
