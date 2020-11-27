---
title: "Cykelruter i Vejle-området"
tags:
  - cykelferie
last_modified_at: 2011-06-28T16:08:57Z
excerpt: "Vi har beskrevet cykelruter med udgangspunkt i tre campingpladser på Vejle-egnen."
gallery:
  - image_path: https://imgcdn.saxo.com/_9788771553000/0x500
    url: https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/cykelkortserie-danmark-3-sydjylland_ukendt_9788771553000
    alt: "#3 Sydjylland"
    title: "#3Sydjylland"
header:
  overlay_image: https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80
  teaser: https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80
  caption: "Photo by Everton Vila on Unsplash"
  overlay_filter: 0.2
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

{% include gallery %}

## Se alle cykelruterne i Vejle området

{% assign site_posts = site.routes | where: "tags", "VisitVejle Cykelguide" | sort: "title" %}

{% if site_posts.size > 0 %}
<h2>{{ site_posts.size }} cykelruter omkring Vejle</h2>
<div class="grid__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}
