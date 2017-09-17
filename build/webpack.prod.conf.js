// var path = require('path');
// var webpack = require('webpack');
// var merge = require('webpack-merge');
// // 引入基本配置
// var webpackConf = require('./webpack.base.conf');
// var prodWebpackConf = merge(webpackConf,{ 
//     output:{  
//     	publicPath:'/',  
//     	filename: 'static/js/[name].[hash].js' 
//     },
//     plugins:[ 
//         new webpack.optimize.UglifyJsPlugin({  
//             compress: {    
//             	warnings: false   
//             } 
//         })
//     ]});
// module.exports = prodWebpackConf;

var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
// 引入基本配置
var webpackConf = require('./webpack.base.conf');
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
        new ExtractTextPlugin("static/css/style.css")
    ],
    vue: { 
        loaders: {  
            css: ExtractTextPlugin.extract('vue-style-loader', 'css'),  
            // you can also include <style lang="less"> or other langauges  
            less: ExtractTextPlugin.extract('vue-style-loader', 'css!less')
        }
    }
});
module.exports = prodWebpackConf;
