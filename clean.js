const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// const limit = spendingLimits?.[user] ? spendingLimits?.[user] : 0;
// const limit = spendingLimits?.[user] ?? 0; //clever code
const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (state, limits, value, description, user = "jonas") {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, "Going to movies 🍿", "Matilda");
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");
console.log(newBudget3);

// const checkExpense = function (state, limits) {
//   // for (let entry of budget) if (entry.value < -getLimit(limits, entry.user)) entry.flag = "limit";

//   return state.map((entry) => {
//     return entry.value < -getLimit(limits, entry.user) ? { ...state, flag: "limit" } : state;
//   });
// };

// same as above
const checkExpense = (state, limits) =>
  state.map((entry) => (entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: "limit" } : entry));

const finalBudget = checkExpense(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = (state, bigLimit) =>
  state
    .filter((entry) => entry.value <= -bigLimit)
    .map((entry) => entry.description.slice(-2))
    .join(" / ");

console.log(logBigExpenses(finalBudget, 1000));
