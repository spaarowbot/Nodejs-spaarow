<?php
include 'config.php'; // Include your database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_POST['user_id']; // This should be fetched after user login
    $name = $_POST['bot-name'];
    $description = $_POST['description'];
    $is_public = isset($_POST['public-private-toggle']) ? 1 : 0;
    $public_description = $_POST['public-description'];
    
    $photo = null;
    if (isset($_FILES['bot-photo']) && $_FILES['bot-photo']['error'] == 0) {
        $photo = 'uploads/' . basename($_FILES['bot-photo']['name']);
        move_uploaded_file($_FILES['bot-photo']['tmp_name'], $photo);
    }

    $sql = "INSERT INTO bots (user_id, name, description, photo, is_public, public_description) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('isssis', $user_id, $name, $description, $photo, $is_public, $public_description);

    if ($stmt->execute()) {
        echo "Bot created successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>