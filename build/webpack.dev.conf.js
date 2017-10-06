var path = require('path');
var webpack = require('webpack');
var webPackBaseConf = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var utils = require('./utils');

var webpackDevConf = merge(webPackBaseConf,{ 
    // entry: { 
    //     index: [  
    //         path.resolve(__dirname, '../src/main.js') 
    //     ]},
    entry:utils.entries(),
    plugins:[
        // Webpack 1.0  
        // new webpack.optimize.OccurenceOrderPlugin(), 
        // Webpack 2.0 fixed this mispelling  
        new webpack.optimize.OccurrenceOrderPlugin(),  
        new webpack.HotModuleReplacementPlugin(),  
        new webpack.NoErrorsPlugin()
    ].concat(utils.htmlPlugin())
});

Object.keys(webpackDevConf.entry).forEach(function (name) {
    var extras = ['webpack-hot-middleware/client?reload=1'];
    webpackDevConf.entry[name] = extras.concat(webpackDevConf.entry[name]);
});
module.exports = webpackDevConf;
