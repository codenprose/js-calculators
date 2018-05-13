/**
* Increase or decrease (change) by a number (x) from by a given percentage (y)
* 
* @param {number} x
* @param {number} y
* @param {string} change
* @returns {number} Returns x + or - y percentage.
* @example 
* 
* percentageChange(30, 50, 'increase')
* // => 45
*/
function percentageChange(x, y, change) {
  if (typeof x !== 'number') {
    throw new Error('x argument is not a number')
  }

  if (typeof y !== 'number') {
    throw new Error('y argument is not a number')
  }

  if (typeof change !== 'string') {
    throw new Error('change argument is not a string')
  }

  if (change === 'increase') {
    return x + x * (y / 100)
  }

  if (change === 'decrease') {
    const answer = x - x * (y / 100)
    return +answer.toPrecision(14)
  }
}

module.exports = percentageChange