/*
 * Connect to MongoDB and create the ToDo model for the collection of documents.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://hubergerard/todos');

var Tag = new Schema({
	name: String,
	completed_at: Date,
	create_user: String,
});

var Todo = new Schema({
	title: String,
	created_at: Date,
	completed: Boolean,
	completed_at: Date,
	create_user: String,
	modified_user: String,
	tagged: [Tag],
});

/*
 * Create the Todo Model.
 */

var Tags = mongoose.model('Tags', Tag);
var Todos = mongoose.model('Todos', Todo);

/*
   Fill with sample data to DB.. (Please ignore, test code below)

var testTodo = new Todos({
	title: "Test ToDo",
	created_at: Date.now(),
	completed: false
});

testTodo.save(function(error) {
	if (error) return handleError(error);
});

*/
