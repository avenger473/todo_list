var bodyParser= require('body-parser');
var mongo= require('mongoose');

mongo.connect('mongodb://localhost:27017/todo');

var urlep= bodyParser.urlencoded({extended: false});

//var data = [];
var todoSchema= new mongo.Schema({
	item: String
});

var Todo= mongo.model('Todo', todoSchema);

// var itemOne = Todo({item: 'eat'}).save(function(err){
// 	if(err) throw err;
// 	console.log('item saved');
// })

module.exports = function(app){

app.get('/todo', function(req,res){

	Todo.find({}, function(err, data){
		if(err) throw err;
		res.render('todo', {todos: data});
	});	
});

app.post('/todo', urlep, function(req,res){
	/*data.push(req.body);*/
	var newTodo= Todo(req.body).save(function(err,data){
		if(err) throw err;
		res.json(data);
	});
 	

});

app.delete('/todo/:item', function(req,res){

	Todo.find({item: req.params.item}).remove(function(err,data){
		if(err) throw err;
		res.json(data);
	});
	console.log(req.params.item);
	// data.splice( data.indexOf(req.params.item), 1 );
	// res.json(data);
});

};