'use strict';

// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.

// Then, print the contents of the promise after it has been fulfilled by passing
// console.log to then.

'use strict';

const promise = new Promise(function(fulfill, reject) {
  setTimeout(function() {
    // After the timeout reaches 300ms, fulfill the promise with value
    // 'FULFILLED!'.
    fulfill('FULFILLED!');
  }, 300);
});

promise.then(value => {
  console.log(value);
});
