const formatFloat = require('../utils/formatFloat.js')

/**
* Calculate credit card interest and months until payoff
* 
* @param {number} balance
* @param {number} apr
* @param {number} payment
* @returns {object} Returns payoff date, principal, and interest.
* 
* creditCard(2000, 15, 50)
* // => { totalInterest: 443.16, months: 49, principal: 2000 }
*/
function creditCard(balance, apr, payment) {
  if (!balance || !apr || !payment) {
    throw new Error('please provide valid arguments')
  }

  // Constants
  const b = balance
  const dr = (apr / 365) / 100 // Daily Rate - divide APR by days in year, then divide by 100 to get %
  const p = payment

  let monthlyInterest = calcuateMonthlyInterest(b, dr)
  let monthlyBalance = b + monthlyInterest

  let totalInterest = 0
  let months = 0

  while (monthlyBalance > p) {
    monthlyInterest = calcuateMonthlyInterest(monthlyBalance, dr)
    totalInterest += monthlyInterest
    months += 1
    monthlyBalance = monthlyBalance + monthlyInterest - 50
  }

  return {
    totalInterest: formatFloat(totalInterest),
    months,
    principal: balance
  }
}

function calcuateMonthlyInterest(b, dr) {
  return b * dr * 30
}

module.exports = creditCard