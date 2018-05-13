const Fraction = require('fraction.js')

/**
* Convert decimal to fraction
*
* @param {number} decimal
* @returns {string}
* 
* decimalToFraction('0.25')
* // => '1/4'
*/
function decimalToFraction(decimal) {
  if (!decimal) {
    throw new Error('please provide a valid argument')
  }
  const x = new Fraction(decimal)
  return x.toFraction()
}

module.exports = decimalToFraction