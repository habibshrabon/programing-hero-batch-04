// 3!=3 x 2 x 1
// 4! = 4 x 3 x 2 x 1 x
// 5! = 5 x 4 x 3 x 2 x 1
// 6! = 6 x 5 x 4 x 3 x 2 x 1

var factorial = 1;
for (var i = 1; i <= 7; i++) {
  factorial = factorial * i;
}
console.log(factorial);
