---
title: &title "National Rute 02: Hanstholm - København"
seo_title: "National cykelute 2: Hanstholm - København"
permalink: /rute/national-rute-2-hanstholm-kobenhavn/
author: dina
created_at: 2006-07-03T09:48:02+02:00
last_modified_at: 2021-06-03T09:48:02+02:00
header:
  overlay_image: &image https://www.ebeltoft.dk/wp-content/uploads/2018/05/ebeltoft-raadhus.jpg
  teaser: *image
  caption: *title
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - National Cykelrute 2
  - hele ruten
excerpt: "Du kan følge national cykelrute 2 420 kilometer fra Hanstholm til København. Det er en varieret tur gennem et typisk dansk landskab; landbrugsjord, små skove og langs stranden. Dette er en god rute, hvis du gerne vil på tværs af Danmark for første gang på cykel."
#gps:
#  url: https://www.alltrails.com/explore/map/map-e4d8163--4
#  id: https://www.alltrails.com/widget/map/map-e4d8163--4
#  provider: alltrails
related: "National Cykelrute 2"
distance: 420
asphalt: 336
rubble: 84
---

**{{ page.excerpt }}**

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
