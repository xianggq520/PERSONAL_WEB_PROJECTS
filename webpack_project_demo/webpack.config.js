var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 同时引入index.html中的入口文件
    /* entry: {
        app: './src/main.js',
        app2: './src/index.js'
    }, */
    entry: ["./src/index.js", "./src/main.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'static/js/[name].js',
        chunkFilename: 'static/js/[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'src': path.resolve(__dirname, './src'),
            'assets': path.resolve(__dirname, './src/assets'),
            'components': path.resolve(__dirname, './src/components')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude: /node_modules/
            },
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
        new HtmlWebpackPlugin({
            title: "This is the result",
            filename: 'index.html',
            template: 'index.html',
            inject: "body"
        }),
    ]
}