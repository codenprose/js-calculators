/**
 * Calculates the ratio from 3 given numberical values. 
 * Solves for the null argument
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @returns {number} Returns numerator or denominator for incomplete ratio
 * @example 
 * 
 * ratio(10, 5, 100, null)
 * // => 50
 */
function ratio(a, b, c, d) {
  if (a && b && c) {
    return c / (a / b)
  }
}

module.exports = ratio