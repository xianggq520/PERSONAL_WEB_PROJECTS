const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        //filename: "bundle.js"
        filename: '[name].[hash].js', // 输入的入口文件名
        chunkFilename: '[id].[hash].js' // 打包后输出的模块文件名
    },
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,  // .jsx为react文件
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "env"]
                    }
                },
                /* loader:"babel-loader",
                query: {
                    presets: ['env']
                }, */
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use : [
                    {
                        loader:"style-loader"
                    }/* ,
                    {
                        loader:"css-loader"
                    } */
                    ,{
                        loader:"css-loader",
                        options: {
                            modules: true, // 指定启用css modules
                            localIdentName: '[name]_[local]-[hash:base64:5]' // 指定css的类名格式
                        }
                    },
                    {
                        loader:"postcss-loader"
                    }
                ]
            }
        ]
        // rules 和 loaders 功能相同
        /* ,
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ] */

    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.template.html",
            /* 下面的属性不太管用? */
            /* title: "This is the result",
            filename : "views/index.html", //output file's name
            inject: "head" */
        }),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ]

}

