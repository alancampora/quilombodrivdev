// webpack.config.prod.js  
const path = require('path')
const webpack = require('webpack')

export default {
    devtool: 'source-map', // Source map is a debugging tool that will map errors to the original, un-minified, source file that is throwing the error

    entry: [
        './client/app/index.js'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'API_HOST': JSON.stringify('http://qddback-labsjs.rhcloud.com/')
            }
        })
    ],

    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.scss?$/,
            loader: 'style!css!sass',
            include: path.join(__dirname, 'src', 'styles')
        }, {
            test: /\.png$/,
            loader: 'file'
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file'
        }]
    }
}
