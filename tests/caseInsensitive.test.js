expect.extend({
  toEqualCaseInsensitive(recieved, target) {
    const pass = recieved.toLowerCase() === target.toLowerCase();
    if (pass) {
      return {
        message: () => `Expect ${recieved} to be equal ${target} ignoring case.`,
        pass: true
      }
    } else {
      return {
        message: () => `Expect ${recieved} to be equal ${target} ignoring case.`,
        pass: false
      }
    }
  }
});

it('must ignore case', () => {
  expect('hello world').toEqualCaseInsensitive('hello world');
  expect('hello WORLD').toEqualCaseInsensitive('HELLO world');
  expect('HELLO WORLD').toEqualCaseInsensitive('hello world');
  expect('hello world').toEqualCaseInsensitive('HELLO WORLD');
  expect('hello world').not.toEqualCaseInsensitive('hello');
});