document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get the withdraw field value
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // clear the input field 
    withdrawField.value = '';

    //get the withdraw total value
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const preWithdrawtotalString = withdrawTotalElement.innerText;
    const preWithdrawtotal = parseFloat(preWithdrawtotalString);

    //now calculate the total value
    const currentWithdrawTotal = preWithdrawtotal + newWithdrawAmount;

    // set the value on amount on the witdraw section
    withdrawTotalElement.innerText = currentWithdrawTotal;
})