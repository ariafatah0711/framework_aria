test("string", () => {
  const name = "aria fatah anom";

  expect(name).toBe("aria fatah anom");
  expect(name).toEqual("aria fatah anom");
  expect(name).toMatch(/aria/);
});
