const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JavaScript, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes for different HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'aboutPage.html'));
});

app.get('/listings', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'listings.html'));
});

app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mapPage.html'));
});

app.get('/personality-survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'personalitySurveyPage.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
