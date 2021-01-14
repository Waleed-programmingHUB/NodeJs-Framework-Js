/**
 * 
 * 
 *  Using Express JS Framework 
 *  In Basic Project
 *  @2020 Waleed Ali Sarwar
 *  Using PostMan Software To Receive the request
 * 
 * 
 */

// Import Express JS Library
const express = require('express');

// Module
const path = require('path');

// Declear Express Object
const web = express();

// Using PUG Tepmlate Engine in Website
web.set('view engine', 'pug');

// Port
const port = 80;

// Request 
    web.get('/', (req, res) => {
        res.send('Home Express Website');
    });
// Get Pug Template
    web.get('/pug', (req, res) => {
        res.render('index');
    });
// Post
    web.post('/contact', (req, res) => {
        res.send('Request From Post Contact Express Website');
    });

// View Directory
web.set('views', path.join(__dirname,'template'));

// Listen 
web.listen(port, () => {
    console.log(`The App is Started in Port ${port}`);
});

// Use a Separate Folder
web.use('/static', express.static('static'));