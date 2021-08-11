const business = 850;
const minister = 750;
const army = 900;

/*1st rule*/
// if (business > minister) {
//   console.log("Business person er pola is bigger");
// } else {
//   console.log("minister er pola is bigger");
// }

/**function rule  */
function findLargest(first, second) {
  if (first > second) {
    return first;
  } else {
    return second;
  }
}

const largest = findLargest(354, 241);
console.log("largest is ", largest);

/**second rule compare 3 */
// if (business > minister && business > army) {
//   console.log("business is bigger");
// } else if (minister > business && minister > army) {
//   console.log("minister is bigger");
// } else {
//   console.log("Army is bigger");
// }

/**third rule  */
var max = Math.max(business, minister, army);
// console.log("Largest is max", max);
