/* Modify the greeter.js(exercise-1.js) program to ask for the user's first and 
last names separately, then greet the user with their full name. 

let rlSync = require("readline-sync");
let name = rlSync.question(`What is your name?\n`);
console.log(`Hello, ${name}`); */

let readlineSync = require("readline-sync");
let firstName = readlineSync.question("What is your first name?\n");
let lastName = readlineSync.question("What is your last name?\n");
console.log(`Hello, ${firstName} ${lastName}!`);
