---
layout: single
title: Om cykel-ruter.dk
permalink: /om/
author_profile: true
toc: true
sitemap: false
---

Formålet med cykel-ruter.dk er at samle en oversigt over [nationale cykelruter](/nationale-cykelruter/) og [regionale danske cykelruter](/regionale-cykelruter/) et overskueligt sted.

Cykel-ruter.dk er skrevet af cykelbogforfatterne, Lars Olesen og Dina Knudsen, som tidligere har skrevet to cykelbøger, [Østjylland - guidebog til cykeloplevelser]({% link collections.pages, "_pages/cykelguide-oestjylland.md" %}) og [Vestjylland - guidebog til cykeloplevelser]({% link collections.pages, "_pages/cykelguide-vestjylland.md" %}) og lavet 9 cykelruter til VisitVejle.

## Om sitet

{{ site.title }} fortæller om cykelruter i Østjylland, Sydjylland og Vestjylland.

### Ansvarshavende redaktør

Lars Olesen. Ud over at skrive om cykelruter, så ejer Lars også [motionsplan.dk](https://www.motionsplan.dk), [Fodboldens Legestue](https://www.legestue.net), [ifire.dk](https://www.ifire.dk) og [Teambuilder.dk](https://www.teambuilder.dk).

## Materialet på sitet

Det er naturligvis ikke tilladt at bruge materiale fra siden uden skriftlig tilladelse fra forfatterne. En del af teksterne har været bragt i følgende udgivelser, som blev udgivet i samarbejde med Dansk Cyklist-Forbund. (Bøgerne kan desværre ikke længere købes), men du kan låne dem på biblioteket.

- [Østjylland - guidebog til cykeloplevelser](https://bibliotek.dk/da/work/870970-basis%3A26917603)
- [Vestjylland - guidebog til cykeloplevelser](https://bibliotek.dk/da/work/870970-basis%3A26918979)

## Bidrag selv til sitet

Hvis du selv har beskrevet cykelruter, som du gerne vil have online, så andre kan læse dine beskrivelser, så er du meget velkommen til at kontakte os. Vi betaler ikke for eksternt indhold, men du bibeholder selv rettighederne til dine tekster og billeder.

[Lån Østjylland - guidebog til cykeloplevelser](https://bibliotek.dk/da/work/870970-basis%3A26917603){: .btn .btn--large .btn--danger }

[Lån Vestjylland - guidebog til cykeloplevelser](https://bibliotek.dk/da/work/870970-basis%3A26918979){: .btn .btn--large .btn--danger }

Vi bruger billeder fra [Unsplash](https://unsplash.com) og [Pxhere](https://pxhere.com/).

## Tal

- Blogindlæg: {{ collections.posts.size }}
- Ruter: {{ collections.routes.size }}

## Samarbejdspartnere

{% assign ads = advertisers | where2: "tags", "featured" | sort: "image_path" %}

{% include gallery array=ads %}
