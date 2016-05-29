"use strict";

//Load deps
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config  = require('./config');

// Load models

const blogPosts = require('./models/blogPost')

// Load front-end controllers
const indexController = require('./controllers/indexController');




// Load back-end controllers

//Middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 3000;


// Connect DB
mongoose.connect(config.getDbConectionString(), function(){
	console.log('the database is on');
});

//Routes front-end
indexController(app);

//Routes back-end


app.listen(port, function() {
	console.log('Running');
});