const dailySugar = require('../src/dailySugar.js')

test('daily sugar from 2000 calories', () => {
  expect(dailySugar(2000)).toEqual({ grams: 50, teaspoons: 12.5 })
})