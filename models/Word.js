const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    category: {
        type : String,
        required: true
    },
    word: {
        type: Array,
        required: true
    }
});

module.exports = Word = mongoose.model('word', WordSchema);