document.getElementById('btn-deposit').addEventListener('click', function () {
    //get the deposit field amount
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    //clear the deposit field
    depositField.value = '';

    //get the deposit previous value

    const depositTotalElement = document.getElementById('deposit-total')
    const preDepositTotalString = depositTotalElement.innerText;
    const preDepositTotal = parseFloat(preDepositTotalString);

    //now calculate the total value
    const currentDepositTotal = preDepositTotal + newDepositAmount;
    console.log(currentDepositTotal)
    // now set the total value on it 
    depositTotalElement.innerText = currentDepositTotal;

    // get the blance total amount
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const PreBalanceTotal = parseFloat(balanceTotalString);

    //now calculate the total balance 
    const currentBalanceTotal = PreBalanceTotal + newDepositAmount;

    //set the total balance value
    balanceTotalElement.innerText = currentBalanceTotal;

})