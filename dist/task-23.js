#! /usr/bin/env node
let number = 5;
// Test 1: Check if number is equal to 5
console.log("Is number == 5? I predict True.");
console.log(number == 5);
// Test 2: Check if number is greater than 10
console.log("Is number > 10? I predict False.");
console.log(number > 10);
// Test 3: Check if number is less than or equal to 5
console.log("Is number <= 5? I predict True.");
console.log(number <= 5);
// Test 4: Check if number is not equal to 3
console.log("Is number != 3? I predict True.");
console.log(number != 3);
// Test 5: Check if number is even
console.log("Is number % 2 == 0? I predict False.");
console.log(number % 2 == 0);
let fruit = "apple";
// Test 6: Check if fruit is equal to 'banana'
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == "banana");
// Test 7: Check if fruit starts with 'a'
console.log("Does fruit start with 'a'? I predict True.");
console.log(fruit.startsWith("a"));
// Test 8: Check if fruit has more than 5 characters
console.log("Does fruit have more than 5 characters? I predict False.");
console.log(fruit.length > 5);
// Test 9: Check if fruit is not equal to 'apple'
console.log("Is fruit != 'apple'? I predict False.");
console.log(fruit != "apple");
// Test 10: Check if fruit contains the letter 'p'
console.log("Does fruit contain the letter 'p'? I predict True.");
console.log(fruit.includes("p"));
export {};
