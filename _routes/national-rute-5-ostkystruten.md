---
title: &title "National Rute N5: Østkystruten fra Sønderborg - Skagen"
seo_title: "National cykelrute 5: Østkystruten fra Sønderborg - Skagen"
permalink: /rute/national-rute-5-ostkystruten/
number: N5
comment: Følger Jyllands østkyst nord-sydgående retning
created_at:  2006-06-05T09:48:02+02:00
last_modified_at: 2021-06-07T09:48:02+02:00
author: dina
header:
  overlay_image: &image /assets/images/routes/national-rute-5-roende-aarhus.jpg
  teaser: *image
  caption: *title
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - hele ruten
  - National Cykelrute 5
  - featured
excerpt: "På Østkystrutens 650 km cykler du fra Sønderborg til Hulsig og igennem adskillige gamle fjordbyer. Turen er velegnet til mange stop undervejs, fordi du hele tiden kommer forbi spændende byer. Ruten er relativt ujævn, men også utrolig smuk. Du skal bruge en alsidig cykel, og du skal være i god form, hvis du vil gennem hele ruten på en cykelferie."
gps:
  url: https://www.outdooractive.com/en/route/hiking-route/denmark/national-cykelrute-n5-ostkystruten/245192061/
  id: 245192061
  provider: outdooractive
distance: 650
asphalt: 585
rubble: 65
---

**{{ page.excerpt }}**

{% include video provider="own-youtube" id="oh5U8PtXGC8" %}

{% assign site_posts = site.routes | where: "tags", "National Cykelrute 5" | where_exp: "post", "post.url != page.url" | sort: "created_at" %}

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
