const lcm = require('../src/leastCommonMultiple.js')

test('calculate least of multiple of 6, 21, and 5', () => {
  expect(lcm([6, 21, 5])).toBe(210)
})