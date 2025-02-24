// declaring variables
let submitButton = document.getElementById("button")
let fnameInput = document.getElementById("fname");
let emailInput = document.getElementById("email");
let messageInput = document.getElementById("message");


// Variable that will store regular expression for email
let emailComplete = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;




function validateForm(event) {
    event.preventDefault()
    let formData = {};
    let errors = [];

    // FULL NAME 
    if (fnameInput.value.trim() !== "") {
        formData.fName = fnameInput.value.trim();
    } else {
        errors.push("Please write your full name");
    }

    //EMAIL
    if (emailInput.value.trim() !== "") {
        if (emailComplete.test(emailInput.value.trim())) {
            formData.email = emailInput.value.trim();
        } else {
            errors.push("Email format is invalid");
        }
    } else {
        errors.push("Please write your email");
    }


    //MESSAGE
    if (messageInput.value.trim() !== "") {
        formData.message = messageInput.value.trim();
    } else {
        errors.push("Please write a message");
    }

    // FEEDBACK/ERRORS
    if (errors.length > 0) {
        console.error("Errors:", errors);
    } else {
        console.log("Form Data:", formData); // clear form
        fnameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }

}


submitButton.addEventListener("click", validateForm);
