/**
 * Calculates a tip amount from a given bill and percentage.
 * 
 * @param {number} bill
 * @param {number} percentage
 * @returns {number} Returns the tip amount.
 * @example 
 * 
 * tip(25, 20)
 * // => 5
 */
function tip(bill, percentage) {
  if (typeof bill !== 'number') {
    throw new Error('bill argument is not a number')
  }

  if (typeof percentage !== 'number') {
    throw new Erro('percentage argument is not a number')
  }

  return bill * (percentage / 100)
}

module.exports = tip