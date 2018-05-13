const Finance = require('financejs')
const formatFloat = require('../utils/formatFloat.js')
const compoundingsPerPeriod = require('../utils/compoundingsPerPeriod.js')

// instantiate finance instance
const finance = new Finance()

/**
 * Calculates savings return.
 * 
 * @returns {object}
 * 
 */
function savings(options) {
  let { rate, cpp, balance, yearsToSave, contribution, contributionIncrease } = options
  let years = []

  cpp = compoundingsPerPeriod(cpp)

  for (let x = 1; x <= yearsToSave; x++) {
    balance += (finance.CI(rate, cpp, balance, 1) - balance) + (contribution * 12)

    years.push({ year: x, balance: formatFloat(balance) })
    contribution = updateContrbution(contribution, contributionIncrease)
  }

  return {
    balance: formatFloat(balance),
    years
  }
}

function updateContrbution(n, p) {
  return formatFloat(n + n * (p / 100))
}

module.exports = savings