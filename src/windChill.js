/**
 * Calculates the wind chill from a given temperature and wind speed.
 * 
 * @param {number} temperature
 * @param {number} windSpeed
 * @returns {number} Returns the wind chill.
 * @example 
 * 
 * windChill(32, 50)
 * // => 14
 */
function windChill(temperature, windSpeed) {
  if (!temperature || !windSpeed) {
    throw new Error('please provide valid arguments')
  }

  const T = temperature
  const W = windSpeed

  const wc = 35.74 + (0.6215 * T) - (35.75 * W**0.16) + (0.4275 * T * W**0.16)

  return Math.floor(wc)
}

module.exports = windChill