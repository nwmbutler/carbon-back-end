function busCalculate(distance) {
    var raw_emission = distance * (0.02779 / 1000);
    var emission = Math.round(raw_emission)
    return `${emission}`
  }
module.exports = busCalculate;

// 0.02779 kg CO2e/passenger.km for Business travel - land, Bus: Coach
