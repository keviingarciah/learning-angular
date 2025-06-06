export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia A1",
  price: 100.0,
};

const tablet: Product = {
  description: "iPad Air",
  price: 200.0,
};

const shopingCart: Product[] = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

//function calculateTax({products, tax}: TaxCalculationOptions): [number, number] {
export function calculateTax(options: TaxCalculationOptions): [number, number] {
  const { products, tax } = options;

  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const [total, taxAmount] = calculateTax({
  products: shopingCart,
  tax,
});

// console.log("Total: ", total);
// console.log("Tax: ", taxAmount);
