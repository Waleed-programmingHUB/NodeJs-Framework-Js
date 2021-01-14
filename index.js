// Learning NodeJS
// Back-End Development
// Node JS Basic Server

let http = require('http');
const hostname = '127.0.0.1'
const port = 3000;

// Server
const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h2>Hi Welcome to NodeJS</h2>`);
});

// Response The server
server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}`);
});