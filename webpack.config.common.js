const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BellOnBundlerErrorPlugin = require("bell-on-bundler-error-plugin");

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
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|oft)$/,
        loader: "file-loader",
        options: {
          limit: 8192,
          name: path.resolve(__dirname, "images/[name].[ext]"),
        },
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

    new BellOnBundlerErrorPlugin(),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/js/",
    host: "0.0.0.0",
    useLocalIp: true,
    open: true,
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
