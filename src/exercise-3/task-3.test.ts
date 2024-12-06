import { describe, it, expect } from "vitest";
import { calculateTotal, TCart } from "./task-3";

describe("task-3", () => {
  it("should get total cart price", () => {
    const cart:TCart[] = [
      { price: 100, discount: 0.1 },
      { price: 200, discount: 0.2 },
      { price: 300, discount: 0.15 },
    ];
    const totalPrice = calculateTotal(cart);
    expect(totalPrice).toEqual(560.4);
  });
});
