import { getAllProducts } from "../src/database.js";
import { ProductService } from "../src/product-service.js";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");

  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(), // jadi yang di mock cuma getAllProducts
  };
});

// mock-modules.test.js
test.failing("mock modules getProductById", () => {
  ProductService.findById(1);
});

test("mock modules getAllproducts", () => {
  const products = [
    { id: 1, name: "Product Mock 1" },
    { id: 2, name: "Product Mock 2" },
  ];

  getAllProducts.mockImplementation(() => {
    return products;
  });

  expect(ProductService.findAll()).toEqual(products);
});
