const usernameInput = document.getElementById('username');
const submitBtn = document.getElementById('submitBtn');
const lowercaseReq = document.getElementById('lowercase');
const uppercaseReq = document.getElementById('uppercase');
const lengthReq = document.getElementById('length');

function validateUsername() {
    const value = usernameInput.value;

    const hasLowerCase = /[a-z]/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const isLongEnough = value.length>=6;

    updateRequirement(lowercaseReq, hasLowerCase);
    updateRequirement(uppercaseReq, hasUpperCase);
    updateRequirement(lengthReq, isLongEnough);


        if(hasLowerCase && hasUpperCase && isLongEnough){
            submitBtn.disabled = false;
            submitBtn.classList.add('active');
        }else{
            submitBtn.disabled = true;
            submitBtn.classList.remove('active');
        }
    }

function updateRequirement(element, isValid){
    
    if(isValid){
        element.classList.add('valid');
    }else {
        element.classList.remove('valid');

    } 

}

usernameInput.addEventListener('input',validateUsername);