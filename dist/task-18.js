#! /usr/bin/env node
// Store the locations in an array (not in alphabetical order)
let placesToVisit = [
    "Tokyo",
    "Paris",
    "Machu Picchu",
    "Santorini",
    "Banff National Park",
];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());
// Show that the array is still in its original order
console.log("Still in original order:", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// Show that the array is still in its original order
console.log("Still in original order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show that its order has changed
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
// Print the list to show it’s back to its original order
console.log("Back to original order:", placesToVisit);
// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("Sorted in alphabetical order:", placesToVisit);
// Sort to change the array so it’s stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
// Print the list to show that its order has changed
console.log("Sorted in reverse alphabetical order:", placesToVisit);
export {};
