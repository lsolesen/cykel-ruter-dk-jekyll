---
title: "National Rute N8: Østersøruten"
seo_title: "National cykelrute 8: Østersøruten"
permalink: /rute/national-rute-8-ostersoruten/
number: N8
comment: 	En omlægning og udvidelse af Sydhavsruten (360 km). Rundtur med facon som et liggende 8-tal, der forbinder Syddanmarks øer og landsdele
created_at:  2021-06-08T09:48:02+02:00
last_modified_at: 2021-06-07T09:48:02+02:00
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
  - National Cykelrute 8
  - featured
excerpt: "National Cykelrute 8, Østersøruten, fører dig gennem Sydjylland og derfra over Sydøøerne på en varieret tur gennem landet og langs vandet. Det er en hyggelig rute, som følger Østersøen hele 840 kilometer, og du kan cykle forbi det sydfynske øhav og fortsætter til Falster, Bogø, Møn og Sjælland."
gps:
  url: https://ridewithgps.com/routes/35648842
  id: 35648842
  provider: ridewithgps
distance: 840
asphalt: 798
rubble: 42
---

National Cykelrute 8, Østersøruten, fører dig gennem Sydjylland og derfra over Sydøøerne på en varieret tur gennem landet og langs vandet. Det er en hyggelig rute, som følger Østersøen hele 840 kilometer, og du kan cykle forbi det sydfynske øhav og fortsætte til Falster, Bogø, Møn og Sjælland.

Østersruten på cykel er en naturskøn måde at udforske Østersøens kystlinje på. Ruten snor sig langs kysten med stop ved forskellige seværdigheder undervejs.

Ruten er godt markeret og nem at følge, hvilket gør den til en god mulighed for dem, der er på udkig efter et eventyr.

{% include video provider="own-youtube" id="0Q9bPwMluco" %}

{% comment %}
https://balticseacycleroute.com/wp-content/uploads/2020/06/Oestersoeruten_infobog_2020_web_ny.pdf



https://balticseacycleroute.com/da/
{% endcomment %}

## Hvad er Østersøruten?

Østersøruten er en omlægning og udvidelse af Sydhavsruten (360 km).

En omlægning og udvidelse af Sydhavsruten (360 km).

[VisitFyn](https://www.visitfyn.dk/fyn/cykelferie/fynske-cykelruter) kalder Østersøruten for en signaturrute. De foreslår, at du kan cykle langs hele Østersøruten eller tage den i etaper.

- Østersøruten - Nationalrute 8
- Østersøruten - Etape 1 Sønderborg - Svendborg
- Østersøruten - Etape 2 Svendborg Nakskov
- Østersøruten - Etape 9 Nyborg - Svendborg
- Østersøruten - Etape 10 Svendborg - Assens
- Østersøruten - Etape 11 Assens - Middelfart
- Østersøruten - Etape 11 Middelfart - Christiansfeld

{% assign site_posts = site.routes | where: "tags", "National Cykelrute 8" | where_exp: "post", "post.url != page.url" | sort: "created_at" %}

{% if site_posts.size > 0 %}

## Delforløb af {{ page.title }}

<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
{% endif %}

## Cykelkort over Østersøruten

Hvis du har brug for en fuldstændigt cykelkort over Østersøruten, så kan du tjekke dette glimrende cykelkort fra Bikeline. Der er ikke et bedre kort over ruten.

{% include figure image_path="https://www.scanmaps.dk/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/0/2/0251g04_1.jpg" caption="Kortbogen over Nationalrute 8: Østersøruten dækker cykelture gennem Danmarks smukkeste landskaber fra Lillebælt, det sydlige Fyn, det åbne land på Lolland-Falster og de imponerende kridt klipper på Møn. Kortbogen er på tysk. [Tjek prisen på bogen](https://www.scanmaps.dk/0251g04?G=020){: rel='sponsored nofollow noopener' }" alt="Cykelkort over Nationalrute 8 på Fyn" %}

## Kort over {{ page.title }}

{% include maps-ad.md %}
