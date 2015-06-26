module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./js/app.jsx",
    html: "./index.html",
  },
   output: {
     filename: "js/app.js",
     path: __dirname + "/app/dist/",
   },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
            {
              test: /\.html$/,
              loader: "file?name=[name].[ext]",
            },
            {
              test: /\.scss$/,
              loader: "style!css!sass"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
