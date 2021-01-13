const http = require('http');
const fs = require('fs');
// server link and port
const host_name = '127.0.0.1';
const port = 80;
// Pages 
const _home = fs.readFileSync('./template/index.html');
const _contact = fs.readFileSync('./template/contact.html');
const _about = fs.readFileSync('./template/about.html');
// Server Response
const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        // website home page link
        res.end(_home);
    }
    else if (url == '/about') {
        // website about page link
        res.end(_about);
    }
    else if (url == '/contact') {
        // website contact page link
        res.end(_contact);
    }
    else {
        // error show if page not available
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});
// Server Message
server.listen(port, host_name, () => {
    console.log(`Server is started at http://${host_name}:${port}/`);
});