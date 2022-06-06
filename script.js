// // Importing module

// // // Basic import
// // import "./shoppingCart.js";
// // console.log("Importing module");

// // Named imports

import { addToCart } from "./shoppingCart.js";

addToCart("beer", 5);

// // Default import
// import add from "./shoppingCart.js"; //we can give it any name
// import { cart } from "./shoppingCart.js";

// add("apples", 4);
// add("cake", 3);
// add("pizza", 2);

// //Illustration that import is live connection
// console.log(cart); //[{…}, {…}, {…}]

// Module pattern before ES6

// const shoppingCart = (function () {
//   const cart = [];
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   const shippingCost = 10;

//   const addToCart = function (product, quantity) {
//     cart.push({ quantity, product });
//     console.log(`${quantity} ${product}s have been added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ quantity, product });
//     console.log(`${quantity} ${product}s have been ordered`);
//   };

//   return { cart, totalPrice, totalQuantity, shippingCost, addToCart };
// })();

// shoppingCart.addToCart("bread", 5);
// console.log(shoppingCart.cart);

//  clone of objects
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

//importing es6 modules with help from parcel
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 4 },
    { product: "pizza", quantity: 5 },
  ],

  user: { loggedIn: true },
};

// shallow clone
const stateClone = Object.assign({}, state);
//Using lodash to create deep clones
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false; //update the oringial

console.log(stateClone); //The value of the clone changes
console.log(stateDeepClone); //The value of the deep clone remains the same

// Introducing hot module replacement with parcel
if (module.hot) {
  module.hot.accept();
}

console.log("kiama" ?? null);

Promise.resolve("THEN").then((x) => console.log(x));

//Polifilling
import "core-js/stable";
