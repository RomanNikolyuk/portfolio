const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: "production",
    entry: './src/js/main.js',
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.css$/,
                /* start new code */
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
                /* end new code */
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "sass-loader",
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendors',
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new HTMLPlugin({
            // Додатково налаштуємо об'єкт
            filename: "index.html",
            // Шаблон
            template: "./src/index.html"
        }),
    ],

    devServer: {
        contentBase: 'dist',
        port: 3333
    }
};