---
layout: default
title: Themes
name: Themes
description: Browse all content by management theme
permalink: /themes/
---

# Themes

Browse all content organised by management theme.

{% assign theme_array = '' | split: ',' %}
{% for page in site.pages %}
  {% for theme in page.themes %}
    {% assign theme_array = theme_array | push: theme %}
  {% endfor %}
{% endfor %}

{% assign unique_themes = theme_array | uniq | sort_natural %}

<div class="mb-4">
  <strong>Quick Links:</strong>
  {% for theme in unique_themes %}
    <a href="#{{ theme | slugify }}" class="badge bg-primary text-decoration-none me-1 mb-1">{{ theme }}</a>
  {% endfor %}
</div>

---

{% for theme in unique_themes %}
<h2 id="{{ theme | slugify }}">{{ theme | capitalize }}</h2>
<ul class="list-unstyled">
{% for page in site.pages %}
  {% if page.themes contains theme %}
    <li class="mb-2">
      <a href="{{ page.url }}">{{ page.name | default: page.title }}</a>
      {% if page.description %}<br><small class="text-muted">{{ page.description | truncate: 100 }}</small>{% endif %}
    </li>
  {% endif %}
{% endfor %}
</ul>
{% endfor %}
