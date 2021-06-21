---
title: "National Rute 07: Sjællands Odde-Rødbyhavn"
seo_title: "National cykelrute 7: Sjællands Odde-Rødbyhavn"
permalink: /rute/national-rute-7-sjaellands-odde-rodbyhavn/
created_at:  2021-06-07T09:48:02+02:00
last_modified_at: 2021-06-07T09:48:02+02:00
author: lsolesen
header:
  overlay_image: https://images.unsplash.com/photo-1595749615311-da60cf2cd86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80
  teaser: https://images.unsplash.com/photo-1595749615311-da60cf2cd86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - hele ruten
  - National Cykelrute 7
related: National Cykelrute 7
excerpt: "Nationalrute 7 fører fra Sjællands Odde asfalterede veje på Vestsjælland gennem behagelige landsbyer og marker. Ruten er meget børnevenlig, hvis du anser Sommerlandet Sjælland, BonBon Land, Knuthenborg Safari Park og badeland Lalandia som gode attraktioner."
#gps:
#  url: https://www.alltrails.com/explore/map/map-5463b51--4
#  id: https://www.alltrails.com/widget/map/map-5463b51--4
#  provider: alltrails
distance: 240
asphalt: 216
rubble: 24
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
