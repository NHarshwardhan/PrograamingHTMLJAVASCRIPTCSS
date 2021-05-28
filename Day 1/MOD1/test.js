function validateForm(){
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");
    
    var passwordsMatch = passwordInput.value === confirmPasswordInput.value;
    
    var passwordsMatch = passwordInput.value === confirmPasswordInput.value;
    
    if (passwordsMatch) {
        // Clear any previous error message.
        confirmPasswordInput.setCustomValidity("");
        return true
    } else {
        // Setting this error message will prevent the submission of the form.
        confirmPasswordInput.setCustomValidity("Your passwords don't match. Please type the same password again.");
        return false
    }
    

}


    
passwordInput.addEventListener("input", checkPasswords, false);
confirmPasswordInput.addEventListener("input", checkPasswords, false);