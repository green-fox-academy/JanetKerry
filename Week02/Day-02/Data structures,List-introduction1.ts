'use strict';
/*We are going to play with lists. Feel free to use the built-in methods where possible.

Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add William to the list
Print out whether the list is empty or not
Add John to the list
Add Amanda to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name
William
John
Amanda
Iterate through the list and print
1. William
2. John
3. Amanda
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements*/


//   Iterate through the list and print out each name


let people = [];

console.log(people.length);

people.push('William');

console.log(people);

people.push('John', 'Amanda');

console.log(people.length);

console.log(people[2]);

people.forEach(function (Iterate) {
    console.log(Iterate)
})

people.forEach(function (Iterate, i) {
    console.log(i + 1 + '.', Iterate)
})

people.splice(people[2], 1);

console.log(people);

people.reverse().forEach(function (item) {
    console.log(item)
})

people = [];

console.log(people)

