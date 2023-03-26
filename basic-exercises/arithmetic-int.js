let readline = require('readline-sync');

let number1 = 0;
let number2 = 0;

do {
  number1 = Number(readline.question('==> Enter the first number:\n'));
} while (number1 <= 0 || !Number.isInteger(number1));

do {
  number2 = Number(readline.question('==> Enter the second number:\n'));
} while (number2 <= 0 || !Number.isInteger(number2));

console.log(`==> ${number1} + ${number2} = ${number1 + number2}`);
console.log(`==> ${number1} - ${number2} = ${number1 - number2}`);
console.log(`==> ${number1} * ${number2} = ${number1 * number2}`);
console.log(`==> ${number1} / ${number2} = ${Math.floor(number1 / number2)}`);
console.log(`==> ${number1} % ${number2} = ${number1 % number2}`);
console.log(`==> ${number1} ** ${number2} = ${Math.pow(number1,number2)}`);