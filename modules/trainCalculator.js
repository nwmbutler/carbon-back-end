function trainCalculate(distance) {
    var raw_emission = distance * (0.04115 / 1000);
    var emission = raw_emission.toFixed(2)
    var kettle = Math.round(emission * 1000 / 15)
    return `${emission} kg CO2e which is equivalent to ${kettle} kettle boils! `
  }
module.exports = trainCalculate;

// 0.04115 kg CO2e/ passenger.km Business travel - land, Rail, National Rail
