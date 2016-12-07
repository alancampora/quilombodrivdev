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
        }]
    }, 
    plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoErrorsPlugin()
   ]
};
