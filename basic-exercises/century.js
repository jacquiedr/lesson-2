function century(year) {
  let yearInCentury = Math.ceil(year / 100);
  if ((yearInCentury >= 10 && yearInCentury <= 20) ||
   (yearInCentury % 10) === 0) {
    return yearInCentury + 'th'
  } else if ((yearInCentury % 10) === 1) {
    return yearInCentury + 'st';
  } else if ((yearInCentury % 10) === 2) {
    return yearInCentury + 'nd';
  } else return yearInCentury + 'rd';
}

console.log(century(10000));