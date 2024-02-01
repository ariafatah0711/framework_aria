test("test toBe", () => {
  let name = "aria";
  let hello = `Hello ${name}`;

  expect(hello).toBe(`Hello aria`);
});

test("test toEquals", () => {
  let person = { id: "01" };
  Object.assign(person, { name: "ariafatah" });

  expect(person).toEqual({ id: "01", name: "ariafatah" });
});
