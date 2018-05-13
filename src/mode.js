const math = require('mathjs')

/**
* Calculates the mode from given list of numbers
* 
* @param {array} list
* @returns {number} Returns mode.
* 
* mode([2, 1, 4, 3, 1])
* // => 1
*/
function mode(list) {
  if (!list || !list[0]) {
    throw new Error('please provide an array of numbers')
  }
  return math.mode(list)[0]
}

module.exports = mode