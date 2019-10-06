const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const words = require('./routes/api/words')

const app = express();
//Bodyparser middleware 
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;
//connect to Mongo DB
mongoose
.connect(db,
{useNewUrlParser: true, useUnifiedTopology: true})
.then (() => {console.log('mongo db connected...')})
.catch(err => console.log(err))

//Use routes
app.use('/api/words', words)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))


