import { sayHello } from "../src/sayHello";

test("sayHello success", () => {
  expect(sayHello("aria")).toBe("Hello aria");
});

test.failing("sayHello error", () => {
  sayHello(null);
});

test("sayHello error", () => {
  expect(() => sayHello(null)).toThrow();
});
