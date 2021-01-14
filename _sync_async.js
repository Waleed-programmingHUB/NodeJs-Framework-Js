/**
 * 
 * Synchronous or blocking
 *  Line By Line execution
 * --------------------------
 * Asynchronous or non-blocking
 *  Line By Line Execution not guaranteed
 *  Call back will be fire
 * 
 */

// Synchronous 
const fs = require('fs');
// Read File
fs.readFile('temp/sample.txt', 'utf-8',(err , data)=>{
    // console.log(data , err);
    console.log(data);
});
// print to developer console
console.log('Synchronous Read File :');

// Asynchronous 
const fs_as = require('fs');
// Read File
fs_as.readFileSync('temp/sample.txt', 'utf-8',(err , data)=>{
    // console.log(data , err);
    console.log(data);
});
// print to developer console
console.log('Asynchronous Read File :');

