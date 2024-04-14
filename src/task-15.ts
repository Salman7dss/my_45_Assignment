#! /usr/bin/env node

// Store the original guest list
let originalGuestList: string[] = [
  "Albert Einstein",
  "Marie Curie",
  "Leonardo da Vinci",
];

// Identify the guest who can't make it
let guestWhoCantMakeIt: string = "Albert Einstein";

// Identify the new guest to invite
let newGuest: string = "Isaac Newton";

// Find the index of the guest who can't make it
let indexToRemove: number = originalGuestList.indexOf(guestWhoCantMakeIt);

// Remove the guest who can't make it and add the new guest
originalGuestList.splice(indexToRemove, 1, newGuest);

// Print updated invitations
for (let i = 0; i < originalGuestList.length; i++) {
  console.log(
    `Dear ${originalGuestList[i]}, you are cordially invited to dinner with me. It would be an honor to have your company.`
  );
}
