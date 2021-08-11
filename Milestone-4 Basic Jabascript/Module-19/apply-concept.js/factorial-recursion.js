//1! = 1
//2! = 2  x 1
// 3!=3 x 2 x 1
// 4! = 4 x 3 x 2 x 1 x
// 5! = 5 x 4 x 3 x 2 x 1
// 6! = 6 x 5 x 4 x 3 x 2 x 1
//7! = 7 x 6 x 5 x 4 x 3 x 2 x 1
// n!=n*(n+1)!

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const myFactorial = factorial(5);
console.log(myFactorial);
