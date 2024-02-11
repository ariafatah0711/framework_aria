import { sayHelloAsync, sayhello } from "../src/async.js";

test.concurrent("concurrent 1", async () => {
  await expect(sayHelloAsync("aria")).resolves.toBe("Hello aria");
});

test.concurrent("concurrent 2", async () => {
  await expect(sayHelloAsync("aria")).resolves.toBe("Hello aria");
});

test.concurrent("concurrent 3", async () => {
  await expect(sayHelloAsync("aria")).resolves.toBe("Hello aria");
});
