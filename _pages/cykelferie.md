---
layout: single
title: &title "Cykelferie"
permalink: /cykelferie/
description: "Det er noget helt særligt at være på cykelferie. Du oplever naturen på en helt anden måde end hvis du kører i bil."
excerpt: "Det er noget helt særligt at være på cykelferie. Du oplever naturen på en helt anden måde end hvis du kører i bil."
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1603536764976-e2d8a6d805fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80
  teaser: https://images.unsplash.com/photo-1603536764976-e2d8a6d805fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80
  caption: *title
  overlay_filter: 0.2
toc: true
created_at: 2019-10-03T09:48:02+02:00
last_modified_at: 2021-04-03T07:48:02+02:00
sidebar:
  title: "Populære sider"
  nav: blog
---

{{ page.excerpt }}

{% comment %}

https://friluftsraadet.dk/oplevelser/tag-paa-cykelferie-er-lettere-du-tror

https://www.smalldanishhotels.dk/inspiration/cykelferie/

***

Fra cyklistforbundet

Cykelferie for begyndere

Har du overvejet at tage ud på en længere cykeltur med overnatning - men i tvivl om hvordan du kommer afsted? Så brug denne guide, der både er til dig, der er begynder - og dig, der bare gerne vil ud på eventyr uden de store investeringer i udstyr og grej.

Cykelferier er en fantastisk måde at koble af og opleve verden - hvad enten du er til telt og sovepose, vandrerhjem eller bløde hotelsenge. Du behøver ikke spendere en formue på udstyr for at komme i gang, for du kommer langt med det helt basale. Denne guide er en slags kickstarter, der sender dig godt på vej. Og hvis du – som vi tror - bliver helt bidt af at holde ferie på cykel, kan du opgradere udstyrspakken med tiden.

Alle de gode råd i denne guide er naturligvis generelle. I sidste ende afhænger valget af det rette udstyr jo i høj grad af, hvor du har tænkt dig at cykle hen, hvor langt du vil køre og hvilken komfort du ønsker. Rigtig god tur!


Cykel
Vælg en cykel, der passer til turen. Fx er tynde racerdæk og kilometervis af grusvej en dårlig kombination. Du kan evt. starte med din almindelige cykel og på sigt investere i en rigtig turcykel. Du kan også låne dig frem. Det vigtigste er dog, at styr, saddel og højde er indstillet korrekt til dig, og at cyklen er tjekket og velsmurt fra start. Få evt. hjælp hos din cykelhandler.


Overnatning
Vil du være helt fri som fuglen i telt og sovepose - eller foretrækker du bløde hotelsenge? Du bestemmer selv! Telt, sovepose og liggeunderlag skal du vælge ud fra destination, årstid og vejrudsigt. Vælg et let telt til længere ture. Du kan også spare teltet væk og overnatte i shelters - eller du kan bo på vandrerhjem, bed & breakfast, kro eller hotel.



Bagage
Du kan spænde dine ting fast med elastikker og i kurve - men du kan også låne eller købe klassiske cykeltasker til bagagebæreren, som giver stabil kørsel selv med tung last. Du kan også vælge bikepacking-tasker, som spændes fast på selve stellet. Det er en genial løsning, hvis du skal cykle i meget ujævnt terræn. TIP: Du bliver glad for vandtætte tasker!


Tøj
Valget af tøj til turen behøver ikke være en videnskab, og det er ofte et meget individuelt punkt. En tommelfingerregel er, at tjekke vejrudsigten og pakke efter det. Tag kun et komplet sæt tøj med. Uld - fx den bløde merino - er rigtig godt til cykling: Det er selvrensende, åndbart og regulerer kropstemperaturen virkelig godt både i kulde og varme.


Væske
Det er vigtigt at have nok væske med, og sørg for at regne lidt frem: Hvor langt er dit næste stræk - har du vand nok til hele etapen? Der er ikke noget værre, end at løbe tør for væske. Kører du i befolkede områder, kan du ofte finde steder at ”tanke op”, men hav altid ekstra med. Sæt evt. flasken i en holder på stellet, så har du altid vand lige ved hånden.


Værktøj
Du behøver ikke at tage skruemaskinen og hele værktøjskassen med, men pak gerne de helt basale redskaber til at skifte slange, lappe, spænde skruer og møtrikker. Man kan få mange slags multisæt, men mindre kan gøre det. Fx Unbraco str. 4-5-6, dækjern, pumpe, lappegrej og en ekstra slange. Og husk en lygte. Det er smart hvis du fx punkterer efter solnedgang.


Spændebånd og strips
Det er en god ide, at tage spændebånd og strips med til at fæstne dit udstyr og fikse småting undervejs. Brug elastikker med kroge i enderne eller genbrugelige strips. Begge dele kan købes billigt i byggemarkeder.


Kogegrej
Hvis du har mod på det, er det er skønt at lave mad i det fri. Tag de mest basale køkkenting med - lån dig frem eller snup en gammel gryde og pande, du allerede har i køkkenet. Pak også bestik, en kniv og en ske til gryden. Laver du mad på bål, kan du med tre sten nemt bygge en lille holder, som gryden/panden kan stå på. Alternativt kan du investere i et lille gasapparat.


Håndsprit
Håndsprit behøver nok ingen nærmere præsentation, og er som bekendt den nemmeste og mest hygiejniske måde at få vasket hænder på, når man ikke lige har en håndvask og sæbe i nærheden. Fås i mange størrelser, men små tuber kan pakkes i lommer og hulrum, for at udnytte pladsen bedst.


Toiletpapir
Det man aldrig tænker på, men altid mangler. Så tag det med - enten som almindelige ruller eller som små pakker engangsservietter, der kan pakkes i bagagen mere fleksibelt rundt omkring.

{% endcomment %}

## Artikler i kategorien cykelferie

{% assign site_posts = site.posts | where: "category", "Cykelferie" | sort: "title" %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Artikler med tagget cykelferie

{% assign site_posts = site.posts | where: "tags", "cykelferie" | sort: "title" %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}
