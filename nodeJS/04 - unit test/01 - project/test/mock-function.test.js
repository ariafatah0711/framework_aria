import { calculate, calculateReturn } from "../src/sum.js";

test("test calculate", () => {
  const callback = jest.fn();

  calculate([10, 10, 10], callback); // 1
  calculate([10, 10, 10, 10, 10], callback); // 2

  console.info(callback.mock.calls);

  expect(callback.mock.calls.length).toBe(2); // panjang data nya
  expect(callback.mock.calls[0][0]).toBe(30); // fucntion 1
  expect(callback.mock.calls[1][0]).toBe(50); // function 2
});

test("test calculate without mock fucntion", () => {
  // kalau pakai ini gak bisa ketauan kalo error

  const logging = (total) => {
    console.info(total);
  };

  calculate([10, 10, 10], logging);
  calculate([10, 10, 10, 10, 10], logging);
});

test("test mock function return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(40); // return valuenya akan tetap 40
  callback.mockReturnValueOnce(80);

  expect(calculateReturn([10, 10, 10], callback)).toBe(40); // jadi berapapun reeturn valuenya bakal tetap 40
  expect(calculateReturn([10, 10, 10], callback)).toBe(80);

  expect(callback.mock.results[0].value).toBe(40);
  expect(callback.mock.results[1].value).toBe(80);
});

test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => {
    return total * 2;
  });

  expect(calculateReturn([10, 10, 10], callback)).toBe(60);
  expect(calculateReturn([10, 10, 10, 10], callback)).toBe(80);

  expect(callback.mock.results[0].value).toBe(60);
  expect(callback.mock.results[1].value).toBe(80);
});
