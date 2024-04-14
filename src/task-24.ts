#! /usr/bin/env node

let name = "Alice";
let age = 25;
let numbers = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log(
  "Test for equality with strings: 'Alice' == 'Alice'. I predict True."
);
console.log(name == "Alice");

console.log(
  "Test for inequality with strings: 'Alice' != 'Bob'. I predict True."
);
console.log(name != "Bob");

// Tests using the lower case function
console.log(
  "Test using the lower case function: 'Alice' in lower case == 'alice'. I predict True."
);
console.log(name.toLowerCase() == "alice");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical test for equality: 25 == 25. I predict True.");
console.log(age == 25);

console.log("Numerical test for inequality: 25 != 30. I predict True.");
console.log(age != 30);

console.log("Test for greater than: 25 > 20. I predict True.");
console.log(age > 20);

console.log("Test for less than: 25 < 30. I predict True.");
console.log(age < 30);

console.log("Test for greater than or equal to: 25 >= 25. I predict True.");
console.log(age >= 25);

console.log("Test for less than or equal to: 25 <= 30. I predict True.");
console.log(age <= 30);

// Tests using "and" and "or" operators
console.log(
  "Test using 'and' operator: age > 20 and age < 30. I predict True."
);
console.log(age > 20 && age < 30);

console.log("Test using 'or' operator: age > 30 or age < 20. I predict False.");
console.log(age > 30 || age < 20);

// Test whether an item is in an array
console.log("Test whether 3 is in the array [1, 2, 3, 4, 5]. I predict True.");
console.log(numbers.includes(3));

// Test whether an item is not in an array
console.log(
  "Test whether 6 is not in the array [1, 2, 3, 4, 5]. I predict True."
);
console.log(!numbers.includes(6));
