var skyColor = "white;";

var phones = ["iphone", "Shawmi", "sumsung", "nokia", "Lg"];
phones[3] = "walton";

//check an element exists in an array
if (phones.indexOf("oppo") == -1) {
  console.log("opps! amir khan oppo is missing");
}

//if lg is available
if (phones.indexOf("lf") != -1) {
  console.log("Lg is abailable now");
}

//loop
var num = 0;
while (num <= 10) {
  num++;
}

for (var i = 0; i < phones.length; i++) {}

//function
function addThreeNumbers(number1, number2, number3) {
  var total = number1 + number2 + number3;
  return total;
}

addThreeNumbers(87, 41, 56);

// objects
var microphone = {
  brand: "blue yeti",
  color: "black",
  price: "1000",
};
