const math = require('mathjs')

/**
 * Calculates the least common multiple of a given list of numbers.
 * 
 * @param {array} numbers
 * @returns {number} Returns the lcm.
 * @example 
 * 
 * lcm([6, 21, 5])
 * // => 210
 */
function lcm(numbers) {
  if (!numbers) {
    throw new Error('please provide a list of numbers')
  }

  return math.lcm(...numbers)
}

module.exports = lcm