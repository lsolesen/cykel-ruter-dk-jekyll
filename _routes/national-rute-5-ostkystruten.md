---
title: &title "National Rute 05: Østkystruten fra Sønderborg - Skagen"
seo_title: "National cykelrute 5: Østkystruten fra Sønderborg - Skagen"
permalink: /rute/national-rute-5-ostkystruten/
created_at:  2006-06-07T09:48:02+02:00
last_modified_at: 2012-06-07T09:48:02+02:00
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
related: National Cykelrute 5
excerpt: "På Østkystrutens 650 km cykler du fra Sønderborg til Hulsig og igennem adskillige gamle fjordbyer. Turen er velegnet til mange stop undervejs, fordi du hele tiden kommer forbi spændende byer. Ruten er relativt ujævn, men også utrolig smuk. Du skal bruge en alsidig cykel, og du skal være i god form, hvis du vil gennem hele ruten på en cykelferie."
#gps:
#  url: https://www.alltrails.com/explore/map/map-5463b51--4
#  id: https://www.alltrails.com/widget/map/map-5463b51--4
#  provider: alltrails
distance: 650
asphalt: 585
rubble: 65
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
