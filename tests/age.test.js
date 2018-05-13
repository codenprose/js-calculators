const age = require('../src/age.js')

const twentyYears = {
  years: 20,
  months: 250,
  weeks: 1086,
  days: 7608,
  hours: 182592,
  minutes: 10955520,
  seconds: 657331200
}

test('age calculation of 20 years', () => {
  const start = new Date(97, 1)
  const end = new Date(2017, 11)
  expect(age(start, end)).toEqual(twentyYears)
})