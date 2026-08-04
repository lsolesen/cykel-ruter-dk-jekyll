---
title: "Guide til cykeloplevelser i Østjylland og Vestjylland"
excerpt: "Vi har skrevet en guide til cykeloplevelser i Østjylland og Vestjylland."
category:
  - Inspiration
tags:
  - cykelruter
last_modified_at: 2019-04-26T16:59:01Z
permalink: /guide-til-cykeloplevelser-i-ost-og-vestjylland/
redirect_from:
  - /guide-til-cykeloplevelser-i-øst-og-vestjylland/
header:
  overlay_image: https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=600&w=1200&q=10
  teaser: https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=10
  caption: "Photo by Coen van den Broek on Unsplash"
  overlay_filter: 0.2
---

![Forside til guide til cykeloplevelser i Øst- og Vestjylland](/assets/images/baggrundmedforsider_0.jpg)

Vi cyklede rigtig meget i sommeren 2006. Både fordi vi kan lide det, men også fordi vi skulle skrive en cykelguide over Midtjylland. Efter at have hjulet afsted op og ned ad bakke og beskrevet rigtig mange cykelruter, så endte det faktisk med to bøger. Det blev til Guidebog til cykeloplevelser for både Øst- og Vestjylland. Vi er ret godt tilfredse med resultatet.

<del>Du kan købe bøgerne på [Dansk Cyklistforbunds hjemmeside](https://www.cyklistforbundet.dk//).</del>

{% assign site_posts = site.routes | where: "tags", "Guidebog Østjylland" | sort: "title" %}

{% if site_posts.size > 0 %}
## {{ site_posts.size }} cykelruter i Østjylland
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

[Lån Østjylland - guidebog til cykeloplevelser](https://bibliotek.dk/da/work/870970-basis%3A26917603){: .btn .btn--large .btn--danger }

{% assign site_posts = site.routes | where: "tags", "Guidebog Vestjylland" | sort: "title" %}

{% if site_posts.size > 0 %}
## {{ site_posts.size }} cykelruter i Vestjylland
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

[Lån Vestjylland - guidebog til cykeloplevelser](https://bibliotek.dk/da/work/870970-basis%3A26918979){: .btn .btn--large .btn--danger }

## Køb cykelkort til Østjylland og Vestjylland

Du kan få mere inspiration til rigtig [gode cykelkort](/cykelkort/) over Danmark i vores samlede guide. Her er de mest relevante cykelkort over Jylland:

{% include affiliate-box.html type="product" item=site.data.affiliates.maps.scanmaps_regional.oestlige_jylland view="card" %}

{% include affiliate-box.html type="product" item=site.data.affiliates.maps.scanmaps_regional.vestlige_jylland view="card" %}

{% include affiliate-box.html type="product" item=site.data.affiliates.maps.scanmaps_regional.nordlige_jylland view="card" %}

{% include affiliate-box.html type="product" item=site.data.affiliates.maps.scanmaps_regional.sydlige_jylland view="card" %}

## Andre cykelruter i Danmark

Hvis du er interesseret, så har vi også skrevet om en lang række andre [cykelruter i Danmark](/cykelruter-danmark/).