const sayHello = require('../sayHello');

test('should say hello', () => { 
  expect(sayHello()).toBe("hello world")
})