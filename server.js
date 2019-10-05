const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express();

//Bodyparser middleware 
app.use(bodyParser.json());

//DB config
//const db = require('./config/keys').mongoURI;

//connect to Mongo DB
mongoose.connect('mongodb+srv://ncdoorly:O79jrmzzX3bkpw3C@testcluster-d8hr4.mongodb.net/admin?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true})
.then (() => {console.log('mongo db connected...')})
.catch(err => console.log(err))

//Use routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))


