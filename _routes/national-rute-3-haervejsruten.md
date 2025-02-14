---
title: &title "National Rute N3: Hærvejsruten - Padborg - Frederikshavn"
seo_title: "National cykelrute 3: Hærvejsruten fra Padborg - Frederikshavn"
permalink: /rute/national-rute-3-haervejsruten/
author: lsolesen
number: N3
comment: Går op igennem Jylland nord-sydgående retning
created_at: 2006-06-03T09:48:02+02:00
last_modified_at: 2021-06-20T09:48:02+02:00
header:
  overlay_image: https://images.unsplash.com/photo-1452573992436-6d508f200b30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=630&w=1200&q=80
  teaser: https://images.unsplash.com/photo-1452573992436-6d508f200b30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=60
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
gps:
  url: https://ridewithgps.com/routes/35120789
  id: 35120789
  provider: ridewithgps
distance: 450
asphalt: 351
rubble: 99
---

{{ excerpt }}

{% include video provider="own-youtube" id="O5Toh-e2BRI" %}

{% comment %}
hærvejscykelruten
{% endcomment%}

{% assign site_posts = collections.routes | where: "data.tags", "National Cykelrute 3" | where_exp: "post", "post.url != url" | sort: "created_at" %}

{% if site_posts.size > 0 %}

## Delforløb af {{ title }}

<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
{% endif %}

## Kort over {{ title }}

{% include cykelruter/maps-ad.md %}
