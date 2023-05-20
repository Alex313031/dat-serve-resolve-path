module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    libraryTarget: 'window',
    library: 'datServeResolvePath',
    path: __dirname,
    filename: 'dist.js'
  }
};
