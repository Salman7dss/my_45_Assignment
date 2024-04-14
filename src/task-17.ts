#! /usr/bin/env node

// Store the original guest list
let originalGuestList: string[] = [
  "Nikola Tesla",
  "Marie Curie",
  "Ada Lovelace",
  "Leonardo da Vinci",
  "Galileo Galilei",
  "Stephen Hawking",
];

// Identify the guest who can't make it
let guestWhoCantMakeIt: string = "Nikola Tesla";

// Identify the new guest to invite
let newGuest: string = "Isaac Newton";

// Print the name of the guest who can't make it
console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);

// Find the index of the guest who can't make it
let indexToRemove: number = originalGuestList.indexOf(guestWhoCantMakeIt);

// Remove the guest who can't make it and add the new guest
originalGuestList.splice(indexToRemove, 1, newGuest);

// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
originalGuestList.unshift("Thomas Edison");

// Add one new guest to the middle of the array
originalGuestList.splice(
  Math.floor(originalGuestList.length / 2),
  0,
  "Albert Einstein"
);

// Use append() to add one new guest to the end of the list
originalGuestList.push("Charles Darwin");

// Inform that only two people can be invited for dinner
console.log("Sorry, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (originalGuestList.length > 2) {
  let removedGuest = originalGuestList.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print messages to the remaining two people still on the list
originalGuestList.forEach((guest) => {
  console.log(`Dear ${guest}, you are still invited to dinner.`);
});

// Remove the last two names from the list
originalGuestList.pop();
originalGuestList.pop();

// Print the empty list to confirm
console.log("Updated guest list:", originalGuestList);
