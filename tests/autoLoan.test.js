const autoLoan = require('../src/autoLoan.js')

test('calculate total cost of auto loan', () => {
  const options = {
    price: 20000,
    term: 60,
    interestRate: 7.5,
    salesTaxRate: 7,
    downPayment: 0,
    tradeIn: 0,
    otherFees: 300
  }

  const result = { 
    price: 20000.00,
    salesTax: 1400.00,
    initialPayments: 0.00,
    monthlyPaymentNoInterest: 361.67,
    monthlyPaymentNoInterestTotal: 21700.00,
    monthlyInterest: 73.15,
    monthlyInterestTotal: 4389.20,
    monthlyPaymentWithInterest: 434.82,
    monthlyPaymentWithInterestTotal: 26089.20,
    totalCost: 26089.20 
  }

  expect(autoLoan(options)).toEqual(result)
})