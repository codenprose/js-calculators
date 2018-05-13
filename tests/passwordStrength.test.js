const passwordStrength = require('../src/passwordStrength.js')

test('calculate strength of password', () => {
  expect(passwordStrength('Pw_St@tus17')).toEqual({ strength: 'Strong', value: 70.69 })
})