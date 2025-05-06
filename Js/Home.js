document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    console.log('add money button is clicked');
    const AddMoney = document.getElementById('input-add-money').value;
    const InputPin = document.getElementById('input-pin').value;
    console.log(AddMoney, InputPin);
})