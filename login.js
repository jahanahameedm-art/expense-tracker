// Select form and input fields
const form = document.querySelector("form");
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Check for empty fields
    if (emailValue === "" || passwordValue === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation
    if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Demo Login Credentials
    const demoEmail = "admin@gmail.com";
    const demoPassword = "12345678";

    if (emailValue === demoEmail && passwordValue === demoPassword) {
        
        window.location.href = "home.html";
    } else {
        alert("Invalid email or password.");
    }

});
// ===============================
// Show / Hide Password
// ===============================

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function(){

    if(password.type === "password"){

        password.type = "text";

        togglePassword.textContent = "🙈";

    }

    else{

        password.type = "password";

        togglePassword.textContent = "👁";

    }

});