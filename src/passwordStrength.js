const formatFloat = require('../utils/formatFloat.js')

/**
* Calculate strength of password
* 
* @param {string} pw
* @returns {number}
* @example

* passwordStrength('Pw_@t@tus17')
* => { strength: 'Strong', value: 70.69 }
*/
function passwordStrength(pw) {
  if (!pw || typeof pw !== 'string') {
    throw new Error('please provide a valid pw argument')
  }

  const value = formatFloat(entropy(pw))
  let strength = ''

  if (value > 128) {
    strength = 'Very Strong'
  } else if (value > 60) {
    strength = 'Strong'
  } else if (value > 36) {
    strength = 'Reasonable'
  } else if (value > 28) {
    strength = 'Weak'
  } else {
    strength = 'Very Weak'
  }

  return {
    strength,
    value
  }
}

/* *
*  Password Entropy Algorithm
*
*  http://www.pleacher.com/mp/mlessons/algebra/entropy.html
*
*  Password strength is determined with this chart:
*  < 28 bits = Very Weak; might keep out family members
*  28 - 35 bits = Weak; should keep out most people, often good for desktop login passwords
*  36 - 59 bits = Reasonable; fairly secure passwords for network and company passwords
*  60 - 127 bits = Strong; can be good for guarding financial information
*  128+ bits = Very Strong; often overkill
*
* */
function hasUpper(str) {
  return /[A-Z]/.test(str)
}

function hasLower(str) {
  return /[a-z]/.test(str)
}

function hasSpecial(str) {
  return /\W/.test(str) || str.includes('_')
}

function hasNumbers(str) {
  return /[0-9]/.test(str)
}

function inspectCharacters(str) {
  const criteria = [
    {
      fn: hasLower,
      weight: 26
    },
    {
      fn: hasUpper,
      weight: 26,
    },
    {
      fn: hasNumbers,
      weight: 10
    },
    {
      fn: hasSpecial,
      weight: 24
    },
  ]

  return criteria.reduce((accu, c) => {
    if(c.fn(str)) {
      return accu + c.weight
    } else {
      return accu
    }
  }, 0)
}

function log2(x) {
  return Math.log(x) /  Math.log(2)
}

function entropy(pw) {
  const C = inspectCharacters(pw)
  const E = pw.length
  return log2(Math.pow(C, E))
}

module.exports = passwordStrength