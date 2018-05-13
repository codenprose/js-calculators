const mode = require('../src/mode.js');

test('mode of [2, 1, 4, 3, 1] should be 1', () => {
  expect(mode([2, 1, 4, 3, 1])).toBe(1)
})

test('mode of [7, 18, 14, 2, 7] should be 7', () => {
  expect(mode([7, 18, 14, 2, 7])).toBe(7)
})