"use strict";
// Assignment 11
//Array
// Define the array for the names
let names = ["hamza", "ali", "rehman"];
//loop
//for each
//for loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//for each
names.forEach((names) => {
    console.log(names);
});
//for loop
for (const friendName of names) {
    console.log(friendName);
}
// Assignment 12
//for loop
for (let i = 0; i < names.length; i++) {
    console.log(`hello,${names[i]}! how are you?`);
}
//for each
names.forEach((names) => {
    console.log(`hi, ${names}! how you doing?`);
});
//for loop
for (const friendName of names) {
    console.log(`hye, ${friendName}! how are you?`);
}
