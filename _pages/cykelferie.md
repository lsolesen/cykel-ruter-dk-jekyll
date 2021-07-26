---
layout: single
title: &title "Cykelferie"
permalink: /cykelferie/
description: "Det er noget helt særligt at være på cykelferie. Du oplever naturen på en helt anden måde end hvis du kører i bil."
excerpt: "Det er noget helt særligt at være på cykelferie. Du oplever naturen på en helt anden måde end hvis du kører i bil."
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1603536764976-e2d8a6d805fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80
  teaser: https://images.unsplash.com/photo-1603536764976-e2d8a6d805fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
  overlay_filter: 0.2
toc: true
created_at: 2019-10-03T09:48:02+02:00
last_modified_at: 2021-04-03T07:48:02+02:00
sidebar:
  title: "Populære sider"
  nav: blog
---

{{ page.excerpt }}

## Artikler i kategorien cykelferie

{% assign site_posts = site.posts | where: "category", "Cykelferie" | sort: "title" %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Artikler med tagget cykelferie

{% assign site_posts = site.posts | where: "tags", "cykelferie" | sort: "title" %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}
