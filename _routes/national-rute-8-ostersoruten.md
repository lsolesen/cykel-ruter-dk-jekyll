---
title: "National Rute 08: Østersøruten"
seo_title: "National cykelrute 8: Østersøruten"
permalink: /rute/national-rute-8-ostersoruten/
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
  - National Cykelrute 8
related: National Cykelrute 8
excerpt: "National Cykelrute 8, Østersøruten, fører dig gennem Sydjylland og derfra over Sydøøerne på en varieret tur gennem landet og langs vandet. Det er en hyggelig rute, som følger Østersøen hele 840 kilometer, og du kan cykle forbi det sydfynske øhav og fortsætte til Falster, Bogø, Møn og Sjælland."
#gps:
#  url: https://www.alltrails.com/explore/map/map-5463b51--4
#  id: https://www.alltrails.com/widget/map/map-5463b51--4
#  provider: alltrails
distance: 840
asphalt: 798
rubble: 42
---

**{{ page.excerpt }}**

En omlægning og udvidelse af Sydhavsruten (360 km).

[VisitFyn](https://www.visitfyn.dk/fyn/cykelferie/fynske-cykelruter) kalder Østersøruten for en signaturrute. De foreslår, at du kan cykle langs hele Østersøruten eller tage den i etaper.

- Østersøruten - Nationalrute 8
- Østersøruten - Etape 1 Sønderborg - Svendborg
- Østersøruten - Etape 2 Svendborg Nakskov
- Østersøruten - Etape 9 Nyborg - Svendborg
- Østersøruten - Etape 10 Svendborg - Assens
- Østersøruten - Etape 11 Assens - Middelfart
- Østersøruten - Etape 11 Middelfart - Christiansfeld

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
