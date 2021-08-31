/*
1.variable value not assigned
2.function but did not write return anything
3.just wrote return but did not return anything
4. parameter that is not passed
5.property that dose not exist in an object
6.accessing array element out of range
7.accessing deleted array element
8.explicitly set value to undefined
*/
let first;
// console.log(first);

function second(x, y) {
  const sum = x + y;
}
const result = second(3, 9);
// console.log(result);

function add(a, b) {
  const sum = a + b;
  //   console.log(a);
  return;
  if (b < 10) {
    return;
  }
}
const fourth = add(2, 7);
// console.log(fourth);

function double(a, b) {
  const result = a * 2;
  //   console.log(b);
  return result;
}
double(81);

const fifth = { name: "Sogir", age: 15, location: "bandarban" };
// console.log(fifth.phone);

const sixth = [54, 12, 41, 3];
// console.log(sixth[11]);

delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);

const myObject = { name: "samad", profession: null };
