const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  /*fs.readFile('./image.jpg', (err, data) => {
    if (err) throw err;

    res.end(data);
  });*/

  const src = fs.createReadStream('./image.jpg');
  src.pipe(res);
});

server.listen(8000);
