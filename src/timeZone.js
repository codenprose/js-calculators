const moment = require('moment-timezone')
const timeZones = require('../data/time-zones.json')

/**
* Calculate time differece between two cities 
* 
* @param {string} localTimeZone
* @param {string} otherTimeZone
* @returns {string} Returns time.
* 
* timeZone(new Date(2017, 11, 2, 16, 28), 'America/New_York', 'America/Los_Angeles')
* // => { 
    from: { name: 'America/New_York', time: '4:28 pm' },
    to: { name: 'America/Los_Angeles', time: '1:28 pm' } 
  }
*/
function timeZone(time, from, to) {
  if (!from || !to) {
    throw new Error('please provide valid arguments')
  }
  
  const local = moment.tz(time, from);

  return {
    from: {
      name: from,
      time: local.format('h:mm a')
    },
    to: {
      name: to,
      time: local.clone().tz(to).format('h:mm a')
    }
  }
}

module.exports = timeZone