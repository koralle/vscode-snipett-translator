const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/ts/index.tsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist/js"),
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /.(ts|tsx)$/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist/index.html"),
      template: path.resolve(__dirname, "src/html/index.html"),
      inject: true,
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/js/",
    host: "0.0.0.0",
    useLocalIp: true,
    open: true,
  }
};
