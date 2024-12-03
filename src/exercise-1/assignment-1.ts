import { ProductsTypes } from "./assignment-1-types";

export const products: ProductsTypes[] = [
  { name: "Book", quantity: 11, price: 10 },
  { name: "Pen", quantity: 5, price: 5 },
];

export function calculateTotalCost(products: ProductsTypes[]): number {
  const THRESHOLD = 1000;
  const HIGH_TOTAL_DISCOUNT_RATE = 0.02;

  const totalCost = products
    .map((product) => {
      const basePrice = product.quantity * product.price;
      const quantityDiscount = Math.max(0, product.quantity - 10) * product.price * 0.2;
      const shippingCost = Math.min(40, basePrice * 0.1);

      return basePrice - quantityDiscount + shippingCost;
    })
    .reduce((sum, productCost) => sum + productCost, 0);

  const finalCost =
    totalCost > THRESHOLD ? totalCost * (1 - HIGH_TOTAL_DISCOUNT_RATE) : totalCost;

  console.log("Total cost:", finalCost.toFixed(2));
  return finalCost;
}

calculateTotalCost(products);