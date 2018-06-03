var fs = require('fs');
var path = require('path');

const fileRead = (url) => {
    var txt = fs.readFileSync(url, 'utf8');
    return txt;
  };
  
  process.on('message', (msg) => {
    const txt = fileRead(msg);
    process.send(txt);	
  });