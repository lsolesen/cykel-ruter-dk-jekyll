---
title: "National Rute 10: Bornholm rundt"
seo_title: "National cykelrute 10: Bornholm rundt"
permalink: /rute/national-rute-10-bornholm-rundt/
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
  - National Cykelrute 10
related: National Cykelrute 10
excerpt: "Bornholm Rundt er National Cykelrute 10. Det er en utrolig smuk cykelrute, der starter nord for Hasle og fører til fiskerlandsbyen i Helligpeder på tidligere flugtveje, nedlagte jernbanelinjer og skovstier. Selvom turen kun er 105 kilometer, så er der bakker nok, og rigtig meget at se på turen. Husk at reservere indkvartering i god tid i højsæsonen."
#gps:
#  url: https://www.alltrails.com/explore/map/map-5463b51--4
#  id: https://www.alltrails.com/widget/map/map-5463b51--4
#  provider: alltrails
distance: 105
asphalt: 94
rubble: 11
---

**{{ page.excerpt }}**

Du kan læse mere om Bornholm Rundt - national cykelrute 10 - på [Wikipedia](https://da.wikipedia.org/wiki/Bornholm_Rundt_(cykelrute)).

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
