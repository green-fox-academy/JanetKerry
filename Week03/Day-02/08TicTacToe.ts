"use strict";

export = {};
declare function require(path: string): any;

const fs = require("fs");

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

let filecontent: string = fs.readFileSync("win-x.txt", "utf-8");
let lines: string[] = filecontent.split("\n");

let elements: string[][] = [];

for (let i: number = 0; i < lines.length; i++) {
  elements.push(lines[i].split(""));
}

console.log(elements);

function equals(char1: string, char2: string, char3: string) {
  return char1 === char2 && char2 === char3;
}
