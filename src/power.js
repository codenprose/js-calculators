const math = require('mathjs')

/**
 * Calculates power of number to exponent, x^y
 * 
 * @param {number} investment
 * @param {number} earnings
 * @returns {object} Returns object with roi as a percentage and earnings minus investment.
 * @example 
 * 
 * power(2, 3)
 * // => 8
 */
function power(number, exponent) {
  if (!number || !exponent) {
    throw new Error('please provide valid arguments')
  }

  if (typeof number !== 'number' || typeof exponent !== 'number') {
    throw new Error('please enter arguments as numbers')
  }

  return math.pow(number, exponent)
}

module.exports = power