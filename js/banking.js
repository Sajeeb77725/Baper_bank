document.getElementById('deposite-btn').addEventListener('click', function(){
    //get the amount deposited
    const depositeInput = document.getElementById('deposite-box');
    const depositeAmount = depositeInput.value;
    // console.log(depositeAmount);

    //value set deposite
    const depositeMoney = document.getElementById('deposite-money');
    const currentDposite = depositeMoney.innerText;
    const totalDposite = parseFloat(currentDposite) + parseFloat(depositeAmount);
    depositeMoney.innerText = totalDposite;
    //update Balance 
    const balanceWas = document.getElementById('balance-was');
    const balanceIs = balanceWas.innerText;
    const totalBalance = parseFloat(balanceIs) + parseFloat(depositeAmount);
    balanceWas.innerText = totalBalance;

    //input clear 
    depositeInput.value = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
     // Withdraw

    //get amount withdraw
    const withdrawBox = document.getElementById('withdraw-box');
    const withdrawIs = withdrawBox.value;
    //set withdraw money 
    const withdrawWas = document.getElementById('withdraw-was');
    const withdrawMoney = withdrawWas.innerText;
    const totalWithdraw = parseFloat(withdrawMoney) + parseFloat(withdrawIs);
    withdrawWas.innerText = totalWithdraw;

    // withdraw money set in balance
    const balanceWas2 = document.getElementById('balance-was');
    const balanceIs2 = balanceWas2.innerText;
    const totalBalance2 = parseFloat(balanceIs2) - withdrawIs;
    balanceWas2.innerText = totalBalance2;

    // input clear
    withdrawBox.value = '';
})