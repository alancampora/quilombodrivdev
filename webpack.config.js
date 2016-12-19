var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: {
        app: ["./client/app/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            //{
            //test: /\.scss$/,
            //loaders: ["sass-loader"]
            //}
        ],
        //sassLoader: {
        //includePaths: [path.resolve(__dirname, "./client/app/components/**/*.scss")]
        //},

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'API_HOST': JSON.stringify('http://localhost:8089')
            }
        })
    ]
};
