//handel deposit button events
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // console.log("deposit bank");
    //get the amount deposit
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById("deposit-total");
    depositTotal.innerText = depositAmount;

    //clear the deposit amount field
    depositInput.value = "";
  });
