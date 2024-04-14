#! /usr/bin/env node
// Store the original guest list
let originalGuestList = [
    "Albert Einstein",
    "Marie Curie",
    "Leonardo da Vinci",
];
// Identify the guest who can't make it
let guestWhoCantMakeIt = "Albert Einstein";
// Identify the new guest to invite
let newGuest = "Isaac Newton";
// Find the index of the guest who can't make it
let indexToRemove = originalGuestList.indexOf(guestWhoCantMakeIt);
// Remove the guest who can't make it and add the new guest
originalGuestList.splice(indexToRemove, 1, newGuest);
// Print updated invitations
for (let i = 0; i < originalGuestList.length; i++) {
    console.log(`Dear ${originalGuestList[i]}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
}
export {};
