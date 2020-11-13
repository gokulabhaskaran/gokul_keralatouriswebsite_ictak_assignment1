let firstname = document.getElementById("firstname");
let errorfirstname = document.getElementById("errorfirstname");
let lastname = document.getElementById("lastname");
let phonenumber = document.getElementById("phonenumber");
let errorphonenumber = document.getElementById("errorphonenumber");
let email = document.getElementById("email");
let erroremail = document.getElementById("erroremail");
let password = document.getElementById("password");
let errorpassword = document.getElementById("errorpassword");
let passwordRe = document.getElementById("passwordRe");
let errorpasswordRe = document.getElementById("errorpasswordRe");
let strengthpasswordtext = document.getElementById("strengthpasswordtext");
let strengthpassword = document.getElementById("strengthpassword");
let errorcheckbox = document.getElementById("errorcheckbox");
let check1 = document.getElementById("check1");
firstname.addEventListener("keyup", firstnamevalidation);
email.addEventListener("keyup", emailvalidation);
phonenumber.addEventListener("keyup", phonenumbervalidation);
password.addEventListener("keyup", passwordvalidation);
passwordRe.addEventListener("keyup", passwordRevalidation);
firstname.addEventListener("focusout", firstnamevalidation);
email.addEventListener("focusout", emailvalidation);
phonenumber.addEventListener("focusout", phonenumbervalidation);
password.addEventListener("focusout", passwordvalidation);
passwordRe.addEventListener("focusout", passwordRevalidation);
check1.addEventListener("change", checkvalidation);

let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//= /^([\w.-]+)@([\w-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
let phoneExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//let passwordExp=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;

function firstnamevalidation() {
    if (firstname.value.trim() == "") {
        errorfirstname.innerHTML = "First Name cannot be Empty";
        errorfirstname.classList.add("invalidmessage");
        errorfirstname.classList.remove("validmessage");
        firstname.classList.add("invalidinput");
        return false;
    }
    else {
        errorfirstname.innerHTML = "";
        errorfirstname.classList.remove("invalidmessage");
        errorfirstname.classList.add("validmessage");
        firstname.classList.remove("invalidinput");
        return true;
    }
}
function phonenumbervalidation() {
    if (phonenumber.value.trim() != "") {
        if (!(phoneExp.test(phonenumber.value))) {
            errorphonenumber.innerHTML = "Please Enter a <strong>Valid</strong> Phone Number";
            errorphonenumber.classList.add("invalidmessage");
            errorphonenumber.classList.remove("validmessage");
            phonenumber.classList.add("invalidinput");
            return false;
        }
        else {
            errorphonenumber.innerHTML = "";
            errorphonenumber.classList.remove("invalidmessage");
            errorphonenumber.classList.add("validmessage");
            phonenumber.classList.remove("invalidinput");
            return true;
        }
    }
}

