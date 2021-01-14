/**
 * 
 * Create Custom Back-End Server NodeJS
 * Website @2021
 * Author: Waleed Ali Sarwar
 * 
 */

// Module
const http = require('http');
const fs = require('fs'); // fileSystem Module
// URL 
const hostName = '127.0.0.1';
const port = 8080;
// Serve HTML
const _home = fs.readFileSync('./templates/home.html');
const _contact = fs.readFileSync('./templates/contact.html');
const _about = fs.readFileSync('./templates/about.html');
const _download = fs.readFileSync('./templates/download.html');

// Create Main Server Here
const server = http.createServer((req, res) => {
    url = req.url;
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // Serve Pages
    // Switch Statement
    switch (url) {
        case '/':
                res.end(_home);
            break;
        case '/home':
                res.end(_home);
            break;
        case '/contact':
                res.end(_contact);
            break;
        case '/about':
                res.end(_about);
            break;
        case '/download':
                res.end(_download);
            break;
        default:
                res.statusCode = 404;
                res.end(`<script>alert('404 not found!');</script> <h1>404 not found!</h1>`);
            break;
    }
});

// Print to console saying server message
server.listen(port, hostName, () => {
    console.log(`Server running http://${hostName}:${port}`);
});
