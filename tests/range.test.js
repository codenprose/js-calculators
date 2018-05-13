const range = require('../src/range.js');

test('range of [5, 3, 15, 20] should be 17', () => {
  expect(range([5, 3, 15, 20])).toBe(17)
})

test('range of [27, 10, -15, 30] should be 45', () => {
  expect(range([27, 10, -15, 30])).toBe(45)
})