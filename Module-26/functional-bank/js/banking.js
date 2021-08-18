// function doubleIt(num) {
//   const result = num * 2;
//   return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  //clear input fields
  inputField.value = "";

  return amountValue;
}

function updateTotalField(totalFieldId, depositAmount) {
  const depositTotal = document.getElementById(totalFieldId);
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseInt(depositTotalText);
  depositTotal.innerText = previousDepositTotal + depositAmount;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // const depositInput = document.getElementById("deposit-input");
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue("deposit-input");

    //get current deposit

    // const depositTotal = document.getElementById("deposit-total");
    // const depositTotalText = depositTotal.innerText;

    // const previousDepositTotal = parseInt(depositTotalText);
    // depositTotal.innerText = depositAmount + previousDepositTotal;
    // console.log(depositTotalText);
    updateTotalField("deposit-total", depositAmount);

    //update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
  });

//handel withdraw Button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // console.log("withdraw clicked");
    // const withdrawInput = document.getElementById("withdraw-input");
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);

    const withdrawAmount = getInputValue("withdraw-input");

    //update withdraw total
    // const withdrawTotal = document.getElementById("withdraw-total");
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    updateTotalField("withdraw-total", withdrawAmount);

    //update balance after withdraw
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //clear withdraw input
    // withdrawInput.value = "";
  });
