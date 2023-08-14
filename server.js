// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // Choose a port number

// Middleware: Log incoming requests
app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next();
});

// Route: Handling GET requests
app.get('/', (req, res) => {
  res.send('Hello, ExpressJS!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

