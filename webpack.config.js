const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: mode === 'production',
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, 'src/index.html'),
        minify: mode,
    }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
            {
                test: /\.(j|t)s$|(j|t)sx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                },
            }
        ],
    },
};