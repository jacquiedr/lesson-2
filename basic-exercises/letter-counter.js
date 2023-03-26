function wordSizes(str) {
  let words = str.replace(/[^\w\s]/gi, "").split(' ');
  let count = {};
  for (let index = 0; index < words.length; index++) {
    let word = words[index].length;
    if (word in count) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
  }
  return count;
}

console.log(wordSizes("What's up doc?"));