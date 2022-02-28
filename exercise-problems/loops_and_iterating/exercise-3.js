// The following code causes an infinite loop (a loop that never stops iterating). Why?
let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The counter in line 4 will continue to loop because the condition never returns false. The counter = 1 will continue adding 1 because of the code in line 6, so the test on line 8 will have a counter that equals 2. It will never have a number greater than 2 in order to return the break.
