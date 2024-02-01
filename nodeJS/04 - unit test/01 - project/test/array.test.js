test("array simple", () => {
  const names = ["aria", "fatah", "anom"];
  expect(names).toContain("aria"); // mengecek satu data saja
  expect(names).toEqual(["aria", "fatah", "anom"]);
});

test("array object", () => {
  const person = [
    {
      name: "aria",
    },
    {
      name: "fatah",
    },
  ];
  expect(person).toContainEqual({ name: "aria" }); // mengecek satu data saja
  expect(person).toEqual([{ name: "aria" }, { name: "fatah" }]);
});
