// variables=>
const full_name = document.getElementById("full-name")
const user_name = document.getElementById("user-name")
const email = document.getElementById("email")
const phone_number = document.getElementById("phone-number")
const password = document.getElementById("password")
const re_password = document.getElementById("re-password")
const terms_privacy = document.getElementById("terms-privacy")
const createAccount = document.getElementById("CA")
const signWithGoogle = document.getElementById("SI")
const para = document.querySelectorAll(".in p")

// eventListeners=>
eventListeners()

function eventListeners() {
    // disabling create account button for # and /
    document.addEventListener("DOMContentLoaded", enterPress)
    // validating form function to run this
    createAccount.addEventListener("click", send)
    // disabling create account button for # and /
    signWithGoogle.addEventListener("click", signUpGoogle)
    // key down to validation
    full_name.addEventListener("keypress", validation)
    // key down to validation
    user_name.addEventListener("keypress", validation)
    // key down to validation
    email.addEventListener("keypress", validation)
    // key down to validation
    phone_number.addEventListener("keypress", validation)
    // key down to validation
    password.addEventListener("keypress", validation)
    // key down to validation
    re_password.addEventListener("keypress", validation)

    // key down to validation
    full_name.addEventListener("blur", valid1)
    // key down to validation
    user_name.addEventListener("blur", valid1)
    // key down to validation
    email.addEventListener("blur", valid1)
    // key down to validation
    phone_number.addEventListener("blur", valid1)
    // key down to validation
    password.addEventListener("blur", valid1)
    // key down to validation
    re_password.addEventListener("blur", valid1)
}

// Function

// if user keypress in input and then INTER so run validation function
function enterPress(e) {
    if (e.keyCode == 13) {
        send()
    };
}

// not allowed to be empty
function valid1(e) {
    if (e.target.value <= 0) {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        e.target.previousElementSibling.style.opacity = "1"
    } else {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        e.target.previousElementSibling.style.opacity = "0"
    }
}

// validating input for better sign up
function validation() {
    console.log("working");
    // if user value was empty make aa error
    validateLength(this)
}

function validateLength(field) {
    field.spellcheck = false
    console.log("validate length is working");
    if (field.value.length >= 0) {
        field.classList.remove("error");
        field.style.borderColor = "green"
    } else {
        field.classList.add("error");
        field.style.borderColor = "red"
    }
}











function signUpGoogle(e) {
    e.preventDefault()
}

function send() {}