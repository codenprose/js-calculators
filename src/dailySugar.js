const math = require('mathjs')
const formatFloat = require('../utils/formatFloat.js')

/**
* Calculate recommended daily sugar consumption
* 
* @param {number} calories
* @returns {object}
* 
* dailySugar(2000)
* // => { grams: 50, teaspoons: 12.5 }
*/
function dailySugar(calories) {
  const cfs = calories * (10 / 100) // calories from sugar (10% of all calories)
  const grams = formatFloat(cfs / 4)
  const teaspoons = formatFloat(grams / 4)

  return {
    grams,
    teaspoons
  }
}

module.exports = dailySugar