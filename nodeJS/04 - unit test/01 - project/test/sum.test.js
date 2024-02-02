import { sum, sumAll } from "../src/sum.js";

test("test sum function 1", () => {
  const result = sum(1, 2);

  expect(result).toBe(3); // expetasi dari nilai ini harus 3, jika selain 3 maka akan error
});

test("test sum function 2", () => {
  const result = sum(1, 2);

  expect(result).toBe(3); // expetasi dari nilai ini harus 3, jika selain 3 maka akan error
});

test("test sum function 3", () => {
  const result = sum(1, 2);

  expect(result).toBe(3); // expetasi dari nilai ini harus 3, jika selain 3 maka akan error
});

// sumAll
test("test sumAll function", () => {
  const number = [1, 1, 1, 1, 1];

  expect(sumAll(number)).toBe(5);
});
