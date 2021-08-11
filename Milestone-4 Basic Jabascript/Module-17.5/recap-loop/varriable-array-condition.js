var bottleColor = "yellow";
var waterQuantity = 2;
var isFull = false;

//array
var items = ["bottle", "mug", "paper", "pen"];
items.indexOf("bottle");
items.push("envelope");
items.push("watch");
items.pop();

//conditionals
if (items.length >= 4) {
  console.log("You have too many staffs on your desk.");
} else if (items.length == 4) {
  console.log("you only have one hali items");
} else {
  console.log("Wow! You have a clean desk");
}
