const takeHomePay = require("../src/takeHomePay.js");

test("calculate take home pay for single person", () => {
  const options = {
    annualIncome: 80000,
    payFrequency: "semi-monthly",
    fileStatus: "single",
    allowances: 2,
    preTaxDeductions: 87.52,
    stateTaxRate: 3.07,
    cityTaxRate: 3.92,
    selfEmployed: false,
    taxYear: 2017
  };

  const result = {
    grossPay: 3333.33,
    federalIncomeTax: 549.53,
    socialSecurityTax: 201.24,
    medicareTax: 47.06,
    stateIncomeTax: 99.65,
    cityIncomeTax: 127.24,
    deductions: 43.76,
    paycheck: 2308.62
  };

  expect(takeHomePay(options)).toEqual(result);
});
