console.log("Copying Mods To Root Directory");

const path = require('path');
const fs = require('fs');
const ncp = require('ncp').ncp;

// copy actions

var source = path.resolve('actions/')
var dest = path.resolve('../../actions/')

console.log('root path: ' + __dirname);

console.log('source path: ' + source);
console.log('destination path: ' + dest);


ncp(source, dest, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log("All Mods copied! Start your bot as normal!");
});


// copy js files, because they should be

var source2 = path.resolve('js/')
var dest2 = path.resolve('../../js/')

console.log('root path: ' + __dirname);

console.log('source path: ' + source2);
console.log('destination path: ' + dest2);


ncp(source2, dest2, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log("All JS files copied! Start your bot as normal!");
});