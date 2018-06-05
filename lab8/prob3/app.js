var express = require('express');
var app = express();
var port = 3000;
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var validator = require('express-validator');
var router = express.Router(); 
var jsonParser = express.json();


app.set('json spaces', 3);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator());


app.get('/api/locations', function(req, res){
    MongoClient.connect('mongodb://127.0.0.1:27017/test', async function(err,client){
        if(err) throw err;
        const db = client.db('test');

        var result = await db.collection('location').find({}).toArray();

        res.json(result);
    })
  
})

app.get('/api/locations/:location_name', function(req, res){
    MongoClient.connect('mongodb://127.0.0.1:27017/test', async function(err,client){
        if(err) throw err;
        const db = client.db('test');

        var query = {"name": req.params.location_name};
        var result = await db.collection('location').findOne(query);

        res.json(result);

    })
  
})

app.post('/api/locations', jsonParser, function(req, res){
    req.assert('name','Name is required').notEmpty();
    req.assert('category','Category is required').notEmpty();
    req.assert('location','Location is required').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        res.json({errors: errors});
    } else {
        MongoClient.connect('mongodb://127.0.0.1:27017/test', async function(err,client){
            if(err) throw err;
            const db = client.db('test');

            var query = {"name":req.body.name,"category":req.body.category,"location":req.body.location};

            //{"name":"Vishwa Shanti Cafe","category":"cafe","location":[-91.9694793,41.0178238]};
            await db.collection('location').insert(query, function(err,docInserted){
                if(err) throw err;
                res.json({message: 'Successfully inserted!'});
                return db.close;;
            })

        })
    }
  
})

app.put('/api/locations/:location_name', function(req, res){
    MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err,client){
        if(err) throw err;
        const db = client.db('test');

        var query = {"name": req.params.location_name};
        var operator = {'$set': {"location": req.body.location}};

        db.collection('location').update(query, operator,function(err, doc){
            if(err) throw err;
            res.json({message: 'Successfully updated!'});
            return db.close;;
        });

    })
  
})

app.delete('/api/locations/:location_name', function(req, res){
    MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err,client){
        if(err) throw err;
        const db = client.db('test');

        var query = {"name": req.params.location_name};
    
        db.collection('location').remove(query, function(err,doc){
            if(err) throw err;
            if(doc == null){ return db.close;}
            res.json({message: 'Successfully deleted!'});
        })

    })
  
})

app.post('/api/nearest', function(req, res){

    req.assert('category','Category is required').notEmpty();

    var errors = req.validationErrors();

    if(errors) {
        res.json({errors: errors});
    } else {

        MongoClient.connect('mongodb://127.0.0.1:27017/test', async function(err,client){
            if(err) throw err;
            const db = client.db('test');

            db.collection('location').createIndex({location:'2d'});

            var query = {location: {$near:[-91.9665342, 41.017654]}, category: req.body.category};
            if(req.body.name){
                query["name"] = req.body.name;
            }
            var result = await db.collection('location').find(query).limit(3).toArray();

            res.json(result);
        })
    
    }
})

app.listen(port, () => console.log("listening 3000 ..."));