function makeRed() {
  document.body.style.backgroundColor = "red";
}

//handel blue button click by setting function name

const blueButton = document.getElementById("make-blue-button");
console.log(blueButton);

//just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//green button click
const greenButton = document.getElementById("make-green-button");
//   console.log(greenButton);
//anonymous function
greenButton.onclick = function () {
  document.body.style.backgroundColor = "green";
};

//goldenrod click button add_event_listener
const goldenrod = document.getElementById("make-goldenrod-button");
goldenrod.addEventListener("click", makeGoldenRod);

function makeGoldenRod() {
  document.body.style.backgroundColor = "goldenrod";
}

//add_event_listener
const hotPinkButton = document.getElementById("make-hotpink");
hotPinkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});

//direct shortcut
document
  .getElementById("make-lightblue")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
  });
