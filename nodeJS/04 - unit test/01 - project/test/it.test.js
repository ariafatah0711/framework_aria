import { sumAll } from "../src/sum";

describe("when call sumALL()", () => {
  // mirip seperti bercerita
  it("should get 30 with parameter [10, 10, 10]", () => {
    expect(sumAll([10, 10, 10])).toBe(30);
  });
  it("should get 30 with parameter [10, 10, 10, 10, 10]", () => {
    expect(sumAll([10, 10, 10, 10, 10])).toBe(50);
  });
});
