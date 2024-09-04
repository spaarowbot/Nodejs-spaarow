<?php
// app/asset/php/config.php

$host = 'localhost'; // Your database host
$db = 'spaarowDB.db'; // Your database name
$user = 'cpses_spmtojpofn@localhost'; // Your database username
$pass = 'Tye858k24.3008'; // Your database password

try {
    // Create a PDO instance for database connection
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    // Set error mode to exception to handle errors properly
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // If connection fails, output the error
    die("Connection failed: " . $e->getMessage());
}
?>