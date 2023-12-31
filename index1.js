const form = document.querySelector('#create-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event) => {

    validateForm();
    console.log(isFormValid());
    if (isFormValid() == true) {
        form.submit();
    }
    else {
        event.preventDefault();
    }

});

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });
    return result;
}

function validateForm() {

    //USERNAME
    if (usernameInput.value.trim() == '') {
        setError(usernameInput);
        alert('Name can not be empty');
    }
    else if (usernameInput.value.trim().length <= 5 || usernameInput.value.trim().length > 15) {
        setError(usernameInput);
        alert('Name must be min 5 and max 15 charecters');
    }
    else {	
        setSuccess(usernameInput);
    }

    //EMAIL
    if (emailInput.value.trim() == '') {
        setError(emailInput);
        alert('Provide email address');
    }
    else if (isEmailValid(emailInput.value)) {
        setSuccess(emailInput);
    }
    else {
        setError(emailInput);
        alert('Provide valid email address');
    }

    //PASSWORD
    if (passwordInput.value.trim() == '') {
        setError(passwordInput);
        alert('Password can not be empty');
    }
    else if (passwordInput.value.trim().length <= 8 || passwordInput.value.trim().length > 20) {
        setError(passwordInput);
        alert('Password must be min 6 and max 20 charecters');
    }
    else {
        setSuccess(passwordInput);
    }

    //CONFIRM PASSWORD
    if (confirmPasswordInput.value.trim() == '') {
        setError(confirmPasswordInput);
        alert('Confirm password can not be empty');
    }
    else if (confirmPasswordInput.value !== passwordInput.value) {
        setError(confirmPasswordInput);
        alert('Password does not match');
    }
    else {
        setSuccess(confirmPasswordInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}

