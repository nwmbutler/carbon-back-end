const carCalculate = require('./carCalculator');

test('returns emissions for a car', () => {
  var emissions = "0.19 kg CO2e which is equivalent to 13 kettle boils! ";
  expect(carCalculate(1000, 'driving')).toBe(emissions);
});

test('returns 0 emissions for walking ', () => {
  var emissions = "0 kg CO2e";
  expect(carCalculate(100, 'walking')).toBe(emissions);
});

test('returns 0 emissions for bicycling ', () => {
  var emissions = "0 kg CO2e";
  expect(carCalculate(100, 'bicycling')).toBe(emissions);
});
