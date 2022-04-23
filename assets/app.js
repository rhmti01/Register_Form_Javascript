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
    document.addEventListener("keypress", enterPress)
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
    full_name.addEventListener("blur", validation)
    // key down to validation
    user_name.addEventListener("blur", validation)
    // key down to validation
    email.addEventListener("blur", validation)
    // key down to validation
    phone_number.addEventListener("blur", validation)
    // key down to validation
    password.addEventListener("blur", validation)
    // key down to validation
    re_password.addEventListener("blur", validation)
}

// Function

// if user keypress in input and then INTER so run validation function
function enterPress(e) {
    if (e.keyCode == 13) {
        send()
    };
}

// validating input for better sign up
function validation(e) {
    // if user value was empty make aa error
    valid1(this)
    // for full name input
    if (this.id == 'full-name') {
        // notNumber(this)
        notSymbol(e)
    }
    if (this.id == "phone-number") {
        numberValid(e)
    }
}

// not allowed to be empty
function valid1(field) {
    field.spellcheck = false
    if (field.value.length <= 1) {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        field.previousElementSibling.style.opacity = "1"
        field.style.borderColor = "red"
    } else {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        field.previousElementSibling.style.opacity = "0"
        field.style.borderColor = "green"
    }
}

// it should not contain any number
function notNumber(field) {
    // value validation of full name
    // if (!/[^a-zA-Z]/.test(field.value)) {
    if (/\d/.test(field.value) || field.value.length > 20) {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        field.previousElementSibling.style.opacity = "1"
        field.style.borderColor = "red"
        console.log("number");
    } else {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        field.previousElementSibling.style.opacity = "0"
        field.style.borderColor = "green"
    }
}

function numberValid(evt) {
    if (evt.which < 48 || evt.which > 57 || evt.target.value.length > 10) {
        evt.preventDefault();
        // console.log(evt.target);
    }
}

function notSymbol(e) {
    const char = String.fromCharCode(e.keyCode); // changes the keycode from a int to a string
    if ((/[a-zA-Z0-9\s\.$]/.test(char))) {
    //   e.preventDefault(); // prevents the default (which is adding the character to the value)
    console.log("okkkk");
    }
    else{
        console.log("not  okkkkkkkk");
    }
}

function signUpGoogle(e) {
    e.preventDefault()
}

function send() {
    console.log("it is sending data from json");
}