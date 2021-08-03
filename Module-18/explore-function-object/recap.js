//varriable
var favoriteBook = "4 hour work week";

//array
var bookList = ["positioning", "hooked", "start with why", "shoe dog"];
var shoeDogIndex = bookList.indexOf("shoe dog");
bookList[1] = "story Brand";

bookList.push("small giants");
bookList.pop();

//conditionals
if (bookList[1] == "hooked") {
  console.log("I am Hokked");
} else {
  console.log("I am not hooked");
}

//while Loop
var i = 0;
while (i < 15) {
  console.log(i);
  console.log("Looping...");
  i++;
}

//for Loop

for (var i = 0; i < 15; i++) {
  console.log(i);
}
