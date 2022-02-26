// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

isArrayEmpty([]);

// It will log 'Not Empty' because there is no code determining whether the array is empty. As it is written right now it is a truthy value therefore it will log 'Not Empty'.
