const { Subject } = require('rxjs');
const http = require('http');
const { fork } = require('child_process'); 
const url = require('url');
const subject = new Subject();

const server = http.createServer((req, res) => {
    subject.next({req,res});
});

subject.subscribe(readFile);

function readFile(reqres){
    const myURL = url.parse('http://localhost:4000/?url=path/to/my/file.txt', true);
    const childProcess = fork('longOperation.js');
    childProcess.send(myURL.query.url);
    childProcess.on('message', txt => {
        reqres.res.end(`File content is ${txt}`);
    })
  };
  
  server.listen(4000);
  
