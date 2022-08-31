expect.extend({
  toBeHexadecimal(recieved) {
    const pass = (new RegExp(/^#(?:[0-9a-fA-F]{3}){1,2}$/)).test(recieved);
    if (pass) {
      return {
        message: () => `Expected ${recieved} to be valid hexadecimal`,
        pass: true
      }
    } else {
      return {
        message: () => `Expected ${recieved} to be valid hexadecimal`,
        pass: false
      }
    }
  }
});

test('passes when value is a valid hexadecimal', () => {
  expect('#abc123').toBeHexadecimal();
  expect('#FFF').toBeHexadecimal();
  expect('#000000').toBeHexadecimal();
  expect('#123ffg').not.toBeHexadecimal();
});

