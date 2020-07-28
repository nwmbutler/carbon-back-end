function planeCalculate(distance) {
    var raw_emission = distance * (0.25493 / 1000);
    var emission = raw_emission.toFixed(2)
    return `${emission} kg CO2e`
  }
module.exports = planeCalculate;

// 0.25493 kg CO2e / passenger.km Business travel - air, Flights, DOmestic, Average Passenger, with Radioactive Forcing