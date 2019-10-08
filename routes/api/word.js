const express = require('express')
const router = express.Router();

//Word model
const Word = require('../../models/Word')

// @route GET api/word
// @desc Get a random word
// @access Public
router.get('/', (req, res) => {
    //TODO: add word category (i.e. 'hard' vs 'easy' on req)
    Word.countDocuments().where().exec(function(err,count){
        var random = Math.floor(Math.random() * count)
        Word.findOne().skip(random).then(word => res.json(word));
    })
});

//TODO: implement POST for adding words to DB from app

module.exports = router;