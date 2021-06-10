---
title: &title "Gearing beregner cykling"
permalink: /gearing-beregner-cykling/
language: da
header:
  overlay_image: https://images.unsplash.com/photo-1421429167374-8fc8ab6d0f66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80
  teaser: https://images.unsplash.com/photo-1421429167374-8fc8ab6d0f66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
tags:
  - hastighed
category:
  - Beregner
last_modified_at: 2021-05-17T18:21:26Z
---

Cyklens gearing udtrykkes ved det såkaldte geartal. Geartallet stammer oprindeligt fra de gamle væltepetere, hvor transmissionen gik direkte fra pedalerne til det trækkende forhjul. Forhjulets størrelse var af stor betydning for gearingen, hvorfor dets diameter blev inddraget i geartallet. Geartallet udtrykkes i engelske tommer der er 2,54 cm.

Geartal = Diameter * Klinge/Bagkrans

Geartallet for et 27″ hjul med kæden på en klinge med 42 tænder og bagerste tandhjul på 15 er således 75,6 (eng. tomme).

Udveksling = Klinge/Bagkrans

Forholdet mellem klinge og bagkrans beskriver udvekslingen, hvor det forudsættes at forholdet mellem de to tandhjul kan udtrykkes i antal tænder. Meter pr. pedalomdrejning = PI * 2,54 * Geartal/100

PI er 3,1416 og konstanten 2,54 er omregning fra engelsk tomme til centimeter. Formlen beskriver hjulets omkreds ganget med udvekslingen.

Hastighed ved given gearing og kadence = Meter pr. pedalomdrejning * 60 * Kadence / 1000

Hastigheden er beregnet som kilometer (1000) i timen (60).

Endelig kan kadencen beregnes som:
Hastighed * 1000 / (M pr pedal omdr. * 60)

Shimano anvender disse regneregler i deres nyeste cykelcomputer der er integreret i gearsystemet. I Shimano “Flight Deck” kender computeren gearstillingen og ud fra hastigheden kan kadencen efterfølgende beregnes.

***

# Online geartabel – beregn geartal, kadence, fart m.m.

Som alle cyklister ved, så er det ret afgørende for fornøjelsen om du kører i det rigtige gear eller ej. Kører du i for lavt gear, så hjuler du rundt med alt for høj kadence og kører du i for højt gear, så sveder du som en hest og går du kold før tid.

For at indstille dine gear rigtigt og vælge det rigtige gear ifht. forholdene, så kan du for gearerne på din cykel beregne geartal, antal meter pr. pedalomdrejning, kadence m.m. ved at læse med her.


| Geartal | Kategori |
|-|-|
| < 60 | Bjerggear |
| 60-72 | Lette gear |
| 72-84 | Mellem gear |
| > 84 | Tunge gear|

En normal cykel uden gear (fixie cykel) vil typisk have et geartal omkring 80. Har du en cykel med 50/39 tandhjul forrest, 11-23 bagerst og 28″ (700) hjul, så vil geartallene på din cykel ligge fra 48-127.

Det laveste gear opnåes ved at vælge det mindste tandhjul forrest og det største tandhjul bagerst. Tilsvarende opnåes det tungeste gear ved at vælge det største tandhjul forrest og det mindste tandhjul bagerst.

Øverst på denne side kan du indtaste data om din cykel og beregne geartal, kadence m.m.

Bryder du dig ikke om at lade computeren regne for dig, så kan du selv beregne dit geartal med denne formular:

geartal = hjuldiameter i tommer * klingetænder / gearhjultænder

Husk iøvrigt at der ikke er nogen gearing der er den bedste for alle. Hvilken gearing der er den bedste afhænger af dig selv, hvilket form du er i, hvilken cykel du kører på og hvor og hvordan du kører (der er fx. flere der skifter kassette hvis de går fra at køre i Danmark til at køre i bjerge).

{% include calculate-gearing.html %}

## Antal meter pr. pedalomdrejning

Medmindre du er cykelnørd, så kan geartallet være lidt svært at have med at gøre. Det kan derfor være en fordel at udtrykke gearingen i antal meter pr. pedalomdrejning i stedet.

Når du indtaster data om din cykel herover, så beregner vi derfor også hvor langt du kører pr. pedalomdrejning for dine forskellige kombinationer af tandhjul.

Vil du selv til at regne, så kan du beregne antal meter pr. pedalomdrejning med denne formular:
antal meter pr. omdrejning = pi * 2,54 * geartal / 100 (2,54 for at gå fra tommer til cm)

## Fart, kadence og gearning

Jo hurtigere du træder i pedalerne des hurtigere kører du på cyklen. Præcis hvor hurtigt du kører med bestemte kadencer afhænger selvfølgelig af gearingen.

Vi finder din fart i km/t for kadencerne 60, 70, 80, 90, 100, 110 og 120 (dvs. fra 60-120 omdrejninger i pedalerne pr. minut).

Vil du selv beregne din fart i km/t ved bestemte kadencer, så gøres det sådan her:
kadence fart = 60 * kadence * pi * 2,54 * geartal / 100000

## Så hurtigt skal du træde i pedalerne

Nogen gange kan det være rart at vide hvor hurtigt du vil køre, hvis du kører med en bestemt kadence og en bestemt gearing.

Vi finder derfor til sidste også din kadence og gearing hvis du vil køre 20, 30, 40, 50, 60, 70 og 80 km/t (på flad vej uden vind).

Vil du også selv til at regne her, så skal du gøre sådan her:
kandence = fart * 100000 / 60 * pi * 2,54 * geartal
