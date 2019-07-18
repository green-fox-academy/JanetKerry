"use strict";

declare function require(path: string);

const fs = require("fs");

// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
export = {};

let lines: string = fs.readFileSync("my-file.txt", "utf-8");
// Write a function that takes a filename as string,
let splittedLines: string[] = lines.split("\n");
console.log(splittedLines);
let numberOfLines = splittedLines.length;
console.log(numberOfLines);

fs.writeFileSync("result.txt", numberOfLines);
