import { sumAll } from "../src/sum.js";

/* duplicate unit test*/
// test("sumAll([10, 10, 10])", () => {
//   expect(sumALl([10, 10, 10])).toBe(30);
// });

// test("sumAll([10, 10, 10, 10, 10])", () => {
//   expect(sumALl([10, 10, 10, 10, 10])).toBe(50);
// });

/* each function unit test */
const table = [
  [[10, 10, 10], 30],
  [[10, 10, 10, 10, 10], 50],
  [[10, 10, 10, 10, 10, 10, 10], 70],
];

test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});
