import { sayHelloAsync } from "../src/async.js";

test("async", async () => {
  // jika ditambahin asynch () : maka nanti jest akan tahu semua yang didalam ini memanfaatkan async

  const result = await sayHelloAsync("ariafatah");
  expect(result).toBe("Hello ariafatah");
});

test("async matchers", async () => {
  await expect(sayHelloAsync("ariafatah")).resolves.toBe("Hello ariafatah");
  await expect(sayHelloAsync()).rejects.toBe("Name is empety!");
});
