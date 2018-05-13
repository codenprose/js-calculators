const fraction = require('../src/fraction.js')

test('calculate result of 8/16 + 7/81', () => {
  expect(fraction('8/16', 'add', '7/81')).toBe('95/162')
})