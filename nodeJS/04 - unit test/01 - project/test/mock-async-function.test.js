import { getBalance } from "../src/async.js";

test("mock async fucntion", async () => {
  const from = jest.fn().mockResolvedValueOnce(1000);
  await expect(getBalance("aria", from)).resolves.toEqual({
    name: "aria",
    balance: 1000,
  });

  await expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn().mockRejectedValueOnce(new Error("Ups"));
  await getBalance("aria", from);
});
