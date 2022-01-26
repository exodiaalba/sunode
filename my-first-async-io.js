const fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename, function (error,data) {
    if (error) return console.error(error)
const str = data.toString().split('\n').length-1;
console.log(str)
})