#! /usr/bin/env node

function make_great(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
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

// Call the make_great function to modify the magicians array
make_great(magicians);

// Call the show_magicians function to see the modified list
show_magicians(magicians);
