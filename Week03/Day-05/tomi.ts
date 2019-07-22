let times = 9;

const addNumber = n => {
  if (n > 0) {
    return addNumber(n - 1) + n;
  } else {
    return 0;
  }
};

console.log(addNumber(times));

const digitsToAdd = 123456789;

const addDigits = n => {
  if (n > 0) {
    return addDigits(Math.floor(n / 10)) + (n % 10);
  } else {
    return 0;
  }
};

console.log(addDigits(digitsToAdd));
