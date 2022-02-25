// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// It will log 1. foo does not affect the value of the first bar variable, it would only affect the inner scope variable.
