
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
	showForm(req, res, 1, 1, 'add', '');
});

function showForm(req, res, a, b, op, solution) {
	  res.send('<html>' + 
		'<body><form action="/" method="POST">' + 
		'<input type="text" name="a" value="' + a + '"/>' +
		'<select name="operator">' +
		'<option value="add">add</option>' + 
		'<option value="subtract">subtract</option>' + 
		'<option value="multiply">multply</option>' + 
		'</select>' + 
		'<input type="text" name="b" value="' + b + '"/>' +
		'<input type="text" name="solution" value="' + solution + '"/>' +
		'<br><br><input type="submit">' + 
		'</form></body>' + 
		'</html>');
}

app.post('/', function (req, res) {
	var a = Number(req.body.a);
	var b = Number(req.body.b);
	var op = req.body.operator;
	var solution = solve(a,b,op);
	//console.log('AAA', a,b,op);
	//console.log('CCC', solution);

	showForm(req, res, a, b, op, solution);
});


function solve(a, b, op) {
	if (op == 'add') {
		return a + b;
    } else if (op == 'subtract') {
		return a - b;
	} else if (op == 'multiply') {
		return a * b;
	}

	return 9999999;
}

app.listen(3000, function () {
	  console.log('Example app listening on port 3000!')
})
