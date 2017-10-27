const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/controller/index.js',

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
    ],
    devtool: 'cheap-eval-source-map'
}