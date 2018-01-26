const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "app"),//基础目录，绝对路径，用于从配置中解析入口起点(entry point)和加载器(loader)
    entry : __dirname + "/app/main.js", //webpack解析的入口文件，可以有多个入口文件
    /* entry : [
        __dirname + "/app/main.js" ,
        __dirname + "/app/main.1.js"
    ],  */
    output: {
        path: __dirname + "/build",
        publicPath: '/', // prod模式中处理loader中的url
        filename: "[name].bundle.[hash].js",
        chunkFilename: '[id].[hash].js'
    },
    devtool: 'null', //注意修改了这里，这能大大压缩我们的打包代码
    devServer: {
        contentBase: "./public",  //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }, 
            {// 输出外部样式表，一个main.css 如：<link href="/css/main.css" rel="stylesheet">
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }],
                })
            }/* , 
            {// 输出内部样式表 如：<style>...</style>
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            } */,
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    limit: 10000,
                    name: path.join('static', 'images/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.template.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(), //压缩js
        new ExtractTextPlugin({// 和上面的loader配合使用，输入外部样式表文件
            filename:  (getPath) => {
                return getPath('static/css/[name].[contenthash].css');
            },
            allChunks: true
        })
    ]
};