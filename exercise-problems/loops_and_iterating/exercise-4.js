/* Does the following code produce an error? Why or why not? What output does this 
code send to the console? */

for (let i = 0; i < 5; ) {
  console.log((i += 1));
}

// The for loop will not produce an error because the increment component is optional. It will still output the numbers 1 - 5 because the code to increment is still found in the console.log.
