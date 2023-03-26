function negative(num) {
  if (num >= 0) {
    return num * -1;
  }
  return num;
}
// Other ways to solve this number 
function negativeRefactored(number) {
  return Math.abs(number) * -1;
}

function negativeV3(num) {
  return num >= 0 ? Math.abs(num) * -1 : num;
}

