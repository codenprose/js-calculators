const mean = require('../src/mean.js');

test('mean of [25, 75] should be 50', () => {
  expect(mean([25, 75])).toBe(50)
})

test('mean of [-25, 75] should be 25', () => {
  expect(mean([-25, 75])).toBe(25)
})