var tableLength = 12;
var tourDestinations = ["coxbazar", "nepal", "vutan", "paris"];

tourDestinations.indexOf("vutan");

var fourthDestination = tourDestinations[3];
tourDestinations[1] = "srilanka";

tourDestinations.push("London");
tourDestinations.pop();

if (tourDestinations[1] == "nepal") {
  console.log("Pahare pahare ahare");
} else if (tourDestinations[1] == "chaina") {
  console.log("Chaina tor kase jamu na");
} else if (tourDestinations.length == 4) {
  console.log("aro taka ase aro beshi gurmo");
} else {
  console.log("kothao jamu na basai bose mosa marmu");
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
  console.log("ami dim khamu");
}
if (eggPrice >= myBudget) {
  console.log("levu diye vat khabo");
}

var nums = [1, 5, 8];
var result = nums.indexOf(1);
console.log(result);
