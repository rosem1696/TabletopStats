var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "tbtstats.bundle.js"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                "file-loader"
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                "file-loader"
            ]
        },
        {
            test: /\.(scss)$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "postcss-loader",
                    options: {
                        plugins: function() {
                            return [
                                require("precss"),
                                require("autoprefixer")
                            ];
                        }
                    }
                },
                {
                    loader: "sass-loader"
                }
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};
