const percentageChange = require('../src/percentageChange.js');

test('increase 30 by 50%', () => {
  expect(percentageChange(30, 50, 'increase')).toBe(45)
})

test('increase 73 by 24%', () => {
  expect(percentageChange(73, 24, 'increase')).toBe(90.52)
})

test('decrease 100 by 20%', () => {
  expect(percentageChange(100, 20, 'decrease')).toBe(80)
})

test('decrease 100 by 110%', () => {
  expect(percentageChange(100, 110, 'decrease')).toBe(-10)
})