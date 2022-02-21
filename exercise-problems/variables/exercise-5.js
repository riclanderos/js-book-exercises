// Take a look at this code snippet:

let foo = "bar";
{
  let foo = "qux";
}

console.log(foo);

// What does this program log to the console? Why?

// It logs "bar". foo was initialized with the value of "bar". After that a new scope is created, initialing a new foo variable with a different value. This new value goes out of scope once the block ends. When we are attempting to log foo afterwards, it will bring the first foo back into scope, which is "bar".
