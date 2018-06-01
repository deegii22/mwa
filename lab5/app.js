const { Subject } = require('rxjs');
const http = require('http');
const { fork } = require('child_process'); 
const subject = new Subject();

function sendFile(reqres){
    const childProcess = fork('longOperation.js');
    childProcess.send('start');
    childProcess.on('message', sum => {
        res.end('Sum is ${sum}');   
    });
}

subject.subscribe(sendFile);


http.createServer((req,res) => {
    subject.next({req,res});
}).listen(1337, '127.0.0.1');