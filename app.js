var express = require('express');
var app = express();


var port = process.env.PORT || 3000;        // set our port

app.use(express.static('public'));

app.get('/say/', function (req, res) {
 
	 res.json({ message: 'Hello!' });            
});


app.listen(port);

console.log('Example app listening at http://%s:%s', port);