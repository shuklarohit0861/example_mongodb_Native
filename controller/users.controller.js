const express = require('express');
let router = express.Router();
let userServices = require('../services/user.services');


router.get('/', getAll);
router.get('/hello', gethello);
router.post('/create', createData);



function getAll(req, res) {
    userServices.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function () {
            res.status(400).send(err);
        })
}

function gethello(req, res) {
    return res.send('hello');
}

function createData(req, res){
    userServices.create(req.body)
        .then(function(){
            res.sendStatus(200);
        }).catch(function(err){
            res.status(400).send(err);
        })
}

module.exports = router;