function emailvalidation() {
    if (!(emailExp.test(email.value))) {
        erroremail.innerHTML = "Please Enter a <strong>Valid</strong> Email Id";
        erroremail.classList.add("invalidmessage");
        erroremail.classList.remove("validmessage");
        email.classList.add("invalidinput");   
        return false;
    }
    else {
        erroremail.innerHTML = "";
        erroremail.classList.remove("invalidmessage");
        erroremail.classList.add("validmessage");
        email.classList.remove("invalidinput");
        return true;
    }
}
function passwordvalidation() {
    strengthpassword.style.visibility = "visible";
    let strength = 0;
    if (password.value.match(lowerCaseLetters)) {
        strength += 5;
    }
    if (password.value.match(upperCaseLetters)) {
        strength += 5;
    } if (password.value.match(numbers)) {
        strength += 5;
    }
    if (strength == 0) {
        strengthpasswordtext.innerHTML = "";
        strengthpassword.value = strength;
    }
    if (strength == 5) {
        strengthpasswordtext.innerHTML = "Poor";
        strengthpasswordtext.style.color = "red";
        strengthpassword.value = strength;
    }
    if (strength == 10) {
        strengthpasswordtext.innerHTML = "Medium";
        strengthpasswordtext.style.color = "Orange";
        strengthpassword.value = strength;
    }
    if (strength == 15) {
        strengthpasswordtext.innerHTML = "Strong";
        strengthpasswordtext.style.color = "Green";
        strengthpassword.value = strength;
    }
    if (!(passwordExp.test(password.value))) {
        errorpassword.innerHTML = "Make sure your Password match criteria given below";
        errorpassword.classList.add("invalidmessage");
        errorpassword.classList.remove("validmessage");
        password.classList.add("invalidinput");
        errorpassword.style.bottom = "78%";     
        return false;
    }
    else {
        errorpassword.innerHTML = "";
        errorpassword.classList.remove("invalidmessage");
        errorpassword.classList.add("validmessage");
        password.classList.remove("invalidinput");
        return true;
    }
}
function passwordRevalidation() {
    if (passwordRe.value.trim() != "") {
        if (!(passwordRe.value == password.value)) {
            errorpasswordRe.innerHTML = "Password do not match ";
            errorpasswordRe.classList.add("invalidmessage");
            errorpasswordRe.classList.remove("validmessage");
            passwordRe.classList.add("invalidinput");
            return false;
        }
        else {
            errorpasswordRe.innerHTML = "";
            errorpasswordRe.classList.remove("invalidmessage");
            errorpasswordRe.classList.add("validmessage");
            passwordRe.classList.remove("invalidinput");
            return true;
        }
    }
}
function checkvalidation() {
    if (!(check1.checked)) {
        errorcheckbox.innerHTML = "You should agree before signing up";
        errorcheckbox.classList.add("invalidmessage");
        errorcheckbox.classList.remove("validmessage");
        check1.classList.add("invalidinput");
        return false;
    }
    else {
        errorcheckbox.innerHTML = "";
        errorcheckbox.classList.remove("invalidmessage");
        errorcheckbox.classList.add("validmessage");
        check1.classList.invalid("invalidinput");
        return true;
    }
}

function validate() {
    // Basic Validation
    let returnvalue = true;
    let focuselement = null;
    let result = false;
    if (firstname.value.trim() == "") {
        errorfirstname.innerHTML = "First Name cannot be Empty";
        errorfirstname.classList.add("invalidmessage");
        errorfirstname.classList.remove("validmessage");
        firstname.classList.add("invalidinput");
        returnvalue = false;
        focuselement = firstname;
    }
    else {
        result = firstnamevalidation();
        if (returnvalue == true) { returnvalue = result; }
    }
    if (email.value.trim() == "") {
        erroremail.innerHTML = "E-mail cannot be Empty";
        erroremail.classList.add("invalidmessage");
        erroremail.classList.remove("validmessage");
        email.classList.add("invalidinput");
        returnvalue = false;
        if (focuselement == null) { focuselement = email; }
    }
    else {
        result = emailvalidation();
        if (returnvalue == true) { returnvalue = result; }
    }
    if (password.value.trim() == "") {
        errorpassword.innerHTML = "Password cannot be Empty";
        errorpassword.classList.add("invalidmessage");
        errorpassword.classList.remove("validmessage");
        password.classList.add("invalidinput");
        errorpassword.style.bottom = "78%";
        returnvalue = false;
        if (focuselement == null) { focuselement = password; }
    }
    else {
        result = passwordvalidation();
        if (returnvalue == true) { returnvalue = result; }
    }
    if (passwordRe.value.trim() == "") {
        errorpasswordRe.innerHTML = "Please repeat Password";
        errorpasswordRe.classList.add("invalidmessage");
        errorpasswordRe.classList.remove("validmessage");
        passwordRe.classList.add("invalidinput");
        returnvalue = false;
        if (focuselement == null) { focuselement = passwordRe; }
    }
    else {
        result = passwordRevalidation();
        if (returnvalue == true) { returnvalue = result; }
    }
    if (!(check1.checked)) {
        errorcheckbox.innerHTML = "You should agree before signing up";
        errorcheckbox.classList.add("invalidmessage");
        errorcheckbox.classList.remove("validmessage");
        check1.classList.add("invalidinput");
        returnvalue = false;
        if (focuselement == null) { focuselement = check1; }
    }
    focuselement.focus();
    //alert(returnvalue);
    return returnvalue;
}
