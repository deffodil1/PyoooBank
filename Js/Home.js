document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    console.log('add money button is clicked');
    const AddMoney = document.getElementById('input-add-money').value;
    const InputPin = document.getElementById('input-pin').value;
    const Balance = document.getElementById('balance').innerText;
    const AddMoneyNumber = parseFloat(AddMoney);
    const BalanceNumber = parseFloat(Balance);
    const NewBalance = AddMoneyNumber + BalanceNumber;
    document.getElementById('balance').innerText = NewBalance;
    
    
    console.log( NewBalance);
    if(InputPin === '1234'){
        console.log('The money is added');
    }else{
        alert('failed to add');
    }
})