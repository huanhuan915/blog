var express = require('express');
var router = express.Router();
var User = require('../server/model');
module.exports = function(app){
	//登陆返回ret_code
	//0登陆成功
	//1账号或密码错误
	//2session会话创建失败
	//3数据库查询失败
	app.post('/user/login',function(req,res){
		var username = req.body.params.username;
		var password = req.body.params.password;
		console.log(req.body.params.username);
		console.log('username:'+username+'\npassword:'+password);
		var user = User.find({'username':username},function(err,doc){
			if (err) {
				res.json({ret_code: 3, ret_msg: '查询数据库失败'});
				console.log('用户登录时数据库查询失败');
			}else{
				if (doc[0].password===password) {
					console.log('登陆验证通过');
					// res.json({login:"success"});
					return doc[0].username;
				}else{
					console.log('密码错误');
					return '';
					// res.json({login:"fail",ret_code: 1});
					//密码错误
				}
			}
		});
		if (user) {
			req.session.regenerate(function(err){
				if (err) {
					res.json({ret_code: 2, ret_msg: '登陆session创建失败'});
				}else{
					req.session.loginUser = user;
					res.json({
						ret_code: 0,
						ret_msg: '登陆成功'
					})
				}
			})
		}else{
			res.json({login:"fail",ret_code: 1,ret_msg: '账号或密码错误'});
		}
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
	});

	app.get('/',function(req,res){
		var sess = req.session;
		var loginUser = sess.loginUser;
		isLogined = !!loginUser;
		// var isLogined = sess.
		if (sess.isLogined) {
			console.log("用户已登陆");
		}else{
			console.log("用户未登陆");
		}
	});
	app.get('/logout',function(req,res,next){
		req.session.destroy(function(err){
			if (err) {
				res.json({
					ret_code: 2,
					ret_msg: '退出登录失败'
				});
				return;
			}
			res.clearCookie(identityKey);
			res.redirect('/');
		});		
	});
};