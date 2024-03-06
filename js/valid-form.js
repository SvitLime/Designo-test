const form = document.querySelector('.contact-us__form');
const formItems = document.querySelectorAll('.contact-us__form-item');

for (const item of formItems) {
    item.addEventListener('blur', (event) => {
        validateForm(event.target)
    })
}

const setError = (element, message) => {
    const errorSection = element.parentElement.querySelector('.error');
    const formBtn = document.querySelector('.contact-us__form-btn');
    errorSection.innerText = message;
    element.classList.add('invalid')
    formBtn.disabled = true
}

const setValid = (element) => {
    const errorSection = element.parentElement.querySelector('.error');
    errorSection.innerText = '';
    element.classList.remove('invalid')
}

const validateEmail = (email) => {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    if (email.value === "") {
        setError(email, "Email is required");
    } else if (!regex.test(email.value)) {
        setError(email, "Email is incorrect");
    } else {
        setValid(email);
  }
}

const validateName = (name) => {
    if (name.value === '') {
        setError(name, 'Name is required')
    } else {
        setValid(name)
    }
}
const validatePhone = (phone) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (phone.value === '') {
        setError(phone, 'Phone is required')
    } else if (!regex.test(phone.value)) {
        setError(phone, 'Phone is incorrect')
    } else {
        setValid(phone)
    }
}

const validateForm = (element) => {
    switch (element.name) {
        case 'name':
            validateName(element);
            break;
        case 'email':
            validateEmail(element);
            break;
        case 'tel':
            validatePhone(element);
            break;
        default:
            alert("Validation error!");
    }
}
