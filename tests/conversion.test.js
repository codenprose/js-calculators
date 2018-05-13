const conversion = require('../src/conversion')

test('convert cm to inches', () => {
  expect(conversion('45 cm', 'inch')).toBe(17.72)
})