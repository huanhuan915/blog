var express = require('express');
var router = express.Router();
var Models = require('../server/model');
module.exports = function(app){
	//登陆返回re_code
	//0登陆成功
	//1账号或密码错误
	//2session会话创建失败
	//3数据库查询失败
	//-1登陆超时
	app.post('/user/login',function(req,res){
		var username = req.body.params.username;
		var password = req.body.params.password;
		console.log(req.body.params.username);
		console.log('username:'+username+'\npassword:'+password);
		Models.User.find({'username':username},function(err,doc){
			if (err) {
				res.json({re_code: 3, re_msg: '查询数据库失败'});
				console.log('用户登录时数据库查询失败');
			}else{
				console.log(doc[0]);
				console.log(password);
				if (doc[0]) {
					if (doc[0].password===password) {
						console.log('登陆验证通过');
						console.log(doc[0].username)
						req.session.regenerate(function(err){
							if (err) {
								res.json({re_code: 2, re_msg: '登陆session创建失败'});
							}else{
								req.session.loginUser = doc[0].username;
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
				}else{
					//该用户不存在
					res.json({re_code: 4,re_msg: '该用户不存在'});
				}
				
			}
		});
	});
	app.post('/user/queUsername',function(req,res){
		var username = req.body.params.username;
		Models.User.find({'username':username},
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
		var user = new Models.User({
			username:username,
			password:password,
			email:email
		});
		Models.User.find({'username':username},function(err,doc){
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
	//判断当前访问的用户的登陆状态
	app.get('/admin',function(req,res){
		var sess = req.session;
		console.log(sess);
		if (req.session.loginUser) {
			console.log('/admin路由下查看req.session.loginUser'+req.session.loginUser);
			res.json({re_code:0,userName:req.session.loginUser});//用户已登陆，返回登陆的用户的用户名
		}else{
			console.log('/admin路由下用户未登陆');
			res.json({re_code:-1});//用户未登陆
		}
	});
	app.get('/logout',function(req,res,next){
		req.session.destroy(function(err){
			if (err) {
				res.json({
					re_code: 2,
					re_msg: '退出登录失败'
				});
				console.log(err);
			}
			res.clearCookie(identityKey);
			res.redirect('/');
		});		
	});
	app.post('/article/save',function(req,res){
		var artTitle = req.body.params.ArtTitle;
		var artContent = req.body.params.ArtContent;
		var thisDate = req.body.params.ThisDate;
		var status = req.body.params.Status;
		var tags = req.body.params.Tags;
		var id = req.body.params.id;
		var userName = req.body.params.userName;
		console.log(req.body.params);
		Models.Article.find({'_id':id,'userName':userName},function(err,doc){
			if (err) {
				var article = new Models.Article({
					title:artTitle,
					date:thisDate,
					articleContent:artContent,
					status:status,
					tags:tags,
					userName:userName
				});
				article.save(function(err){
					if (err) {
						console.log("article save error");
						res.json({isSave:-1,articleId:''});
					}else{
						console.log('article save success');
						Models.Article.find({'userName':userName},function(err,docs){
							if (err) {
								console.log(err);
								return;
							}
							// res.json(docs);
							res.json({isSave:1,articleId:article._id,newArticleList:docs});
						});
					}
				});
			}else{
				//update
				Models.Article.findByIdAndUpdate(id,{
					title:artTitle,
					articleContent:artContent,
					status:status},function(err,docs){
						if(err){
							console.log(err);
							res.json({isSave:-1});//更新失败
						}else{
							console.log('update success');
							Models.Article.find({'userName':userName},function(err,docs){
								if (err) {
									console.log(err);
									return;
								}
								// res.json(docs);
								res.json({isSave:1,newArticleList:docs});
							});
						}
					});
			}
		})	
	});
	//查询文章列表
	app.get('/article/articleList',function(req,res){
		if (req.session.loginUser) {
			// console.log('articleList通过用户名查找文章列表，判断该用户是否登陆'+req.body.params.userName);
			Models.Article.find({'userName':req.session.loginUser},function(err,docs){
				if (err) {
					console.log(err);
					return;
				}
				res.json(docs);
			});
			// res.json({re_code:0});//用户已登陆
		}else{
			// console.log('用户登录已经超时');
			res.json({re_code:-1});//用户未登陆
		}
		
	});
	app.post('/article/del',function(req,res){
		var idToDel = req.body.params.id;
		console.log(idToDel);
		if (0==idToDel) {
			console.log("该文章不存在");
		}else{
			Models.Article.findOneAndRemove({_id:idToDel},function(err,docs){
				if (err) {
					console.log(error);
					res.json({del:-1});
				}else{
					//删除完成后查找并返回新的list
					Models.Article.find({'userName':req.session.loginUser},function(err,docs){
						if (err) {
							console.log(err);
							return;
						}
						res.json(docs);
					});
				}
			})
		}
	})
};