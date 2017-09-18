var express = require('express');
var router = express.Router();
module.exports = function(app){
	app.post('/login/login',function(req,res){
		console.log('/login/login');
		res.send('/login/login received')
	});
};