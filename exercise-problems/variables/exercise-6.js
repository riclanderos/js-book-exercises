// Will this program produce an error when run? Why or why not?

const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

/* No errors will occur. A constant variable cannot be assigned a new value, 
however, FOO with the value of "qux" is inside of a block scope. So they are not affecting eachother. */
