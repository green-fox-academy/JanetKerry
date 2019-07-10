
'use strict';

declare function require(path: string): any;

const fs = require('fs');
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function myFunction(n: number) {

    if (n == 0)
        console.log('Fail');
    else
        console.log(10 / n);
}