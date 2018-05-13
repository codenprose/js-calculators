const savings = require("../src/savings.js");

test("calculate savings", () => {
  const options = {
    rate: 3,
    cpp: "daily",
    balance: 1000,
    yearsToSave: 5,
    contribution: 1000,
    contributionIncrease: 3
  };

  const result = {
    balance: 68751.87,
    years: [
      { year: 1, balance: 13030.45 },
      { year: 2, balance: 25787.27 },
      { year: 3, balance: 39303.38 },
      { year: 4, balance: 53613.06 },
      { year: 5, balance: 68751.87 }
    ]
  };
  expect(savings(options)).toEqual(result);
});
