/*!
 * gumshoejs v5.1.1
 * A simple, framework-agnostic scrollspy script.
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/gumshoe
 */(function(a,b){typeof define=='function'&&define.amd?define([],function(){return b(a)}):typeof exports=='object'?module.exports=b(a):a.Gumshoe=b(a)})(typeof global!='undefined'?global:typeof window!='undefined'?window:this,function(a){'use strict';var o={navClass:'active',contentClass:'active',nested:!1,nestedClass:'active',offset:0,reflow:!1,events:!0},n=function(){var a={};return Array.prototype.forEach.call(arguments,function(b){for(var c in b){if(!b.hasOwnProperty(c))return;a[c]=b[c]}}),a},d=function(b,c,a){if(!a.settings.events)return;var d=new CustomEvent(b,{bubbles:!0,cancelable:!0,detail:a});c.dispatchEvent(d)},e=function(a){var b=0;if(a.offsetParent)while(a)b+=a.offsetTop,a=a.offsetParent;return b>=0?b:0},f=function(a){a&&a.sort(function(a,b){var c=e(a.content),d=e(b.content);return c<d?-1:1})},m=function(a){return typeof a.offset=='function'?parseFloat(a.offset()):parseFloat(a.offset)},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},h=function(c,d,e){var b=c.getBoundingClientRect(),f=m(d);return e?parseInt(b.bottom,10)<(a.innerHeight||document.documentElement.clientHeight):parseInt(b.top,10)<=f},j=function(){return a.innerHeight+a.pageYOffset>=i()},k=function(a,b){return!!(j()&&h(a.content,b,!0))},l=function(a,c){var d=a[a.length-1],b;if(k(d,c))return d;for(b=a.length-1;b>=0;b--)if(h(a[b].content,c))return a[b]},g=function(c,a){if(!a.nested)return;var b=c.parentNode.closest('li');if(!b)return;b.classList.remove(a.nestedClass),g(b,a)},b=function(a,b){if(!a)return;var c=a.nav.closest('li');if(!c)return;c.classList.remove(b.navClass),a.content.classList.remove(b.contentClass),g(c,b),d('gumshoeDeactivate',c,{link:a.nav,content:a.content,settings:b})},c=function(d,a){if(!a.nested)return;var b=d.parentNode.closest('li');if(!b)return;b.classList.add(a.nestedClass),c(b,a)},p=function(a,b){if(!a)return;var e=a.nav.closest('li');if(!e)return;e.classList.add(b.navClass),a.content.classList.add(b.contentClass),c(e,b),d('gumshoeActivate',e,{link:a.nav,content:a.content,settings:b})},q=function(m,q){var e={},i,h,c,g,d,j,k,r;return e.setup=function(){i=document.querySelectorAll(m),h=[],Array.prototype.forEach.call(i,function(a){var b=document.getElementById(decodeURIComponent(a.hash.substr(1)));if(!b)return;h.push({nav:a,content:b})}),f(h)},e.detect=function(){var a=l(h,d);if(!a){c&&(b(c,d),c=null);return}if(c&&a.content===c.content)return;b(c,d),p(a,d),c=a},j=function(b){g&&a.cancelAnimationFrame(g),g=a.requestAnimationFrame(e.detect)},k=function(b){g&&a.cancelAnimationFrame(g),g=a.requestAnimationFrame(function(){f(h),e.detect()})},e.destroy=function(){c&&b(c,d),a.removeEventListener('scroll',j,!1),d.reflow&&a.removeEventListener('resize',k,!1),h=null,i=null,c=null,g=null,d=null},r=function(){d=n(o,q||{}),e.setup(),e.detect(),a.addEventListener('scroll',j,!1),d.reflow&&a.addEventListener('resize',k,!1)},r(),e};return q})