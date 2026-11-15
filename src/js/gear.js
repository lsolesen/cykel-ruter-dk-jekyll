let motionsplan = {};

motionsplan.Gearing = function(wheel_diameter, klinge, gearhjul) {

    function getGearTal() {
        return wheel_diameter * klinge / gearhjul;
    }

    function getMeterPerRound() {
        // 2,54 for at gå fra tommer til cm
        return Math.PI * 2.54 * getGearTal() / 100; 
    }

    function getVelocityAtCadence(kadence) {
        return 60 * kadence * Math.PI * 2.54 * getGearTal() / 100000;
    }

    let publicAPI = {
        getGearTal : getGearTal,
        getMeterPerRound : getMeterPerRound,
        getVelocityAtCadence : getVelocityAtCadence
    };

    return publicAPI;
}

module.exports = motionsplan;
