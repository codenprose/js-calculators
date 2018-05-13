const median = require('../src/median.js');

test('median of [5, 2, 7] should be 2', () => {
  expect(median([5, 2, 7])).toBe(5)
})

test('median of [3, -1, 5, 75] should be 4', () => {
  expect(median([3, -1, 5, 7])).toBe(4)
})