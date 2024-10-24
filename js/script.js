const form = document.getElementById('Form');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    alert(email_input.value);
    error_message.innerText = passowrd_input.value;
});