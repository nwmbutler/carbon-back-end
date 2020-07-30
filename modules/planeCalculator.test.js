const planeCalculate = require('./planeCalculator');

test('returns emissions for a plane journey', () => {
  var emissions = "0.25 kg CO2e which is equivalent to 17 kettle boils! ";
  expect(planeCalculate(1000)).toBe(emissions);
});

test('returns emissions for a plane journey', () => {
  var emissions = "25.49 kg CO2e which is equivalent to 1699 kettle boils! ";
  expect(planeCalculate(100000)).toBe(emissions);
});
