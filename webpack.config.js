// 开发环境专用config

//引入base
const base = require('./webpack.config.base')
module.exports = {
    ...base,
    mode:"development",
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
        ],
    },
    // webpack-dev-server
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    optimization: {
        runtimeChunk: 'single',
    }
};