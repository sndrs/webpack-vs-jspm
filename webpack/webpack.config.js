var webpack = require("webpack");
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');

var buildDir = 'build';

module.exports = {
    context: path.join(__dirname, 'src'),
    resolve: {
        alias: {
            modules: path.join(__dirname, 'src', 'modules'),
            bootstraps: path.join(__dirname, 'src', 'bootstraps')
        }
    },
    entry: {
        snowflakes: "./snowflakes",
        universal: "./universal"
    },
    output: {
        path: path.join(__dirname, buildDir),
        publicPath: "/build/",
        // filename: '[name].[chunkhash].js',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                optional: ['runtime'],
                externalHelpers: true
            }
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass", "autoprefixer?browsers=last 2 versions"]
      }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new AssetsPlugin({
            prettyPrint: true,
            filename: 'assets.json'
        })
    ]
};