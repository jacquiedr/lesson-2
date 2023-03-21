// Ask user for loan amount
// Ask user for loan APR
// Ask user for loan duration

const READLINE = require('readline-sync');
const MESSAGE = require('./car-loan-calc.json');

// Adds arrow before prompts to differentiate console.log's from user input
function prompt(msg) {
  console.log(`=> ${msg}`);
}

// Check user input is number
function invalidNumber(num) {
  return num.trimStart() === '' ||
        Number.isNaN(Number(num)) ||
        Number(num) < 0;
}

// Check if loan duration is in valid range of months (0 - 360)
function invalidMonths(num) {
  return Number(num) < 1 || Number(num) > 360;
}

prompt(MESSAGE['welcome']);

while (true) {
  prompt('---------------------------------');

  prompt(MESSAGE['loanAmount']);
  let loanAmount = READLINE.question();

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGE['invalidInput']);
    loanAmount = READLINE.question();
  }

  prompt(MESSAGE['annualPercentRate']);
  let annualPercentRate = READLINE.question();

  while (invalidNumber(annualPercentRate)) {
    prompt(MESSAGE['invalidInput']);
    annualPercentRate = READLINE.question();
  }

  prompt(MESSAGE['loanDuration']);
  let loanDuration = READLINE.question();

  while (invalidNumber(loanDuration) || invalidMonths(loanDuration)) {
    prompt(MESSAGE['invalidInput']);
    loanDuration = READLINE.question();
  }

  // Convert interest rate into decimal point
  let interestRate = Number(annualPercentRate / 100);

  let monthlyInterestRate = Number(interestRate / 12);

  let monthlyPayment = Number((loanAmount) *
                  ((monthlyInterestRate) /
                  (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration)))));

  prompt(`For a $${loanAmount} loan at ${annualPercentRate}% with a ${loanDuration} month loan duration, your monthly payment will be $${monthlyPayment.toFixed(2)}.`);

  prompt(MESSAGE['continueCalculating']);
  let answer = READLINE.question();

  if (answer.toUpperCase() !== MESSAGE['yes']) break;
}
