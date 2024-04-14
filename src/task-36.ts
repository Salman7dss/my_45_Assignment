#! /usr/bin/env node

function make_shirt(size: string, message: string): void {
  console.log(`Creating a ${size}-sized shirt with the message: "${message}".`);
}

// Calling the function
make_shirt("medium", "Keep calm and code on!");
