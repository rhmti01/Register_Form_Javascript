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
const para1 = para[0]
const para2 = para[1]
const para3 = para[2]
const para4 = para[3]
const para5 = para[4]
const para6 = para[5]

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
    full_name.addEventListener("keyup", validation)
    // key down to validation
    user_name.addEventListener("keyup", validation)
    // key down to validation
    email.addEventListener("keyup", validation)
    // key down to validation
    phone_number.addEventListener("keyup", validation)
    // key down to validation
    password.addEventListener("keyup", validation)
    // key down to validation
    re_password.addEventListener("keyup", validation)

    // key down to validation
    full_name.addEventListener("focus", validation)
    // key down to validation
    user_name.addEventListener("focus", validation)
    // key down to validation
    email.addEventListener("focus", validation)
    // key down to validation
    phone_number.addEventListener("focus", validation)
    // key down to validation
    password.addEventListener("focus", validation)
    // key down to validation
    re_password.addEventListener("focus", validation)
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

    // for full name input
    if (this.id == 'full-name') {
        // full validation for full name
        npluslvalid(e)
        // disable symbols
        notSymbol(e)
    }
    if (this.id == "user-name") {
        // disable symbols 
        notSymbol(e)
        // if user value was empty make a error
        valid1(this)
    }
    if (this.id == "phone-number") {
        numberValid(e)
        // if user value was empty make a error
        valid1(this)
    }
    if (this.id == "email") {
        // if user value was empty make a error
        valid1(this)
    }
    if (this.id == "password") {
        // if user value was empty make a error
        valid1(this)
    }
    if (this.id == "re-password") {
        // if user value was empty make a error
        valid1(this)
    }
}

// not allowed to be empty
function valid1(field) {
    field.spellcheck = false
    if (field.value.length <= 0) {
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
// console.log(par1.innerHtml);
// it should not contain any number
function npluslvalid(e) {
    // value validation of full name

    if (e.target.value.length > 20) {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        // e.preventDefault()
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para1.innerHTML = "Only 20 letter is Allowed"
    } else if (/\d/.test(e.target.value)) {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        // e.preventDefault()
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para1.innerHTML = "Number is Not Allowed in FullName"
    } else if (e.target.value == 0) {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        // e.preventDefault()
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para1.innerHTML = "Please Enter your Full Name"
    } else {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
        console.log(e.target);
    }
}

// other characters without numbers is not allowed
function numberValid(evt) {
    // checking with asci code (:
    if (evt.which < 48 || evt.which > 57 || evt.target.value.length > 10) {
        evt.preventDefault();

        // console.log(evt.target);
    }
}


function notSymbol(e) {
    const char = String.fromCharCode(e.keyCode); // changes the keycode from a int to a string
    if ((/[a-zA-Z0-9\s\.$]/.test(char))) {
        // console.log("not  ok ");
    } else {
        e.preventDefault(); // prevents the default (which is adding the character to the value)
        // console.log("okkkk");
    }
}

function signUpGoogle(e) {
    e.preventDefault()
}

function send() {
    console.log("it is sending data from json");
}