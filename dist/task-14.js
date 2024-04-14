#! /usr/bin/env node
// Store the names of people to invite to dinner in an array
let guestList = [
    "Albert Einstein",
    "Marie Curie",
    "Leonardo da Vinci",
];
// Print an invitation message to each person in the guest list
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
}
export {};
