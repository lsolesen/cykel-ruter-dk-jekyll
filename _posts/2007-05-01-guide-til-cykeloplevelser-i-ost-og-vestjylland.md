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
gallery:
  - image_path: https://imgcdn.saxo.com/_9788771552980/0x500
    url: https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/cykelkortserie-danmark-1-nordjylland_ukendt_9788771552980
    alt: "#1 Nordjylland"
    title: "#1 Nordjylland"
    rel: sponsored nofollow noopener
  - image_path: https://imgcdn.saxo.com/_9788771552997/0x500
    url: https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/cykelkortserie-danmark-2-vestjylland-og-limfjordslandet_ukendt_9788771552997
    alt: "#2 Vestjylland og Limfjordslandet"
    title: "#2 Vestjylland og Limfjordslandet"
    rel: sponsored nofollow noopener
  - image_path: https://imgcdn.saxo.com/_9788771553000/0x500
    url: https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/cykelkortserie-danmark-3-sydjylland_ukendt_9788771553000
    alt: "#3 Sydjylland"
    title: "#3Sydjylland"
    rel: sponsored nofollow noopener
  - image_path: https://imgcdn.saxo.com/_9788771553017/0x500
    url: https://www.partner-ads.com/dk/klikbanner.php?partnerid=28187&bannerid=43264&htmlurl=https://www.saxo.com/dk/cykelkortserie-danmark-4-oestjylland_ukendt_9788771553017
    alt: "#4 Østjylland"
    title: "#4 Østjylland"
    rel: sponsored nofollow noopener
header:
  overlay_image: https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=630&w=1200&q=80
  teaser: https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=300&w=400&q=60
  caption: "Photo by Coen van den Broek on Unsplash"
  overlay_filter: 0.2
---

![Forside til guide til cykeloplevelser i Øst- og Vestjylland](/assets/images/baggrundmedforsider_0.jpg)

Vi cyklede rigtig meget i sommeren 2006. Både fordi vi kan lide det, men også fordi vi skulle skrive en cykelguide over Midtjylland. Efter at have hjulet afsted op og ned ad bakke og beskrevet rigtig mange cykelruter, så endte det faktisk med to bøger. Det blev til Guidebog til cykeloplevelser for både Øst- og Vestjylland. Vi er ret godt tilfredse med resultatet.

<del>Du kan købe bøgerne på [Dansk Cyklistforbunds hjemmeside](https://www.cyklistforbundet.dk//).</del>

{% assign site_posts = collections.routes | where: "data.tags", "Guidebog Østjylland" | sort: "title" %}

{% if site_posts.size > 0 %}
## {{ site_posts.size }} cykelruter i Østjylland
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

[Lån Østjylland - guidebog til cykeloplevelser](https://bibliotek.dk/da/work/870970-basis%3A26917603){: .btn .btn--large .btn--danger }

{% assign site_posts = collections.routes | where: "data.tags", "Guidebog Vestjylland" | sort: "title" %}

{% if site_posts.size > 0 %}
## {{ site_posts.size }} cykelruter i Vestjylland
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endif %}

[Lån Vestjylland - guidebog til cykeloplevelser](https://bibliotek.dk/da/work/870970-basis%3A26918979){: .btn .btn--large .btn--danger }

## Køb cykelkort til Østjylland og Vestjylland (reklamelinks)

{% include gallery layout="half" caption="Køb cykelkort til Østjylland og Vestjylland" %}

## Andre cykelruter i Danmark

Hvis du er interesseret, så har vi også skrevet om en lang række andre [cykelruter i Danmark](/cykelruter-danmark/).
