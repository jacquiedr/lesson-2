function generateAge(min, max) {
  if (min > max) {
    return Math.floor(Math.random() * ((min - max + 1) + max));
  } else {
    return Math.floor(Math.random() * ((max - min + 1) + min));
  }
}
let age = generateAge(20, 120);
console.log(`Teddy is ${age} years old`);