const Finance = require('financejs')
const Decimal = require('decimal.js')

// instantiate finance instance
const finance = new Finance()

/**
 * Calculates return on investment from given initial investment and earnings.
 * 
 * @param {number} investment
 * @param {number} earnings
 * @returns {object} Returns object with roi as a percentage and earnings minus investment.
 * @example 
 * 
 * roi(10000, 15000)
 * // => { percentage: 50, earningsMinusInvestment: 5000 }
 */
function roi(investment, earnings) {
  if (!investment || !earnings) {
    throw new Error('Please provide both investment and earnings arguments')
  }

  if (typeof investment !== 'number' || typeof earnings !== 'number') {
    throw new Error('Please enter arguments as numbers')
  }

  const earningsMinusInvestment = new Decimal(earnings).minus(investment).toNumber()

  return {
    percentage: finance.ROI(investment, earnings),
    earningsMinusInvestment
  }
}

module.exports = roi