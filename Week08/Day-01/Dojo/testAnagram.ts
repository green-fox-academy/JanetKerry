'use strict';

import test from 'tape';
import { isAnagram } from './anagram';

//test-1 - both letter are the same
test(t => {
  let word1: string = 'A';
  let word2: string = 'A';

  let outPut: boolean = true;

  t.deepEqual(isAnagram(word1, word2), outPut);
  t.end();
});

//test-2 Letters are different
test(t => {
  let word1: string = 'A';
  let word2: string = 'B';

  let outPut: boolean = false;

  t.deepEqual(isAnagram(word1, word2), outPut);
  t.end();
});

//test-3 space has no influence
test(t => {
  let word1: string = 'B ';
  let word2: string = 'B';

  let outPut: boolean = true;

  t.deepEqual(isAnagram(word1, word2), outPut);
  t.end();
});

//test-4 capital letter has no influence
test(t => {
  let word1: string = 'b';
  let word2: string = 'B';

  let outPut: boolean = true;

  t.deepEqual(isAnagram(word1, word2), outPut);
  t.end();
});
//test 5: checking length
test(t => {
  let word1: string = 'aaa';
  let word2: string = 'bbb';

  t.equal(word1.length, word2.length);
  t.end();
});
//test 6: letter order has no influence
test(t => {
  let word1: string = 'aAbBccc';
  let word2: string = 'cccBbAa';
  let outPut: boolean = true;

  t.deepEqual(isAnagram(word1, word2), outPut);
  t.end();
});
