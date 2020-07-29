function busCalculate(distance) {
    var raw_emission = distance * (0.02779 / 1000);
    var emission = raw_emission.toFixed(2)
    var kettle = Math.round(emission * 1000 / 15)
    return `${emission} kg CO2e which is equivalent to ${kettle} kettle boils! `
  }
module.exports = busCalculate;

// 0.02779 kg CO2e/passenger.km for Business travel - land, Bus: Coach
