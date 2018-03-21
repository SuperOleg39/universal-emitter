const path = require('path');

module.exports = [
    {
        mode: 'development',
    
        context: path.resolve(__dirname, 'compiled'),
    
        entry: './index.js',
    
        devtool: 'source-map',
    
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'UniversalEmitter.js',
            libraryTarget: 'commonjs2'
        }
    },
    {
        mode: 'production',
    
        context: path.resolve(__dirname, 'compiled'),
    
        entry: './index.js',
    
        devtool: 'source-map',
    
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'UniversalEmitter.min.js',
            libraryTarget: 'commonjs2'
        }
    }
];