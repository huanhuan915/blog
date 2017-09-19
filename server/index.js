var express = require('express');
var router = express.Router();
var User = require('../server/model');
module.exports = function(app){
	app.post('/user/login',function(req,res){
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
					if (doc[0]) {
						res.send('exist');
					}else{
						res.send('none');
					}
				}
			})
	});
	//用户注册接口,isReg：
	// 用户已存在   0
	// 注册成功     1
	// 注册失败     -1
	app.post('/user/reg',function(req,res){
		var username = req.body.params.username;
		var password = req.body.params.password;
		var email = req.body.params.email;
		var user = new User({
			username:username,
			password:password,
			email:email
		});
		User.find({'username':username},function(err,doc){
			if (err) {
				console.log('查询数据库失败');
				res.json({isReg:-1});
			}else{
				if (doc[0]) {
					res.json({isReg:0});
				}else{
					user.save(function(err){
						if (err) {
							res.json({isReg:-1});
						}else{
							res.json({isReg:1});
						}
					})
				}
			}
		})
		console.log('reg username:'+username);
		console.log('reg password:'+password);
	})
};