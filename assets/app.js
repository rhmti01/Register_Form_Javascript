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
const checkbox1 = document.getElementById("remmber-me")
const checkbox2 = document.getElementById("terms-privacy")
const agreeText = checkbox2.nextElementSibling;

// eventListeners=>
eventListeners()
// Main Events Function
function eventListeners() {
    // disabling create account button for # and /
    document.addEventListener("keypress", enterPress)
    // validating form function to run this
    createAccount.addEventListener("click", send)
    // disabling create account button for # and /
    signWithGoogle.addEventListener("click", signUpGoogle)
    // Function Validations for key up on Keyboard
    full_name.addEventListener("keyup", validation)
    user_name.addEventListener("keyup", validation)
    email.addEventListener("keyup", validation)
    phone_number.addEventListener("keyup", validation)
    password.addEventListener("keyup", validation)
    re_password.addEventListener("keyup", validation)
    // other type of event for validation
    full_name.addEventListener("focus", validation)
    user_name.addEventListener("focus", validation)
    email.addEventListener("focus", validation)
    phone_number.addEventListener("focus", validation)
    password.addEventListener("focus", validation)
    re_password.addEventListener("focus", validation)
    // click to validation
    checkbox2.addEventListener("click", checkboxValid)
}

// Function==>

// if user keypress in input and then INTER so run validation function
function enterPress(e) {
    // checking with e.keyCode (ASCI CODES)
    if (e.keyCode == 13) {
        // last step of validation to show Create Account Gif
        send()
    };
}

// validating input for better sign up
function validation(e) {
    // Unique Functions for Eac
    if (this.id == 'full-name') {
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
    // checking checkbox validation to call an error 
    checkboxValid(e)
}

// Full Name Validation Function 
function fulllNameee(e) {
    // console.log(e.target);
    // checking spell for input value
    e.target.value.spellcheck = false
    // Value Length Testing 
    if (e.target.value.length > 20) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para1.innerHTML = "Only 20 letter is Allowed"
    } // Number includes Testing
    else if (/\d/.test(e.target.value)) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para1.innerHTML = "Number is Not Allowed in FullName"
    } // value Must Not be Empty
    else if (e.target.value == 0) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para1.innerHTML = "Please Enter your Full Name"
    } // Symbols Must Not Includes
    else if (/[-!$%#@^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(e.target.value)) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para1.innerHTML = "Symbols is Not Allowed"
    } // For No Error Situations 
    else {
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
    }
}

// checking user name input for validation 
function userrrNameee(e) {
    // console.log(e.target);
    // checking spell for input value
    e.target.value.spellcheck = false
    // Value Length Testing 
    if (e.target.value.length > 15) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para2.innerHTML = "Only 15 character is Allowed"
    } // value Must Not be Empty 
    else if (e.target.value.length == 0) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para2.innerHTML = "Please Enter a Unique User name"
    } // Number Includes Testing
    else if (e.target.value.length > 7 && !/\d/.test(e.target.value)) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para2.innerHTML = "Must Include Number"
    } // Symbols Must Not Includes 
    else if (/[-!$%#@^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(e.target.value)) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para2.innerHTML = "Symbols is Not Allowed"
    } // For No Error Situations  
    else {
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
    }
}

// Checking Phone Number Value Input Function
function phoneeeNumberrr(e) {
    // console.log(e.target);
    // checking spell for input value
    e.target.value.spellcheck = false
    // value Must Not be Empty 
    if (e.target.value.length == 0) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para3.innerHTML = "Please Enter a valid Number"
    } // Back up On Back Space
    else if (e.which == 8) {
        // it is back space button keying up
        if (e.target.value.length <= 11) {
            e.target.previousElementSibling.style.opacity = "0"
            e.target.style.borderColor = "green"
            para3.innerHTML = "Complete Your Number"
        }
    } // This Function is Allowed to Number Keys 
    else if (e.which < 47 || e.which > 57) {
        para3.innerHTML = "Only Numbers are Allowed"
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
    } // Value Length Testing 
    else if (e.target.value.length > 11) {
        para3.innerHTML = "Invalid Number"
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
    } // Value must Includes 0 
    else if (e.target.value.includes("0")) {
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
    } // No Error Of Function Situation  
    else {
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
    }
}

// checking Email input for validation 
function emailValid(e) {
    // checking spell for input value
    e.target.value.spellcheck = false
    // value Must Not be Empty 
    if (e.target.value.length == 0) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para4.innerHTML = "Please Enter Your Email "
    } // must Includes @ in Value
    else if (e.target.value.length && !e.target.value.includes("@")) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para4.innerHTML = "Must Include ( @ ) "
    } // Symbols Is not used in Email Values 
    else if (/[-!$%#^&*()_+|~=`{}\[\]:";'<>?,\/]/.test(e.target.value)) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para4.innerHTML = "Symbols is Not Allowed"
    } // No Error Of Function Situation 
    else {
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
    }
}

// Checking Password Validation Function
function passwordValid(e) {
    // console.log(e.target);
    // checking spell for input value
    e.target.value.spellcheck = false
    // value Must Not Be Empty
    if (e.target.value.length == 0) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para5.innerHTML = "Please Set a Strong Password "
    } // Validation Of Value Length
    else if (e.target.value.length < 8) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para5.innerHTML = "* At Least 8 Character * "
    } // Number For Password Strong Quality
    else if (!/\d/.test(e.target.value)) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para5.innerHTML = "Must Include Number"
    } // Symbols For Password Strong Quality 
    else if (!/[-!$%#^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(e.target.value)) {
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para5.innerHTML = "Must Include Symbols"
    } // No Error Of Function Situations
    else {
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
    }
    // return password;
}

// Re-Password Function Checking Of Values
function repasswordValid(e) {
    // console.log(e.target);
    // checking spell for input value
    e.target.value.spellcheck = false
    if (password.value !== e.target.value) {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para6.innerHTML = "Passwords Are not Same"
    } else if (e.target.value.length == 0) {
        // console.log(e.target.previousElementSibling);
        // enable error text for blur
        e.target.previousElementSibling.style.opacity = "1"
        e.target.style.borderColor = "red"
        para5.innerHTML = "Please Confirm Your Password"
    } else {
        // console.log(e.target.previousElementSibling);
        e.target.previousElementSibling.style.opacity = "0"
        e.target.style.borderColor = "green"
        // enable error text for blur
    }
}

// Terms and Privacy Validation
function checkboxValid(e) {
    // console.log(e.target);
    if (e.target.checked == true) {
        console.log(true);

    } else {
        console.log(false);
    }
}

// disabling # after On Clicking 
function signUpGoogle(e) {
    e.preventDefault()
}

// Last Step of Creating Account
function send() {
    console.log("it is sending data from json");
}