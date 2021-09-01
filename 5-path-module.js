const path = require('path');
console.log(path.sep);

const filePath = path.join('module-intro','functions.js');
console.log(filePath);

const basename = path.basename(filePath)
console.log(basename)

const absolute = path.resolve(__dirname,'moduleintro','variable');
console.log(absolute);
console.log(path.basename(absolute))