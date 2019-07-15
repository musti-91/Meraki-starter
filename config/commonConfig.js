/* jshint ignore:start */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: [resolve(__dirname, "../src/index.js")]
  },
  output: {
    publicPath: "/"
  },
  node: {
    __dirname: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  context: resolve(__dirname, "../src"),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: [resolve(__dirname, "node_modules")]
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "index.html"
      // favicon: "assets/img/favicon"
    }),
    // In prod mode it will make sure that css file compiled and included
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  externals: {
    React: "react",
    ReactDOM: "react-dom"
  }
};
/* jshint ignore:end */
