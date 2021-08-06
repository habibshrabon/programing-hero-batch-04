// function getFactorial(number) {
//   let factorial = 1;
//   let i = 1;
//   while (i <= number) {
//     factorial = factorial * i;
//     i++;
//   }
//   return factorial;
// }

// const myFactorial = getFactorial(6);
// console.log(myFactorial);

function getFactorial(number) {
  let factorial = 1;
  let i = number;
  while (i >= 1) {
    factorial = factorial * i;
    i--;
  }
  return factorial;
}
// const myFactorial = getFactorial(6);
// console.log(myFactorial);

//for loop revers
function getFactorial(number) {
  let factorial = 1;
  for (let i = number; i >= number; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
const myFactorial = getFactorial(6);
console.log(myFactorial);
