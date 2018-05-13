const stdDeviation = require('../src/standardDeviation.js')

test('calcualte std deviation', () => {
  expect(stdDeviation([2, 4, 6])).toBe(2)
})