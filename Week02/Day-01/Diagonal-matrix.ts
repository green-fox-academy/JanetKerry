'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size: number = 10;
let colums: any[] = [0];
for (let i: number = 0; i < size; i++) {
    let row: number[] = [];

    for (let e: number = 0; e < size; e++) {
        if (i + e == size - 1) {
            row[e] = 1;
        } else {
            row[e] = 0;
        }
    } colums[i] = row;
}

colums.forEach(function (item) {
    console.log(item.join("  "))
})