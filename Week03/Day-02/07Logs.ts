'use strict';
export = {};
declare function require(path: string): any;

const fs = require('fs');

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

/*fs.readFile('log.txt');

function simpleReadFileSync('log.txt') {
    let options = { encoding: 'utf-8', flag: 'r' };

    let buffer = fs.readFileSync('log.txt', options);

    console.log("File content : " + buffer);
}

simpleReadFileSync('test.txt');*/

function readFile(fileName: string): string {
    try {

    } catch (error) {
        return '';
    }
}
let fileContent: string = readLogFile('log.txt');
function createLinesBasedONTextContent(fileContent: string)
