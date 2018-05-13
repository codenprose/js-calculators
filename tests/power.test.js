const power = require('../src/power.js')

test('calculate 2^3', () => {
  expect(power(2, 3)).toBe(8)
})

test('calculate 9^2', () => {
  expect(power(9, 2)).toBe(81)
})