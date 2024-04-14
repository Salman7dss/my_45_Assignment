#! /usr/bin/env node

// Store the numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
  // Determine the proper ordinal ending for each number
  let ordinal: string;
  if (number === 1) {
    ordinal = "st";
  } else if (number === 2) {
    ordinal = "nd";
  } else if (number === 3) {
    ordinal = "rd";
  } else {
    ordinal = "th";
  }

  // Print the number with its proper ordinal ending
  console.log(`${number}${ordinal}`);
}
