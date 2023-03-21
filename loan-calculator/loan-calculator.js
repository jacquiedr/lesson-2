// Ask user for loan amount
// Ask user for loan APR
// Ask user for loan duration

const READLINE = require('readline-sync');
const MESSAGE = require('./loan-calc.json');
const TO_DECIMAL_POINT = 100;
const YEAR = 12;

// Adds arrow before prompts to differentiate console.log's from user input
function prompt(msg) {
  console.log(`=> ${msg}`);
}

// to seperate program and console logs
function seperator() {
  prompt('---------------------------------');
}

// Check user input is number
function invalidNumber(num) {
  return Number.isNaN(Number(num)) ||
        Number(num) < 0;
}

// Check if loan duration is in valid range of months (0 - 360)
function invalidMonth(num) {
  const minMonths = 1;
  const maxMonths = 360;
  return Number(num) < minMonths || Number(num) > maxMonths;
}

function welcomeUser() {
  prompt(MESSAGE['welcome']);
}

function getLoanAmount() {
  prompt(MESSAGE['loanAmount']);
  let loanAmount = parseFloat(READLINE.question());

  while (invalidNumber(loanAmount)) {
    prompt(MESSAGE['invalidInput']);
    loanAmount = parseFloat(READLINE.question());
  }
  return loanAmount;
}

function getAPR() {
  prompt(MESSAGE['annualPercentRate']);
  let annualPercentRate = parseFloat(READLINE.question());

  while (invalidNumber(annualPercentRate)) {
    prompt(MESSAGE['invalidInput']);
    annualPercentRate = parseFloat(READLINE.question());
  }
  return annualPercentRate;
}

function getLoanDurationInMonths() {
  prompt(MESSAGE['loanDurInMonths']);
  let loanDurInMonths = parseFloat(READLINE.question());

  while (invalidNumber(loanDurInMonths) || invalidMonth(loanDurInMonths)) {
    prompt(MESSAGE['invalidInput']);
    loanDurInMonths = parseFloat(READLINE.question());
  }
  return loanDurInMonths;
}

function computeMonthlyPayment(loanAmount, annualPercentRate, loanDurInMonths) {
  let interestRate = Number(annualPercentRate / TO_DECIMAL_POINT);
  let monthlyInterestRate = Number(interestRate / YEAR);
  let monthlyPayment = Number((loanAmount) *
                  ((monthlyInterestRate) /
                  (1 - Math.pow((1 + monthlyInterestRate),
                    (-loanDurInMonths)))));
  return monthlyPayment;
}

// eslint-disable-next-line max-len
function displayMonthlyPayment(loanAmount, annualPercentRate, loanDurInMonths, monthlyPayment) {
  prompt(`For a $${loanAmount} loan at ${annualPercentRate}% with a ${loanDurInMonths} month loan duration, your monthly payment will be $${monthlyPayment.toFixed(2)}.`);
}

function userWantsToContinue() {
  prompt(MESSAGE['continueCalculating']);
  let answer = READLINE.question();
  return MESSAGE['yes'].includes(answer);
}

function farewellUser() {
  prompt(MESSAGE['farewell']);
}

welcomeUser();

while (true) {

  seperator();

  let loanAmount = getLoanAmount();
  let annualPercentRate = getAPR();
  let loanDurInMonths = getLoanDurationInMonths();
  // eslint-disable-next-line max-len
  let monthlyPayment = computeMonthlyPayment(loanAmount, annualPercentRate, loanDurInMonths);

  seperator();

  // eslint-disable-next-line max-len
  displayMonthlyPayment(loanAmount, annualPercentRate, loanDurInMonths, monthlyPayment);

  seperator();

  if (!userWantsToContinue()) {
    seperator();
    farewellUser();
    break;
  } else console.clear();
}
