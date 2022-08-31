test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
  expect(data).toHaveProperty("two")
  expect(data).toHaveProperty("two", 2)
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
test("test to be null", ()=>{
  let name;
  expect(name).toBeUndefined();
})