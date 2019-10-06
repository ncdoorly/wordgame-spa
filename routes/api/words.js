const express = require('express')
const router = express.Router();

//Word model
const Word = require('../../models/Word')

// @route GET api/words
// @desc Get All Words
// @access Public
router.get('/', (req, res) => {
    Word.find()
    .then(words => res.json(words))
});

// @route POST api/words
// @desc Create a Post
// @access Public
router.post('/', (req, res) => {
    const newWord = new Word({
        name: req.body.name
    });
    newWord.save().then(word => res.json(word)); 
});

//TBD delete - not needed for wordgame app

module.exports = router;