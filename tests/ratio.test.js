const ratio = require('../src/ratio.js')

test('calculate ratio', () => {
  expect(ratio(10, 5, 100, null)).toBe(50)
})