---
layout: default
title: Tags
name: Tags
description: Browse all content by tag
permalink: /tags/
robots: noindex, follow
---

# Tags

Browse all content by tag. Open a tag to see its pages. For downloads, see [Templates](/templates); to find a specific page, use [Search](/search/).

{% assign tag_array = '' | split: ',' %}
{% for page in site.pages %}{% for tag in page.tags %}{% assign t = tag | downcase | strip %}{% assign tag_array = tag_array | push: t %}{% endfor %}{% endfor %}
{% assign unique_tags = tag_array | uniq | sort_natural %}

<div class="theme-list">
{%- for tag in unique_tags -%}
{%- assign matches = "" | split: "" -%}
{%- for p in site.pages -%}
{%- assign p_tags = p.tags | join: "|" | downcase | split: "|" -%}
{%- if p_tags contains tag -%}{%- assign matches = matches | push: p -%}{%- endif -%}
{%- endfor %}
<details class="theme-group" id="{{ tag | slugify }}">
<summary><span class="theme-name">{{ tag }}</span> <span class="badge badge-light">{{ matches.size }}</span></summary>
<ul class="list-unstyled mt-2">
{%- for p in matches %}
<li class="mb-1"><a href="{{ p.url }}">{{ p.name | default: p.title }}</a></li>
{%- endfor %}
</ul>
</details>
{%- endfor %}
</div>
