expect.extend({
  toBeBetween(recieved, start, end) {
    const pass = recieved > start && recieved < end;
    if (pass) {
      return {
        message: () => `Expected ${recieved} to be between ${start} and ${end}`,
        pass: true
      }
    } else {
      return {
        message: () => `Expected ${recieved} to be between ${start} and ${end}`,
        pass: false
      }
    }
  }
});

test('expect 15 to be between 10 and 20', ()=>{
  expect(17).toBeBetween(16, 20)
});