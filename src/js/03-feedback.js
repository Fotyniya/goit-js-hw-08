const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

initForm();

form.addEventListener('submit', onFormSubmit);
const onThrottleInput = throttle (onFormInput, 500);
form.addEventListener("input", onThrottleInput);

function onFormSubmit (evt) {
    evt.preventDefault();
    
    const email = evt.currentTarget.elements.email.value;
    const message = evt.currentTarget.elements.message.value;
    
    localStorage.removeItem(LOCALSTORAGE_KEY);
    const formElements = {
        email,
        message,
    };
    console.log (formElements);
    form.reset();
};
function onFormInput (evt) {
    let data = localStorage.getItem(LOCALSTORAGE_KEY);

    data = data ? JSON.parse(data) : {};
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    console.log (localStorage);
};

function initForm() {
    let data = localStorage.getItem(LOCALSTORAGE_KEY);
    if (data) {
        data = JSON.parse(data);
        Object.entries(data).forEach(([name, value]) => {
            data[name] = value;
            form.elements[name].value = value;
        })
    } 
};