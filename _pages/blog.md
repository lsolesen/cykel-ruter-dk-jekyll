---
layout: posts
permalink: /blog/
title: Blog for cykel-ruter.dk
excerpt: "Læs med i vores blog med masser af gode råd om cykelruter, cykelferie og cykelture."
classes: wide
author_profile: 
eleventyExcludeFromCollections: true
---

Læs med på vores blog om cykling, [cykelruter](/cykelruter-danmark/) og [cykelferie](/cykelferie/). Vores cykelblog indeholder forskellige råd om og tips om [planlægning af cykelturen](/planlaegning-af-turen/), og hvordan du kommer af sted, men også indlæg om [cykeludstyr](/cykeludstyr/).

<h2>De nyeste indlæg på cykel-ruter.dk</h2>

<div class="feature__wrapper">

{% assign site_posts = collections.posts | sort: "last_modified_at" | reverse %}

{% if site_posts.size > 0 %}
  {% for post in site_posts limit:16 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
{% endif %}

</div>
