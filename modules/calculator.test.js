const calculate = require('./calculator');

test('returns emissions for a car', () => {
  var emissions = 122.1;
  expect(calculate(1000, 'car')).toBe(emissions);
});

test('returns 0 emissions for walking ', () => {
  var emissions = 0;
  expect(calculate(100, 'walking')).toBe(emissions);
});
