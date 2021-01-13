//Node Js Start

// Asign a Http
const _https = require('http');

// Hostname
const _host = 'localhost';

// Portocol
const _port = 9000;

// Server Method
const _server = _https.createServer((req ,_res) =>{
    _res.statusCode = 200;
    _res.setHeader('Content-Type','text/plane');
    _res.end('Welcome to Node JS Javascript');
});

_server.listen(_port,_host, ()=>{
    console.log(`Server running at https://${_host}:${_port}/`);
});

