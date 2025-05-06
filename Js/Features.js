document.getElementById('btn-show-cashout').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('cashout-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});

document.getElementById('btn-show-add-money').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
})