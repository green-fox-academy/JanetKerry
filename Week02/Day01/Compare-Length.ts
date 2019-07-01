'strict';
// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log "p2 is longer" to the console if `secondList` has more elements than `firstList`

let firstList: Number[] = [1, 2, 3];
let secondList: Number[] = [4, 5];

if (secondList.length > firstList.length){
    console.log('p2 is longer');
}
