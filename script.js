// Importing module

// // Basic import
// import "./shoppingCart.js";
// console.log("Importing module");

// Named imports

// import { addToCart } from "./shoppingCart.js";

// addToCart("beer", 5);

// Default import
import add from "./shoppingCart.js"; //we can give it any name
import { cart } from "./shoppingCart.js";

add("apples", 4);
add("cake", 3);
add("pizza", 2);

//Illustration that import is live connection
console.log(cart); //[{…}, {…}, {…}]
