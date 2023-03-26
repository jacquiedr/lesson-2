const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const FULL_ROTATION = 360;

function dms(number) {
  if (number > FULL_ROTATION) {
    number -= FULL_ROTATION;
  } else if (number < 0) {
    while (number < 0) {
      number += FULL_ROTATION;
    }
  }
  let degree = Math.floor(n);
  let minutes = (number - Math.floor(number)) * MINUTES_PER_DEGREE;
  let seconds = (minutes - Math.floor(minutes)) * SECONDS_PER_MINUTE;

  function pad(val) {
    return val >= 10 ? val : '0' + val;
  }
  return degree + '\xB0' + pad(Math.floor(minutes)) + '\'' + pad(Math.floor(seconds)) + '"';
}

console.log(dms(-40));