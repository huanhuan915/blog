var express = require('express');
var router = express.Router();
var User = require('../server/model');
module.exports = function(app){
	app.post('/login/login',function(req,res){
		var username = req.body.params.username;
		var password = req.body.params.password;
		console.log(req.body.params.username);
		console.log('username:'+username+'\npassword:'+password);
		User.find({'username':username},function(err,doc){
			if (err) {
				console.log('用户登录时数据库查询失败');
			}else{
				console.log(doc[0]);
			}
		})
		console.log('/login/login');
		res.send('/login/login received')
	});
	app.post('/user/queUsername',function(req,res){
		var username = req.body.params.username;
		User.find({'username':username},
			function(err,doc){
				if (err) {
					console.log('注册时查询用户名是否存在，查询数据库出错');
				}else{
					console.log('查询用户名是否被注册时查询到的用户信息'+doc[0]);
				}
			})
	})
};