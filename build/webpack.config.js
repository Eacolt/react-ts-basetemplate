const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: path.resolve(__dirname, '../src/main.tsx'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'public/js/[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }

    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img',
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),

        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}