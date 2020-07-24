const calculate = require('./calculator');

test('returns emissions for a car', () => {
  var emissions = 122.1
  expect(calculate(1000, 'car' )).toBe(emissions);
});

