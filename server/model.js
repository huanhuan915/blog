/*
链接数据库并输出Model对象 
 */

var mongoose = require('mongoose');
/*链接数据库*/
var db = mongoose.connect('mongodb://localhost:27017/userInfo');
/*检验数据库是否连接成功*/
db.connection.on('error',console.error.bind(console,'connection error:'))
db.connection.once('open',function(){
		console.log('\nmongodb connect success\n');
	})
/*创建schema*/
var userSchema = new mongoose.Schema({
	username:String,
	password:String,
	email:String
});
var articleSchema = new mongoose.Schema({
	title: String,
	data: Date,
	articleContent: String,
	status: String,
	tags: []
});
var tagSchema = new mongoose.Schema({
	tagName: String,
	tagNumber: Number
});
var userInfoSchema = new mongoose.Schema({
	name: String,
	sign: String,
	intro: String
})

/*创建Model*/
var Models = {
	User: mongoose.model('User', userSchema),
	Article: mongoose.model('Article', articleSchema),
	Tag: mongoose.model('Tag', tagSchema),
    UserInfo: mongoose.model('UserInfo', userInfoSchema)
}
/*model.js模块输出model对象*/
module.exports = Models;
