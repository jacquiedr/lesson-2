let rl = require('readline-sync');

let noun = rl.question('Enter a noun: ');
let verb = rl.question('Enter a verb: ')
let adjective = rl.question('Enter an adjective: ');
let adverb = rl.question('Enter an adverb: ');

console.log(`In another life, you are a ${adjective} ${noun} that loves to ${verb} ${adverb}.`);