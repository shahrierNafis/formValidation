// valueMissing
// const inputs = document.querySelectorAll("input")

// const Array.from(inputs).every()

// email
const email = document.querySelector("input[type='email']");

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Expecting an email address!");
    } else {
        email.setCustomValidity("");
    }
});
//zipCode
const zipCode = document.querySelector("input[name='zipCode']")
zipCode.addEventListener("input", () => {
    if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode.value)) {
        zipCode.setCustomValidity("xxxxx or xxxxx-xxxx");
        zipCode.classList.add("invalid")
        zipCode.reportValidity();

    } else {
        zipCode.setCustomValidity("");
        zipCode.classList.remove("invalid")

    }
})
// passwordRetypeMismatch
const password = document.querySelector("input[name='password']")
const retypedPassword = document.querySelector("input[name='passwordConfirmation']")
retypedPassword.addEventListener("input", () => {
    if (password.value !== retypedPassword.value) {
        retypedPassword.setCustomValidity("Password not matching");
        retypedPassword.classList.add("invalid")
        retypedPassword.reportValidity();

    } else {
        retypedPassword.setCustomValidity("");
        retypedPassword.classList.remove("invalid")

    }
})