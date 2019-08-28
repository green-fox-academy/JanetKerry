'use strict';

function isAnagram(word1: string, word2: string): boolean {
  word1 = word1
    .split(' ')
    .join('')
    .toLowerCase();
  word2 = word2
    .split(' ')
    .join('')
    .toLowerCase();
  if (word1 === word2) {
    return true;
  }
  return false;
}

export { isAnagram };

// isAnagram('A', 'A'); // expected output : true
// isAnagram('A', 'B'); // expected output : false
// TDD - Test Driven Development

console.log(isAnagram('sIlEnT', 'listen'));
