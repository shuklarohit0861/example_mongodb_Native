const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./dbConfig/dbconfig');

mongodb.connectToserver(function(err){
    if(err !== null){
        console.log("their is some err "+ err);
    }
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended :false}));
app.use(bodyParser.json());


// routing 
app.use('/user', require("./controller/users.controller"));

//port 
let port = 4000;
//creating the server
let server = app.listen(port,function(){
    console.log('server listening on port ' + port);
})
