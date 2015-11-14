var path = require("path");

module.exports = {
  entry: "./web/static/js/app.js",
  output: {
      path: "./priv/static/js",
      filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.elm$/, loader: path.join(__dirname, './loaders/elm') }
    ]
  }
};
