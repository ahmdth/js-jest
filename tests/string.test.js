test('my name is ahmed not to has i', () => {
  expect('ahmed').not.toMatch(/i/)
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
});

test('passes when value is a string', () => {
  expect('').toBeString();
  expect('hello').toBeString();
  expect(new String('hello')).toBeString();
  expect(true).not.toBeString();
});

expect.extend({
  toBeString(recieved) {
    const pass = typeof recieved === 'string' || recieved instanceof String;
    if (pass) {
      return {
        message: () => `Expect ${recieved} to be string`,
        pass: true
      }
    } else {
      return {
        message: () => `Expect ${recieved} to be string`,
        pass: false
      }
    }
  }
})