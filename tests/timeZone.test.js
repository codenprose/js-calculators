const timeZone = require("../src/timeZone.js");

test("calculate time difference between two cities", () => {
  const result = {
    from: { name: "America/New_York", time: "4:28 pm" },
    to: { name: "America/Los_Angeles", time: "1:28 pm" }
  };
  const time = new Date(2017, 11, 2, 16, 28);
  const from = "America/New_York";
  const to = "America/Los_Angeles";
  expect(timeZone(time, from, to)).toEqual(result);
});
