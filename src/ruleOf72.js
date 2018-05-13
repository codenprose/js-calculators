const Finance = require('financejs')

// instantiate finance instance
const finance = new Finance()

/**
 * Calculates the number of years required to double your money based on a 
 * given compound interest rate.
 * 
 * @param {number} rate compound interest rate
 * @returns {number} number of years 
 * @example 
 * 
 * ruleOf72(10)
 * // => 7.2
 */
function ruleOf72(rate) {
  if (!rate) {
    throw new Error('please provide valid arguments')
  }

  return finance.R72(rate)
}

module.exports = ruleOf72