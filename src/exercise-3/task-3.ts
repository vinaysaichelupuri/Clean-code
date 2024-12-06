
export type TCart = {
  price: number;
  discount: number;
}

  

export function calculateTotal(cart: TCart[]) {
  let total = 0;
  
  for (const cartItem of cart) {

    // calculate cost for item
    const shippingCost = 5.0;
    const taxPercentageOnProduct = 0.08;
    const discountedPrice = cartItem.price - cartItem.price * cartItem.discount;
    const tax = discountedPrice * taxPercentageOnProduct;
    total +=discountedPrice + tax + shippingCost;
  }
  return total;
}

