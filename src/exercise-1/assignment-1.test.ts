import { calculateTotalCost } from "./assignment-1";
import { ProductsTypes } from "./assignment-1-types";

const products: ProductsTypes[] = [
  { name: "Book", quantity: 11, price: 10 },
  { name: "Pen", quantity: 5, price: 5 },    
];

describe("calculateTotalCost", () => {
  it("calculates the correct total cost without extra discount", () => {
    const result = calculateTotalCost(products);
    expect(result).toBeCloseTo(146.5); 
  });

  it("applies a 2% discount if total cost exceeds the threshold", () => {
    const expensiveProducts: ProductsTypes[] = [
      { name: "Laptop", quantity: 5, price: 250 },
    ];
    const result = calculateTotalCost(expensiveProducts);
  
    expect(result).toBeCloseTo(1264.2);
  });

  it("handles zero quantity products", () => {
    const emptyProduct: ProductsTypes[] = [
      { name: "Notebook", quantity: 0, price: 20 },
    ];
    const result = calculateTotalCost(emptyProduct);
    expect(result).toBe(0);
  });

  it("calculates cost with no products", () => {
    const result = calculateTotalCost([]);
    expect(result).toBe(0);
  });

  it("calculates correct shipping cost for low-value items", () => {
    const lowValueProducts: ProductsTypes[] = [
      { name: "Pen", quantity: 2, price: 5 },
    ];
    const result = calculateTotalCost(lowValueProducts);
    expect(result).toBeCloseTo(11);
  });
});