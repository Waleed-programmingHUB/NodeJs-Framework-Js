// Synchronous or blocking - line by line Execution

// Asynchronous or non-blocking - line by line Execution not granreted ,call backs will fire
const fs = require("fs");
// Read File Function
// this function also call back function
fs.readFile("app_read.txt","utf-8",(err , data)=>{
    // console.log(err ,data); // error datatype default
    console.log(err ,data);
});
fs.readFile("app_read.txt","utf-8",(err , data)=>{
    console.log(data); // Without error
});
console.log("this is a Message")