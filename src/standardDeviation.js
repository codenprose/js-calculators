const math = require('mathjs')

/**
 * Calculates standard deviation from given list of numbers.
 * 
 * @param {array} list
 * @returns {number} Returns standard deviation.
 * @example 
 * 
 * stdDeviation([2, 4, 6])
 * // => 2
 */
function stdDeviation(list) {
  if (!list || !list.length) {
    throw new Error('Please provide a list of numbers')
  }

  return math.std(list)
}

module.exports = stdDeviation