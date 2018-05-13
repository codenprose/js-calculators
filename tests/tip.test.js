const tip = require('../src/tip.js');

test('get 20% tip for $25 bill', () => {
  expect(tip(25, 20)).toBe(5);
})