const numbers = [45, 65, 99, 21, 34, 55];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(45, 99, 21);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

// numbers.push(66);
// console.log(numbers);

const numbers2 = [...numbers, 88];
numbers.push(44);
console.log(numbers);
console.log(numbers2);
