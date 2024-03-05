// Q.1 Bui:d a Server Using Http Modu:e Node<S with api endpoints for Getting Products Dat9
// " ‘/’ → send msg as “We:come to Men & Women Dummy Data”F
// " ‘/men’ → send 10 products data of menF
// " ‘/women’ → send 10 products data of wome;
// " ‘/other’ → send response as page not found
// Hin#: You can use any data, send data in json format

const express = require('express');
const app = express();
const port = 3000;

// Dummy product data for men and women
const menProducts = Array.from({ length: 10 }, (_, index) => ({ id: index + 1, name: `Men Product ${index + 1}` }));
const womenProducts = Array.from({ length: 10 }, (_, index) => ({ id: index + 1, name: `Women Product ${index + 1}` }));

// API endpoint for the root
app.get('/', (req, res) => {
    res.send('Welcome to Men & Women Dummy Data');
});

// API endpoint for men products
app.get('/men', (req, res) => {
    res.json(menProducts);
});

// API endpoint for women products
app.get('/women', (req, res) => {
    res.json(womenProducts);
});

// Handling other routes
app.use('/other', (req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
