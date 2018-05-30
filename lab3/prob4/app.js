var fs = require('fs');
var zlib = require('zlib');
var gunzip = zlib.createGunzip();

var readable = fs.createReadStream(__dirname + '/destination.txt.gz');
var uncompressed = fs.createWriteStream(__dirname + '/source1.txt');

readable.pipe(gunzip).pipe(uncompressed);