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

## Cykelkort over Østersøruten

Hvis du har brug for en fuldstændigt cykelkort over Østersøruten, så kan du tjekke dette glimrende cykelkort fra Bikeline. Der er ikke et bedre kort over ruten.

{% include figure image_path="https://www.scanmaps.dk/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/0/2/0251g04_1.jpg" caption="Kortbogen over Nationalrute 8: Østersøruten dækker cykelture gennem Danmarks smukkeste landskaber fra Lillebælt, det sydlige Fyn, det åbne land på Lolland-Falster og de imponerende kridt klipper på Møn. Kortbogen er på tysk. [Tjek prisen på bogen](https://www.scanmaps.dk/0251g04?G=020){: rel='sponsored nofollow noopener' }" alt="Cykelkort over Nationalrute 8 på Fyn" %}

<div class="naviki"><script src="https://www.naviki.org/typo3conf/ext/naviki/Resources/Public/Js/Util/naviki.util.widget.js?tx_naviki_pi_widget%5Bwayuuid%5D=DD209400-C921-4E50-A33C-9AFDC856542C&tx_naviki_pi_widget%5Blpid%5D=151&tx_naviki_pi_widget%5Blanguage%5D=da"></script></div>

## Kort over {{ page.title }}

{% include maps-ad.md %}
