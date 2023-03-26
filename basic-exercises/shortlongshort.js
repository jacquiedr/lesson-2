function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  }
  return str2 + str1 + str2;
}

console.log(shortLongShort('abcde', 'fgh'));