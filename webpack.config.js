const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const htmlplugin = new HtmlPlugin({
    template: './assets/index.template.html',
    filename: 'index.html'
});
module.exports = {
    entry: './assets/javascript/entry.js',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    plugins: [htmlplugin],
    module: {
        rules:[
            {
                test:/\.(c|sc|sa)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(jpg|jpeg|png|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:'[name].[ext]',
                            output:'public/images'
                        }
                    }
                ]
            }
        ]
    },
    
    devServer:{
        contentBase: path.resolve(__dirname, 'dir'),
        compress:true,
        port: 8080
    }
}
