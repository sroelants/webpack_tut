const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') 
        // npm path module resolves this into an absolute path
    }
};
