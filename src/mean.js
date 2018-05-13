const math = require('mathjs')

/**
* Calculate mean from given list of numbers
* 
* @param {array} list
* @returns {number} Returns mean.
* 
* mean([10, 20, 30, 40, 50])
* // => 25
*/
function mean(list) {
  if (!list || !list[0]) {
    throw new Error('please provide an array of numbers')
  }
  return math.mean(list)
}

module.exports = mean