const Finance = require('financejs')
const Decimal = require('decimal.js')

// instantiate finance instance
const finance = new Finance()

/**
* Calculates the compound interest from a given rate, compoundings per period, 
* princicpal, and number of periods
* 
* @param {number} rate
* @param {number} cpp compoundings per period
* @param {number} principal
* @param {number} nop number of periods
* @returns {object} result 
* @example 
*
* compoundInterest(4.3, 4, 1500, 6)
* // => { principal: 1500, interest: 438.84, total: 1938.84 }
*/
function compoundInterest(rate, cpp, principal, nop) {
  if (!rate || !cpp || !principal || !nop) {
    throw new Error('please provide valid arguments')
  }

  const total = finance.CI(rate, cpp, principal, nop)
  const interest = new Decimal(total).minus(principal).toNumber()
  
  return {
    principal,
    interest,
    total
  }
}

module.exports = compoundInterest