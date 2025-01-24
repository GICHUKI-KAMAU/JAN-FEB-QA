const calculateTotal = require("./total");

test("calculateTotal", () => {
  const products = [
    { name: "Product 1", price: 50 },
    { name: "Product 2", price: 10 },
    { name: "Product 3", price: 30 },
  ];
  expect(calculateTotal(products)).toBe(97.2);
});
