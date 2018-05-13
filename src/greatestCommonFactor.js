const math = require('mathjs')

/**
 * Calculates the greatest common factor of a given list of numbers.
 * 
 * @param {array} numbers
 * @returns {number} Returns the gcf.
 * @example 
 * 
 * gcf([15, 5, 25])
 * // => 5
 */
function gcf(numbers) {
  if (!numbers) {
    throw new Error('please provide a list of numbers')
  }

  return math.gcd(...numbers)
}

module.exports = gcf