const path = require('path')
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('components'))
    }
}