// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt("Welcome to the Calculator!");

prompt("What is the first number?");
let num1 = readline.question();

while (invalidNumber(num1)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  num1 = readline.question();
}

prompt("What is the second number?");
let num2 = readline.question();

while (invalidNumber(num2)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  num2 = readline.question();
}

prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Operation must be 1, 2, 3, or 4!");
  operation = readline.question();
}

num1 = Number(num1);
num2 = Number(num2);
let output;
switch (operation) {
  case '1':
    output = num1 + num2;
    break;
  case '2':
    output = num1 - num2;
    break;
  case '3':
    output = num1 * num2;
    break;
  case '4':
    output = num1 / num2;
    output = output.toFixed(3);
    break;
}

prompt(`The result is ${output}.`);