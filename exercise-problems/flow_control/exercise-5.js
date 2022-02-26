// Refactor this statement to use an if statement instead.

return foo() ? "bar" : qux();

// solution
if (foo()) {
  return "bar";
} else {
  return qux();
}
