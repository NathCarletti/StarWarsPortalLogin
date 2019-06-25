var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://nathaliacarlett:Nat#02119!@cluster0-ocj7l.mongodb.net/swportal',['users'])

//Get all users
router.get('/users', function(req, res, next){
    db.users.find(function(err, users){
        if(err) res.send(err);
        res.json(users);
    });
});


//get by Id
router.get('/users/:id', function(req, res, next){
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err,user){
        if(err){res.send(err)}
        res.json(user);
    });
});