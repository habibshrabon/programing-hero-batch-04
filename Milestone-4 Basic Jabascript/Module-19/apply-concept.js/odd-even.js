// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);

const number = 145;
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
// console.log("my", isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
// console.log("her", isHerNumberEven);

//is odd function
function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  }
  return false;
}

const isMyNumberOdd = isOdd(number);
console.log("is my number", isMyNumberOdd);
