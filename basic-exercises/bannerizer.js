function logInBox(str, max = str.length) {
  if (str.length > max) {
    str = str.substring(0, max);
  }
  let horizontalRule = `+${'-'.repeat(str.length + 2)}+`;
  let emptyLine = `|${" ".repeat(str.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${str} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

// set max length and have words wrap around if it doesn't fit in
// the box
// eslint-disable-next-line max-lines-per-function, max-statements
function logInBoxWrappedText(str, max = str.length) {
  let splitStrings = [];
  while (str.length > 0) {
    if (str.length < max) {
      splitStrings.push(str + (' '.repeat(max - str.length)));
      break;
    }
    let splitString = str.substring(0, max);
    splitStrings.push(splitString);
    str = str.substring(max);
  }
  let horizontalRule = `+${'-'.repeat(max + 2)}+`;
  let emptyLine = `|${" ".repeat(max + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  for (let index = 0; index < splitStrings.length; index += 1) {
    console.log(`| ${splitStrings[index]} |`);
  }
  console.log(emptyLine);
  console.log(horizontalRule);
}


console.log(logInBoxWrappedText('To boldly go where no one has gone before.', 10));