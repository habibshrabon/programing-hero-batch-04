//handel deposit button events
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // console.log("deposit bank");
    //get the amount deposit
    const depositInput = document.getElementById("deposit-input");
    const newDepositText = depositInput.value;
    // console.log(depositAmount);
    const newDepositAmount = parseFloat(newDepositText);

    //update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit amount field
    depositInput.value = "";
  });

//handel withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // console.log("withdraw clicked");
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    // console.log(withdrawAmountText);
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balanceTotal
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input
    withdrawInput.value = "";
  });
