const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        // filename: 'main.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "我是默认生成的index.html"
        }), //默认的
        new HtmlWebpackPlugin({ // 使用自己编写的
            // title: 'My App',  // 设置html的title
            title: "这是我自己的html",
            filename: 'test.html', // 指定html文件所在位置
            template: 'assets/test.html'
        })
    ],
};