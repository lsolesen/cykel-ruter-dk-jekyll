(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";const running=require("./running"),gearing=require("./gear");$(document).ready(function(){$("[name='cadence']").change(function(){$("#calculator_gearing").submit()}),$("#calculator_gearing").submit(function(e){console.log("Calculate gearing"),e.preventDefault();let n=Number($("[name='wheel_diameter']").val()),t=Number($("[name='klinge']").val()),a=Number($("[name='gearhjul']").val()),l=Number($("[name='cadence']").val()),i=gearing.Gearing(n,t,a);$("#geartal").val(i.getGearTal().toFixed(0)),$("#meter_per_round").val(i.getMeterPerRound().toFixed(1)),$("#velocity_at_cadence").val(i.getVelocityAtCadence(l).toFixed(2))}),$("#calculator_velocity").submit(function(e){console.log("Calculate velocity"),e.preventDefault();let n=Number($("[name='min']").val()),t=Number($("[name='sec']").val()),a=Number($("[name='distance']").val()),l=running.Running();$("#velocity_kmt").val(l.getKilometersPrHour(n,t,a).toFixed(2))}),$("#calculator_velocity_distance").submit(function(e){console.log("Calculate distance"),e.preventDefault();let n=Number($("[name='dist_min']").val()),t=Number($("[name='dist_sec']").val()),a=Number($("[name='dist_velocity']").val()),l=running.Running();$("#dist_distance").val(l.getDistanceFromTimeAndVelocity(n,t,a).toFixed(1))}),$("#calculator_velocity_time").submit(function(e){console.log("Calculate time"),e.preventDefault();let n=Number($("[name='time_distance']").val()),t=Number($("[name='time_velocity']").val()),a=running.Running().getTimeFromDistanceAndVelocity(n,t),l=Math.floor(a),i=60*(a-l);$("[name='time_min']").val(l),$("[name='time_sec']").val(i.toFixed(0))})});

},{"./gear":2,"./running":3}],2:[function(require,module,exports){
let motionsplan={Gearing:function(t,e,n){function r(){return t*e/n}return{getGearTal:r,getMeterPerRound:function(){return 2.54*Math.PI*r()/100},getVelocityAtCadence:function(t){return 60*t*Math.PI*2.54*r()/1e5}}}};module.exports=motionsplan;

},{}],3:[function(require,module,exports){
let motionsplan={Running:function(){function t(t,n){return 60/(1*t+n/60)}return{getKilometersPrHour:function(t,n,e){return e/((n/=3600)+(t/=60))},getTimePrKilometer:function(t,n,e){let o=(60*parseInt(t)+parseInt(n))/parseFloat(e),r=parseInt(o/60),i=o-60*r;return i.toFixed(0)<10?r.toFixed(0)+":0"+i.toFixed(0):r.toFixed(0)+":"+i.toFixed(0)},convertKmtToMinPerKm:function(t){let n=60/t,e=Math.floor(n),o=Math.round(60*(n-Math.floor(n)));return o<10&&(o="0"+o),e+":"+o},convertMinPerKmToKmt:t,convertMinPerKmToDistanceForDuration:function(n,e,o,r){return t(n,e)*(o+r/60)/60*1e3},getDistanceFromTimeAndVelocity:function(t,n,e){return e*(t+n/60)/60},getTimeFromDistanceAndVelocity:function(t,n){return 60*t/n}}}};module.exports=motionsplan;

},{}]},{},[1]);