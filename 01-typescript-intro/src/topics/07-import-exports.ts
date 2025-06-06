import { type Product, calculateTax } from "./06-function-destructuring";

const shopingCart: Product[] = [
  {
    description: "Nokia A1",
    price: 100.0,
  },
  {
    description: "iPad Air",
    price: 200.0,
  },
];

// Tax = 0.15
const [total, taxAmount] = calculateTax({
  products: shopingCart,
  tax: 0.15,
});

console.log("Shoping cart: ", shopingCart);
console.log("Total: ", total);
console.log("Tax: ", taxAmount);
