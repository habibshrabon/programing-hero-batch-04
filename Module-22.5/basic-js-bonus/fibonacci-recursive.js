const fibo = [0, 1];
for (let i = 2; i <= 6; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
// console.log(fibo);

function fibonacci(i) {
  if (i == 0) {
    return 0;
  } else if (i == 1) {
    return 1;
  }
  return fibonacci(i - 1) + fibonacci(i - 2);
}
console.log(fibonacci(7));
