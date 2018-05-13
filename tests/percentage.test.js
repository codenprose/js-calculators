const percentage = require('../src/percentage.js');

test('get 10% of 75', () => {
  expect(percentage(10, 75)).toBe(7.5);
})

test('get 50% of 100', () => {
  expect(percentage(50, 100)).toBe(50);
})

test('get 100% of 1000', () => {
  expect(percentage(100, 1000)).toBe(1000);
})