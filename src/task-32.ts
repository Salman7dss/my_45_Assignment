#! /usr/bin/env node

// List of current users
let current_users: string[] = ["john", "alice", "bob", "jane", "mary"];

// List of new users
let new_users: string[] = ["alice", "susan", "peter", "JOHN", "emma"];

// Convert current_users to lowercase for case-insensitive comparison
let current_users_lower: string[] = current_users.map((user) =>
  user.toLowerCase()
);

// Loop through new_users list
for (let user of new_users) {
  // Convert the username to lowercase for case-insensitive comparison
  let user_lower: string = user.toLowerCase();

  // Check if the username has already been used
  if (current_users_lower.includes(user_lower)) {
    console.log(
      `The username '${user}' is not available. Please enter a new username.`
    );
  } else {
    console.log(`The username '${user}' is available.`);
  }
}
