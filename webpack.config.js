const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
// To improve build times for large projects enable fork-ts-checker-webpack-plugin
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  devServer: {
    open: true,
    port: 9000,
    compress: true,
    hot: true,
    inline: true,
  },
  "mode": "development",
  "entry": "demo/demo.ts",
  "output": {
      "path": __dirname+'/dist',
      "filename": "[name].js"
  },
  "watch": false,
  "context": __dirname, // to automatically find tsconfig.json
  "module": {
      "rules": [
          {
              "test": /\.tsx?$/,
              "exclude": /node_modules/,
              "use": {
                  "loader": "ts-loader",
                  "options": {
                      "transpileOnly": false, // Set to true if you are using fork-ts-checker-webpack-plugin
                      "projectReferences": true
                  }
              }
          }
      ]
  },

  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname)
    ],
    // TsconfigPathsPlugin will automatically add this
    // alias: {
    //   packages: path.resolve(__dirname, 'packages/'),
    // },
    extensions: [".js", ".ts", ".tsx"],
    plugins: [
      new TsconfigPathsPlugin({
        logLevel: "info",
        mainFields: "module",
        extensions: [".js", ".ts", ".tsx"]
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
      <!doctype html>
      <meta charset=utf8>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>CM6 demo</title>

      <style>
      .cm-editor { height: 300px; border: 1px solid #ddd}
      .cm-scroller { overflow: auto; }
      </style>

      <h1>CM6</h1>
      <div id=editor></div>

      `
    }),
    // new ForkTsCheckerWebpackPlugin()
  ]
}