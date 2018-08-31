// site/js/models/book.js

var app = app || {};

// Creates the model for each individual book.
app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: 'img/placeholder.png',
		title: 'No title',
		author: 'Unknown',
		releaseDate: 'Unknown',
		keywords: 'None'
	}
});