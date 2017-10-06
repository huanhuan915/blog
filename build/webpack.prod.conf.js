
var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
// 引入基本配置
var webpackConf = require('./webpack.base.conf');
var utils = require('./utils');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//extract text fron bundle into a file 从bundle中提取特定的text到一个文件中，把css从js中抽离出来
var prodWebpackConf = merge(webpackConf,{ 
    output:{  
    	publicPath:'/',  
    	filename: 'static/js/[name].[hash].js' 
    },
    plugins:[ 
        new webpack.optimize.UglifyJsPlugin({  
            compress: {    
            	warnings: false   
            } 
        }),
        new ExtractTextPlugin('static/css/[id].[name]_[chunkhash:7].css', {
            allChunks: true
        })
    ].concat(utils.htmlPlugin()),
    vue: { 
        loaders: {  
            css: ExtractTextPlugin.extract('vue-style-loader', 'css'),  
            // you can also include <style lang="less"> or other langauges  
            less: ExtractTextPlugin.extract('vue-style-loader', 'css!less')
        }
    }
});
module.exports = prodWebpackConf;
