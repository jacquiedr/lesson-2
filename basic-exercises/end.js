function penultimate(str) {
  let words = str.split(' ');
  return words[words.length - 2];
}

// Further Exploration
function middleWord(str) {
  let words = str.split(' ');
  if (words.length % 2 === 1 && words.length > 1) {
    return words[Math.floor(words.length / 2)];
  } else if (words.length % 2 === 0 && words.length > 1) {
    return words[Math.floor(words.length / 2)] + ' ' + words[Math.floor(words.length / 2) + 1];
  } else {
    return str;
  }
}