'use strict';

const express = require('express'),
    router = express.Router();

const friendsArray = require('../db');

router.get('/', (req, res) => {
    res.render('friends')
    locals: {
        friends
    }
        
    });
        

router.get('/:handle', (req, res) => {
    const { handle } = req.params;
    const friend = friendsArray.find((friend) => {
        if (friend.handle === handle) {
            return friend;
        }
if (friend) {

}    res.render('friend', {
        locals: {
            friend
        }
    });
    
    });
});

module.exports = router;