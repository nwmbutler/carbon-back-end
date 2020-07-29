const busCalculate = require('./busCalculator');

test('returns emissions for a bus', () => {
  var emissions = "0.03 kg CO2e which is equivalent to 0 kettle boils! ";
  expect(busCalculate(1000)).toBe(emissions);
});

test('returns emissions for a bus', () => {
    var emissions = "2.78 kg CO2e which is equivalent to 40 kettle boils! ";
    expect(busCalculate(100000)).toBe(emissions);
  });
