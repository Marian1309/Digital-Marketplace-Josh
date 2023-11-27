const sum = (a: number, b: number): number => {
  return a + b;
};

test('logics of sum function', () => {
  expect(sum(7, 5)).toBe(12);
});
