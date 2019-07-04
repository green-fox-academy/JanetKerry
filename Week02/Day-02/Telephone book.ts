'use strict'

let phonebook = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982',
}

console.log(phonebook['John K. Miller']);

Object.keys(phonebook).forEach(function (key) {
    if (phonebook[key] === '307-687-2982') {
        console.log(key);
    }
});

if (phonebook['Chris E. Myers'] == undefined) {
    console.log('No, we don\'t.')
} else {
    console.log('Yes, we do.')
};