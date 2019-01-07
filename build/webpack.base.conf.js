'use strict'
const path = require('path')
const baseConf = require('../config').base
// 拼接路径
const resolve = dir => path.join(__dirname, '..', dir)
// 资源路径
const assetsPath = dir => path.posix.join(baseConf.assetsPath, dir)
const ExtractTextPlugin = require("extract-text-webpack-plugin")

//webpack 基本设置
module.exports = {
    //项目入口文件->webpack从此处开始构建！
    entry: {
        app: './src/entry.jsx'
    },

    //配置模块如何被解析
    resolve: {
        //自动解析文件扩展名(补全文件后缀)(从左->右)
        // import hello from './hello'  （!hello.js? -> !hello.vue? -> !hello.json）
        extensions: [".js", ".jsx", ".json"],

        //配置别名映射
        alias: {
            'src': resolve('src'),
            'com': resolve('src/com')
        }
    },

    //处理模块的规则(可在此处使用不同的loader来处理模块！)
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //资源路径
                loader: 'babel-loader', //该路径执行的loader
                include: resolve("src") //指定哪个文件loader
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: ['css-loader']
                })
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}