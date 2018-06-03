var express = require('express');
var app = express();
var port = 3000;
const fetch = require('node-fetch');
const {Observable, of, from} = require('rxjs');
const {map} = require('rxjs/operators');

app.set('json spaces', 3);
app.set('x-powered-by', false);
app.set('strict routing', true);
app.enable('case sensitive routing');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/users', async function(req, res){
    // promise
  // fetch('http://jsonplaceholder.typicode.com/users/')
  //   .then(res => res.json())
  //   .then(json => res.send(json));

  // observables
  // from(fetch('http://jsonplaceholder.typicode.com/users/').then(res => res.json()))
  // .subscribe((json)=> res.send(json));
  
  // async/await
  const res1 = await fetch('http://jsonplaceholder.typicode.com/users/');
  const json = await res1.json();
  res.send(json);
})

app.listen(port, () => console.log("listening 3000 ..."));