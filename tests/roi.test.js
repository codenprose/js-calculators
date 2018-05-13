const roi = require('../src/roi.js')

test('calculate roi of $10,000 investment and $15,000 in earnings', () => {
  const result = { percentage: 50, earningsMinusInvestment: 5000 }
  expect(roi(10000, 15000)).toEqual(result)
})

test('calculate roi of $10,000 investment and $8000 in earnings', () => {
  const result = { percentage: -20, earningsMinusInvestment: -2000 }
  expect(roi(10000, 8000)).toEqual(result)
})