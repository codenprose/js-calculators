const debtToIncomeRatio = require('../src/debtToIncomeRatio.js')

test('calculate debt-to-income ratio', () => {
  const response = { 
    ratio: 28.57,
    category: 'Safe',
    totalAnnualIncome: 84000,
    totalAnualDebt: 24000,
    totalMonthlyIncome: 7000,
    totalMonthlyDebt: 2000 
  }
  expect(debtToIncomeRatio(7000, 2000, 'monthly')).toEqual(response)
})