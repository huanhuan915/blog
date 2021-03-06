// nodejs 中的path模块
var path = require('path');
var webpack = require('webpack');
// 页面模板
var HtmlWebpackPlugin = require('html-webpack-plugin');
var utils = require('./utils')


var webpackConf = {
    entry:utils.entries(),

    // 输出配置 
    output: {  // 输出路径是 myProject/output/static  
        path: path.resolve(__dirname, '../output'), 
        publicPath:'/',  
        filename: '[name].[hash].js' 
    },
    resolve: {  
        extensions: ['', '.js', '.vue'], 
        alias: {   'vue': 'vue/dist/vue.js'  } // 设置别名vue1不需要设置，vue2必须设置 否则会报错 
    },
    module: {  
        loaders: [   
        // 使用vue-loader 加载 .vue 结尾的文件   
            {    
                test: /\.vue$/,    
                loader: 'vue'   
            },  
            {   
                test: /\.js$/,    
                loader: 'babel',    
                exclude: /node_modules/   
            },
            {
                test: /\.png$|\.jpg$|\.gif$|\.ico$|\.svg$/, 
                loader: "file?name=static/img/[name].[hash].[ext]", 
                exclude: /node_modules/
            }
            // {
            //   test: /\.css$/,
            //   loader: ['style-loader', 'css-loader'],
            //   exclude: "/node_modules/"
            // }
        ]
    }, 
    vue: {  
        loaders: {   
            js: 'babel',
            postcss: [require('autoprefixer')()]
        } 
    }, 
    // node: {
    //     fs:"empty"
    // },
    plugins:[  
        // new HtmlWebpackPlugin({   
        //     filename: 'index.html',  
        //     template: path.resolve(__dirname, '../index.html'),  
        //     inject: true  
        //   })
        ]
 };
 module.exports  = webpackConf;
