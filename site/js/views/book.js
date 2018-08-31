// site/js/views/book.js

var app = app || {};

// Create a view for each individual book.
app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: _.template( $('#bookTemplate').html()),

	render: function() {
		// this.el is what we defined in tagName,
		// use $el to get access to jQuery html() function.
		this.$el.html( this.template( this.model.attributes ) );

		return this;
	}
});