var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 7;
var packedWell = true;

// if (danishPrice < myBudget) {
//   console.log("Danish kheye danish jabo");
// } else if (butterBreadPrice < myBudget) {
//   console.log("butter  bon diye cha khamu");
// } else if (toastBiscuitPrice < myBudget) {
//   console.log("TOast biscuit khamu");
// } else {
//   console.log("Batasha diye cha khamu");
// }

if (danishPrice < myBudget) {
  if (packedWell == true) {
    console.log("Danish khabo");
  } else {
    console.log(
      "danish khamu na! karon ami khawar ahe machi kheye felse ordek"
    );
  }
}
