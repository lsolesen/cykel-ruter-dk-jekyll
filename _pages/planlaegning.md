---
layout: single
title: &title "Planlægning af cykeltur"
permalink: /planlaegning-cykeltur/
description: "Når du skal på cykeltur, så kan det betale sig at planlægge et par enkelte ting på forhånd. Planlægningen kan nemlig gøre hele cykelturen mere behagelig."
excerpt: "Når du skal på cykeltur, så kan det betale sig at planlægge et par enkelte ting på forhånd. Planlægningen kan nemlig gøre hele cykelturen mere behagelig."
author_profile: true
header:
  overlay_image: https://images.unsplash.com/photo-1601839554994-e36fcc65da74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=630&w=1200&q=80
  teaser: https://images.unsplash.com/photo-1601839554994-e36fcc65da74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&h=300&w=400&q=60
  caption: *title
  overlay_filter: 0.2
toc: true
created_at: 2019-10-03T09:48:02+02:00
last_modified_at: 2021-04-03T07:48:02+02:00
sidebar:
  title: "Populære sider"
  nav: blog
eleventyExcludeFromCollections: false
---

{{ excerpt }}

Planlægning er vigtig uanset om du har fundet en [cykelrute](/cykelruter-danmark/) til en dagstur eller skal på en [længere cykelferie](/cykelferie/).

## Forberedelse af din cykeltur

{% assign site_posts = collections.posts | where: "data.category", "Planlægning" | where: "data.tags", "forberedelse" | sort: "title" %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

## Cykeludstyr og udstyr til din cykel

{% assign site_posts = collections.posts | where: "data.category", "Udstyr" | sort: "title" %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}

Du kan læse mere om [cykeludstyr og udstyr til cyklen her](/cykeludstyr/) her.

## Regler og sikkerhed på cyklen

{% assign site_posts = collections.posts | where: "data.category", "Regler & Sikkerhed" | sort: "title" %}

{% if site_posts.size > 0 %}
<div class="feature__wrapper">
  {% for post in site_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
{% endif %}
