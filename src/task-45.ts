#! /usr/bin/env node

function create_car(
  manufacturer: string,
  model: string,
  ...details: Record<string, any>[]
): Record<string, any> {
  let car: Record<string, any> = {
    manufacturer: manufacturer,
    model: model,
  };

  // Add additional details to the car object
  for (let detail of details) {
    for (let key in detail) {
      car[key] = detail[key];
    }
  }

  return car;
}

// Call the function with required information and two other name-value pairs
let car_info = create_car(
  "Toyota",
  "Corolla",
  { color: "blue" },
  { year: 2022 }
);

// Print the object that's returned to ensure all information was stored correctly
console.log(car_info);
