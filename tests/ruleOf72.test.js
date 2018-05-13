const ruleOf72 = require('../src/ruleOf72.js')

test('calculate how many years it would take to double your money at a rate of 10%', () => {
  expect(ruleOf72(10)).toBe(7.2)
})