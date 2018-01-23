module.exports = {
    devtool: "source-map",
    entry: __dirname + "/app/main.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
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

    }

}

