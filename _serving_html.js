/**
 *
 * Serving HTML File's
 * NodeJS - Javascript
 *
 */
 // Module Import
 const http = require('http');
 const fs = require('fs');
 const hostname = '127.0.0.1';
 const port = 80;
 // Read File
 let html_serve = fs.readFileSync('template/_serve_page.html');

 // Server 
 const server = http.createServer(function (req,res) {
     res.writeHead(200,{'Content-Type':'text/html'})
     res.end(html_serve);
 });
 server.listen(port,hostname ,()=>{
     console.log(`Listening on port http://${hostname}:${port}`);
 });