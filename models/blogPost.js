'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const blogPost = new Schema({

	title : String,
	shortText : String,
	content : String,
	featuredImage : String, // Todo change data type
	Date : String,
	author : String,
	featured : Boolean

});

const blogPosts = mongoose.model('blogPosts', blogPost);

module.exports = blogPosts;