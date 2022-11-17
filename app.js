const form = document.querySelector('.wrapper-form');
const formInput = document.querySelector('.form-input');
const errorImg = document.querySelector('.wrapper-form-error-img');
const formBtn = document.querySelector('.wrapper-form-arrow');
const alertMsg = document.querySelector('.alertmsg')

// FORM VALIDATION

form.addEventListener('submit', function (e) {

    let emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let emailIsValidated = formInput.value;

    e.preventDefault();

    if (!emailIsValidated) {
        setMessage(`Please provide a valid email`, errorImg, form)
    } else if (!emailRegEx.test(formInput.value)) {
        setMessage(`Please provide a valid email`, errorImg, form)
    }
});

// Set message
function setMessage(errMsg, errorImg) {
    alertMsg.style.color = 'red';
    alertMsg.style.fontStyle = 'italic'
    alertMsg.textContent = errMsg;
    alertMsg.style.display = 'flex';
    errorImg.style.display = 'flex';
    form.style.border = '2px solid red'
    setTimeout(() => {
    alertMsg.style.display = 'none';
    errorImg.style.display = 'none';
    form.style.border = '1px solid hsl(0, 36%, 70%)';
    }, 3000);
}