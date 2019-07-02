'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`


let numList = [3, 4, 5, 6, 7].reverse();

console.log(numList)



let numList2 = [3, 4, 5, 6, 7];

let temp: number = numList2[0]

numList2[0] = numList2[4];
numList2[1] = numList2[3];
numList2[4] = temp;

console.log(numList);



let numList3 = [3, 12, 5, 8, 7];

function reverseArray(numList3) {
    let newArray = [];
    for (let i = numList3.length - 1; i >= 0; i--) {
        newArray.push(numList3[i]);
    }
    return newArray;
}

console.log(reverseArray(numList3))