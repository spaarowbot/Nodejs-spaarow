<?php
// app/asset/php/handleLogin.php

session_start(); // Start session management

// Include config file for database connection
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // Prepare a SQL statement to fetch user data
    $sql = "SELECT id, username, password FROM users WHERE username = :username";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':username', $username);

    // Execute the statement
    $stmt->execute();

    // Fetch the user's data
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // If a user with the provided username is found
    if ($user) {
        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Password is correct, set up session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            // Redirect to a protected page or dashboard
            header("Location: /path/to/dashboard.php");
            exit;
        } else {
            // Incorrect password
            echo "Invalid username or password.";
        }
    } else {
        // No user found with that username
        echo "Invalid username or password.";
    }
} else {
    // If the request method is not POST, redirect to login form
    header("Location: /path/to/loginForm.php");
    exit;
}
?>