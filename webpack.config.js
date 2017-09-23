'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry: './home', // What file starts the app? Webpack will check and render all imports in the entry file.

    output: {
        filename: 'build.js', // Directory and name of the output file
        library: 'home' // Name of the variable to check output in devtools console
    },

    watch: true, // Watch for changes or not. Instead of boolean it could be some conditions. For example:
                 // NODE_ENV == 'development'

    watchOptions: {
        aggregateTimeout: 100 // Sets delay for starting compile files with changes
    },

    devtool: 'source-map', // Source maps to find original files and lines. Could be conditional
                           // For example: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG:     JSON.stringify('ru')
        })
    ],

    module: {
        loaders: [{

        }]
    }
};