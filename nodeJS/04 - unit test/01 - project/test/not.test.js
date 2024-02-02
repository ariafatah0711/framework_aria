test("string.not", () => {
  const name = "ariafatah";

  expect(name).not.toBe("muzaki");
  expect(name).not.toEqual("fadly");
  expect(name).not.toMatch(/anngga/);
});

test("number.not", () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(10);
});
