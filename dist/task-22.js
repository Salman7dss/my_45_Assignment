#! /usr/bin/env node
// Create an array of numbers
// let numbers: number[] = [1, 2, 3, 4, 5];
// // Try to access an element at an out-of-bounds index
// console.log(numbers[10]); // This will cause an index error
// Create an array of numbers
let numbers = [1, 2, 3, 4, 5];
// Check if the index is within bounds before accessing it
let index = 10;
if (index >= 0 && index < numbers.length) {
    console.log(numbers[index]);
}
else {
    console.log("Index is out of bounds.");
}
export {};
