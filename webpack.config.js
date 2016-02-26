var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, "src"),
                exclude: /node_modules/,
                loader: "babel",
                query: { presets: ["es2015"] }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            // font-awesome
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        // ignore locales for moment
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
    ]
};
