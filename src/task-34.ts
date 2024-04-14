#! /usr/bin/env node

// Array of favorite pizza names
let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print the name of each pizza
console.log("Printing pizza names:");
for (let pizza of pizzas) {
  console.log(pizza);
}

// Print a sentence using the name of each pizza
console.log("\nPrinting sentences about favorite pizzas:");
for (let pizza of pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
