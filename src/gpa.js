const Decimal = require('decimal.js')

/**
 * Calculates the GPA from given list of courses and grades.
 * 
 * @param {array} numbers
 * @returns {number} Returns the gpa.
 * @example 
 * 
 * gpa([{ course: math, credit: 3, score: 'A'}, { course: 'science', credit: 3, score: 'B' }])
 * // => { total: 3.5, grades: [{ math: 12 }, { science: 9 }] }
 */
function gpa(courses) {
  if (!courses || !courses.length) {
    throw new Error('please provide a list of courses and grades')
  }

  const scale = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'E/F': 0
  }

  const response = {
    total: 0,
    grades: []
  }

  let credits = 0
  let sum = 0

  for (let x = 0; x < courses.length; x++) {
    const { course, credit, grade } = courses[x]
    const points = Decimal(credit).times(scale[grade]).toNumber()

    response.grades.push({ [course]: points })

    credits += credit
    sum += points
  }

  response.total = sum / credits

  return response
}

const links = [
  'https://pages.collegeboard.org/how-to-convert-gpa-4.0-scale'
]

module.exports = gpa