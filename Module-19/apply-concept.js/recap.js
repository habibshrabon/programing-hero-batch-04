var time = "10:15pm";
var bookPrice = 150;
var isWhiteColor = false;

//array
var partners = ["sajid", "Mojid", "sadia", "Niva"];
var elementCount = partners.length;
var MojidIndex = partners.indexOf("Mojid");
partners.push("sonia");
partners.pop();

///condition
if (bookPrice < 120) {
  console.log("I will buy this book");
} else {
  console.log("mama Kisu discount den na apni na mama");
}

//loop
var i = 0;
while (i <= 17) {
  i++;
}

for (var i = 0; i < 15; i++) {}

//function
function isMoonUp() {
  if (time >= 19 && time <= 5) {
    return true;
  }
  return true;
}
var moonStatus = isMoonUp(21);

//let const

//value of the variable could change
let price = 27;
price = 29;

//value of the variable will not change
const name = "bangladesh";
