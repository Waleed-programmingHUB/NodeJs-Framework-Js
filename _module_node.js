/**
 * 
 *  Built-In Module NodeJs
 * 
 */

// Read File Module
const fs = require('fs');
// Read File
// variable
let txt_read = fs.readFileSync('temp/sample.txt', 'utf-8');
// print to developer console
console.log('Read File :');
console.log(txt_read);

// variable
var t = 'Write File : Good Javascript';
// print to developer console
console.log('Write File :');
// Write File
txt_write = fs.writeFileSync('temp/w_sample.txt', t);

// Replace Text
txt_read = txt_read.replace('Temp', 'Sample');
// print to developer console
console.log('Write File :');
fs.writeFileSync('temp/replace.txt', txt_read);