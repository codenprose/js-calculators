const heatIndex = require('../src/heatIndex')

test('calculate heat index', () => {
  expect(heatIndex(95, 50)).toBe(105)
})