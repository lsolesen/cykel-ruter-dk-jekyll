---
title: &title "Cykelruter i Vejle-området"
permalink: /cykelruter-i-vejle-omraadet/
header:
  overlay_image: https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=600&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
  caption: *title
  credit: "Photo by Everton Vila on Unsplash"
  overlay_filter: 0.2
tags:
  - cykelruter
category:
  - Cykelruter
last_modified_at: 2011-06-28T16:08:57Z
excerpt: "Vi har beskrevet cykelruter med udgangspunkt i tre campingpladser på Vejle-egnen."
gallery:
  - image_path: https://imgcdn.saxo.com/_9788771553000/0x500
    url: https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/cykelkortserie-danmark-3-sydjylland_ukendt_9788771553000
    alt: "#3 Sydjylland"
    title: "#3Sydjylland"
    rel: sponsored nofollow noopener
  - image_path: https://www.scanmaps.dk/media/catalog/product/cache/2/image/650x650/9df78eab33525d08d6e5fb8d27136e95/c/y/cykelkort_forside_sydlige_jylland.jpg
    url: https://www.scanmaps.dk/0251d61?G=020
    alt: "Cykelkort #7 Sydlige Jylland"
    title: "#7 Sydlige Jylland (nyt kort maj 2021)"
    rel: sponsored nofollow noopener
---

I løbet af sommeren skal vi beskrive nogle cykelruter, der starter fra tre cykelvenlige overnatningssteder:

- Hagen Strand Camping
- DanHostel Vejle, Skibet
- Randbøldal Camping

Cykelruterne skal være målrettet mod dem, der gerne vil bo på et af overnatningsstederne, men stadig cykle. Turene skal være mellem 10-40 kilometer og primært tilgodese børnefamilier og 50+. Cykelruterne skal primært følge de allerede eksisterende cykelruter og mindre trafikerede veje. Det hele skal ende ud i et kort med tre ruter indtegnet og ekstra materiale på web.

Vores opgave er:

- at lave både en kort og en lang beskrivelse af ruterne
- at levere GPS-track af ruterne
- at supplere med billeder langs ruterne
- at give input til kortkonsulenten

Hvis du har nogle input, hører vi meget gerne om det i kommentarerne!

## Cykelkort over området (reklamelinks)

{% include gallery caption="Du kan få mere inspiration til rigtig [gode cykelkort](/cykelkort/) over Danmark i vores guide. Ovenfor kan du se nogle gode cykelkort over Vejle-området." %}

{% assign site_posts = site.routes | where: "tags", "VisitVejle Cykelguide" | sort: "title" %}

## Se alle {{ site_posts.size }} cykelruter i og omkring Vejle området

Her kan du læse om alle cykelruterne omkring Vejle, som vi har beskrevet.

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Andre cykelruter i Danmark

Hvis du er interesseret, så har vi også skrevet om en lang række andre [cykelruter i Danmark](/cykelruter-danmark/).
