function cleanUp(str) {
  str = str.split('');
  for (let idx = 0; idx < str.length; idx++) {
    if (!(/[a-z]/gi).test(str[idx])) {
      str[idx] = ' ';
    }
  }
  let idx = 0;
  while (idx < str.length) {
    if (str[idx] === ' ' && str[idx + 1] === ' ') {
      str.splice(idx, 1);
      idx = 0;
    } else {
      idx += 1;
    }
  }
  return str.join('');
}

console.log(cleanUp("---what's my +*& line?"));

function cleanUpRefac(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}