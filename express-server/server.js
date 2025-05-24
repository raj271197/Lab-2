// server.js
const express = require('express');
const routes = require('./routes'); // Importing routes from the routes.js file
const app = express();
const PORT = 8000;

// Use the routes defined in routes.js
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
