---
title: &title "Banestier: Bilfri cykeltur på nedlagte jernbaner"
permalink: /banestier-i-danmark/
language: da
header:
  featured_image: https://upload.wikimedia.org/wikipedia/commons/c/c4/Kjellerupbanen37Skovvej.JPG
  teaser: https://upload.wikimedia.org/wikipedia/commons/c/c4/Kjellerupbanen37Skovvej.JPG
  caption: *title
tags:
  - banestier
category:
  - Cykelruter
last_modified_at: 2021-06-18T12:21:26Z
---

Danmark har mere end 1.000 km nedlagte jernbaner, som er lavet om til cykelruter og vandreruter. Banestier er typisk relativt flade og bilfri, så helt perfekte til en cykeltur med børnene.

I dette indlæg får du:

- en beskrivelse af banestierne
- hvor finder du banestier, som du kan cykle på?

{% comment %}

## Banestierne er perfekte til børnefamilier

Banestierne er et oplagt sted at starte dit cykeleventyr med børnene. Der er nemlig flere fordele ved banestierne, når du skal med familien på cykeltur.

- **Banestierne er bilfri**
Det er en fornøjelse at køre på de gamle banestier. Der er nemlig ikke adgang for biler! De fleste af cykelruterne på banestierne er lavet, så du kun sjældent kommer i kontakt med den øvrige trafik.
- **Banestierne er flade - med meget få bakker**
De gamle jernbanespor skar igennem landskabet med kun få hældninger. Det skyldes at det blev lettere for lokomotiverne at trække de tunge godsvogne, når de ikke skulle op ad bakkerne. Ruterne der følger de nedlagte jernbaner er derfor ret flade, og derfor er de egnet for alle.

{% endcomment %}

PÅ [alleud.dk](https://alleud.dk/banestier-danmark/) kan du læse endnu mere om banestier, og hvorfor de er oplagte til en cykeltur med børnene.

## Hvordan er belægningen på banestierne?

Belægningen på banestierne kan være meget forskellig. Hvis du skal finde ud af, om en banesti egner sig til cykling, så kan du tjekke rutebeskrivelserne nøje.

På [Wikipedia](https://da.wikipedia.org/wiki/Vandring_og_cykling_p%C3%A5_nedlagte_jernbaner_i_Danmark) kan du læse en klassifikation af banestierne - og hvor godt de egner sig til cykling og vandring.

Endelig så kan du på et godt cykelkort også finde ud af, hvad belægningen er. Jeg har lavet en [guide til at vælge det rigtige cykelkort](/cykelkort/).

## Hvor finder jeg banestier i Danmark?

På [railtrails.dk](http://www.railtrails.dk/banestier.html) og [lgbertelsen.dk](http://www.lgbertelsen.dk/Banestier.html) kan du finde meget mere information om de danske banestier.

På begge hjemmesider kan du finde en omfattende oversigt over forskellige jernbanestier. Du kan finde både rutebeskrivelser og fotos fra mange af jernbanestierne.

Særligt på [railtrails.dk](http://www.railtrails.dk/banestier.html) er opdateret, og du kan bruge mange timer på at dykke ned i hjemmesiden og blive klogere på oprindelsen og udviklingen af de enkelte banestier. Du kan på siden finde mere end 200 banestier, der er kortlagt, og langt de fleste er gode at cykle på.

Du kan finde oversigten over banestier på et [kort her](http://www.railtrails.dk/kort.html). Ruterne er plottet ind i Google Maps. Derfor kan du let se, hvordan ruten nøjagtig forløber.

Hvis du vil se en oversigt over alle banestierne, så tjek denne [oversigt fra railtrails.dk](http://www.railtrails.dk/banestier.html).

## Se beskrivelser af banestier

Herunder kan du se nogle af de beskrivelser, vi har lavet af banestier.

{% assign site_posts = site.routes | where: "tags", "banesti" | sort: "title" %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html %}
  {% endfor %}
</div>
{% endif %}

{% comment %}

## Hvad er de bedste banestier?

### Bedste banestier i Østjylland og Midtjylland

- Silkeborg-Horsens (Bryrupbanestien)
- Viborg-Herning (Alhedestien)
- Vejle-Bindeballe (Bindeballestien)

### Fyns bedste banesti

- Ringe-Korinth

### Bedste banesti på Sjælland

- Banestien Fodsporet fra Slagelse-Næstved-Skælskør

{% endcomment %}

## Konklusion

Ud over banestierne, så findes der også andre [cykelruter til børn]({% link _posts/2020-06-08-cykelrute-born.md %})

Kender du andre gode banestier i Danmark, som er værd at prøve?
