const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool:'source-map',
  module: {
    rules: [
      {
          test:/\.json$/,
          loader:'json-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.html$/,
        use:[
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template:"./src/index.html",
      filename:"./index.html"
    })
  ]
};
