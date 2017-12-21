const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
            },
            {
                test: /\.css|\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loader: 'url-loader?limit=8192&name=font/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader?limit=8192&name=image/[name].[ext]',
            },
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        // proxy:{
        //     '/api':'localhost:3000'
        // },
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        inline: true,
        hot: true,
        port: 8082,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.tmpl.html'),
            // favicon: path.resolve(__dirname, 'app/src/favicon.ico')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV === 'dev') || false))
        })
    ]
}