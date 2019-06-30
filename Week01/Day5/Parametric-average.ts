'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 10;
let summ: number = 5;

for (let i: number = 1; i <= input; i++) {
    summ += i;

    let avgg: number = summ / input;
    console.log('The sum is: ' + summ + ' and the average is: ' + avgg);
}