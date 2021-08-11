function isLeapYear(year) {
  if (year % 4 == 0) {
    return true;
  } else {
    return false;
  }
}

const myYear = 2087;
const isMyLeapYear = isLeapYear(myYear);
console.log("Is my leap year", isMyLeapYear);

const yourYear = 2224;
const isYourLeapYear = isLeapYear(yourYear);
console.log("is your leap year", isYourLeapYear);
