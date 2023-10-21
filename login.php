<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Simulate a vulnerable authentication process (do not use this in a real site)
    if ($username == "admin" && $password == "password123") {
        echo "Welcome, " . $username . "!";
    } else {
        echo "Login failed. Please try again.";
    }
}
?>
