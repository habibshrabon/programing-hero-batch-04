// var i = 0;
// while (i < 15) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
//   i++;
// }

// for (var i = 0; i < 20; i++) {
//   console.log(i);
//   if (i > 8) {
//     break;
//   }
// }

var numbers = [45, 25, 44, 58, 45, 77, 88, 99, 100];
// for (var i = 0; i < numbers.length; i++) {
//   var number = numbers[i];
//   console.log(number);
//   if (number > 99) {
//     break;
//   }
// }

for (let i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 60) {
    continue;
  }
  console.log(number);
}
