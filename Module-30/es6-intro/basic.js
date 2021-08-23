//variable
var deposit = 400;
//condition
if (deposit > 500) {
} else if (deposit < 200) {
} else if (deposit == 500) {
} else if (deposit != 500) {
} else if (deposit >= 500) {
} else if (deposit <= 500) {
} else {
}

//array
const numbers = [45, 12, 45, 48, 78, 49, 66];
const numberCount = numbers.length;
numbers.pop();
numbers.push(111);
numbers[2] = 555;
//check whether 222 includes in the array
if (numbers.indexOf(222) !== -1) {
}
if (numbers.includes(222)) {
}

//loop
//while,for
for (const number of numbers) {
}
//function
function fullName(first, second) {
  const name = first + " " + second;
}
const person = fullName("Rahim", "ali");

//object
const bottle = { color: "yellow", contain: "water", price: 15 };
