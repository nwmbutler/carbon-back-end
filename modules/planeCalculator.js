function planeCalculate(distance) {
    var raw_emission = distance * (0.25493 / 1000);
    var emission = raw_emission.toFixed(2)
    return `${emission} kg CO2e`
  }
module.exports = planeCalculate;