const motionsplan = require('../js/gear.js');
let assert = require('assert');

describe('BMI', function() {
  describe('getBMI()', function() {
    it('should return the correct number', function() {
      let hr = motionsplan.Gearing(28, 50, 11);
      assert.equal(hr.getGearTal(), 127.27272727272727);
      assert.equal(hr.getMeterPerRound(), 10.155912251059368);
      assert.equal(hr.getVelocityAtCadence(80), 48.748378805084954);
    });
  });
});
