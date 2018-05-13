const math = require('mathjs')

/**
* Calculates the difference between time a and b
* 
* @param {object} a time a
* @param {object} b time b
* @param {string} operation add or subtract
* @returns {object} result 
* @example 
*
* const a = { day: 20, hour: 5, minute: 3, second: 9 }
* const b = { day: 8, hour: 3, minute: 2, second: 5 }
* time(a, b, 'subtract')
* // => { day: 12, hour: 2, minute: 1, second: 4 }
*/
function time(a, b, operation) {
  if (!a || !b || !operation) {
    throw new Error('please provide valid arguments')
  }

  const result = {
    day: math[operation](a.day, b.day),
    hour: math[operation](a.hour, b.hour),
    minute: math[operation](a.minute, b.minute),
    second: math[operation](a.second, b.second)
  }

  return formatResponse(result)
}

function formatResponse(result) {
  // if second is greater than 60
  if (result.second > 60) {
    while (result.second > 60) {
      // subtract 60 seconds for every iteration
     result.second -= 60
     // update minute value
     result.minute += 1
    } 
   }
   // if miinute is greater than 60
   if (result.minute > 60) {
     while (result.minute > 60) {
       // subtract 60 minutes for every iteration
       result.minute -= 60
       // update hour value
       result.hour += 1
     }
   }
   // if hour is greater than 24
   if (result.hour > 24) {
     while (result.hour > 24) {
       // subtract 24 hours for every iteration
       result.hour -= 24
       // update day value
       result.day += 1
     }
   }
  return result
}

module.exports = time