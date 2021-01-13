// Make a Web Server
const http = require('http');
const fs = require('fs');
const file_content = fs.readFileSync('index.html');

const server = http.createServer((req,res)=>{
    // read html file
    res.writeHead(200,{'Content-type' : 'text/html'});
    res.end(file_content);
});

server.listen(80,'127.0.0.1', (/* function */)=>{
    console.log("Listening on port :80");
});