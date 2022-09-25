var path = require('path');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var CopyPlugin  = require('copy-webpack-plugin');

var config = {
    context: path.resolve(__dirname, './src'),
    entry : {
        index : './js/a.js'
    },
    output : {
        path : path.resolve(__dirname, ''),
        filename : '[name].js'
    },
    module : {
        rules : [
            {
                test:/\.css$/,
                use :['style-loader','css-loader'],
                exclude : /node_modules/,
                include : /src/,
                enforce : 'pre'
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.(jpg|png)$/,
                use: {
                    loader : 'url-loader',
                    options: {
                        limit: 1024 * 8,
                        name:'[name]-[contenthash:8].[ext]',
                        publicPath: './dist/'
                    }
                }
            }
        ]
    },
    plugins : [
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/img/'), to: path.resolve(__dirname, 'dist/image/')}
            ]
        })
    ],
    mode : 'none'
}

module.exports = config;