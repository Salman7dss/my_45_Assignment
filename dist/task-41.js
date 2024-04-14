#! /usr/bin/env node
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
let magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
    "Teller",
];
// Call the function to show the names of magicians
show_magicians(magicians);
export {};
