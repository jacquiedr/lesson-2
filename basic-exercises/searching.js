/* eslint-disable radix */
let rl = require('readline-sync');

let number1 = parseInt(rl.question('Enter the 1st number: '));
let number2 = parseInt(rl.question('Enter the 2nd number: '));
let number3 = parseInt(rl.question('Enter the 3rd number: '));
let number4 = parseInt(rl.question('Enter the 4th number: '));
let number5 = parseInt(rl.question('Enter the 5th number: '));
let number6 = parseInt(rl.question('Enter the last number: '));

let numArray = [number1, number2, number3, number4, number5];

if (numArray.includes(number6)) {
  console.log(`The number ${number6} appears in ${numArray}.`);
} else {
  console.log(`The number ${number6} does not appear in ${numArray}.`);
}

// Further exploration
function isIncluded(arr, val) {
  return arr.some(el => el > val);
}

console.log(isIncluded([2, 3, 4, 65, 4], 25));