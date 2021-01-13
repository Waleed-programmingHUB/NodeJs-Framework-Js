// Built in Module Node Js
// Its a Random Module
const fs = require("fs");
// Module NodeJs read File function readFileSync("file-name.extension","utf-8");
// const text = fs.readFileSync("app_read.txt","utf-8");
let text = fs.readFileSync("app_read.txt","utf-8");
// print to broswer console
console.log("The Content is :");
console.log(text);
// it will replace the content
text = text.replace("content","NodeJS-Waleed-practice");
// Write function
fs.writeFileSync("practice.txt",text);
