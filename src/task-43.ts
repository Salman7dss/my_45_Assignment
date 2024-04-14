#! /usr/bin/env node

// Function to modify the array of magicians by adding "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
  let great_magicians: string[] = [];
  for (let magician of magicians) {
    great_magicians.push("the Great " + magician);
  }
  return great_magicians;
}

// Function to show the names of magicians
function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

// Array of magician's names
let magicians: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];

// Call the make_great function with a copy of the magicians array and store the result in a new array
let great_magicians: string[] = make_great([...magicians]);

// Call the show_magicians function with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
