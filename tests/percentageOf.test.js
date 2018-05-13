const percentageOf = require('../src/percentageOf.js');

test('1000 is 10% of what?', () => {
  expect(percentageOf(1000, 10)).toBe(10000);
})