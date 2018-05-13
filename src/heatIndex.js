const math = require('mathjs')

/**
* Calculate heat index from given temperature and humidity
* Formula: https://www.weather.gov/media/epz/wxcalc/heatIndex.pdf
* 
* @param {number} T temperature
* @param {number} rh relative humidty
* @returns {number} Returns new temperature.
* @example 
*
* heatIndex(95, 50)
* => 105
*/
function heatIndex(T, rh) {
  if (!T || !rh) {
    throw new Error('please provide required arguments of temperature and humidity')
  }
  
  const temperature = -42.379 + (2.04901523 * T) + (10.14333127 * rh)
  - (0.22475541 * T * rh) - (6.83783 * 10**-3 * T**2)
  - (5.481717 * 10**-2 * rh**2) + (1.22874 * 10**-3 * T**2 * rh)
  + (8.5282 * 10**-4 * T * rh**2) - (1.99 * 10**-6 * T**2 * rh**2)
  
  return Math.floor(temperature)
}

module.exports = heatIndex