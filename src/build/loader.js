exports.eslint = () => ({
  enforce: 'pre',
  test: /\.(jsx|js)$/,
  loader: 'eslint-loader',
  exclude: /node_modules/,
});

exports.jsx = () => ({
  test: /\.(jsx|js)$/,
  exclude: /node_modules/,
  use: [
    'babel-loader',
  ],
});

exports.file = () => ({
  test: /\.(png|jpg|gif|svg)$/,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name].[hash:8].[ext]',
    },
  }],
});


exports.url = () => ({
  test: /\.(png|jpg|gif|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      outputPath: 'images/',
      limit: 2 * 1024,
      name: '[name].[hash:8].[ext]',
    },
  },
});
