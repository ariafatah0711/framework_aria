beforeAll(() => console.info("before all outer"));
afterAll(() => console.info("after all outer"));

//* jika before each nya disini nanti yang di dalam describe akan tetap di eksekusi */
// beforeEach(() => console.info("before each outer"));
// afterEach(() => console.info("after each outer"));

test("test outer", () => console.info("test outer"));

describe("inner", () => {
  // jadi nanti before each hanya akan mengeksekusi yang di dalam descibe saja
  // dan jika before all disini nanti before all akan jalan sebelum describe inner dijalankan
  beforeEach(() => console.info("before each outer"));
  afterEach(() => console.info("after each outer"));

  test("test inner", () => console.info("test inner"));
});
