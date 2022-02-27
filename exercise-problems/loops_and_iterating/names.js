let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index++;
}

console.log(upperNames);
