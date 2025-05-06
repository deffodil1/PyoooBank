document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const AddMoney = document.getElementById('input-add-money').value;
    const InputPin = document.getElementById('input-pin').value;
    if(InputPin === '123'){
        console.log("Money is added");
        const AccountBalance = document.getElementById('account-balance').innerText;
        const AccountBalNumber = parseFloat(AccountBalance);
        const AddMoneyNumber = parseFloat(AddMoney);
        const NewBalance = AccountBalNumber + AddMoneyNumber;
        document.getElementById('account-balance').innerText = NewBalance;
    }else{
        alert('failed to add money');
    }
})