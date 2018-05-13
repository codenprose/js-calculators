/**
 * Calculates number from a given percentage and number.
 * 
 * @param {number} percentage
 * @param {number} number
 * @returns {number} Returns the percentage.
 * @example 
 * 
 * percentage(10, 75)
 * // => 7.5
 */
function percentage(percentage, number) {
  if (typeof percentage !== 'number') {
    throw new Error('percentage argument is not a number')
  }

  if (typeof number !== 'number') {
    throw new Error('number argument is not a number')
  }

  return number * (percentage / 100)
}

module.exports = percentage