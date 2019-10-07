const express = require('express')
const router = express.Router();

//Word model
const Word = require('../../models/Word')

// @route GET api/word
// @desc Get a random word
// @access Public
router.get('/', (req, res) => {
    Word.countDocuments().exec(function(err,count){
        var random = Math.floor(Math.random() * count)
        Word.findOne().skip(random).then(word => res.json(word));
    })
});

module.exports = router;