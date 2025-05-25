
const express = require('express');
const router = express.Router();

// Route to render your name
router.get('/name', (req, res) => {
  res.send('Raj  Patel');
});

// Route to render your name and student number
router.get('/greeting', (req, res) => {
  res.send('Raj Patel, Student ID: N01724582');
});

// Route to perform addition of two numbers (x and y)
router.get('/add', (req, res) => {
  const { x, y } = req.query;
  const result = parseFloat(x) + parseFloat(y);
  res.send(`The result is: ${result}`);
});

// Route to perform a calculation based on an operation (+, -, *, /, **)
router.get('/calculate', (req, res) => {
  const { a, b, operation } = req.query;
  let result;
  switch (operation) {
    case '+':
      result = parseFloat(a) + parseFloat(b);
      break;
    case '-':
      result = parseFloat(a) - parseFloat(b);
      break;
    case '*':
      result = parseFloat(a) * parseFloat(b);
      break;
    case '/':
      result = parseFloat(a) / parseFloat(b);
      break;
    case '**':
      result = Math.pow(parseFloat(a), parseFloat(b));
      break;
    default:
      result = 'Invalid operation';
  }
  res.send(`The result of ${a} ${operation} ${b} is: ${result}`);
});

module.exports = router; // Export the routes to be used in server.js
