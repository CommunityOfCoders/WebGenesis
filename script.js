// Handle form switching
document.addEventListener("DOMContentLoaded", () => {
    const loginRadio = document.getElementById("login");
    const signupRadio = document.getElementById("signup");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    // Show login form by default
    loginForm.style.display = "block";

    // Switch to signup form
    signupRadio.addEventListener("change", () => {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    // Switch to login form
    loginRadio.addEventListener("change", () => {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });
});
