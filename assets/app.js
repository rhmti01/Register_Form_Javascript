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
    e.target.value.spellcheck = false
    // for full name input
    if (this.id == 'full-name') {
        // full validation for full name
        fulllNameee(e)
    }
    if (this.id == "user-name") {
        userrrNameee(e)
    }
    if (this.id == "phone-number") {
        phoneeeNumberrr(e)
    }
    if (this.id == "email") {
        emailValid(e)
    }
    if (this.id == "password") {
        passwordValid(e)
    }
    if (this.id == "re-password") {
        repasswordValid(e)
    }
}

// console.log(par1.innerHtml);
// it should not contain any number
function fulllNameee(e) {
    // value validation of full name
    e.target.value.spellcheck = false

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
    } else if (/[-!$%#@^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(e.target.value)) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para1.innerHTML = "Symbols is Not Allowed"
    } else {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
    }
}

// other characters without numbers is not allowed
function phoneeeNumberrr(e) {
    // checking with asci code (:
    if (e.target.value == 0) {
        // enable error text for blur
        // e.preventDefault()
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para3.innerHTML = "Please Enter a valid Number"
        // console.log(e.target.previousElementSibling);
    } else if (e.which < 48 || e.which > 57) {
        // console.log(e.target);
        para3.innerHTML = "Invalid Number"
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        // costume text for error
        console.log(para3);
    } else if (e.target.value.length > 11) {
        // console.log(e.target);
        para3.innerHTML = "Invalid Number"
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        // costume text for error
        console.log(para3);
    } else {
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
    }
}

function signUpGoogle(e) {
    e.preventDefault()
}

function send() {
    console.log("it is sending data from json");
}

function phoneeeNumberrr(e) {
    console.log(e.target);
}

function emailValid(e) {
    console.log(e.target);
}

function passwordValid(e) {
    console.log(e.target);
}

function repasswordValid(e) {
    console.log(e.target);
}