import { sum } from "../src/sum.js";

// one-time setup
beforeAll(async () => {
  console.info("Before All");
});

afterAll(async () => {
  console.info("After All");
});

// setup each test
/*
beforeEach(() => {
  console.info("Before Each");
});

afterEach(() => {
  console.info("After Each");
});
*/

// test
test("first test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("first test");
});

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("second test");
});

/*
urutanya
before All

before Each
first test
after Each

before Each
second test
after Each

after All
*/
