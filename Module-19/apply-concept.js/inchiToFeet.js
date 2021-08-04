function inchToFeet(inches) {
  var feet = inches / 12;
  return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log("My inches", feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log("dadi feet", feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log("nani feet", feet);

// var nanaInches = 168;
// var feet = nanaInches / 12;

//mile to km
function mileTOKilometer(miles) {
  var km = miles * 1.60934;
  return km;
}

var marathon = mileTOKilometer(26.2);
console.log("Km", marathon);
