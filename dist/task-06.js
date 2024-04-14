#! /usr/bin/env node
// Store the person's name with whitespace characters
let personName = "\t \n  salman saeed  \n\t";
// Print the name with whitespace
console.log("Name with whitespace:", personName);
// Strip whitespace from the name
let strippedName = personName.trim();
// Print the stripped name
console.log("Stripped name:", strippedName);
export {};
