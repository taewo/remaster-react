const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',
    devtool: 'eval',    //  hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    entry: {
        app: ['./client.jsx' ],
    },  // 입력
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['>1% in KR', 'last 2 chrome versions']
                        },
                        debug: true,
                    }], 
                '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
            }
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        
    }   // 출력
}