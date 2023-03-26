/* eslint-disable radix */
let readlineSync = require('readline-sync');

let integer = 0;

while (integer <= 0) {
  // eslint-disable-next-line radix
  integer = parseInt(readlineSync.question('Please enter an integer greater than 0: '));
}

let input = readlineSync.question('Enter "s" to computer the sum, or "p" to computer the product. ');

if (input === 's') {
  let sum = 0;
  for (let idx = 1; idx <= integer; idx++) {
    sum += idx;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (input === 'p') {
  let product = 1;
  for (let idx = integer; idx > 0; idx--) {
    product *= idx;
  }
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
} else {
  console.log('Invalid input!');
}

// further exploration

function computeSum(arr) {
  return arr.reduce((accumulator, element) => {
    accumulator *= element;
    return accumulator;
  }, 0);
}

function computeProduct(arr) {
  return arr.reduce((accumulator, element) => {
    accumulator *= element;
    return accumulator;
  }, 1);
}

function cleanArray(inputArr) {
  return inputArr.split('').filter(val => !Number.isNaN(parseInt(val))).map(val => parseInt(val));
}

console.log("Please enter an array of numbers: ");
let input1 = readlineSync.question();

let cleanedInputArray = cleanArray(input1);

console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
let computeChoice = readlineSync.question();

if (computeChoice === 's') {
  let sum = computeSum(cleanedInputArray);
  console.log(`The sum of the integers in the array [${cleanedInputArray}] is ${sum}.`);
} else if (computeChoice === 'p') {
  let product = computeProduct(cleanedInputArray);
  console.log(`The product of the integers between [${cleanedInputArray}] is ${product}.`);
} else {
  console.log("Invalid operation");
}