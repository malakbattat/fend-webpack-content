const path = require("path");
const webpack = require("webpack");
const json = require('json-loader!./file.json');
const json = require('./file.json');
module.exports = {
  entry: "./src/client/index.js",
 // output: { ...output},
  module: {
    rules: [
            {
        test: /\.(js|json)$/,
        exclude: /node_modules/,
        use:["babel-loader", "json-loader"] 
            }
    ]
}
};
