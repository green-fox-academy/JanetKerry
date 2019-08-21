'use strict';

import test from 'tape';
import { isAnagram } from './anagram';

test(t => {
  let stringOne: string = 'string1';
  let stringTwo: string = 'string2';

  let outPut: boolean = true;

  t.deepEqual(isAnagram(stringOne, stringTwo), outPut);
  t.end();
});
