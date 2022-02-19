// Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:
let number = 4936;
let ones = number % 10;
console.log(ones);
//  6

console.log((number = (number - ones) / 10));
// 493

let tens = number % 10;
console.log(tens);
// 3

console.log((number = (number - tens) / 10));
// 49
let hundreds = number % 10;
console.log(hundreds);
// 9

let thousands = (number - hundreds) / 10;
console.log(thousands);
//4
