---
title: "National Rute N1: Vestkystruten fra Rudbøl til Skagen"
seo_title: "National Cykelrute 1: Vestkyststien fra Rudbøl til Skagen"
permalink: /rute/national-rute-1-vestkyststien/
number: N1
comment: Følger Jyllands Vestkyst i nord-sydgående retning
created_at: 2006-06-01T09:48:02+02:00
last_modified_at: 2021-06-03T09:48:02+02:00
# TODO
#header:
#  overlay_image: &image https://www.videnomfriluftsliv.dk/sites/default/files/styles/content_pic/public/field/image/vestkyststien_1.jpg?itok=gpYyG2kV
#  teaser: *image
#  caption: "National cykelrute 1: Vestkystruten. Billede: [www.videnomfriluftsliv.dk](https://www.videnomfriluftsliv.dk)"
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - hele ruten
  - National Cykelrute 1
  - featured
excerpt: "Vestkystruten følger Nordsøkysten fra Rudbøl til Skagen. Ruten får dig forbi nogle af de største naturoplevelser i Danmark. Næsten en tredjedel af ruten på 560 km følger grusstier, så du skal helst have brede dæk på cyklen. Til gengæld er der ingen stigninger og minimal trafik, hvilket gør cykelstien til en familievenlig rute."
distance: 560
asphalt: 392
rubble: 168
gps:
  provider: outdooractive
  id: 245188423
  url: https://www.outdooractive.com/en/route/bicycle-touring/denmark/national-cykelrute-1-vestkystruten-fra-rudbol-til-skagen/245188423/
feature_row:
  - url: https://vestkystruten.dk/
    image_path: https://images.unsplash.com/photo-1519583272095-6433daf26b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
    title: "Vestkystruten"
    alt: "Vestkystruten"
    excerpt: "Vi præsenterer her en del af de cykelruter, der er langs Vestkysten. Du kan vælge imellem Danmarks nationale cykelrute nr. 1 på 560 km. Mulighed for cykelpakkerejser."
    btn_label: "Besøg Vestkystruten"
    btn_class: "btn--success"
gallery:
  - image_path: https://www.scanmaps.dk/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/0/2/0251a67.jpg
    url: https://www.scanmaps.dk/0251a67?G=020
    alt: "Nationalrute 1: Vestkystruten. Nordseeküsten-Radweg Teil 4 - Tønder til Skagen"
    title: "Nationalrute 1: Vestkystruten. Nordseeküsten-Radweg Teil 4 - Tønder til Skagen"
    excerpt: "Vestkystruten er en del af den internationale cykelrute Eurovelo 12 Nordsøcykelruten på i alt 5.942 km. Den nationale cykelrute, Vestkystruten, udgør i alt 560 km langs Danmarks Vestkyst."
    btn_label: "Tjek prisen"
    btn_class: "btn--success"
    rel: sponsored nofollow noopener
---

Vestkystruten følger Nordsøkysten fra Rudbøl til Skagen. Ruten får dig forbi nogle af de største naturoplevelser i Danmark.

Næsten en tredjedel af ruten på 560 km følger grusstier, så du skal helst have brede dæk på cyklen. Til gengæld er der ingen stigninger og minimal trafik, hvilket gør cykelstien til en familievenlig rute.

{% include video provider="own-youtube" id="F01p9oCJU78" %}

{% assign site_posts = collections.routes | where2: "tags", "National Cykelrute 1" | where_exp: "post", "post.url != url" | sort: "created_at" %}

{% if site_posts.size > 0 %}

## Delforløb af National Cykelrute 1: Vestkyststien

<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
{% endif %}

## Hvor lang er Vestkystruten?

Vestkystruten er i alt 560 kilometer fra Skagen til Rudbøl.

Danmarks nationale cykelrute 1, Vestkystruten, går langs hav, skov og fjord, den danske Nordsøkyst og UNESCOS verdensnaturarv Vadehavet. Det er en af Danmarks længste skiltede cykelruter og går gennem noget af det skønneste og mest varierede natur i Danmark.

## Køb kort over Vestkyststien

{% include gallery caption="Hvis du leder efter en guidebøger til cykling, så kan du kigge på [Saxo](https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/products/search?query=cykelruter){: rel='sponsored nofollow noopener' } og på [Nordisk Korthandel](https://www.scanmaps.dk/?G=020){: rel='sponsored nofollow noopener' }." %}

Tjek også vores artikel om [cykelkort over Danmark](/cykelkort/).

## Læs mere om Vestkystruten

{% include feature_row type="left" %}

## Links til Vestkystruten

- [Vestkystruten](https://vestkystruten.dk/)

## Kort over {{ title }}

{% include maps-ad.md %}
