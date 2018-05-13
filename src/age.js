const differenceInYears = require('date-fns/difference_in_years')
const differenceInMonths = require('date-fns/difference_in_months')
const differenceInWeeks = require('date-fns/difference_in_weeks')
const differenceInDays = require('date-fns/difference_in_days')
const differenceInHours = require('date-fns/difference_in_hours')
const differenceInMinutes = require('date-fns/difference_in_minutes')
const differenceInSeconds = require('date-fns/difference_in_seconds')

/**
* Calculates how old someone is.
* 
* @param {string} startDate
* @param {string} endDate
* @returns {object} Returns age in years, months, weeks, days, hours, minutes, and seconds.
* @example
*
* age(new Date(97, 0), new Date(2017, 11))
* // => { years: '', months: '', days: '', hours: '', minutes: '', seconds: '' }
*/
function age(startDate, endDate) {
  if (!startDate || !endDate) {
    throw new Error('please provide a start and end date')
  }
  return {
    years: differenceInYears(endDate, startDate),
    months: differenceInMonths(endDate, startDate),
    weeks: differenceInWeeks(endDate, startDate),
    days: differenceInDays(endDate, startDate),
    hours: differenceInHours(endDate, startDate),
    minutes: differenceInMinutes(endDate, startDate),
    seconds: differenceInSeconds(endDate, startDate)
  }
}

module.exports = age