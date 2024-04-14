#! /usr/bin/env node
// Store person's name in a variable
let personName = "Salman Saeed";
// Print person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Print person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Function to convert string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Print person's name in titlecase
console.log("Titlecase:", toTitleCase(personName));
export {};
