const formatFloat = require('../utils/formatFloat.js')
const taxBrackets = require('../data/tax-brackets.json')
const exemptionPhaseoutStart = require("../data/exemption-phaseout-start.json")
const defaultExemptionAmount = require("../data/default-exemption-amount.json");

/**
* Calculate take home pay
* 
* @param {object} options
* @returns {object}
*/
function takeHomePay(options) {
  if (!options) {
    throw new Error('please provide valid arguments')
  }

  const {
    annualIncome,
    payFrequency,
    fileStatus,
    allowances,
    preTaxDeductions,
    federalTaxRate,
    stateTaxRate,
    cityTaxRate,
    selfEmployed,
    taxYear
  } = options

  const medicareTaxRate = 1.45
  const socialSecurityTaxRate = 6.2

  let numOfPaychecks = 0
  let deductionsPerPayPeriod = 0

  // Get Total number of paychecks and deduction amount per period
  if (payFrequency === 'monthly') {
    numOfPaychecks = 12
    deductionsPerPayPeriod = preTaxDeductions
  } else if (payFrequency === 'semi-monthly') {
    numOfPaychecks = 24
    deductionsPerPayPeriod = preTaxDeductions / 2
  } else if (payFrequency === 'bi-weekly') {
    numOfPaychecks = 26
    deductionsPerPayPeriod = preTaxDeductions / 2
  } else if (payFrequency === 'weekly') {
    numOfPaychecks = 52
    deductionsPerPayPeriod = preTaxDeductions / 4
  }
  
  const taxableIncome = annualIncome - (preTaxDeductions * numOfPaychecks)
  const taxableIncomeMinusAllowances = taxableIncome 
  - (allowances * calculateAllowanceAmount(taxYear, fileStatus, annualIncome))

  // Pay Period Stats
  let grossPay = annualIncome / numOfPaychecks
  let federalIncomeTax = getFederalIncomeTax(taxableIncomeMinusAllowances, taxYear, fileStatus, numOfPaychecks)
  let socialSecurityTax = getTax(taxableIncome, socialSecurityTaxRate, numOfPaychecks)
  let medicareTax =  getTax(taxableIncome, medicareTaxRate, numOfPaychecks)
  let stateIncomeTax = getTax(taxableIncome, stateTaxRate, numOfPaychecks)
  let cityIncomeTax = getTax(taxableIncome, cityTaxRate, numOfPaychecks)

  let paycheck = grossPay
    - federalIncomeTax 
    - socialSecurityTax 
    - medicareTax 
    - stateIncomeTax 
    - cityIncomeTax

  return {
    grossPay: formatFloat(grossPay),
    federalIncomeTax: formatFloat(federalIncomeTax),
    socialSecurityTax: formatFloat(socialSecurityTax),
    medicareTax: formatFloat(medicareTax),
    stateIncomeTax: formatFloat(stateIncomeTax),
    cityIncomeTax: formatFloat(cityIncomeTax),
    deductions: formatFloat(deductionsPerPayPeriod),
    paycheck: formatFloat(paycheck)
  }
}

function getFederalIncomeTax(salary, year, fileStatus, paychecks) {
  let bracket = {}

  for (let obj of taxBrackets[year][fileStatus]) {
    if (salary > obj.range.min) {
      bracket = obj
    } else {
      break
    }
  }

  let { rate, range, baseTax } = bracket
  return (baseTax + ((salary - range.min) * rate)) / paychecks
}

/**
 * Accounts for the exemption phase-out at high incomes.  It should return the defaultExemptionAmount
 * at lower incomes and 0 for very high incomes, while returning a value in between the two if income
 * is in the phase-out range.
 * 
 * Allowances are claimed on Form W-4 — when you start a new job, for instance. 
 * Each allowance you claim reduces the amount of your income that is withheld for taxes. 
 * The point of Form W-4 is to help your employer estimate how much tax you’ll owe on the wages 
 * they pay to you, so that they can withhold the appropriate amount from your paychecks.
 */
function calculateAllowanceAmount(year, filingStatus, income){
  var incomeAbovePhaseoutStart = Math.max(0, income - exemptionPhaseoutStart[year][filingStatus]);
  var stepsAbovePhaseoutStart = Math.ceil(incomeAbovePhaseoutStart / 2500);
  var exemptionPercent = Math.max(0, 1 - (stepsAbovePhaseoutStart * .02));
  return Math.round(exemptionPercent * defaultExemptionAmount[year]);
}

// Helper function to calculate tax amount per pay period
function getTax(salary, rate, paychecks) {
  return salary * (rate / 100) / paychecks
}

module.exports = takeHomePay

// const options = {
//   annualIncome: 80000,
//   payFrequency: "semi-monthly",
//   fileStatus: "single",
//   allowances: 2,
//   preTaxDeductions: 87.52,
//   stateTaxRate: 3.07,
//   cityTaxRate: 3.92,
//   selfEmployed: false,
//   taxYear: 2017
// };

// console.log(takeHomePay(options))