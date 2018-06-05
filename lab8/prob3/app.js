var express = require('express');
var app = express();
var port = 3000;
var MongoClient = require('mongodb').MongoClient;

app.get('/api/location', function(req, res){
    MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err,client){
        if(err) throw err;
        const db = client.db('test');
    
        var cursor = db.collection('location').find({});
    
        console.dir("Called findOne!");
    })
  
})

app.listen(port, () => console.log("listening 3000 ..."));