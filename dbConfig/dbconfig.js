const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; //connection url
const dbName = 'testdb'; //database name
let _db;
let _client;
//connecting to the server
module.exports = {
    connectToServer: function (callback) {

        MongoClient.connect(url, function (err, client) {
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