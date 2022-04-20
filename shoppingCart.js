// Exporting module

console.log("Exporting");

export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ quantity, product });
  console.log(`${quantity} ${product}s have been added to cart`);
};

export default function (product, quantity) {
  cart.push({ quantity, product });
  console.log(`${quantity} ${product}s have been added to cart`);
}
