// What happens when you run the following code? Why?

const NAME = "Victor";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

NAME = "Joe";
console.log("Good Morning, " + NAME);
console.log("Good Afternoon, " + NAME);
console.log("Good Evening, " + NAME);

/* First it will log the three greetings for Victor. Then an error will be 
returned. NAME is a constant therefore it cannot be reassigned a different value. */
