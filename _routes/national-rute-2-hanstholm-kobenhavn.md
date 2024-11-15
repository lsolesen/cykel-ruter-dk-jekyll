---
title: &title "National Rute N2: Hanstholm - København"
seo_title: "National cykelute 2: Hanstholm - København"
permalink: /rute/national-rute-2-hanstholm-kobenhavn/
number: N2
author: dina
comment: "Øst-vestgående cykelrute"
created_at: 2006-06-02T09:48:02+02:00
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
gps:
  url: https://www.outdooractive.com/en/route/bicycle-touring/national-cykelrute-2-hanstholm-kobenhavn/245190403/
  id: 245190403
  provider: outdooractive
distance: 420
asphalt: 336
rubble: 84
---

**{{ excerpt }}**

{% include video provider="own-youtube" id="HFFbNYMYlYQ" %}

{% assign site_posts = collections.routes | where2: "tags", "National Cykelrute 2" | where_exp: "post", "post.url != url" | sort: "created_at" %}

{% if site_posts.size > 0 %}

## Delforløb af {{ title }}

<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
{% endif %}

## Kort over {{ title }}

{% include maps-ad.md %}
