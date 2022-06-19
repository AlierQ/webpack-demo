// base config
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
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
        }),
    ],
    module: {
        rules: [
            // scss
            {
                test: /\.scss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    // 使用dart-sass
                    {
                        loader: "sass-loader",
                        options: {
                            implementation:require('dart-sass')
                        }
                    }
                ],
            },
            // less
            {
                test: /\.less$/i,
                loader: ['style-loader','css-loader','less-loader']
            },
            // stylus
            {
                test: /\.styl$/,
                loader: ['style-loader','css-loader','stylus-loader'] // 将 Stylus 文件编译为 CSS
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // type: 'asset/resource',// @4好像不支持
                use:['file-loader']
            },
        ],
    }
};