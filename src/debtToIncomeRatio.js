const formatFloat = require('../utils/formatFloat.js')

/**
 * Calculates debt to income ratio.
 * 
 * @param {number} income take home pay
 * @param {number} debt debt / expenses
 * @param {string} frequency annually / monthly
 * @returns {object}
 * @example 
 * 
 * debtToIncomeRatio(4600, 2800, 'monthly')
 * 
 * => { 
    ratio: 28.57,
    category: 'Safe',
    totalAnnualIncome: 84000,
    totalAnualDebt: 24000,
    totalMonthlyIncome: 7000,
    totalMonthlyDebt: 2000 
   }
 */
function debtToIncomeRatio(income, debt, frequency) {
  if (!income || !debt || !frequency) {
    throw new Error('please provide valid arguments')
  }
  
  const ratio = formatFloat(debt / income * 100)
  let category = ''

  let totalAnnualIncome = 0
  let totalAnualDebt = 0
  let totalMonthlyIncome = 0
  let totalMonthlyDebt = 0

  if (ratio > 50) {
    category = 'Very Stressful'
  } else if (ratio > 35) {
    category = 'Stressful'
  } else {
    category = 'Safe'
  }

  if (frequency === 'monthly') {
    totalMonthlyIncome = income
    totalMonthlyDebt = debt
    totalAnnualIncome = formatFloat(income * 12)
    totalAnualDebt = formatFloat(debt * 12)
  } else {
    totalAnnualIncome = income
    totalAnualDebt = debt 
    totalMonthlyIncome = formatFloat(income / 12)
    totalMonthlyDebt = formatFloat(debt / 12)
  }

  return { 
    ratio,
    category,
    totalAnnualIncome,
    totalAnualDebt,
    totalMonthlyIncome,
    totalMonthlyDebt
  }
}

module.exports = debtToIncomeRatio