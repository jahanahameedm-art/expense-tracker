// ===============================
// Signup Form Validation
// ===============================

// Select form and input fields
const form = document.querySelector("form");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Form Submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // Check empty fields
    if (
        fullnameValue === "" ||
        emailValue === "" ||
        passwordValue === "" ||
        confirmPasswordValue === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password length
    if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Password Match
    if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match.");
        return;
    }

    // Success
    alert("Account created successfully!");

    // Redirect to Login Page
    window.location.href = "login.html";

});