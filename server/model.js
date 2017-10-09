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
var UserSchema = new mongoose.Schema({
	username:String,
	password:String,
	email:String
});


/*创建Model*/
var User = mongoose.model('User',UserSchema);
/*model.js模块输出model对象*/
module.exports = User;
