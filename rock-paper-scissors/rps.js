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
const NUMBER_OF_ROUNDS = 5;


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
 * Gets user input
 *
 * @returns {string} User input.
 */
function getUserChoice() {
  displayMessage(`${RPS_MESSAGES['chooseRPSLS']}`);
  let userChoice = readline.question().toLowerCase();
  return userChoice;
}

/**
 * Validates user input by checking if it is in valid choice and if it is long
 * short input, turning it into the full word.
 *
 * @returns {string} User input modified.
 */
function validateUserChoice(userChoice) {
  while (!VALID_CHOICES.includes(userChoice)) {
    displayMessage(RPS_MESSAGES['invalidChoice']);
    userChoice = readline.question();
  }
  if (SHORT_INPUTS.hasOwnProperty(userChoice)) {
    userChoice = SHORT_INPUTS[userChoice];
  }
  return userChoice;
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
function computeWinnerOfRound(userChoice, computerChoice) {
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
function displayWinnerOfRound(userChoice, computerChoice) {
  displayMessage(`You chose ${userChoice}. Computer chose ${computerChoice}.`);

  let winner = computeWinnerOfRound(userChoice, computerChoice);
  if (winner === 'user') {
    displayMessage(RPS_MESSAGES['userWonRound']);
  } else if (winner === 'computer') {
    displayMessage(RPS_MESSAGES['computerWonRound']);
  } else {
    displayMessage(RPS_MESSAGES['roundTie']);
  }
}

/**
 * Update round count.
 *
 * @param {number} countOfRounds - The current game count
 * @param {number} incrementor - By how much we want to increment the
 *                               game's count
 * @returns {number} - Returns update game count
 */
function incrementcountOfRounds(countOfRounds, incrementor) {
  return countOfRounds + incrementor;
}

/**
 * Update user score.
 *
 * @param {number} userScore - The current user's score
 * @param {number} incrementor - By how much we want to increment the
 *                               user's score
 * @returns {number} - Returns updated user's score
 */
function updateUserScore(result, userScore, incrementor) {
  if (result === 'user') {
    userScore += incrementor;
    return userScore;
  }
  return userScore;
}

/**
 * Update computer's score.
 *
 * @param {number} computerScore - The current computer's score
 * @param {number} incrementor - By how much we want to increment the
 *                               computer's score
 * @returns {number} - Returns updated computer's score
 */
function updateComputerScore(result, computerScore, incrementor) {
  if (result === 'computer') {
    computerScore += incrementor;
    return computerScore;
  }
  return computerScore;
}


/**
 * Displays overall winner to console based off final scores of
 * both players.
 *
 * @param {number} userScore - The user's score
 * @param {number} computerScore - The computer's score
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
 * Displays current scores of both players.
 *
 * @param {number} userScore - The user's score
 * @param {number} computerScore - The computer's score
 * @param {number} numberOfRounds - The number of rounds of games in total
 * @returns {void}
 */
function displayCurrentScore(userScore, computerScore, numberOfRounds) {
  displayMessage(`Your current score: ${Number(Math.floor(userScore))} / ${numberOfRounds}`);
  displayMessage(`Computer's current score: ${Number(Math.floor(computerScore))} / ${numberOfRounds}`);
}

/**
 * Displays final scores of both players.
 *
 * @param {number} userScore - The user's score
 * @param {number} computerScore - The computer's score
 * @param {number} numberOfRounds - The number of rounds of games in total
 * @returns {void}
 */
function displayFinalScore(userScore, computerScore, numberOfRounds) {
  displayMessage(`Your final score: ${Number(Math.floor(userScore))} / ${numberOfRounds}`);
  displayMessage(`Computer's final score: ${Number(Math.floor(computerScore))} / ${numberOfRounds}`);
}

/**
 * Reset user score to number
 *
 * @param {number} userScore - The user's score
 * @param {number} number - The number to which userScore will be reset.
 * @returns {number} - Returns new number userScore has been reset to.
 */
function resetUserScore(userScore, number) {
  userScore = number;
  return userScore;
}

/**
 * Reset user score to number
 *
 * @param {number} computerScore - The computer's score
 * @param {number} number - The number to which computerScore will be reset.
 * @returns {number} - Returns new number computerScore has been reset to.
 */
function resetComputerScore(computerScore, number) {
  computerScore = number;
  return computerScore;
}

/**
 * Reset user score to number
 *
 * @param {number} countOfRounds - The current number of games that has been
 *                              played.
 * @param {number} number - The number to which countOfRounds will be reset.
 * @returns {number} - Returns new number countOfRounds has been reset to.
 */
function resetcountOfRounds(countOfRounds, number) {
  countOfRounds = number;
  return countOfRounds;
}

/**
 * Asks user if they wish to play another game
 *
 * @returns {bool} - Returns the user's input and validates
 *                     if they said yes or no.
 */
function continuePlaying() {
  displayMessage(RPS_MESSAGES['askToContinue']);
  let answer = readline.question();
  while ((!RPS_MESSAGES['yes'].includes(answer)) &&
         (!RPS_MESSAGES['no'].includes(answer))) {
    displayMessage(RPS_MESSAGES['invalidAnswer']);
    answer = readline.question();
  }
  return RPS_MESSAGES['yes'].includes(answer);
}


displayMessage(RPS_MESSAGES['welcome']);
// Continue looping until the user chooses to exit.
while (true) {
  // Initialize round count and player scores
  let countOfRounds = 0;
  let userScore = 0;
  let computerScore = 0;
  // Continue looping through RPSLS game for 5 rounds
  while (countOfRounds < NUMBER_OF_ROUNDS) {
    printSeperator();

    let userChoice = getUserChoice();
    userChoice = validateUserChoice(userChoice);
    let computerChoice = getComputerChoice();

    printSeperator();

    displayWinnerOfRound(userChoice, computerChoice);

    let result = computeWinnerOfRound(userChoice, computerChoice);
    userScore = updateUserScore(result, userScore, 1);
    computerScore = updateComputerScore(result, computerScore, 1);

    // Only display player's current scores while we are not at the last round
    if (countOfRounds < NUMBER_OF_ROUNDS - 1) {
      printSeperator();
      displayCurrentScore(userScore, computerScore, NUMBER_OF_ROUNDS);
    }
    countOfRounds = incrementcountOfRounds(countOfRounds, 1);
  }
  printSeperator();

  displayFinalScore(userScore, computerScore, NUMBER_OF_ROUNDS);
  displayOverallWinner(userScore, computerScore);

  printSeperator();

  // Ask user if they want to play another game
  if (!continuePlaying()) {
    displayMessage(RPS_MESSAGES['farewell']);
    break;
  } else {
    // If player wants to keep playing
    // Reset player scores and round count to 0 for next game
    resetcountOfRounds(countOfRounds, 0);
    resetComputerScore(computerScore, 0);
    resetUserScore(userScore, 0);
    console.clear();
  }
}