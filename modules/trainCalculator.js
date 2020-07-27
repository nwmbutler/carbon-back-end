function trainCalculate(distance) {
    var raw_emission = distance * (0.04115 / 1000);
    var emission = Math.round(raw_emission);
    return `${emission} kg CO2e`
  }
module.exports = trainCalculate;

// 0.04115 kg CO2e/ passenger.km Business travel - land, Rail, National Rail