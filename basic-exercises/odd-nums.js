// first technique
for (let index = 0; index <= 99; index++) {
  if (index % 2 === 1) console.log(index);
}
// second technique
let index = 1;
while (index <= 99) {
  console.log(index);
  index += 2;
}