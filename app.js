const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '')));

// Example: Handle login request
app.post('/login', (req, res) => {
    // Handle login logic here
    // Example: Redirect to app/index.html after successful login
    res.redirect('/app/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});