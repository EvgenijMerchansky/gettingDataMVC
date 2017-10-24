const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
console.log(webpack, 'webpack');

module.exports = {
    entry: './src/controller/controller.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/js'
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'dataMVC',
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin({})
        // new webpack
    ],
    devtool: 'cheap-eval-source-map'
}