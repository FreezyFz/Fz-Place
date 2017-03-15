// Your Javascript Code Goes Here
var hello = require('./greet'),
    hola = require('./welcome'),
    util = require('util');

hello();
hola();
util.log('Log from util');
