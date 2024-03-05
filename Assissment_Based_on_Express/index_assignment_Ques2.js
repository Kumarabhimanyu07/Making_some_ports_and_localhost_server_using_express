// Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Expresl
// " ‘/’ → send counter data as {counter:counter^
// " `/increment` → increment counter by 1 and send in response :atest data as {counter:counter^
// " `/decrement` → decrement counter by 1 and send in response :atest data as {counter:counter}


const express = require('express');
const app = express();
const port = 4000;

let counter = 0;

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to get the current counter value
app.get('/', (req, res) => {
    res.json({ counter });
});

// API endpoint to increment the counter
app.post('/increment', (req, res) => {
    counter++;
    res.json({ counter });
});

// API endpoint to decrement the counter
app.post('/decrement', (req, res) => {
    counter--;
    res.json({ counter });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
