// using a set number
let age = 20;

for (age = 0; age <= 20; age += 1) {
  console.log(`You are ${age} years old.`);
  console.log(`In 10 years, you will be ${age + 10} years old.`);
  console.log(`In 20 years, you will be ${age + 20} years old.`);
  console.log(`In 30 years, you will be ${age + 30} years old.`);
  console.log(`In 40 years, you will be ${age + 40} years old.`);
}

// When accepting input from user

let readlineSync = require("readline-sync");
let age = readlineSync.question("How old are you?\n");
age = parseInt(age);
console.log(`You are ${age} years old.`);

for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}
