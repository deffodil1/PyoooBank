document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const AddMoney = document.getElementById('input-add-money').value;
    const AddMoneyNumber = parseFloat(AddMoney);
    const AccountBalance = document.getElementById('account-balance').innerText;
    const AccountBalanceNumber = parseFloat(AccountBalance);
    const NewBalance = AddMoneyNumber + AccountBalanceNumber;
    document.getElementById('account-balance').innerText = NewBalance;
})