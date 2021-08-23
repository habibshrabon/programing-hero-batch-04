const anthem = "Amar Sonar Bangla Ami Tomai Vlaobashi";
const words = anthem.split(" ");
const withoutA = anthem.split("a");
// console.log(withoutA);

//slice the
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

//substr
const anotherPart = anthem.substr(11, 7);
// console.log(anotherPart);

//substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

//concat
const first = "Dhaka";
const second = "City";
const fullString = first.concat(second).concat("abc").concat("Kiabria");
// console.log(fullString);

//
const words2 = ["a", "b", "c", "d", "e", "f"];
// const allJoined = words2.join(" ");
const allJoined = words2.join(", ");
console.log(allJoined);
