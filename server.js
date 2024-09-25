const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// HTTPS options
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

// Create HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`HTTPS QR Scanner app listening at https://localhost:${port}`);
});
