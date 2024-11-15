---
title: &title "National Rute N9: Helsingør-Gedser"
seo_title: "National cykelrute 9: Helsingør-Gedser"
permalink: /rute/national-rute-9-helsingoer-gedser/
created_at:  2021-06-09T09:48:02+02:00
last_modified_at: 2021-06-07T09:48:02+02:00
comment: Cykelrute ned gennem Sjælland
author: lsolesen
number: N9
header:
  overlay_image: https://images.unsplash.com/photo-1595749615311-da60cf2cd86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=600&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1595749615311-da60cf2cd86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - hele ruten
  - National Cykelrute 9
excerpt: "Nationalrute 9 er den danske del af den internationale langdistance-cykelrute fra Berlin - København. Ruten dækker 290 km af Danmarks baltiske kyst. Hvis du vil hele vejen til Berlin, så kan du tage en færge fra Gedser til Rostock i Tyskland."
gps:
  url: https://www.outdooractive.com/en/route/bicycle-touring/national-cykelrute-9-helsingor-gedser/245189880/
  id: 245189880
  provider: outdooractive
distance: 290
asphalt: 267
rubble: 23
---

Nationalrute 9 er den danske del af den internationale langdistance-cykelrute fra Berlin til København. Ruten dækker 290 km af Danmarks baltiske kyst. Hvis du vil hele vejen til Berlin, så kan du tage en færge fra Gedser til Rostock i Tyskland.

## Ruten går fra Helsingør til Gedser

Ruten går fra Helsingør til Gedser via København. Det er en populær rute for turister, og der er mange interessante seværdigheder undervejs. Nogle af højdepunkterne er bl.a:

- Den Lille Havfrue i København
- Christiansborg Slot
- Frederiksborg Slot
- Kronborg Slot (Hamlet
- Gedser Odde (det sydligste punkt i Danmark)

{% include video provider="own-youtube" id="5j4gJVmkVFI" %}

{% comment %}
2. Rutens historie

3. Hvad man kan se og gøre undervejs

4. Hvordan man kommer dertil

5. Tips til cyklister

6. Hvor man kan bo og spise


{% endcomment %}

{% assign site_posts = collections.routes | where2: "tags", "National Cykelrute 9" | where_exp: "post", "post.url != url" | sort: "created_at" %}

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
