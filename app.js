var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');


var app = express();
app.use(history({
    verbose: true
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