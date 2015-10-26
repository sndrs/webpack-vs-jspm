var webpack = require("webpack");
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');

var buildDir = 'webpack_build';

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        augment: "./augment",
        universal: "./universal"
    },
    output: {
        path: path.join(__dirname, buildDir),
        publicPath: "/webpack_build/",
        // filename: '[name].[chunkhash].js',
        filename: '[name].js'
    },
    resolve: {
        alias: {
            modules: path.join(__dirname, 'src', 'modules'),
            bootstraps: path.join(__dirname, 'src', 'bootstraps')
        }
    },
    module: {
        loaders: [
            // send all our .js/jsx through babel, but nothing from node_modules
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    optional: ['runtime'],
                    externalHelpers: true
                }
            },
            // compile and autoprefix all sass dependencies
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass", "autoprefixer?browsers=last 2 versions"]
            }
        ]
    },
    plugins: [
        new AssetsPlugin({
            prettyPrint: true,
            filename: 'assets.json'
        })
    ]
};