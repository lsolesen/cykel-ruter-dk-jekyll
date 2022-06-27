---
title: &title "National Rute 03: Hærvejsruten - Padborg - Frederikshavn"
seo_title: "National cykelrute 3: Hærvejsruten fra Padborg - Frederikshavn"
permalink: /rute/national-rute-3-haervejsruten/
author: lsolesen
created_at: 2006-07-03T09:48:02+02:00
last_modified_at: 2021-06-20T09:48:02+02:00
header:
  overlay_image: &image https://images.unsplash.com/photo-1452573992436-6d508f200b30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80
  teaser: *image
  caption: *title
  credit: "Photo by Maico Amorim on Unsplash"
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - National Cykelrute 3
  - hele ruten
  - featured
excerpt: "Du kan følge Hærvejsruten 450 km mellem Padborg til Federikshavn. Hærvejsruten er en historisk national cykelrute med rigtig mange oplevelser undervejs. Det fører endda over grænsen til Rendsburg i Tyskland."
#gps:
#  url: https://www.alltrails.com/explore/map/map-da4902c--8
#  id: https://www.alltrails.com/widget/map/map-da4902c--8
#  provider: alltrails
related: "National Cykelrute 3"
distance: 450
asphalt: 351
rubble: 99
---

{{ page.excerpt }}

{% comment %}
hærvejscykelruten
{% endcomment%}

{% assign site_posts = site.routes | where: "tags", page.related | where_exp: "post", "post.url != page.url" | sort: "title" %}

{% if site_posts.size > 0 %}

## Delforløb af {{ page.title }}

<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
{% endif %}

## Kort over {{ page.title }}

{% include maps-ad.md %}
