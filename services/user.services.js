const config = require('../config.json');
const Q = require('q');
const mongo = require('../dbConfig/dbconfig');

let db;


let services = {}

services.getAll = getAll;
services.create = create;



function getAll(){
    db = mongo.getDb();
    let deferred = Q.defer();
   let collection = db.collection('documents');
   collection.find().toArray(function(err, docs){
       if(err){
           deferred.reject(err.name + " : "+ err.message);
       }
       deferred.resolve(docs);
   })
    return deferred.promise;
}

function create(userParams){
    db = mongo.getDb();
    let deferred = Q.defer();
    let collection = db.collection('documents');
    collection.insert(userParams, function(err,result){
        if(err) {
            deferred.reject(err.name + " : "+ err.message);
        }

        deferred.resolve(result.ops.length);
    })
    return deferred.promise;
}

module.exports = services;