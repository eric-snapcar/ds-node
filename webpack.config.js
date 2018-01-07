var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
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
                query: {
                    presets: ['es2015', "react"]
                }
            }
        ]
    },
    plugins: [
       new webpack.DefinePlugin({
           'process.env.NODE_ENV': JSON.stringify('development')
       })
   ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
