const time = require('../src/time.js')

test('calculate sum of time a and time b', () => {
  const a = { day: 20, hour: 5, minute: 3, second: 9 }
  const b = { day: 8, hour: 3, minute: 2, second: 5 }
  const result = { day: 28, hour: 8, minute: 5, second: 14 }

  expect(time(a, b, 'add')).toEqual(result)
})

test('calculate the difference of time a and time b', () => {
  const a = { day: 20, hour: 5, minute: 3, second: 9 }
  const b = { day: 8, hour: 3, minute: 2, second: 5 }
  const result = { day: 12, hour: 2, minute: 1, second: 4 }

  expect(time(a, b, 'subtract')).toEqual(result)
})