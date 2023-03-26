function areaOfRoom() {
  let readlineSync = require('readline-sync');

  const SQMETERS_TO_FEET = 10.7639;

  let type = readlineSync.question('Enter type for conversion (meters or feet):\n');
  type = type.toLowerCase();

  let length = readlineSync.question('Enter the length of the room in meters:\n');
  length = parseInt(length, 10);

  let width = readlineSync.question('Enter the width of the room in meters:\n');
  width = parseInt(width, 10);

  let squareMeters = length * width;
  let squareFeet = squareMeters * SQMETERS_TO_FEET;

  if (type === 'meters') {
    console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters.`);
  } else if (type === 'feet') {
    console.log(`The area of the room is ${squareFeet.toFixed(2)} square feet.`);
  } else {
    console.log("You have entered an invalid type.");
  }
}

areaOfRoom();