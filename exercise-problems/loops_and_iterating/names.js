/* written using a while loop
let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); 

 // rewritten using a for loop

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); */

// controlling loops using continue

let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === "Naveed") {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);
