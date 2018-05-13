const compoundInterest = require('../src/compoundInterest.js')

test('calculate 4.3 interest on $1500 principal over 6 periods @ 4 cpp', () => {
  const result = {
    principal: 1500,
    interest: 438.84,
    total: 1938.84
  }
  expect(compoundInterest(4.3, 4, 1500, 6)).toEqual(result)
})