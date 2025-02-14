---
title: "National Rute N4: Søndervig-København"
seo_title: "National cykelrute 4: Søndervig-København"
permalink: /rute/national-rute-4-sondervig-kobenhavn/
number: N4
comment: Øst-vestgående cykelrute. Omlagt i 2019. Løber nu over Samsø i stedet for den nedlagte færgerute Aarhus - Kalundborg.
last_modified_at: 2021-06-04T09:48:02+02:00
created_at:  2006-06-04T09:48:02+02:00
author: dina
header:
  overlay_image: &image /assets/images/routes/national-rute-4-aarhus-bryrup.jpg
  teaser: *image
  caption: "Stemningsbillede fra ruten mellem Århus og Bryrup"
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - National Cykelrute 4
  - hele ruten
excerpt: "Nationalrute 4 fører dig gennem hele Danmark fra vest til øst. Du starter i det flade vestlige Jylland, cykler over Midtjyllands højland, Danmarks største sø og skovområde, og ender i København. Landskabet langs cykelruten er meget afvekslende, så du skal vælge en cykel og nogle dæk, der kan få dig komfortabelt gennem skove, forbi søer, op og ned ad bakker og markveje."
gps:
  url: https://www.outdooractive.com/en/route/hiking-route/nationalrute-4-sondervig-til-kobenhavn/245189414/
  id: 245189414
  provider: outdooractive
distance: 108
asphalt: 88
rubble: 20
---

**{{ excerpt }}**

{% include video provider="own-youtube" id="65XxvRAV0gk" %}

{% assign site_posts = collections.routes | where: "data.tags", "National Cykelrute 4" | where_exp: "post", "post.url != url" | sort: "created_at" %}

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
