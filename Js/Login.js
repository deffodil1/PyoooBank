// console.log("hello Maulana Shaheb");
document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    console.log("Hello Maulana Shaheb");
    // Get The user's phone number
    const PhoneNumber = document.getElementById('phone-number').value;
    console.log(PhoneNumber);
})