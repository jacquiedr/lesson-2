const readline = require('readline-sync');
const RPS_MESSAGES = require('./rps-messages.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard', 'r', 'p', 'sc', 'sp', 'l'];
const CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const SHORT_INPUTS = {
  r: 'rock',
  sc: 'scissors',
  p: 'paper',
  sp: 'spock',
  l: 'lizard'
};
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  scissors: ['paper', 'lizard'],
  paper: ['spock', 'rock'],
  spock: ['scissors', 'rock'],
  lizard: ['spock', 'paper']
};


/**
 * Prints a string of dashes to the console to act as a separator.
 *
 * @returns {void}
 */
function printSeperator() {
  displayMessage('---------------------------------');
}

/**
 * Adds an arrow symbol (=>) in front of a given string input to
 * differentiate ouput from user input.
 *
 * @param {string} msg - The input message to prefix with a "=>".
 * @returns {void}
 */
function displayMessage(msg) {
  console.log(`=> ${msg}`);
}

/**
 * Generates a random choice for the computer player in a game.
 *
 * @returns {string} A randomly generated choice from the CHOICES array.
 */
function getComputerChoice() {
  let randomkey = Math.floor(Math.random() * CHOICES.length);
  let computerChoice = CHOICES[randomkey];
  return computerChoice;
}

/**
 * Determines who is the winner based off the choices the user and
 * computer has made.
 *
 * @param {string} userChoice - The user inputted choice.
 * @param {string} computerChoice - The computer's randomly-generated choice.
 * @returns {string} - Returns 'user' if user won the round. 'computer' if
 *                     computer won the round, and 'tie' if the round was a
 *                     tie.
 */
function computeWinner(userChoice, computerChoice) {
  if (WINNING_COMBOS[userChoice].includes(computerChoice)) {
    return 'user';
  } else if (WINNING_COMBOS[computerChoice].includes(userChoice)) {
    return 'computer';
  } else {
    return 'tie';
  }
}

/**
 * Displays winner to console based off the choices the user and
 * computer has made in the round.
 *
 * @param {string} userChoice - The user inputted choice.
 * @param {string} computerChoice - The computer's randomly-generated choice.
 * @returns {void}
 */
function displayWinnerOfRound (userChoice, computerChoice) {
  displayMessage(`You chose ${userChoice}. Computer chose ${computerChoice}.`);

  if (WINNING_COMBOS[userChoice].includes(computerChoice)) {
    displayMessage(RPS_MESSAGES['userWonRound']);
  } else if (WINNING_COMBOS[computerChoice].includes(userChoice)) {
    displayMessage(RPS_MESSAGES['computerWonRound']);
  } else {
    displayMessage(RPS_MESSAGES['roundTie']);
  }
}

/**
 * Displays overall winner to console based off final scores of
 * both players.
 *
 * @param {string} userChoice - The user inputted choice.
 * @param {string} computerChoice - The computer's randomly-generated choice.
 * @returns {void}
 */
function displayOverallWinner(userScore, computerScore) {
  if (userScore > computerScore) {
    displayMessage(RPS_MESSAGES['userWonOverall']);
  } else if ((userScore < computerScore)) {
    displayMessage(RPS_MESSAGES['computerWonOverall']);
  } else {
    displayMessage(RPS_MESSAGES['overallTie']);
  }
}

/**
 * Displays final scores of both players.
 *
 * @param {string} userChoice - The user inputted choice.
 * @param {string} computerChoice - The computer's randomly-generated choice.
 * @returns {void}
 */
function displayFinalScore(userScore, computerScore) {
  displayMessage(`Your final score: ${Number(userScore)} / 5`);
  displayMessage(`Computer's final score: ${Number(computerScore)} / 5`);
}


// Initialize game count and player scores
let gameCount = 0;
let userScore = 0;
let computerScore = 0;

displayMessage(RPS_MESSAGES['welcome']);

// Continue looping until the user chooses to exit.
while (true) {
  // Continue looping through RPSLS game for 5 rounds
  while (gameCount < 5) {
    printSeperator();

    displayMessage(`${RPS_MESSAGES['chooseRPSLS']}`);
    let userChoice = readline.question();

    while (!VALID_CHOICES.includes(userChoice)) {
      displayMessage(RPS_MESSAGES['invalidChoice']);
      userChoice = readline.question();
    }
    if (SHORT_INPUTS.hasOwnProperty(userChoice)) {
      userChoice = SHORT_INPUTS[userChoice];
    }

    let computerChoice = getComputerChoice();

    printSeperator();

    displayWinnerOfRound(userChoice, computerChoice);
    let result = computeWinner(userChoice, computerChoice);
    // Add score based off who won the round
    if (result === 'user') {
      userScore += 1;
    } else if (result === 'computer') {
      computerScore += 1;
    } else if (result === 'tie') {
      userScore += 0.5;
      computerScore += 0.5;
    }
    gameCount += 1;
  }
  printSeperator();

  displayFinalScore(userScore, computerScore);
  displayOverallWinner(userScore, computerScore);

  printSeperator();

  // Ask user if they wish to play another game
  displayMessage(RPS_MESSAGES['askToContinue']);
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    displayMessage(RPS_MESSAGES['invalidAnswer']);
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== 'y') {
    displayMessage(RPS_MESSAGES['farewell']);
    break;
  } else {
    console.clear();
    gameCount = 0;
    userScore = 0;
    computerScore = 0;
  }
}