const gcf = require('../src/greatestCommonFactor.js')

test('calculate gcf of 10, 5, and 25', () => {
  expect(gcf([10, 5, 25])).toBe(5)
})