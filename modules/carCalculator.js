const e = require("express");

function carCalculate(distance, mode) {
  if (mode == 'driving') {
    var raw_emission = distance * (192.28 / 1000);
    emission = Math.round(raw_emission)
    return `${emission}`
  } else {
    return 0;
  }
}
module.exports = carCalculate;
