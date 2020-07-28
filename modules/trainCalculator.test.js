const trainCalculate = require('./trainCalculator');

test('returns emissions for a train journey', () => {
  var emissions = "0.04 kg CO2e";
  expect(trainCalculate(1000)).toBe(emissions);
});

test('returns emissions for a train journey', () => {
  var emissions = "4.11 kg CO2e";
  expect(trainCalculate(100000)).toBe(emissions);
});