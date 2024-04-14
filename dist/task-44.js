#! /usr/bin/env node
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
}
// Call the function three times with a different number of arguments each time
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato");
make_sandwich("Peanut Butter", "Jelly");
export {};
