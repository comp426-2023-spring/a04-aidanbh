var http = require('http');

const minimist = require('minimist')(process.argv.slice(2)); // slice(2) removes two dummy arguments

const port = (minimist['port'] || process.env.PORT || 3000)

