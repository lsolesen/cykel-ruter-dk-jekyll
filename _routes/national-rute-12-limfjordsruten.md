---
title: "National Rute N12: Limfjordsruten - Rundtur omkring Limfjorden"
seo_title: "National cykelrute 12: Limfjordsruten - Limfjorden rundt"
permalink: /rute/national-rute-12-limfjordsruten/
comment: Følger Limfjordens nord- og sydlige bredder fra Hals i Øst til Thyborøn i vest
number: N12
created_at: 2021-06-12T09:48:02+02:00
last_modified_at: 2021-06-03T09:48:02+02:00
header:
  overlay_image: &image https://files.guidedanmark.org/files/443/443_310122.jpg
  teaser: *image
  caption: "Billede fra Visitmors"
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - National Cykelrute 12
  - hele ruten
excerpt: National cykelrute 12 har et forløb hele vejen rundt om Limfjorden. Cykelturen kan opdeles i mindre etaper, hvis du synes, det er for langt med hele turen på en gang.
gps:
  url: https://www.outdooractive.com/en/route/bicycle-touring/nationalrute-12-limfjordsruten/245190196/
  id: 245190196
  provider: outdooractive
distance: 610
asphalt: 549
rubble: 61
---

**{{ page.excerpt }}**

{% include video provider="own-youtube" id="-02XRLSgBuY" %}

National cykelrute 12 har et forløb hele vejen rundt om Limfjorden. Cykelturen kan opdeles i mindre etaper, hvis du synes, det er for langt med hele turen på en gang.

Området omkring Limfjorden er fremragende at cykle i, og der er rigeligt med muligheder for gode afstikkere fra ruten. Fjorden er smukkest om sommeren, hvor den også er meget populær hos fugle, dykkere og sejlere.

Limfjordsruten dækker over 610 km på forskellige cykelstier og sideruter - og langt det meste af ruten er asfalteret. Limfjorden krydses med færger ved mundingen af ​​Kattegat og Thyborønskanalen i vest.

Hvis du vil besøge de små øer i Limfjorden, så kan du sagtens tage en afstikker undervejs på turen med mindre færger til øerne Egholm, Livø, Fur, Mors og Venø.

{% assign site_posts = site.routes | where: "tags", "National Cykelrute 12" | where_exp: "post", "post.url != page.url" | sort: "created_at" %}

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
