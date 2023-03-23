// Ask user for loan input
// Ask user for loan APR
// Ask user for loan duration

const READLINE = require('readline-sync');
const MESSAGE = require('./loan-calc.json');
const TO_DECIMAL_POINT = 100;
const YEAR = 12;


/**
 * Adds an arrow symbol (=>) in front of a given string input to
 * differentiate console logs vs. user input.
 *
 * @param {string} msg - The input message to prefix with a "=>".
 * @returns {void}
 */
function prompt(msg) {
  console.log(`=> ${msg}`);
}


/**
 * Prints a string of dashes to the console to act as a separator.
 *
 * @returns {void}
 */
function printSeperator() {
  prompt('---------------------------------');
}


/**
 * Check if the given input `num` is a valid number.
 * A valid number is a positive number and not NaN.
 *
 * @param {string|number} num - The input number to validate.
 * @returns {boolean} - Returns true if the input `num` is invalid or
 *                      negative, otherwise returns false.
 */
function invalidNumber(num) {
  return Number.isNaN(Number(num)) ||
        Number(num) < 0;
}


/**
 * Check if the given input `num` is a valid number of months.
 * A valid number of months is a number between 1 and 360 (inclusive).
 * This function also checks if the input `num` is an invalid number (NaN).
 *
 * @param {string|number} num - The input number of months to validate.
 * @returns {boolean} - Returns true if the input `num` is invalid or outside
 *                      the valid range of months (1 to 360), otherwise
 *                      returns false.
 */
function invalidMonth(num) {
  const minMonths = 1;
  const maxMonths = 360;
  return Number(num) < minMonths || Number(num) > maxMonths ||
  invalidNumber(num);
}


/**
 * Takes 'msg' (a key from JSON file) as the argument and
 * displays its JSON value to the user.
 *
 * @param {string} msg - The message key to get from the JSON file and
 *                       display to user.
 * @returns {void}
 */
function displayMessage(msg) {
  prompt(MESSAGE[msg]);
}


/**
 * Prompts the user to enter a value for the given key and validates the input
 * against the provided validation function. If the input is invalid, the
 * user is prompted again until a valid input is entered.
 *
 * @param {string} key - The key of the message to display to the user.
 * @param {function} validFcn - The validation function to check if the user
 *                              input is valid.
 *                              This function should take a single numeric
 *                              argument and return a boolean indicating if
 *                              the input is valid.
 * @returns {number} - Returns a numeric value representing the user input
 *                     after it has been validated against the provided
 *                     validation function.
 */
function getUserInput(key, validFcn) {
  prompt(MESSAGE[key]);
  let input = parseFloat(READLINE.question());

  while (validFcn(input)) {
    prompt(MESSAGE['invalidInput']);
    input = parseFloat(READLINE.question());
  }
  return input;
}


/**
 * Using the given formula, the user's monthly payment is calculated
 * based off the loan amount, the APR, and the loan duration (in months).
 *
 * @param {string|number} loanAmount - The input number of the amount the
 *                                     user wishes to loan.
 * @param {string|number} annualPercentRate - The input number of the user's
 *                                            annual percent rate.
 * @param {string|number} loanDurInMonths - The input number of the user's
 *                                          loan durartion in months.
 * @returns {number} - Returns a numeric value representing the computed
 *                     monthly payment.
 */
function computeMonthlyPayment(loanAmount, annualPercentRate, loanDurInMonths) {
  let interestRate = Number(annualPercentRate / TO_DECIMAL_POINT);
  let monthlyInterestRate = Number(interestRate / YEAR);
  let monthlyPayment = Number((loanAmount) *
                  ((monthlyInterestRate) /
                  (1 - Math.pow((1 + monthlyInterestRate),
                    (-loanDurInMonths)))));
  return monthlyPayment;
}


/**
 * Displays user's input and their final computed monthly payment.
 *
 * @param {string|number} loanAmount - The input number of the amount the
 *                                     user wishes to loan.
 * @param {string|number} annualPercentRate - The input number of the user's
 *                                            annual percent rate.
 * @param {string|number} loanDurInMonths - The input number of the user's
 *                                          loan durartion in months.
 * @param {string|number} monthlyPayment - The input number of the user's
 *                                          computed monthly payment.
 * @returns {void}
 */
// eslint-disable-next-line max-len
function displayMonthlyPayment(loanAmount, annualPercentRate, loanDurInMonths, monthlyPayment) {
  prompt(`For a $${loanAmount} loan at ${annualPercentRate}% with a ${loanDurInMonths} month loan duration, your monthly payment will be $${monthlyPayment.toFixed(2)}.`);
}


/**
 * Asks user to input 'yes' or 'no' based on if they
 * want to continue using program.
 *
 * @returns {boolean} - Returns true if the answer is valid (it is one of the
 *                      variations of 'yes' in the JSON array), the function
 *                      returns true. Otherwise, it returns false.
 */
function userWantsToContinue() {
  prompt(MESSAGE['continueCalculating']);
  let answer = READLINE.question();
  return MESSAGE['yes'].includes(answer);
}


displayMessage("welcome");

// Continue looping until the user chooses to exit.
while (true) {

  printSeperator();

  let loanAmount = getUserInput("loanAmount", invalidNumber);
  let annualPercentRate = getUserInput("annualPercentRate", invalidNumber);
  let loanDurInMonths = getUserInput("loanDurInMonths", invalidMonth);
  // eslint-disable-next-line max-len
  let monthlyPayment = computeMonthlyPayment(loanAmount, annualPercentRate, loanDurInMonths);

  printSeperator();

  // eslint-disable-next-line max-len
  displayMonthlyPayment(loanAmount, annualPercentRate, loanDurInMonths, monthlyPayment);

  printSeperator();

  if (!userWantsToContinue()) {
    printSeperator();
    displayMessage("farewell");
    break;
  } else console.clear();
}