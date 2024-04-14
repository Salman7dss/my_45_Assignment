#! /usr/bin/env node

// Array of animals
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the name of each animal
console.log("Printing animal names:");
for (let animal of animals) {
  console.log(animal);
}

// Print a statement about each animal
console.log("\nPrinting statements about animals:");
for (let animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
