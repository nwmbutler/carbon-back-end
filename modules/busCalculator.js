function busCalculate(distance) {
    var raw_emission = distance * (27.79 / 1000);
    var emission = Math.round(raw_emission)
    return `${emission}`
  }
module.exports = busCalculate;

// 27.79 g CO2e/passenger.km for Business travel - land, Bus: Coach
