const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
//const myPlugins=require('./myPlugin/plugin1')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin()
        ]
    },
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                //样式图片资源
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath:'/img',
                    publicPath: './img',
                }
            },
            {
                //HTML图片资源
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                //我的loader
                test:/\.js$/,
                loader:'./myLoader/loader1.js'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: false
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        //new myPlugins()
    ]
}