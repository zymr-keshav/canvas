const HtmlWebpackPlugin = require("html-webpack-plugin");
// const path = require("path");
module.exports = {
  context: __dirname,
  entry: __dirname + "/js/index.js",
  mode: "development",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      { test: /\.html$/i, loader: "html-loader" }
    ]
  },
  devtool: "eval",
  // devServer: {
  //   contentBase: __dirname + "/build",
  //   compress: true,
  //   port: 9000,
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3000",
  //       secure: false
  //     }
  //   }
  // },
  resolve: {
    extensions: [".html", ".js", ".json", ".css"]
  }
};
