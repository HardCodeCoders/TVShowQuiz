const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(css)$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
      },
    ],
  },
};

// const path = require("path");

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// module.exports = {
//   mode: "development",
//   entry: "./src/main.js",
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: "js/main.js",
//     publicPath: '/assets/'
//   },
//   devServer: {
//     port: 9000,
//     contentBase: path.join(__dirname, 'dist')
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: "html-loader",
//             options: { minimize: true }
//           }
//         ]
//       },
//       {
//         test: /\.(png|svg|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: "file-loader",
//           },
//         ],
//       },
//       {
//         test: /\.s[ac]ss$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//           // Compiles Sass to CSS
//           "sass-loader",
//         ],
//       },
//       {
//         test: /\.(css)$/i,
//         use: [
//           // Creates `style` nodes from JS strings
//           "style-loader",
//           // Translates CSS into CommonJS
//           "css-loader",
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./dist/index.html",
//       filename: "./index.html"
//     }),
//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css"
//     })
//   ]
// };
