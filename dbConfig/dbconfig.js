const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'testdb';

let _db;
let _client;

module.exports = {
    connectToserver: function (callback) {

        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log("connected successfully to server");
            _client = client;
            _db = client.db(dbName);
            return callback(err);
        })
    },

    getDb : function(){
        return _db;
    },
    getClient : function(){
        return _client;
    }
};