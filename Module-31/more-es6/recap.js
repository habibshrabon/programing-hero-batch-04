//1. let and const
const hubby = "omor shani";
let phone = "iphone 15";
phone = "samsung";

//2.default parameters
function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}
const biggest = maxNumber();
console.log(biggest);

//3.template string
const myNotes = `I am mojnu of ${hubby} .I don't have a laili`;
console.log(myNotes);

//4.arrow function
const square = (x) => x * x;
console.log(square(8));
