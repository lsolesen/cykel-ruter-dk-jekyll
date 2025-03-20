/*!
 * gumshoejs v5.1.1
 * A simple, framework-agnostic scrollspy script.
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/gumshoe
 */(function(e,t){typeof define=="function"&&define.amd?define([],function(){return t(e)}):typeof exports=="object"?module.exports=t(e):e.Gumshoe=t(e)})(typeof global!="undefined"?global:typeof window!="undefined"?window:this,function(e){"use strict";var f={navClass:"active",contentClass:"active",nested:!1,nestedClass:"active",offset:0,reflow:!1,events:!0},m=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}}),e},s=function(e,t,n){if(!n.settings.events)return;var s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t.dispatchEvent(s)},o=function(e){var t=0;if(e.offsetParent)for(;e;)t+=e.offsetTop,e=e.offsetParent;return t>=0?t:0},n=function(e){e&&e.sort(function(e,t){var n=o(e.content),s=o(t.content);return n<s?-1:1})},c=function(e){return parseFloat(typeof e.offset=="function"?e.offset():e.offset)},d=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t,n,s){var o=t.getBoundingClientRect(),i=c(n);return s?parseInt(o.bottom,10)<(e.innerHeight||document.documentElement.clientHeight):parseInt(o.top,10)<=i},h=function(){return e.innerHeight+e.pageYOffset>=d()},l=function(e,t){return!!(h()&&r(e.content,t,!0))},u=function(e,t){var n,s=e[e.length-1];if(l(s,t))return s;for(n=e.length-1;n>=0;n--)if(r(e[n].content,t))return e[n]},a=function(e,t){if(!t.nested)return;var n=e.parentNode.closest("li");if(!n)return;n.classList.remove(t.nestedClass),a(n,t)},t=function(e,t){if(!e)return;var n=e.nav.closest("li");if(!n)return;n.classList.remove(t.navClass),e.content.classList.remove(t.contentClass),a(n,t),s("gumshoeDeactivate",n,{link:e.nav,content:e.content,settings:t})},i=function(e,t){if(!t.nested)return;var n=e.parentNode.closest("li");if(!n)return;n.classList.add(t.nestedClass),i(n,t)},p=function(e,t){if(!e)return;var n=e.nav.closest("li");if(!n)return;n.classList.add(t.navClass),e.content.classList.add(t.contentClass),i(n,t),s("gumshoeActivate",n,{link:e.nav,content:e.content,settings:t})},g=function(s,o){var i,a,c,l,d,h,g,v,r={};return r.setup=function(){d=document.querySelectorAll(s),l=[],Array.prototype.forEach.call(d,function(e){var t=document.getElementById(decodeURIComponent(e.hash.substr(1)));if(!t)return;l.push({nav:e,content:t})}),n(l)},r.detect=function(){var e=u(l,a);if(!e){i&&(t(i,a),i=null);return}if(i&&e.content===i.content)return;t(i,a),p(e,a),i=e},h=function(){c&&e.cancelAnimationFrame(c),c=e.requestAnimationFrame(r.detect)},g=function(){c&&e.cancelAnimationFrame(c),c=e.requestAnimationFrame(function(){n(l),r.detect()})},r.destroy=function(){i&&t(i,a),e.removeEventListener("scroll",h,!1),a.reflow&&e.removeEventListener("resize",g,!1),l=null,d=null,i=null,c=null,a=null},v=function(){a=m(f,o||{}),r.setup(),r.detect(),e.addEventListener("scroll",h,!1),a.reflow&&e.addEventListener("resize",g,!1)},v(),r};return g})