module.exports = {
  entry: './app/app.ts', // Entry point of the app
  devtool: 'inline-source-map', // Create source map inline with the bundle produced
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader', // Run typescript compiler using a module
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // with files should be used for module resolution
  },
  output: {
    filename: 'bundle.js', // name of the bundled file produced by webpack to sent to the browser
  },
  devServer: {
    inline: false, // keep the browser from automatically refresh when the bundle change, on production should be changed to true
  },
};
