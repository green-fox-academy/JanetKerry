"us strict";

//Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.
function fibonacci(nmb: number) {
  if (nmb === 1) {
    return 0;
  } else if (nmb === 2) {
    return 1;
  } else {
    return fibonacci(nmb - 1) + fibonacci(nmb - 2);
  }
}

console.log(fibonacci(9));
