// Q.4 Build a Server that Generate! Random Number U!ing Epre!
//  ‘/random’ → !end random number in re!pon!e {random:10}
const express = require('express');
const app = express();
const port = 7000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to generate and send a random number
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    res.json({ random: randomNumber });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
