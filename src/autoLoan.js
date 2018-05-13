// NOTE: Add salesTax lookup tool

const Finance = require('financejs')
const formatFloat = require('../utils/formatFloat.js')

// instantiate finance instance
const finance = new Finance()

/**
* @description Calculates the total of purchasing a car.
* 
* @param {number} price
* @param {number} term
* @param {number} interestRate
* @param {number} salesTaxRate
* @param {number} downPayment
* @param {number} tradeIn
* @param {number} otherFees
* @returns {object} result 
* @example 
*
* const options = {
    price: 20000,
    term: 60,
    interestRate: 7.5,
    salesTaxRate: 7,
    downPayment: 0,
    tradeIn: 0,
    otherFees: 300
  }
* autoLoan(options)
* =>  { 
        price: 20000,
        salesTax: 1400,
        initialPayments: 0,
        monthlyPaymentNoInterest: 361.67,
        monthlyPaymentNoInterestTotal: 21700,
        monthlyInterest: 73.15,
        monthlyInterestTotal: 4389.2,
        monthlyPaymentWithInterest: 434.82,
        monthlyPaymentWithInterestTotal: 26089.2,
        totalCost: 26089.2 
      }
*/
function autoLoan(options) {
  let { price, term, interestRate, salesTaxRate, downPayment, tradeIn, otherFees } = options

  if (!price || !term || !interestRate || !otherFees) {
    throw new Error('please provide required arguments (price, term, interestRate, otherFees)')
  }

  if (salesTaxRate) {
    salesTax = price * (salesTaxRate / 100)
  }
  
  let loanTotal = price + salesTax + otherFees - downPayment - tradeIn

  const monthlyPaymentNoInterest = loanTotal / term
  const monthlyPayment = finance.AM(loanTotal, interestRate, term, 1)
  const monthlyInterest = monthlyPayment - monthlyPaymentNoInterest

  const response = {
    price: formatFloat(price),
    salesTax: formatFloat(salesTax),
    initialPayments: formatFloat(downPayment + tradeIn),
    monthlyPaymentNoInterest: formatFloat(monthlyPaymentNoInterest),
    monthlyPaymentNoInterestTotal: formatFloat(monthlyPaymentNoInterest * term),
    monthlyInterest: formatFloat(monthlyInterest),
    monthlyInterestTotal: formatFloat(monthlyInterest * term),
    monthlyPaymentWithInterest: formatFloat(monthlyPayment),
    monthlyPaymentWithInterestTotal: formatFloat(monthlyPayment * term),
    totalCost: formatFloat(monthlyPayment * term + tradeIn + downPayment)
  }

  return response
}

module.exports = autoLoan