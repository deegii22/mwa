var express = require('express');
var app = express();
var port = 3000;
var MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

app.get('/secret', function(req, res){
    MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err,client){
        if(err) throw err;
        const db = client.db('test');
    
        db.collection('homework7').findOne({}, function(err, doc){
            if(err) throw err;

            const encrypted = doc.message;
            let decrypted = decipher.update(encrypted, 'hex', 'utf8');

            res.send(decrypted);
            client.close();
        })
    
        console.dir("Called findOne!");
    })
  
})

app.listen(port, () => console.log("listening 3000 ..."));