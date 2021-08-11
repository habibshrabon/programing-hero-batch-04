// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55;
/*
3rd=2nd+last
4th=3rd+2nd
5th= 4th+3rd
6th= 5th+4th
nth=(n-1)th+ (n-2)th
ith=(i-1)th +(i-2)th
*/

// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//   // ith=(i-1)th +(i-2)th
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// function fibonacciSeries(num) {
//   const fibo = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }
// const fiboSeries = fibonacciSeries(13);
// console.log(fiboSeries);

function fibonacciSeries(num) {
  if (typeof num != "number") {
    return "Please give a number";
  }
  if (num < 2) {
    return "Please enter a positive number greater than 1";
  }
  const fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
const fiboSeries = fibonacciSeries(3);
console.log(fiboSeries);
