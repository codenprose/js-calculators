const math = require('mathjs')

/**
* Calculates the range from given list of numbers
* 
* @param {array} list
* @returns {number} Returns range.
* @example 
*
* range([5, 3, 15, 20])
* // => 17
*/
function range(list) {
  if (!list || !list[0]) {
    throw new Error('please provide an array of numbers')
  }
  return math.abs(math.max(list) - math.min(list))
}

module.exports = range