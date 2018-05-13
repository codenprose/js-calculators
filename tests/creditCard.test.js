const creditCard = require('../src/creditCard.js')

test('calculate credit card payoff', () => {
  const result = {
    totalInterest: 443.16,
    months: 49,
    principal: 2000
  }

  expect(creditCard(2000, 10, 50)).toEqual(result)
})