'use strict';

module.exports = {
    entry: {
        'public/js/app': './public/js/app.js'
    },
    output: {
        filename: "[name].min.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['env']
            }
        }]
    }
}
