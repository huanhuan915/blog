var express = require('express');
var router = express.Router();
var User = require('../server/model');
module.exports = function(app){
	//登陆返回re_code
	//0登陆成功
	//1账号或密码错误
	//2session会话创建失败
	//3数据库查询失败
	app.post('/user/login',function(req,res){
		var username = req.body.params.username;
		var password = req.body.params.password;
		console.log(req.body.params.username);
		console.log('username:'+username+'\npassword:'+password);
		User.find({'username':username},function(err,doc){
			if (err) {
				res.json({re_code: 3, re_msg: '查询数据库失败'});
				console.log('用户登录时数据库查询失败');
			}else{
				if (doc[0].password===password) {
					console.log('登陆验证通过');
					console.log(doc[0].username)
					// res.json({login:"success"});
					req.session.regenerate(function(err){
						if (err) {
							res.json({re_code: 2, re_msg: '登陆session创建失败'});
						}else{
							// req.session.loginUser = 1;
							console.log(req.session);
							res.json({
								re_code: 0,
								re_msg: '登陆成功'
							})
						}
					});
					console.log(req.session);
				}else{
					console.log('密码错误');
					res.json({re_code: 1,re_msg: '账号或密码错误'});
				}
			}
		});
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
	});

	app.get('/admin',function(req,res){
		var sess = req.session;
		console.log(sess);
		// var loginUser = sess.loginUser;
		// isLogined = !!loginUser;
		// var isLogined = sess.
		// if (sess.loginUser) {
		// 	console.log("用户已登陆");
		// }else{
		// 	console.log("用户未登陆");
		// }
	});
	app.get('/logout',function(req,res,next){
		req.session.destroy(function(err){
			if (err) {
				res.json({
					re_code: 2,
					re_msg: '退出登录失败'
				});
				reurn;
			}
			res.clearCookie(identityKey);
			res.redirect('/');
		});		
	});
};