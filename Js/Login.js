document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log("hello");
    const PhoneNumber = document.getElementById('phone-number').value;
    const PinNumber = document.getElementById('pin-number').value;
    console.log(PhoneNumber, PinNumber);

    if(PhoneNumber === '5' && PinNumber === '484440'){
        console.log("You are logged in");
        window.location.href = '/Home.html'
    }else{
        alert('Pin or Phone is incorrect');
    }
    
})