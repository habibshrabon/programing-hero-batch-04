// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//   factorial = factorial * i;
// }
// console.log(factorial);

//function of for loop
function getFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

var firsFactorial = getFactorial(7);
console.log("factorial of 7: ", firsFactorial);

var secondFactorial = getFactorial(9);
console.log("factorial of 9", secondFactorial);
