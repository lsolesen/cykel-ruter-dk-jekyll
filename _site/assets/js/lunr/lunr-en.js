var idx=lunr(function(){this.field("title"),this.field("excerpt"),this.field("categories"),this.field("tags"),this.ref("id"),this.pipeline.remove(lunr.trimmer);for(var e in store)this.add({title:store[e].title,excerpt:store[e].excerpt,categories:store[e].categories,tags:store[e].tags,id:e})});$(document).ready(function(){$("input#search").on("keyup",function(){var e,o,i,t=$("#results"),n=$(this).val().toLowerCase(),s=idx.query(function(e){n.split(lunr.tokenizer.separator).forEach(function(t){e.term(t,{boost:100}),n.lastIndexOf(" ")!=n.length-1&&e.term(t,{usePipeline:!1,wildcard:lunr.Query.wildcard.TRAILING,boost:10}),t!=""&&e.term(t,{usePipeline:!1,editDistance:1,boost:1})})});t.empty(),t.prepend('<p class="results__found">'+s.length+" Resultat(er) fundet</p>");for(i in s)e=s[i].ref,store[e].teaser?(o='<div class="list__item"><article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork"><h2 class="archive__item-title" itemprop="headline"><a href="'+store[e].url+'" rel="permalink">'+store[e].title+'</a></h2><div class="archive__item-teaser"><img src="'+store[e].teaser+'" alt=""></div><p class="archive__item-excerpt" itemprop="description">'+store[e].excerpt.split(" ").splice(0,20).join(" ")+"...</p></article></div>"):(o='<div class="list__item"><article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork"><h2 class="archive__item-title" itemprop="headline"><a href="'+store[e].url+'" rel="permalink">'+store[e].title+'</a></h2><p class="archive__item-excerpt" itemprop="description">'+store[e].excerpt.split(" ").splice(0,20).join(" ")+"...</p></article></div>"),t.append(o)})})