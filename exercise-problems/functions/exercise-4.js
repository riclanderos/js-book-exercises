//What does the following code log to the console?

function scream(words) {
  words = words + "!!!!";
  return;
  console.log(words);
}

scream("Yipeee");

// It doesn't log anything because the return terminates the function before logging anything.
