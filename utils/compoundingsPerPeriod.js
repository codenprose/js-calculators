function compoundingsPerPeriod(frequency) {
  switch(frequency) {
    case 'annualy':
      return 1
    case 'quarterly':
      return 4
    case 'monthly':
      return 12
    case 'daily':
      return 365
  }
}

module.exports = compoundingsPerPeriod