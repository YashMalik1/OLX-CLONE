const express = require('express');
const router = express.Router();
const User = require('../models/user-model');
const mongoose = require('mongoose');


router.post('/postUser', (req, res) => {
    User.findOne({microsoftId: req.body.microsoftId}, (err, currentuser) => {
        if(currentuser) {
            console.log("User is : ", currentuser);
            // done(null, currentuser);
        } else {
            User.create(req.body)
            .then(newUser => {
                console.log("New user has been created, ", newUser);
                // done(null, newUser);
            })
            .catch(err => console.log("Can't post in database", err));
        }
    });
})

router.get('/getSeller/sellerId/:sellerId', (req, res) => {
    User.findOne({microsoftId: req.params.sellerId}, (err, seller) => {
        if(err){
            console.log("error in sending user data");
            res.send("There's an error");
        } else {
            console.log("User data sent");
            res.send(seller);
        }
        // console.log(seller);
    })
})

module.exports = router;
