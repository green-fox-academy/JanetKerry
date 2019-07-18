// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

"use strict";
export {};

declare function require(path: string);
const fs = require("fs");

/*function copy (to, from){
    fs.writeFileSync('my-file.txt', fs.readFileSync('my-file.txt'));
} */
// Write a function that copies the contents of a file into another
function copyContent(from: string, to: string) {
  try {
    fs.copyFile("my-file.txt", "my-file.txt");
  } catch {
    return false;
  }
  return true;
}
copyContent("my-file.txt", "my-file.txt");
