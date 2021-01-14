/**
 * 
 * 
 *  Using Express JS Framework 
 *  In Basic Project
 *  @2020 Waleed Ali Sarwar
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

// Object
var parameters = {
    title : 'Pug Template Engine',
    content : 'WelCome to My Website'
};

// Request 
// Pug Template
web.get('/', (req, res) => {
    res.status(200).render('home.pug',parameters);
});
web.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});

// View Directory
web.set('views', path.join(__dirname,'templates'));

// Listen 
web.listen(port, () => {
    console.log(`The App is Started in Port ${port}`);
});

// Use a Separate Folder
web.use('/static', express.static('static'));