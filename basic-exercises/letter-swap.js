function swap(str) {
  let words = str.split(' ');
  let swapped = [];
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    if (word.length === 1) swapped.push(word);
    else swapped.push(word[word.length - 1] + word.slice(1, -1) + word[0]);
  }
  return swapped.join(' ');
}

// Further Exploration
function swapRefac(str) {
  return str.split(' ').map(function(word) {
    if (word.length === 1) return word;
    return word[word.length - 1] + word.slice(1, -1) + word[0];
  }).join(' ');
}

console.log(swapRefac('Oh'));