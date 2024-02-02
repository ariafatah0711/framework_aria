beforeEach(() => console.info("before each 1"));
afterEach(() => console.info("after each 1"));

describe("inner scope", () => {
  beforeEach(() => console.info("inner before each 1"));
  afterEach(() => console.info("inner after each 1"));

  describe("inner inner scope", () => {
    beforeEach(() => console.info("inner inner before each 1"));
    afterEach(() => console.info("inner inner after each 1"));

    test("test 1", () => console.info("test 1"));
    test("test 2", () => console.info("test 2"));
  });
});
