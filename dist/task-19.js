// Store the original guest list
let originalGuestList = ["Isaac Newton", "Marie Curie", "Leonardo da Vinci"];
// Identify the guest who can't make it
let guestWhoCantMakeIt = "Isaac Newton";
// Identify the new guest to invite
let newGuest = "Galileo Galilei";
// Print the name of the guest who can't make it
console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);
// Find the index of the guest who can't make it
let indexToRemove = originalGuestList.indexOf(guestWhoCantMakeIt);
// Remove the guest who can't make it and add the new guest
originalGuestList.splice(indexToRemove, 1, newGuest);
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
originalGuestList.unshift("Thomas Edison");
// Add one new guest to the middle of the array
originalGuestList.splice(Math.floor(originalGuestList.length / 2), 0, "Albert Einstein");
// Use append() to add one new guest to the end of the list
originalGuestList.push("Charles Darwin");
// Print the number of people being invited to dinner
console.log(`Number of people invited to dinner: ${originalGuestList.length}`);
// Print updated invitations
for (let i = 0; i < originalGuestList.length; i++) {
    console.log(`Dear ${originalGuestList[i]}, you are cordially invited to dinner with me. It would be an honor to have your company.`);
}
export {};
