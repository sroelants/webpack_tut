const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') 
        // npm path module resolves this into an absolute path
    },
    module: {
        rules: [
          {
              test: /\.css$/, use: ['style-loader', 'css-loader']
          },
          {
              test:/\.(png|svg|jpg|gif)$/, use: ['file-loader'] 
          }
        ]
    }
};
