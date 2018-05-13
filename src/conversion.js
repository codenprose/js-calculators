const math = require('mathjs')
const formatFloat = require('../utils/formatFloat.js')

// Unit Reference: http://mathjs.org/docs/datatypes/units.html#reference

/**
* Calculate unit conversion
* 
* @param {string} from
* @param {string} to
* @returns {number} Returns converted value.
* 
* conversion('45 cm', 'inch')
* // => 17.72
*/
function conversion(from, to) {
  return formatFloat(math.unit(from).toNumber(to))
}

module.exports = conversion