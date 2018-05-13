const math = require('mathjs')
const decimalToFraction = require('./decimalToFraction.js')

/**
* Calculate result of combining two fractions
*
* @param {string} a fraction 1
* @param {string} operator add | subtract | divide | multiply
* @param {string} b fraction 2
* @returns {number}
* 
* fraction('8/16', 'add', '7/81')
* // => '95/162'
*/
function fraction(a, operator, b) {
  const d = math.number(math[operator](math.fraction(a), math.fraction(b)))
  return decimalToFraction(d)
}

module.exports = fraction