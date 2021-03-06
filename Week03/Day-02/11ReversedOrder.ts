'use strict';

// Create a method that decrypts reversed-order.txt
declare function require(path: string): any
const fs = require('fs');

try {
    let fileContent: string = fs.readFileSync('reversed-order.txt', 'utf-8');
    console.log(decrypt(fileContent));
} catch (e) {
    console.log(e.message);
}
function decrypt(content: string): string {
    let decryptedString: string = '';
    let contentArray: string[] = content.split('\n');

    for (let i: number = 0; i < contentArray.length; i++) { // goes through the lines
        decryptedString += contentArray[contentArray.length - 1 - i] + '\n';
    }
    return decryptedString;
}