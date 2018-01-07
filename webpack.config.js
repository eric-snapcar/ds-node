var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',

            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
