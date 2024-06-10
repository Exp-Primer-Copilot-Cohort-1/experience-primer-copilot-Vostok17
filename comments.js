// Crete web server.
// Create a web server that listens on port 3000 and serves the comments.html file.
// When a user visits the home page at http://localhost:3000, the comments.html file should be served.

// Import the express module
const express = require('express');

// Create an express app
const app = express();

// Serve the comments.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/comments.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// To run the server, run the following command in your terminal:
// $ node comments.js
// Now, visit http://localhost:3000 in your browser to view the comments.html file.

// Path: comments.js
// Serve static files.
// Let's say we have a CSS file named styles.css that we want to serve to the user.
// To serve static files such as CSS, images, and JavaScript files, we can use the express.static() middleware function.

// Import the express module
const express = require('express');

// Create an express app
const app = express();

// Serve the comments.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/comments.html');
});

// Serve the styles.css file
app.use(express.static(__dirname));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// To run the server, run the following command in your terminal:
// $ node comments.js
// Now, visit http://localhost:3000 in your browser to view the comments.html file with the styles.css file applied.

// Path: comments.js
// Create a form.
// Let's say we have a form in the comments.html file that allows users to submit their comments.
// To handle form submissions, we can use the express.urlencoded() middleware function.

// Import the express module
const express = require('express');

// Create an express app
const app = express();

// Serve the comments.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/comments.html');
});

// Serve the styles.css file
app.use(express.static(__dirname));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Handle form submissions
app.post('/submit', (req, res) => {
  const comment = req.body