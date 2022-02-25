/* Write a program that uses a multiply function to multiply two numbers and 
returns the result. Ask the user to enter the two numbers, then output the numbers 
and result as a simple equation. */

// first solution
function getMultiple(prompt) {
  let readlineSync = require("readline-sync");
  let multiple = readlineSync.question(prompt);
  return multiple;
}

let firstNumber = getMultiple("Enter the first number: ");
let secondNumber = getMultiple("Enter the second number: ");
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);

// second solution
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require("readline-sync");
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber("Enter the first number: ");
let right = getNumber("Enter the second number: ");
console.log(`${left} * ${right} = ${left * right}`);
