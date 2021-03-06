---
title: "National Rute 01: Vestkyststien fra Rudbøl til Skagen"
seo_title: "National Cykelrute 1: Vestkyststien fr Rudbøl til Skagen"
permalink: /rute/national-rute-1-vestkyststien/
created_at: 2006-07-03T09:48:02+02:00
last_modified_at: 2021-06-03T09:48:02+02:00
header:
  overlay_image: &image https://www.videnomfriluftsliv.dk/sites/default/files/styles/content_pic/public/field/image/vestkyststien_1.jpg?itok=gpYyG2kV
  teaser: *image
  caption: "National cykelrute 1: Vestkystien. Billede: [www.videnomfriluftsliv.dk](https://www.videnomfriluftsliv.dk)"
category:
  - National Cykelrute
tags:
  - cykelrute
  - national
  - hele ruten
  - National Cykelrute 1
related: National Cykelrute 1
excerpt: "Vestkystruten følger Nordsøkysten fra Rudbøl til Skagen. Ruten får dig forbi nogle af de største naturoplevelser i Danmark. Næsten en tredjedel af ruten på 560 km følger grusstier, så du skal helst have brede dæk på cyklen. Til gengæld er der ingen stigninger og minimal trafik, hvilket gør cykelstien til en familievenlig rute."
distance: 560
asphalt: 392
rubble: 168
#gps:
#  provider: alltrails
#  id: https://www.alltrails.com/widget/map/map--50487
#  url: https://www.alltrails.com/explore/map/map--50487
feature_row:
  - url: http://vestkystruten.dk/da/forside/
    image_path: https://images.unsplash.com/photo-1519583272095-6433daf26b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
    title: "Vestkystruten"
    alt: "Vestkystruten"
    excerpt: "Vi præsenterer her en del af de cykelruter, der er langs Vestkysten. Du kan vælge imellem Danmarks nationale cykelrute nr. 1 på 560 km. Mulighed for cykelpakkerejser."
    btn_label: "Besøg Vestkystruten"
    btn_class: "btn--success"
---

{{ page.excerpt }}

{% assign site_posts = site.routes | where: "tags", "National Cykelrute 1" | where_exp: "post", "post.url != page.url" | sort: "title" %}

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

## Læs mere om Vestkystruten

{% include feature_row type="left" %}

## Links til Vestkystruten

- [Vestkystruten](http://vestkystruten.dk/da/forside/)

## Kort over {{ page.title }}

{% include maps-ad.md %}
