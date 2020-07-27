const e = require("express");

function carCalculate(distance, mode) {
  if (mode == 'driving') {
    var raw_emission = distance * (0.19228 / 1000);
    emission = Math.round(raw_emission)
    return `${emission}`
  } else {
    return 0;
  }
}
module.exports = carCalculate;

// 0.19228 kg CO2e /km Passenger Vehicles, Cars(by size), Medium car, petrol
