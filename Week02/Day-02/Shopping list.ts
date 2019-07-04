/*
Create a list with the following items.
Eggs, milk, fish, apples, bread and chicken
Create an application which solves the following problems.
Do we have milk on the list?
Do we have bananas on the list?*/

'use strict'

let shoppingList: string[] = ['eggs', 'milk', 'apples', 'bread', 'chicken'];

if (shoppingList.indexOf('milk') > 0) {
    console.log('Yes we do.')
} else {
    console.log('No, we don\'t.')
};

if (shoppingList.indexOf('banana') > 0) {
    console.log('Yes we do.')
} else {
    console.log('No, we don\'t.')
};

