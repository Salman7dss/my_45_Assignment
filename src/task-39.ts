#! /usr/bin/env node

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("New York", "USA");
let city3 = city_country("Paris", "France");

// Printing the returned values
console.log(city1);
console.log(city2);
console.log(city3);
