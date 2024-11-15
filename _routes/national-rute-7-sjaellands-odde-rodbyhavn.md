---
title: "National Rute N7: Sjællands Odde-Rødbyhavn"
seo_title: "National cykelrute 7: Sjællands Odde-Rødbyhavn"
permalink: /rute/national-rute-7-sjaellands-odde-rodbyhavn/
number: N7
created_at:  2021-06-07T09:48:02+02:00
last_modified_at: 2021-06-07T09:48:02+02:00
comment: Cykelrute ned gennem Sjælland
author: lsolesen
header:
  overlay_image: https://images.unsplash.com/photo-1595749615311-da60cf2cd86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=600&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1595749615311-da60cf2cd86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - hele ruten
  - National Cykelrute 7
excerpt: "Nationalrute 7 fører fra Sjællands Odde asfalterede veje på Vestsjælland gennem behagelige landsbyer og marker. Ruten er meget børnevenlig, hvis du anser Sommerlandet Sjælland, BonBon Land, Knuthenborg Safari Park og badeland Lalandia som gode attraktioner."
gps:
  url: https://www.outdooractive.com/en/route/bicycle-touring/denmark/national-cykelrute-n7-odden-rodby/245192229/
  id: 245192229
  provider: outdooractive
distance: 240
asphalt: 216
rubble: 24
---

**{{ excerpt }}**

{% include video provider="own-youtube" id="L8L1vB7QgMU" %}

{% assign site_posts = collections.routes | where2: "tags", "National Cykelrute 7" | where_exp: "post", "post.url != url" | sort: "created_at" %}

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
