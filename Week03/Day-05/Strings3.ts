"use strict";
//Given a string, compute recursively a new string where all the adjacent chars are now separated by a *
function strings(str: string): string {
  if (str.length === 1) {
    return str;
  } else {
    return str.slice(0, 1) + "*" + strings(str.slice(1));
  }
}

console.log(strings("xalma"));
console.log(strings("xyzxd"));
