test('null', ()=>{
  let name  = null;
  expect(name).toBeNull();
  expect(name).toBeDefined();
  expect(name).not.toBeUndefined();
  expect(name).not.toBeTruthy();
  expect(name).toBeFalsy();
})