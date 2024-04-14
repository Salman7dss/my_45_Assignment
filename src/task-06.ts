#! /usr/bin/env node

// Store the person's name with whitespace characters
let personName: string = "\t \n  salman saeed  \n\t";

// Print the name with whitespace
console.log("Name with whitespace:", personName);

// Strip whitespace from the name
let strippedName: string = personName.trim();

// Print the stripped name
console.log("Stripped name:", strippedName);
