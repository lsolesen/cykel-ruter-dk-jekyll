---
layout: single
title: "Cykelruter omkring Århus, Skanderborg, Djursland og Favrskov"
tags:
  - cykelkort
  - cykelguide
  - Århus
  - Skanderborg
  - Djursland
  - Favrskov
last_modified_at: 2020-06-04T16:59:01Z
header:
  overlay_image: &image /assets/images/routes/national-rute-4-aarhus-bryrup.jpg
  teaser: *image
  overlay_filter: 0.2
toc: true
author_profile: true
author: lsolesen
bikemaps:
  - image_path: https://imgcdn.saxo.com/_9788771553017/0x500
    url: https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/cykelkortserie-danmark-4-oestjylland_ukendt_9788771553017
    alt: "#4 Østjylland"
    title: "#4 Østjylland"
  - image_path: https://www.scanmaps.dk/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/_/s/_stlige_jylland_forside.jpg
    url: https://www.scanmaps.dk/0251d60
    alt: "#4 Østlige Jylland"
    title: "#4 Østlige Jylland"
---

Jeg blev i dag spurgt af en journalist med forslag til gode cykelruter omkring Århus, på Djursland, Skanderborg og Favrskov. Det var et spændende spørgsmål, hvor jeg kom til at tænke tilbage på, da jeg skrev cykelguiden om Østjylland.

Det var også en god opgave lige at få samlet ruterne tæt på Århus i et indlæg, så det har jeg gjort her. Der er både nationale cykelruter og regionale cykelruter omkring Århus.

Der er virkelig mange flotte cykelruter i området. Du kan både køre langs vandet ud mod Djursland, og du kan køre sydpå langs vandet. Du kan også køre indenlands i noget af den flotteste natur i Danmark forbi Skanderborg og vestpå.

## Cykelruter med udgangspunkt i Århus

Der er masser af cykelruter i Århus Kommune, og nogle af dem tager sit udgangspunkt i Århus.

- [National cykelrute 4 går fra øst til vest fra Århus Bugt til Vesterhavet]({% link _routes/national-rute-4-aarhus-bryrup.md %})
- [National cykelrute 5 går fra Horsens til Hadsund - fra Norsminde Fjord i syd til Vosnæs i nord i Aarhus Kommune]({% link _routes/national-rute-5-hadsund-horsens.md %})

## Regionale cykelruter i Århus-området

- [Regional cykelrute 11 fra Aarhus til Silkeborg]({% link _routes/regional-rute-11-funder-silkeborg-aarhus.md %})
- [Regional cykelrute 14 fra Odder til Skanderborg]({% link _routes/regional-rute-11-funder-silkeborg-aarhus.md %})
- [Regional cykelrute 16 fra Aarhus til Favrskov, ad Viborgvej]({% link _routes/regional-rute-16-aarhus-viborg.md %})
- [Regional cykelrute 18 fra Aarhus til Favrskov, ad Randersvej](({% link _routes/regional-rute-18-aarhus-norup.md %}))

## Regionale cykelruter omkring Skanderborg

- [Regional cykelrute 15 fra Stilling til Elling](({% link _routes/regional-rute-15-stilling-ejer-elling.md %}))

## Frem og tilbage eller rundtur?

Mange af de skiltede cykelruter i Danmark er en rute, hvor start og slut er forskellige steder. Det gør imidlertid ikke så meget. 

Ofte kører jeg bare samme vej hjem igen. Selvom det lyder banalt, så er det en helt anden oplevelse at køre en cykelrute baglæns.

Du kan også med lidt planlægning sommetider lave forbindelse til en anden rute, så du kan få en rundtur tilbage igen. Det kræver ofte et godt kort at planlægge turen på den måde.

## Planlæg cykelturen omkring Århus

Det er en ret god ide at have et godt cykelkort, hvis du vil ud på en cykeltur omkring Århus, Djurslund, Skanderborg eller Favrskov.

{% include gallery id="bikemaps" %}

Jeg har skrevet et indlæg om, hvordan man [vælger et godt cykelkort](/cykelkort/).

Du kan også downloade ruterne som GPS eller GPX-track og have dem på din telefon. Hvis du går ind på de enkelte ruter, så har jeg forsøgt at tegne ruterne i Alltrails, som er et gratis program, du kan downloade til din Smartphone.

***

{% assign site_posts = site.routes | where: "tags", "Århus" | sort: "title" %}

{% if site_posts.size > 0 %}
## Cykelruter fra Århus
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

{% assign site_posts = site.routes | where: "tags", "Djursland" | sort: "title" %}

{% if site_posts.size > 0 %}
## Cykelruter på Djursland
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

## Ruter i Østjylland samlet på et kort

<iframe class="alltrails" src="https://www.alltrails.com/widget/list/ostjylland--3?u=m" width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="AllTrails: Trail Guides and Maps for Hiking, Camping, and Running"></iframe>

## Tips og tricks til din cykeltur

Hvis du er klar på at kaste dig ud i en cykeltur omkring Århus, Favrskov, Djursland og Skanderborg, så er det bare at kaste dig ud i det. Jeg har skrevet lidt [flere tips til at tage på cykeltur]({% link _posts/2020-06-06-raad-til-cykelturen.md %})