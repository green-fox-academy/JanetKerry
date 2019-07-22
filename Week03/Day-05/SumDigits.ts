"use strict";
//Given a non-negative integer n, return the sum of its digits recursively (without loops).
//There is no integer type in JavaScript.
//To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

function sumOfDigits(num: number): number {
  if (num / 10 <= 1) {
    return num;
  } else {
    return (num % 10) + sumOfDigits((num - (num % 10)) / 10);
  }
}

console.log(sumOfDigits(3263));

const digitsToAdd = 123456789;

const addDigits = n => {
  if (n > 0) {
    return addDigits(Math.floor(n / 10)) + (n % 10);
  } else {
    return 0;
  }
};

console.log(addDigits(digitsToAdd));
