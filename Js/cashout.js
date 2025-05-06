document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log("you have clicked");
    const CashOut = document.getElementById('input-cahsout-money').value;
    const CashOutPin = document.getElementById('input-cashout-pin').value;
    if(CashOutPin === '1234'){
        const CureentBalance = document.getElementById('account-balance').innerText;
        const CurrentBalanceNumber = parseFloat(CureentBalance);
        const CashOutNumber = parseFloat(CashOut);
        const NewBalance = CurrentBalanceNumber - CashOutNumber;
        document.getElementById('account-balance').innerText = NewBalance;
    }
})