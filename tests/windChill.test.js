const windChill = require('../src/windChill.js')

test('calculate wind chill of 32 degrees (F) with wind speed of 50mph', () => {
  expect(windChill(32, 50)).toBe(14)
})