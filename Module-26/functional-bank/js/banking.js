document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //get current deposit
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;

    const previousDepositTotal = parseInt(depositTotalText);
    depositTotal.innerText = depositAmount + previousDepositTotal;
    console.log(depositTotalText);

    //update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    //clear input fields
    depositInput.value = "";
  });

//handel withdraw Button
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // console.log("withdraw clicked");
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);

    //update withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //update balance after withdraw
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //clear withdraw input
    withdrawInput.value = "";
  });
