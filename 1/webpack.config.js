const path = require('path')
const webpack = require('webpack')

module.exports = {
    name: 'gugudan-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./clients.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {  //  @babel/preset-env의 브라우저 지원 설정. https://github.com/browserslist/browserslist
                            browsers: ['> 1% in KR', 'last 2 chrome versions']
                        },
                        debug: true,    //  콘솔 디버깅
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    "@babel/plugin-proposal-class-properties"
                ],
            },
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }
}