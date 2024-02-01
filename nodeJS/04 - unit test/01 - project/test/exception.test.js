import { Myexception, callMe } from "../src/exception.js";

test("exception", () => {
  //   callMe("aria"); // keburu exception makanya harus ditangkep di dalam closure function expect

  expect(() => callMe("aria")).toThrow(); // errornya ditangkep
  expect(() => callMe("aria")).toThrow(Myexception);
  expect(() => callMe("aria")).toThrow("Ups My  Exception happens");
});
