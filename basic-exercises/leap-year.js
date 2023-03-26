function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

// Further Exploration
function isLeapYearOther(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) return true;
    else if (year % 100 === 0 && year % 400 !== 0) return false;
    else return true;
  }
  return false;
}

// Part 2
function isLeapYearP2(year) {
  if (year > 1752) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }
  return year % 4 === 0;
}

// Further Exploration -> Research leap years! From: https://www.timeanddate.com/date/chinese-leap-year.html && https://www.timeanddate.com/date/leapyear.html 
// What is a leap year? -> Years where an extra day is added to the end of the shortest month, February. This day is called the intercalary day (or leap day). Leap years have 366 days instead of 365.
// Why do we have leap years? -> Leap days keep out calendar in alignment with Earth's revolutions around the sun. THe time it takes for the Earth to circle around the sun is called a tropical year, 
// and it starts on March equinox. The Gregorian calendar only has 365 days so we must add a leap day to keep up with the topical year or else our time reckoning would slowly drift apart from the 
// tropical year and get increasingly out of sync with the seasons. 
// Why don't we use the Julian calendar anymore? -> The deviation between the common year and the tropical year is a little less than 6 hours, and the Julian calendar doesn't account for this 
// precision. The Gregorian calendar's slightly more complicated set of rules determines which years are leap years. It isn't perfect but the resulting deviation is very small. 
// Leap Months -> The ancient Roman Calendar added an extra month every few years to stay in sync with the seaons, similar to the Chinese leap month. 
// The Chinese leap month -> approximately every three years (7 times in 19 years), a leap month is added to the Chinese calendar. A leap month is inserted if there are 13 New Moons from 
// the start of the 11th month in the first year to the start of the 11th month in the next year. The Chinese calendar uses a solar term system that has 12 principal terms to indicate when the 
// Sun's longitudes is a multiple of 30 degrees. Unlike all other months, the leap month does not contain a principal term.
