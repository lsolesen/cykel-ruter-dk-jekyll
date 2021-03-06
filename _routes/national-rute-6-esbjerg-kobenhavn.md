---
title: "National Rute 06: Esbjerg - København"
seo_title: "National cykelrute 6: Esbjerg - København"
permalink: /rute/national-rute-6-esbjerg-koebenhavn/
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
  - National Cykelrute 6
related: National Cykelrute 6
excerpt: "Nationalrute 6 er en ret direkte rute mellem Esbjergg og København. Den går direkte over Jylland, Fyn og Sjælland til København. Du kan opleve danske landskaber med sorte og hvide køer i Jylland, bølgende kornmarker på Fyn og Sjælland. Næsten hele ruten på 330 km er asfalteret. Kun på Sjælland vil du opleve at ruten er ujævn og bakket."
#gps:
#  url: https://www.alltrails.com/explore/map/map-5463b51--4
#  id: https://www.alltrails.com/widget/map/map-5463b51--4
#  provider: alltrails
distance: 330
asphalt: 304
rubble: 26
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
