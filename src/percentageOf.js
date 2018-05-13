/**
* Answers the question, x is what % of y?
* 
* @param {number} x
* @param {number} y
* @returns {number} Returns the percentage.
* @example 
* 
* percentageOf(10, 100)
* // => 10
*/
function percentageOf(x, y) {
  if (typeof x !== 'number') {
    throw new Error('x argument is not a number')
  }

  if (typeof y !== 'number') {
    throw new Error('y argument is not a number')
  }

  return (x / y) * 100
}

module.exports = percentageOf