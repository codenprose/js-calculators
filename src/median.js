const math = require('mathjs')

/**
* Calculate median from given list of numbers
* 
* @param {array} list
* @returns {number} Returns median.
* 
* median([5, 2, 7])
* // => 2
*/
function median(list) {
  if (!list || !list[0]) {
    throw new Error('please provide an array of numbers')
  }
  return math.median(list)
}

module.exports = median