"use strict";

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
let times = 9;

const addNumber = n => {
  if (n > 0) {
    return addNumber(n - 1) + n;
  } else {
    return 0;
  }
};

console.log(addNumber(times));
