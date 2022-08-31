const sum = require('../sum');

test('should sum two numbers', () => {
  expect(sum(2, 4)).toBe(6)
  expect(sum(2, 4)).toBeGreaterThan(5)
})