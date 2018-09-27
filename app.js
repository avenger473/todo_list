var express= require('express');
var todoController= require('./controllers/todocontroller');

var app= express();

todoController(app);

app.set('view engine', 'ejs');

app.use(express.static('./public'));


app.listen(3000);
console.log('Listining to port 3000');
