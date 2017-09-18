var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');//用于请求网页的logo
var history = require('connect-history-api-fallback');//用于支持HTML5 history API
var logger = require('morgan');//日志记录模块
var cookieParser = require('cookie-parser');//解释cookie的工具，通过req.cookie可以取到传过来的cookie
var bodyParser = require('body-parser');//对post请求的请求体进行解析

var routes = require('./server/index')
var app = express();

// app.use(favicon(__dirname + '/public/sun_.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
routes(app);

// app.post('/login/login',function(req,res){
//     res.send('hello world');
// });
app.use(history({
    // verbose: true//详细记录
}));

if(app.get('env') == 'development'){  
    var webpack = require('webpack');
    var webpackConfig = require('./build/webpack.dev.conf');
    // 调用webpack并把配置传递过去 
    var compiler = webpack(webpackConfig);  
    // 使用 webpack-dev-middleware 中间件  
    var devMiddleware = require('webpack-dev-middleware')(compiler, { 
    	publicPath: '/',   
    	stats: {      
    		colors: true,
    		chunks: false   
    	}
    });  
    app.use(devMiddleware);  
    app.use(require("webpack-hot-middleware")(compiler));  
}else{
	app.use(express.static(path.join(__dirname,'output')));
}
module.exports = app;