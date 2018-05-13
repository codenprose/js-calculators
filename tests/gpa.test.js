const gpa = require('../src/gpa.js')

test('calculate gpa from list of course/grade objects', () => {
  const courses = [
    { course: 'math', grade: 'A', credit: 3 },
    { course: 'science', grade: 'B', credit: 3 }
  ]

  const response = { 
    total: 3.5, 
    grades: [
      { math: 12 }, 
      { science: 9 }
    ] 
  }
  
  expect(gpa(courses)).toEqual(response)
})