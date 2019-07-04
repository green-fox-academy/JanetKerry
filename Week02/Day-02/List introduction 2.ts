/*Create a list ('List A') which contains the following values
Apple, Avocado, Blueberries, Durian, Lychee
Create a new list ('List B') with the values of List A
Print out whether List A contains Durian or not
Remove Durian from List B
Add Kiwifruit to List A after the 4th element
Compare the size of List A and List B
Get the index of Avocado from List A
Get the index of Durian from List B
Add Passion Fruit and Pomelo to List B in a single statement
Print out the 3rd element from List A*/

let ListA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//let temp = ListA;
let ListB = [...ListA];
//ListA = temp;

console.log(ListA);

ListB.splice(3, 1)

console.log(ListB);
console.log(ListA);

ListA.splice(3, 0, 'Kiwifruit');

console.log(ListA);

console.log('ListA length: ' + ListA.length + ', ' + 'ListB length: ' + ListB.length);

console.log(ListA.indexOf('Avocado'));

console.log(ListB.indexOf('Durian'));

ListB.push('Passion Fruit', 'Pomelo');

console.log(ListB);

console.log(ListA[2]);