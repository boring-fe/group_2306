const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log(process.env.WEBPACK_MODE);
module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp|PNG)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "src/images/[name].[ext]",
              outputPath: "images",
              publicPath: "images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
