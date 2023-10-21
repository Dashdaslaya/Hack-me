document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulate a vulnerable authentication process (do not use this in a real site)
        if (username === "admin" && password === "password123") {
            alert("Welcome, " + username + "!");
        } else {
            alert("Login failed. Please try again.");
        }
    });
});
