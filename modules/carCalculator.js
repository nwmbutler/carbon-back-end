function carCalculate(distance, mode) {
  if (mode == 'driving') {
    var raw_emission = distance * (0.19228 / 1000);
    var emission = raw_emission.toFixed(2)
    var kettle = Math.round(emission * 1000 / 70)
    return `${emission} kg CO2e which is equivalent to ${kettle} kettle boils! `
  } else {
    return `0 kg CO2e`;
  }
}
module.exports = carCalculate;

// 0.19228 kg CO2e /km Passenger Vehicles, Cars(by size), Medium car, petrol
