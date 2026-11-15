'use strict';

/* global $ */

const running = require('./running');
const gearing = require('./gear');

$(document).ready(function() {
    $("[name='cadence']").change(function() {
        $("#calculator_gearing").submit();
    });
    $("#calculator_gearing").submit(function(e) {
        console.log("Calculate gearing");
        e.preventDefault();

        let wheel_diameter = Number($("[name='wheel_diameter']").val());
        let klinge = Number($("[name='klinge']").val());
        let gearhjul = Number($("[name='gearhjul']").val());
        let cadence = Number($("[name='cadence']").val());

        let c = gearing.Gearing(wheel_diameter, klinge, gearhjul);

        $("#geartal").val(c.getGearTal().toFixed(0));
        $("#meter_per_round").val(c.getMeterPerRound().toFixed(1));
        $("#velocity_at_cadence").val(c.getVelocityAtCadence(cadence).toFixed(2));
    });
    $("#calculator_velocity").submit(function(e) {
        console.log("Calculate velocity");
        e.preventDefault();

        let min = Number($("[name='min']").val());
        let sec = Number($("[name='sec']").val());
        let distance = Number($("[name='distance']").val());

        let c = running.Running();

        $("#velocity_kmt").val(c.getKilometersPrHour(min, sec, distance).toFixed(2));
    });
    $("#calculator_velocity_distance").submit(function(e) {
        console.log("Calculate distance");
        e.preventDefault();

        let min = Number($("[name='dist_min']").val());
        let sec = Number($("[name='dist_sec']").val());
        let velocity = Number($("[name='dist_velocity']").val());

        let c = running.Running();

        $("#dist_distance").val(c.getDistanceFromTimeAndVelocity(min, sec, velocity).toFixed(1));
    });
    $("#calculator_velocity_time").submit(function(e) {
        console.log("Calculate time");
        e.preventDefault();

        let distance = Number($("[name='time_distance']").val());
        let velocity = Number($("[name='time_velocity']").val());

        let c = running.Running();

        let time = c.getTimeFromDistanceAndVelocity(distance, velocity);

        let min = Math.floor(time);
        let sec = (time - min) * 60;

        $("[name='time_min']").val(min);
        $("[name='time_sec']").val(sec.toFixed(0));
    });
});
