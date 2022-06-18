// 生产环境config

// 引入base config
const base = require('./webpack.config.base')
// 抽离CSS插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // 获取base中的所有属性
    ...base,
    mode:"production",
    plugins: [
        // 获取base.plugin中的所有属性
        ...base.plugins,
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder:false
        }),
    ],
    module:{
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public/path/to/',
                        },
                    },'css-loader',
                ],
            },
        ],
    },
};