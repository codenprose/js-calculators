const decimalToFraction = require('../src/decimalToFraction.js')

test('convert decimal of 0.25 to fraction', () => {
  expect(decimalToFraction(0.25)).toBe('1/4')
})