const form = document.querySelector('form');

const firstNameError = document.querySelector('#first-name-error');
const firstNameInput = document.querySelector('#first-name');

const lastNameError = document.querySelector('#last-name-error');
const lastNameInput = document.querySelector('#last-name');

const emailError = document.querySelector('#e-mail-error');
const emailInput = document.querySelector('#e-mail');

const generalInquiry = document.querySelector('#general-enquiry');
const supportRequest = document.querySelector('#support-request');
const queryError = document.querySelector('#query-error');

const messageError = document.querySelector('#message-error');
const messageTextarea = document.querySelector('#message');

const consentError = document.querySelector('#consent-error');
const consentInput = document.querySelector('#consent');


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show needed error messages when submiting the form

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;

    if (firstNameInput.value.trim() == '') {
        firstNameError.classList.add('error-message-visible');
        firstNameInput.setAttribute('aria-invalid','true');
        isValid = false;
    }

    if(lastNameInput.value.trim() == '') {
        lastNameError.classList.add('error-message-visible');
        lastNameInput.setAttribute('aria-invalid', true);
        isValid = false;
    }

    if (emailInput.value.trim() == '') {
        emailError.classList.add('error-message-visible');
        emailInput.setAttribute('aria-invalid', 'true');
        isValid = false;
    }
    else if (!isValidEmail(emailInput.value.trim())) {
        emailError.classList.add('error-message-visible');
        emailInput.setAttribute('aria-invalid', 'true');
        isValid = false;
    }

    if (!generalInquiry.checked && !supportRequest.checked) {
        queryError.classList.add('error-message-visible');
        generalInquiry.setAttribute('aria-invalid', 'true');
        supportRequest.setAttribute('aria-invalid', 'true');
        isValid = false;
    }

    if(messageTextarea.value.trim() == '') {
        messageError.classList.add('error-message-visible');
        messageTextarea.setAttribute('aria-invalid', true);
        isValid = false;
    }

    if(!consentInput.checked) {
        consentError.classList.add('error-message-visible');
        consentInput.setAttribute('aria-invalid', 'true');
        isValid = false;
    }
    
    if (isValid) {
        form.submit();
    }
});


// Delet needed error messages as soon as setting an input

firstNameInput.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') {
        firstNameError.classList.remove('error-message-visible');
        e.target.setAttribute('aria-invalid', 'false');
    }
});

lastNameInput.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') {
        lastNameError.classList.remove('error-message-visible');
        e.target.setAttribute('aria-invalid', 'false');
    }
});

emailInput.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') {
        emailError.classList.remove('error-message-visible');
        e.target.setAttribute('aria-invalid', 'false');
    }
});

generalInquiry.addEventListener('change', (e) => {
    if (e.target.checked) {
        queryError.classList.remove('error-message-visible');
        e.target.setAttribute('aria-invalid', 'false');
        supportRequest.setAttribute('aria-invalid', 'false');
    }
});

supportRequest.addEventListener('change', (e) => {
    if (e.target.checked) {
        queryError.classList.remove('error-message-visible');
        e.target.setAttribute('aria-invalid', 'false');
        generalInquiry.setAttribute('aria-invalid', 'false');
    }
});

messageTextarea.addEventListener('input', (e) => {
    if (e.target.value.trim() !== '') {
        messageError.classList.remove('error-message-visible');
        e.target.setAttribute('aria-invalid', 'false');
    }
});

consentInput.addEventListener('change', (e) => {
    if (e.target.checked) {
        consentError.classList.remove('error-message-visible');
        e.target.setAttribute('aria-invalid', 'false');
    }
});
