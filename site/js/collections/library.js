// site/js/collections/library.js

var app = app || {};

// Instantiate a collection to hold the individual Books.
app.Library = Backbone.Collection.extend({
	model: app.Book
});