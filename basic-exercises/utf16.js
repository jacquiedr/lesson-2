function utf16Value(str) {
  let sum = 0;
  for (let idx = 0; idx < str.length; idx++) {
    sum += str.charCodeAt(idx);
  }
  return sum;
}

