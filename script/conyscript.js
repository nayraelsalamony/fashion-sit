// action form
var theName = document.getElementById("Name");
var nameValid = document.getElementById("namevalidate");
var email = document.getElementById("Email");
var emailValid = document.getElementById("emailvalidate");
var password = document.getElementById("pass");
var passwordValid = document.getElementById("passwordvalidate");
var submit = document.getElementById("submit");
theName.addEventListener("input", function () {
    if (!theName.value) {
        theName.style.border = "1px solid red";
        nameValid.style.display = "block";
    }
    else {
        theName.style.border = "3px solid green";
        nameValid.style.display = "none";

    }
})

email.addEventListener("input", function () {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        email.style.border = "3px solid green";
        emailValid.style.display = "none";
    }
    else {
        email.style.border = "1px solid red";
        emailValid.style.display = "block";
    }
})
password.addEventListener("input", function () {
    if (password.value.length >= 8) {
        password.style.border = "3px solid green";
        passwordValid.style.display = "none";
    }
    else {
        password.style.border = "1px solid red";
        passwordValid.style.display = "block";
       
    }
})