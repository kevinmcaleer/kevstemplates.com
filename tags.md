---
layout: default
title: Tags
description: Browse all content by tag
permalink: /tags/
---

# Tags

Browse all content organised by tag.

{% assign tag_array = '' | split: ',' %}
{% for page in site.pages %}
  {% for tag in page.tags %}
    {% assign tag_array = tag_array | push: tag %}
  {% endfor %}
{% endfor %}

{% assign unique_tags = tag_array | uniq | sort_natural %}

<div class="mb-4">
  <strong>Quick Links:</strong>
  {% for tag in unique_tags %}
    <a href="#{{ tag | slugify }}" class="badge bg-secondary text-decoration-none me-1 mb-1">{{ tag }}</a>
  {% endfor %}
</div>

---

{% for tag in unique_tags %}
<h2 id="{{ tag | slugify }}">{{ tag }}</h2>
<ul class="list-unstyled">
{% for page in site.pages %}
  {% if page.tags contains tag %}
    <li class="mb-2">
      <a href="{{ page.url }}">{{ page.name | default: page.title }}</a>
      {% if page.description %}<br><small class="text-muted">{{ page.description | truncate: 100 }}</small>{% endif %}
    </li>
  {% endif %}
{% endfor %}
</ul>
{% endfor %}
