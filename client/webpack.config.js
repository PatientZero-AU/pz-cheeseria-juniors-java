const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const clientConfig = {
    mode: process.env.NODE_ENV || 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.client.json',
                    getCustomTransformers: () => ({
                        before: [ReactRefreshTypeScript()],
                    }),
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ],
    target: 'web',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        proxy: {
            '/api': 'http://localhost:9100',
        },
        hot: true,
        open: true,
        liveReload: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/js'),
    }
};

module.exports = [clientConfig];